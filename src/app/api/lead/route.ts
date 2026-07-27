import { NextResponse } from 'next/server';
import { submitFieldsSchema } from '@/lib/validations';
import { checkRateLimit } from '@/lib/rate-limit';

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const realIp = request.headers.get('x-real-ip');
  return realIp ?? 'unknown';
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);

  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  const enterpriseId = process.env.TELECRM_ENTERPRISE_ID;
  const token = process.env.TELECRM_ASYNC_TOKEN;

  if (!enterpriseId || !token) {
    return NextResponse.json(
      { error: 'TeleCRM not configured' },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }

  const { fields } = body;

  const parsed = submitFieldsSchema.safeParse(fields);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed' },
      { status: 400 }
    );
  }

  const teleCrmFields: Record<string, string> = {
    name: parsed.data.name,
    phone: `91${parsed.data.phone}`,
    email: parsed.data.email,
    cf_location: parsed.data.location,
    cf_loan_or_referral: parsed.data.loanOrReferral,
    cf_loan_requirement: parsed.data.loanRequirements,
    cf_loan_type: parsed.data.loanType,
    cf_cibil_score: parsed.data.cibilScore,
    landing_page: fields.landing_page,
    referrer: fields.referrer ?? '',
  };

  if (fields.utm_source) teleCrmFields['utm_source'] = fields.utm_source;
  if (fields.utm_medium) teleCrmFields['utm_medium'] = fields.utm_medium;
  if (fields.utm_campaign) teleCrmFields['utm_campaign'] = fields.utm_campaign;

  const response = await fetch(
    `https://next-api.telecrm.in/enterprise/${enterpriseId}/autoupdatelead`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: teleCrmFields }),
    }
  );

  const text = await response.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { status: text };
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Upstream service error' },
      { status: response.status }
    );
  }

  return NextResponse.json(data);
}
