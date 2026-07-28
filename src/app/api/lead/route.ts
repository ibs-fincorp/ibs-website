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
    Name: parsed.data.name,
    Phone: `91${parsed.data.phone}`,
    EMAIL: parsed.data.email,
    'ASSIGNED BRANCH': parsed.data.location,
    'Lead Type': parsed.data.loanOrReferral,
    'LOAN AMOUNT RANGE': parsed.data.loanRequirements,
    'LOAN TYPE': parsed.data.loanType,
    'CIBIL Score': parsed.data.cibilScore,
    'UTM source': fields.landing_page ?? '',
  };

  const response = await fetch(
    `https://next-api.telecrm.in/enterprise/${enterpriseId}/autoupdatelead`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields: teleCrmFields, campaign: '@landing-page-form-leads' }),
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
