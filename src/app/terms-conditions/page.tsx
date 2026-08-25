import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | IBSFINCORP",
  description:
    "Terms & Conditions governing the use of IBSFINCORP (Incetto Business Solutions Private Limited) website and services.",
  alternates: {
    canonical: "https://www.ibsfincorp.com/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden bg-legal-gradient">
        <div className="container mx-auto max-w-4xl pt-24 pb-16 px-6 md:px-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Terms &amp; Conditions
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
                  1. Acceptance of Terms
                </h2>
                <p>
                  These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
                  access to and use of the IBSFINCORP website, landing pages,
                  and services offered by Incetto Business Solutions Private
                  Limited (&ldquo;IBSFINCORP,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing our
                  website, submitting an enquiry, or otherwise engaging with our
                  services, you agree to be bound by these Terms and by our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-gold-500 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  , which is incorporated by reference.
                </p>
                <p className="mt-2">
                  If you do not agree with these Terms, please discontinue use
                  of our website and services.
                </p>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  2. Nature of Our Business
                </h2>
                <p>
                  IBSFINCORP is a Direct Selling Agent (DSA) and strategic loan
                  consulting firm. We are not a Bank, NBFC, or licensed lender,
                  and we do not accept deposits or disburse loans ourselves.
                </p>
                <p className="mt-2">Our role is to:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Understand your funding requirement (Loan Against Property,
                    Home Loan, Business/Working Capital Loan, Balance Transfer
                    &amp; Top-Up, Lease Rental Discounting, NRI Mortgage, or
                    related secured funding solutions)
                  </li>
                  <li>Assess your preliminary eligibility</li>
                  <li>
                    Match you with suitable RBI-regulated banks and NBFCs from
                    our partner network of 50+ institutions
                  </li>
                  <li>
                    Support you through documentation and coordination with the
                    lender you choose to proceed with
                  </li>
                </ul>
                <p className="mt-2">
                  All final decisions regarding loan sanction, disbursement,
                  interest rates, tenure, and terms rest solely with the partner
                  bank or NBFC, subject to their own credit policies,
                  underwriting standards, and eligibility criteria.
                </p>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  3. Eligibility and User Responsibilities
                </h2>
                <p className="mb-2">
                  By using our website or services, you confirm that:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    You are at least 18 years of age and legally competent to
                    enter into a binding agreement under Indian law
                  </li>
                  <li>
                    The information you provide to us — including contact
                    details, financial information, and documentation — is
                    accurate, current, and complete
                  </li>
                  <li>
                    You will promptly update us if any information you have
                    provided changes
                  </li>
                  <li>
                    You will use our website and services only for lawful
                    purposes and will not misuse, disrupt, or attempt
                    unauthorised access to our systems
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    any account credentials, if applicable, and for all activity
                    that occurs through your interactions with us
                  </li>
                </ul>
                <p className="mt-3">
                  By submitting any form, enquiry, or request through our
                  website or other channels, you authorise IBSFINCORP to contact
                  you via WhatsApp, email, SMS, or phone call in connection with
                  your enquiry and any follow-up communication, regardless of
                  DND/NCPR registration status, since such communication is
                  provided at your initiation for a transactional purpose.
                </p>
                <p className="mt-2">
                  You acknowledge that IBSFINCORP may contact you via WhatsApp,
                  SMS, phone call, email, or any other communication channel we
                  may adopt, periodically after your initial enquiry — including
                  regarding additional or repeat funding solutions, referral
                  opportunities, or to reconnect if we were previously unable to
                  assist you — and that such communication may continue until
                  you inform us that you wish to opt out.
                </p>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  4. Scope of Our Services
                </h2>
                <p className="mb-2">IBSFINCORP provides:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Preliminary eligibility assessment for the funding solutions
                    listed in Section 2
                  </li>
                  <li>
                    Comparison and matching with suitable lenders from our
                    partner network
                  </li>
                  <li>
                    Guidance on documentation and application coordination
                  </li>
                  <li>
                    Doorstep assistance for document collection, where
                    applicable
                  </li>
                  <li>
                    Ongoing support through the application, sanction, and
                    disbursement process handled by the partner lender
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Limitations:</strong> We do not guarantee loan
                  approval, a specific interest rate, a specific loan amount, or
                  a specific processing timeline. These outcomes depend entirely
                  on the partner lender&apos;s independent assessment of your
                  application, your creditworthiness, the property or business
                  being evaluated (where applicable), and prevailing lender
                  policies.
                </p>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  5. Relationship with Partner Banks and NBFCs
                </h2>
                <p>
                  IBSFINCORP is empanelled with a network of RBI-regulated banks
                  and NBFCs. When you choose to proceed with a specific lender
                  through us:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Your application, once forwarded, is evaluated and processed
                    directly by that lender
                  </li>
                  <li>
                    Loan sanction, documentation, disbursement, and servicing
                    are the lender&apos;s responsibility, governed by the
                    lender&apos;s own terms and agreements with you
                  </li>
                  <li>
                    Any loan agreement is formed directly between you and the
                    lender; IBSFINCORP is not a party to that agreement
                  </li>
                </ul>
                <p className="mt-2">
                  We work only with RBI-regulated lending institutions and
                  expect our partner lenders to comply with applicable RBI
                  digital lending guidelines, including fair practice and
                  disclosure requirements.
                </p>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  6. Fees and Commissions
                </h2>
                <p>
                  IBSFINCORP operates on a &ldquo;Zero Commission&rdquo; /
                  commission-free basis to borrowers. We do not charge you an
                  advisory or consultation fee for helping you find and apply to
                  a suitable lender.
                </p>
                <p className="mt-2">
                  Our revenue comes from commissions and payouts received from
                  partner banks and NBFCs upon successful loan disbursement.
                  This commission structure does not influence the accuracy or
                  objectivity of the advisory support we provide to you.
                </p>
                <p className="mt-2">
                  Any fees, processing charges, or other costs associated with
                  your loan (such as processing fees, legal or valuation charges,
                  or stamp duty) are determined and charged by the lending
                  institution directly, in accordance with their own fee
                  schedule, and are separate from IBSFINCORP.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  7. Third-Party Content and Links
                </h2>
                <p>
                  Our website may contain links to, or references to, the
                  websites of partner banks, NBFCs, or other third parties.
                  These third-party sites operate under their own terms and
                  privacy policies, which are independent of IBSFINCORP. We are
                  not responsible for the content, accuracy, or practices of any
                  third-party website, and inclusion of a link does not imply
                  our endorsement of that content.
                </p>
                <p className="mt-2">
                  Any tools such as EMI calculators or eligibility estimators
                  provided on our website are for illustrative purposes only and
                  do not constitute a loan offer or guarantee of eligibility.
                </p>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  8. Intellectual Property
                </h2>
                <p>
                  All content on the IBSFINCORP website — including text,
                  graphics, logos, the IBSFINCORP brand name and visual identity,
                  tools, and layout — is the property of Incetto Business
                  Solutions Private Limited or its licensors, and is protected
                  under applicable Indian intellectual property laws.
                </p>
                <p className="mt-2">
                  You may not copy, reproduce, modify, distribute, or create
                  derivative works from our website content without our prior
                  written consent, except for personal, non-commercial use in
                  connection with evaluating our services.
                </p>
              </section>

              {/* 9 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  9. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted under applicable law:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    IBSFINCORP is not liable for any loan approval or rejection
                    decision, interest rate, loan terms, disbursement delay, or
                    servicing issue arising from your interaction with a partner
                    bank or NBFC
                  </li>
                  <li>
                    IBSFINCORP is not liable for any indirect, incidental, or
                    consequential loss arising from your use of our website or
                    services, including reliance on illustrative tools such as
                    EMI calculators
                  </li>
                  <li>
                    Our total liability, where any liability is established, is
                    limited to direct damages arising from our own demonstrable
                    negligence in providing advisory services, and shall not
                    extend to the actions or decisions of third-party lenders
                  </li>
                </ul>
                <p className="mt-2">
                  Nothing in this section limits any liability that cannot be
                  excluded under applicable Indian law.
                </p>
              </section>

              {/* 10 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  10. Indemnity
                </h2>
                <p>
                  You agree to indemnify and hold IBSFINCORP, its directors,
                  employees, and representatives harmless from any claims,
                  losses, damages, or expenses (including reasonable legal costs)
                  arising from:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Your breach of these Terms</li>
                  <li>Inaccurate or misleading information provided by you</li>
                  <li>Your misuse of our website or services</li>
                  <li>
                    Any violation of applicable law in connection with your use
                    of our services
                  </li>
                </ul>
              </section>

              {/* 11 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  11. Governing Law and Jurisdiction
                </h2>
                <p>
                  These Terms are governed by the laws of India. Any disputes
                  arising out of or in connection with these Terms or your use
                  of our website and services shall be subject to the exclusive
                  jurisdiction of the courts at Chennai, Tamil Nadu.
                </p>
              </section>

              {/* 12 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  12. Termination and Suspension
                </h2>
                <p>
                  We reserve the right to suspend or restrict your access to our
                  website or services at our discretion, including where we
                  reasonably believe there has been a breach of these Terms,
                  misuse of our services, or fraudulent activity. We may also
                  discontinue or modify any part of our website or services at
                  any time.
                </p>
              </section>

              {/* 13 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  13. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms from time to time to reflect changes
                  in our services, business practices, or legal and regulatory
                  requirements. The updated Terms will be posted on this page
                  with a revised &ldquo;Last Updated&rdquo; date. Continued use
                  of our website or services after any update constitutes your
                  acceptance of the revised Terms.
                </p>
              </section>

              {/* 14 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  14. Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms &amp; Conditions,
                  please contact us:
                </p>
                <div className="mt-2 bg-white/5 rounded-xl p-4 space-y-1 text-sm">
                  <p>
                    <span className="text-white font-medium">Incetto Business Solutions Private Limited</span>
                    {" "}(IBSFINCORP)
                  </p>
                  <p>
                    CIN: U74110TN2022PTC155121 | GSTIN: 33AAGCI8352Q1ZZ
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
