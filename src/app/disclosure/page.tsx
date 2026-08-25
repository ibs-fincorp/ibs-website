import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Corporate DSA Disclosure | IBSFINCORP",
  description:
    "IBSFINCORP (Incetto Business Solutions Private Limited) is a Corporate DSA and strategic loan consulting firm — not a Bank or NBFC. Read our full disclosure.",
  alternates: {
    canonical: "https://www.ibsfincorp.com/disclosure",
  },
};

export default function DisclosurePage() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden bg-legal-gradient">
        <div className="container mx-auto max-w-4xl pt-24 pb-16 px-6 md:px-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Corporate DSA Disclosure
            </h1>
            <p className="text-white/60 text-sm mb-8">
              Incetto Business Solutions Private Limited (operating under the
              brand name IBSFINCORP)
            </p>

            <div className="space-y-6 text-white/80 text-sm md:text-base leading-relaxed">
              {/* 1 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  1. Our Role: Direct Selling Agent (DSA)
                </h2>
                <p>
                  IBSFINCORP is a Direct Selling Agent (DSA) and strategic loan
                  consulting firm. We are not a Bank, Non-Banking Financial
                  Company (NBFC), or any other RBI-licensed lending institution.
                  We do not lend our own funds, accept deposits, or have the
                  authority to sanction, disburse, or service loans.
                </p>
                <p className="mt-2">
                  Our role is that of an intermediary: we understand a
                  customer&apos;s funding requirement, assess preliminary
                  eligibility, and connect them with suitable RBI-regulated
                  banks and NBFCs from our partner network who can evaluate and,
                  where appropriate, extend a loan.
                </p>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  2. Our Relationship with Partner Banks and NBFCs
                </h2>
                <p>
                  IBSFINCORP is empanelled with a network of 50+ RBI-regulated
                  banks and NBFCs. When a customer&apos;s funding requirement
                  matches a suitable lender in our network:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    We forward the customer&apos;s application and relevant
                    details to that lender, with the customer&apos;s consent
                  </li>
                  <li>
                    The lender independently evaluates the application against
                    its own credit policy, underwriting standards, and
                    eligibility criteria
                  </li>
                  <li>
                    All decisions relating to loan sanction, interest rate,
                    tenure, loan amount, and terms are made solely by the
                    lender, not by IBSFINCORP
                  </li>
                  <li>
                    Loan documentation, disbursement, and ongoing servicing are
                    handled directly by the lender, under a loan agreement
                    formed directly between the lender and the customer
                  </li>
                </ul>
                <p className="mt-2">
                  IBSFINCORP is not a party to the loan agreement and does not
                  hold or handle disbursed loan funds at any stage.
                </p>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  3. Our Commission Model
                </h2>
                <p>
                  IBSFINCORP operates on a commission-free basis to customers.
                  We do not charge borrowers an advisory or facilitation fee for
                  our services.
                </p>
                <p className="mt-2">
                  Our revenue comes from commission or payout received from
                  partner banks and NBFCs upon successful loan disbursement.
                  This compensation structure does not compromise the neutrality
                  of our advisory process — our objective is to match each
                  customer with the lender best suited to their profile and
                  requirement, not the lender offering the highest commission.
                </p>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  4. Customer Consent and Data Sharing
                </h2>
                <p>
                  Before any customer&apos;s information is shared with a
                  partner bank or NBFC, IBSFINCORP obtains the customer&apos;s
                  consent, in line with our Privacy Policy. Customer data is
                  shared with lenders and relevant service providers strictly
                  for the purpose of loan facilitation, eligibility assessment,
                  and regulatory compliance — not for unrelated third-party
                  marketing.
                </p>
                <p className="mt-2">
                  Customers may withdraw consent at any time, subject to the
                  terms described in our Privacy Policy.
                </p>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  5. Lending Responsibility
                </h2>
                <p className="mb-2">
                  To be clear about where responsibility sits:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 pr-4 text-white font-medium">
                          Activity
                        </th>
                        <th className="text-left py-2 text-white font-medium">
                          Handled By
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2 pr-4">
                          Eligibility assessment (preliminary)
                        </td>
                        <td className="py-2">IBSFINCORP</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 pr-4">
                          Lender matching and application coordination
                        </td>
                        <td className="py-2">IBSFINCORP</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 pr-4">
                          Documentation guidance and doorstep assistance
                        </td>
                        <td className="py-2">IBSFINCORP</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 pr-4">
                          Credit underwriting and final approval decision
                        </td>
                        <td className="py-2">Partner Bank / NBFC</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 pr-4">
                          Interest rate and loan terms
                        </td>
                        <td className="py-2">Partner Bank / NBFC</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 pr-4">
                          Loan sanction, disbursement, and fund transfer
                        </td>
                        <td className="py-2">Partner Bank / NBFC</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 pr-4">
                          Loan servicing, repayment collection, and
                          post-disbursement support
                        </td>
                        <td className="py-2">Partner Bank / NBFC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  6. Regulatory Alignment
                </h2>
                <p>
                  IBSFINCORP works exclusively with RBI-regulated banks and
                  NBFCs and expects these partner institutions to comply with
                  applicable RBI Digital Lending Directions, including Key Fact
                  Statement (KFS) disclosures, direct disbursal to borrower
                  accounts, and cooling-off period provisions where applicable.
                </p>
                <p className="mt-2">
                  IBSFINCORP itself, as a DSA, handles customer data in
                  accordance with the Digital Personal Data Protection Act, 2023,
                  and does not collect fees directly from borrowers, consistent
                  with RBI&apos;s expectations for DSAs and Lending Service
                  Providers.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  7. Our Transparency Commitment
                </h2>
                <p>IBSFINCORP is committed to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Never guaranteeing loan approval, a specific interest rate,
                    or a specific disbursement timeline
                  </li>
                  <li>
                    Clearly identifying ourselves as a non-lender Corporate DSA
                    in all communications and marketing
                  </li>
                  <li>
                    Providing customers with accurate, updated information about
                    our role and the partner lender network
                  </li>
                  <li>
                    Ensuring that any claims about disbursement volumes, partner
                    network size, or customer outcomes reflect our actual track
                    record
                  </li>
                </ul>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">
                  8. Contact Us
                </h2>
                <p>
                  For any questions about our role as a Corporate DSA or our
                  relationship with partner lenders, please contact us:
                </p>
                <div className="mt-2 bg-white/5 rounded-xl p-4 space-y-1 text-sm">
                  <p>
                    <span className="text-white font-medium">Incetto Business Solutions Private Limited</span>
                    {" "}(IBSFINCORP)
                  </p>
                  <p>CIN: U74110TN2022PTC155121 | GSTIN: 33AAGCI8352Q1ZZ</p>
                  <p>
                    2nd Floor, No. 158, Gulecha Towers, Arcot Road, Vadapalani,
                    Chennai, Tamil Nadu – 600026
                  </p>
                  <p>Email: contact@ibsfincorp.com</p>
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
