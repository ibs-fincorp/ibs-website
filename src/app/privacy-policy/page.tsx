import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | IBSFincorp",
  description:
    "Privacy Policy of IBSFINCORP (Incetto Business Solutions Private Limited). Learn how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://www.ibsfincorp.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden bg-legal-gradient">
        <div className="container mx-auto max-w-4xl pt-24 pb-16 px-6 md:px-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-white/60 text-sm mb-8">
              Incetto Business Solutions Private Limited (operating under the
              brand name IBSFINCORP)
              <br />
              Last Updated: July 29, 2026
            </p>

            <div className="space-y-6 text-white/80 text-sm md:text-base leading-relaxed">
              {/* 1 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  1. Introduction
                </h2>
                <p>
                  IBSFINCORP (&ldquo;IBSFINCORP,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
                  protecting the privacy of everyone who visits our website,
                  contacts us, or engages with us through our digital channels.
                  This Privacy Policy explains what personal information we
                  collect, why we collect it, how we use and protect it, and the
                  rights available to you under the Digital Personal Data
                  Protection Act, 2023 (&ldquo;DPDP Act&rdquo;), the Information
                  Technology Act, 2000, and applicable Indian law.
                </p>
                <p className="mt-2">This Policy applies to:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Our website and any landing pages operated by IBSFINCORP
                  </li>
                  <li>
                    Interactions through our lead capture forms, consultation
                    requests, and callback requests
                  </li>
                  <li>
                    Communication through WhatsApp, SMS, phone calls, and email
                  </li>
                  <li>
                    Data processed through our CRM systems and our communication
                    platforms (WhatsApp, SMS, email, calling systems, and any
                    other communication channel we may use to engage with you)
                  </li>
                </ul>
                <p className="mt-2">
                  <strong>Important context on who we are:</strong> IBSFINCORP
                  is a Direct Selling Agent (DSA) and strategic loan consulting
                  firm. We are not a bank, NBFC, or licensed lender. We do not
                  sanction, disburse, or service loans ourselves. Our role is to
                  understand your funding requirement, assess your eligibility,
                  and connect you with suitable RBI-regulated banks and NBFCs
                  from our partner network. All loan decisions, interest rates,
                  and terms are determined solely by the lending institution you
                  are matched with. Any personal or financial information you
                  share with us in connection with a loan enquiry is handled
                  with this role in mind — as described throughout this Policy.
                </p>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  2. Who We Are
                </h2>
                <div className="bg-white/5 rounded-xl p-4 space-y-1 text-sm">
                  <p>
                    <span className="text-white font-medium">Legal Entity:</span>{" "}
                    Incetto Business Solutions Private Limited
                  </p>
                  <p>
                    <span className="text-white font-medium">Brand Name:</span>{" "}
                    IBSFINCORP
                  </p>
                  <p>
                    <span className="text-white font-medium">CIN:</span>{" "}
                    U74110TN2022PTC155121
                  </p>
                  <p>
                    <span className="text-white font-medium">GSTIN:</span>{" "}
                    33AAGCI8352Q1ZZ
                  </p>
                  <p>
                    <span className="text-white font-medium">
                      Registered Office:
                    </span>{" "}
                    2nd Floor, No. 158, Gulecha Towers, Arcot Road, Vadapalani,
                    Chennai, Tamil Nadu – 600026
                  </p>
                  <p>
                    <span className="text-white font-medium">
                      Regional Offices:
                    </span>{" "}
                    Bangalore (Jayanagar), Madurai, Coimbatore, with service
                    coverage extending to Salem, Mysore, and Pondicherry
                  </p>
                  <p>
                    <span className="text-white font-medium">
                      Contact Email:
                    </span>{" "}
                    contact@ibsfincorp.com
                  </p>
                  <p>
                    <span className="text-white font-medium">
                      Contact Phone:
                    </span>{" "}
                    +91 99622 99260
                  </p>
                </div>
                <p className="mt-2">
                  For the purposes of the DPDP Act, IBSFINCORP acts as a Data
                  Fiduciary in respect of the personal data it collects and
                  processes through the channels described in this Policy.
                </p>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  3. Information We Collect
                </h2>
                <p className="mb-2">
                  We collect information in the following categories, depending
                  on how you interact with us:
                </p>
                <p className="font-medium text-white mb-1">
                  a) Information you provide directly
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Name, phone number, SMS, and email address (when you fill
                    out a consultation or lead form)
                  </li>
                  <li>
                    Loan requirement details — the type of funding you&apos;re
                    exploring (e.g., Loan Against Property, Home Loan,
                    Business/Working Capital Loan, Balance Transfer, Lease
                    Rental Discounting), approximate ticket size, and property
                    or business details relevant to preliminary eligibility
                    screening
                  </li>
                  <li>
                    Financial profile information you choose to share for
                    eligibility assessment (e.g., approximate income, existing
                    loan obligations)
                  </li>
                  <li>
                    Any documents you voluntarily share with us to support your
                    funding requirement
                  </li>
                  <li>
                    Messages you send us via WhatsApp, SMS, phone, or email
                  </li>
                </ul>
                <p className="font-medium text-white mt-3 mb-1">
                  b) Information collected automatically
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Standard website usage data (pages visited, time on site,
                    browser and device type) through analytics tools
                  </li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
                <p className="mt-2">
                  We do not ask for or require sensitive documents like bank
                  statements, KYC copies, or property papers through our website
                  forms. Where such documents are needed for a loan application,
                  they are collected through secure channels once you&apos;re
                  engaged with a Relationship Manager, and are shared only with
                  the specific lender processing your application.
                </p>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  4. How We Use Your Information
                </h2>
                <p className="mb-2">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Understand your funding requirement and assess preliminary
                    eligibility
                  </li>
                  <li>
                    Match you with suitable RBI-regulated banks and NBFCs from
                    our partner network
                  </li>
                  <li>
                    Communicate with you regarding your enquiry — including via
                    phone, SMS, email, and WhatsApp
                  </li>
                  <li>
                    Facilitate your loan application process with the partner
                    lender you choose to proceed with
                  </li>
                  <li>
                    Improve our website, services, and customer experience
                  </li>
                  <li>
                    Comply with applicable legal and regulatory obligations
                  </li>
                  <li>
                    Send you relevant updates about our services, where you have
                    separately consented to marketing communication
                  </li>
                </ul>
                <p className="mt-2">
                  We do not use your information to make any loan approval,
                  rejection, or pricing decision — those decisions rest entirely
                  with the partner bank or NBFC you are matched with.
                </p>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  5. Legal Basis and Consent
                </h2>
                <p className="mb-2">
                  We process your personal data based on:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Your consent given when you submit a form, contact us
                    through any available communication channel, or otherwise
                    voluntarily provide your details to us for the purpose of
                    exploring a loan or funding solution
                  </li>
                  <li>
                    Legitimate business purposes recognised under the DPDP Act,
                    such as responding to a request you have initiated
                  </li>
                </ul>
                <p className="mt-2">
                  Where consent is the basis for processing, it is:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Specific to the purpose stated at the point of collection
                    (e.g., loan advisory vs. marketing)
                  </li>
                  <li>
                    Freely given, without being bundled into unrelated purposes
                  </li>
                  <li>Revocable at any time, as described in Section 9</li>
                </ul>
                <p className="mt-2">
                  You may withdraw your consent at any time by contacting us.
                  Withdrawing consent does not affect the lawfulness of
                  processing carried out before withdrawal, and may limit our
                  ability to continue assisting with your funding requirement.
                </p>
                <p className="mt-2">
                  By submitting an enquiry or form on our website, or by
                  initiating contact with us via WhatsApp, SMS, phone, or email,
                  you expressly consent to IBSFINCORP contacting you — including
                  via WhatsApp, SMS, phone call, or email — for follow-up,
                  clarification, or service-related communication regarding your
                  funding requirement. This applies even if your mobile number
                  is registered under the National Customer Preference Register
                  (NCPR) / Do Not Disturb (DND) list, as such communication is
                  transactional in nature and initiated at your request.
                </p>
                <p className="mt-2">
                  In addition, you consent to IBSFINCORP reaching out to you via
                  WhatsApp, SMS, phone call, or email on a periodic basis after
                  your initial enquiry — including at a later date — to check in
                  on your funding requirement, inform you of additional or
                  repeat funding solutions that may be relevant to you, invite
                  you to refer others who may benefit from our services, or
                  reconnect in case we were unable to assist you at the time.
                  This ongoing engagement is intended to ensure you can be
                  assisted whenever a requirement arises, and you may opt out of
                  such periodic communication at any time by informing us.
                </p>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  6. How We Share Your Information
                </h2>
                <p className="mb-2">
                  We do not sell your personal information. We share it only in
                  the following circumstances, and only to the extent necessary:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>With partner banks and NBFCs:</strong> When you
                    choose to proceed with a specific lender through us, we
                    share the relevant details of your funding requirement with
                    that RBI-regulated institution so they can assess your
                    application. From that point, the lender&apos;s own privacy
                    and data practices also apply.
                  </li>
                  <li>
                    <strong>With service providers who support our
                    operations:</strong> including our CRM providers and our
                    communication service providers (such as our WhatsApp
                    Business messaging platform, and our SMS, email, and calling
                    service providers). These providers process data on our
                    behalf and are expected to maintain confidentiality and
                    appropriate security.
                  </li>
                  <li>
                    <strong>For legal and regulatory compliance:</strong> where
                    disclosure is required by law, regulation, or a valid
                    request from a government or regulatory authority.
                  </li>
                  <li>
                    <strong>To protect rights and safety:</strong> where
                    necessary to investigate or prevent fraud, security issues,
                    or violations of our terms.
                  </li>
                </ul>
                <p className="mt-2">
                  We do not share your information with any party for their
                  independent marketing purposes without your separate, explicit
                  consent.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  7. Cookies and Tracking Technologies
                </h2>
                <p>
                  Our website uses cookies and similar technologies to
                  understand how visitors use our site and to improve our
                  services. This includes tools such as Google Analytics (GA4),
                  Google Tag Manager, and Meta Pixel, which help us understand
                  website performance and the effectiveness of our marketing,
                  and Microsoft Clarity, which helps us understand how visitors
                  navigate and interact with our pages.
                </p>
                <p className="mt-2">
                  These tools may collect information such as pages visited,
                  time spent on the site, referral source, and general
                  device/browser information. They do not, on their own, identify
                  you personally unless combined with information you&apos;ve
                  directly provided to us.
                </p>
                <p className="mt-2">
                  You can control or disable cookies through your browser
                  settings. Please note that disabling cookies may affect
                  certain website functionality.
                </p>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  8. Data Retention
                </h2>
                <p>
                  We retain your personal information only for as long as
                  necessary to fulfil the purpose for which it was collected
                  (i.e., assisting with your funding requirement) and to meet
                  any applicable legal, regulatory, or record-keeping
                  obligations connected to loan facilitation. Once these
                  purposes are served and no legal retention requirement applies,
                  we take steps to delete or anonymise your personal data.
                </p>
              </section>

              {/* 9 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  9. Your Rights
                </h2>
                <p className="mb-2">
                  Under the DPDP Act, you have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>
                    Correct or update inaccurate or incomplete data
                  </li>
                  <li>Withdraw consent for processing at any time</li>
                  <li>
                    Request erasure of your personal data, subject to any legal
                    retention obligations
                  </li>
                  <li>
                    Nominate another individual to exercise these rights on your
                    behalf in the event of your death or incapacity
                  </li>
                  <li>
                    Raise a grievance regarding how your data has been handled,
                    and escalate to the Data Protection Board of India if
                    unresolved
                  </li>
                </ul>
                <p className="mt-2">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:contact@ibsfincorp.com"
                    className="text-gold-500 hover:underline"
                  >
                    contact@ibsfincorp.com
                  </a>
                  . We will respond within a reasonable timeframe as required
                  under applicable law.
                </p>
              </section>

              {/* 10 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  10. Data Security
                </h2>
                <p>
                  We take reasonable technical and organisational measures to
                  protect your personal information from unauthorised access,
                  disclosure, alteration, or destruction. This includes secure
                  handling of data within our CRM systems and restricted access
                  to customer information within our team.
                </p>
                <p className="mt-2">
                  While we take security seriously, no method of transmission or
                  storage is completely secure, and we cannot guarantee absolute
                  security. If you become aware of any security concern relating
                  to your data shared with us, please contact us immediately.
                </p>
              </section>

              {/* 11 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  11. Children&apos;s Privacy
                </h2>
                <p>
                  Our services are directed at adults seeking financial and
                  funding solutions for personal or business purposes. We do not
                  knowingly collect personal information from individuals under
                  18 years of age. If we become aware that we have inadvertently
                  collected such information, we will take steps to delete it.
                </p>
              </section>

              {/* 12 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  12. Third-Party Links
                </h2>
                <p>
                  Our website or communications may occasionally reference or
                  link to third-party websites, including those of our partner
                  banks and NBFCs. This Privacy Policy does not extend to those
                  third-party sites. We encourage you to review the privacy
                  practices of any third-party site you visit.
                </p>
              </section>

              {/* 13 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  13. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  business operations. The updated version will be posted on
                  this page with a revised &ldquo;Last Updated&rdquo; date. We
                  encourage you to review this Policy periodically.
                </p>
              </section>

              {/* 14 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  14. Contact Us
                </h2>
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or how your personal information is
                  handled, please reach out to us:
                </p>
                <div className="mt-2 bg-white/5 rounded-xl p-4 space-y-1 text-sm">
                  <p>
                    <span className="text-white font-medium">Incetto Business Solutions Private Limited</span>
                    {" "}(IBSFINCORP)
                  </p>
                  <p>
                    2nd Floor, No. 158, Gulecha Towers, Arcot Road, Vadapalani,
                    Chennai, Tamil Nadu – 600026
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:contact@ibsfincorp.com"
                      className="text-gold-500 hover:underline"
                    >
                      contact@ibsfincorp.com
                    </a>
                  </p>
                  <p>Phone: +91 99622 99260</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
