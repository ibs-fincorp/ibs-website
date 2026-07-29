"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-transparent pt-12 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Regulatory Disclosure */}
        <div className="relative overflow-hidden mb-8 max-w-7xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] shadow-xl p-6 text-center">
          <h2 className="text-xl md:text-[42px] font-medium mb-4 tracking-tight text-dark-900">Regulatory & Compliance Disclosure</h2>
          <p className="text-xs md:text-lg max-w-4xl mx-auto leading-tight tracking-tight text-dark-900">
            IBSFINCORP, a brand of INCETTO BUSINESS SOLUTIONS PRIVATE LIMITED is a strategic loan consulting firm and Corporate DSA. We are not a Bank or NBFC. Loans are sanctioned and disbursed by RBI-regulated lending institutions subject to their eligibility criteria and policies.
          </p>
        </div>

        {/* Main Footer Content wrapped in Glassmorphism Block */}
        <div className="relative overflow-hidden max-w-7xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] shadow-2xl text-white p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-4 text-center md:text-left">
              <div className="py-2 rounded inline-block">
                <Image src="/assets/logo.png" alt="IBS FINCORP Logo" width={160} height={45} style={{ height: "auto" }} className="object-cover" />
              </div>
              <p className="text-xs md:text-base font-normal">
                Strategic Loan Consulting Firm (Corporate DSA). Facilitating Premium Secured Loan Across South India. Not A Bank Or NBFC.
              </p>
            </div>

            {/* LOCATIONS */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold mb-6 tracking-tight text-white text-center md:text-left text-sm md:text-base">LOCATIONS</h3>
              <div className="text-xs sm:text-sm tracking-tight grid grid-cols-2 md:grid-cols-1 gap-6 text-left md:text-left">
                <div>
                  <p className="inline-flex items-start text-left text-dark-900 gap-1.5 font-semibold mb-2 leading-tight">
                    <Image src="/assets/location.svg" alt="Location" width={14} height={14} className="object-contain shrink-0 mt-0.5" />
                    <span>REGISTERED OFFICE - CHENNAI</span>
                  </p>
                  <span className="text-white/80 leading-relaxed text-[11px] sm:text-sm block px-1 max-w-xs mx-auto md:mx-0">
                    2nd Floor, No.158, Gulecha Towers, Arcot Road, Vadapalani,
Chennai, Chennai, Tamil Nadu, 600026
                  </span>
                </div>
                <div>
                  <p className="inline-flex items-start text-left text-dark-900 gap-1.5 font-semibold mb-2 leading-tight">
                    <Image src="/assets/location.svg" alt="Location" width={14} height={14} className="object-contain shrink-0 mt-0.5" />
                    <span>BRANCH OFFICE - BANGALORE</span>
                  </p>
                  <span className="text-white/80 leading-relaxed text-[11px] sm:text-sm block px-1 max-w-xs mx-auto md:mx-0">
                    756, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011
                  </span>
                </div>
                <div>
                  <p className="inline-flex items-start text-left text-dark-900 gap-1.5 font-semibold mb-2 leading-tight">
                    <Image src="/assets/location.svg" alt="Location" width={14} height={14} className="object-contain shrink-0 mt-0.5" />
                    <span>MADURAI OFFICE</span>
                  </p>
                  <span className="text-white/80 leading-relaxed text-[11px] sm:text-sm block px-1 max-w-xs mx-auto md:mx-0">
                    No 39A, Bizzbay CoWork Space, 2nd Floor, Kalasekar Tower, Sokalinga Nagar Main Road, Bypass Road, Madurai, Tamil Nadu 625016
                  </span>
                </div>
                <div>
                  <p className="inline-flex items-start text-left text-dark-900 gap-1.5 font-semibold mb-2 leading-tight">
                    <Image src="/assets/location.svg" alt="Location" width={14} height={14} className="object-contain shrink-0 mt-0.5" />
                    <span>COIMBATORE OFFICE</span>
                  </p>
                  <span className="text-white/80 leading-relaxed text-[11px] sm:text-sm block px-1 max-w-xs mx-auto md:mx-0">
                    9, Betaspace, 35, Desabandhu St, Ram Nagar, Coimbatore, Tamil Nadu 641009
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-6 tracking-tight text-white text-center md:text-left text-sm md:text-base">QUICK LINKS</h3>
              <ul className="grid grid-cols-3 md:grid-cols-1 gap-y-1 gap-x-2 md:gap-0 md:space-y-1 font-normal text-xs sm:text-sm tracking-tight text-center md:text-left">
                <li><a href="#why-us" className="hover:text-gold-500 transition-colors">Services</a></li>
                <li><a href="#solutions" className="hover:text-gold-500 transition-colors">How It Works</a></li>
                <li><a href="#about" className="hover:text-gold-500 transition-colors">Loan Products</a></li>
                <li><a href="#comparison" className="hover:text-gold-500 transition-colors">Locations</a></li>
                <li><a href="#locations" className="hover:text-gold-500 transition-colors">About Us</a></li>
                <li><Link href="/disclosure" className="hover:text-gold-500 transition-colors">Disclosure</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" className="hover:text-gold-500 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact Actions */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold mb-6 tracking-tight text-white text-center md:text-left text-sm md:text-base">CONTACT</h3>
              <ul className="text-xs sm:text-sm tracking-tight space-y-3 mb-6 font-normal">
                <li className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                  <svg className="w-4 h-4 text-gold-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <a href="tel:+919962299260" className="hover:text-gold-500 transition-colors">+91 9962299260</a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                  <svg className="w-4 h-4 text-gold-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <a href="mailto:contact@ibsfincorp.com" className="hover:text-gold-500 transition-colors">contact@ibsfincorp.com</a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                  <svg className="w-4 h-4 text-gold-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Chennai, Tamil Nadu
                </li>
              </ul>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://wa.link/xpwwox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black border border-white/10 text-white px-8 py-2.5 rounded-full font-medium text-xs md:text-sm hover:bg-gold-500 hover:text-black transition-all w-fit shadow-lg cursor-pointer"
                >
                  Chat On WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-center md:justify-between text-center text-xs md:text-sm font-normal tracking-tight space-y-1">
            <p>© 2026 IBSFINCORP. All Rights Reserved.</p>
            <a href="https://www.theinternetcompany.one" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white/80 transition-colors">Designed & Developed By TIC Global Services</a>
          </div>
          <div className="border-t border-white/20 mt-6 pt-6">
            <p className="text-[10px] md:text-xs text-center leading-relaxed tracking-tight font-normal text-white/50 space-x-1">
              <span>CIN: U74110TN2022PTC155121</span>
              <span className="text-white/20">|</span>
              <span>GSTIN: 33AAGCI8352Q1ZZ</span>
            </p>
          </div>
          <div className="border-t border-white/20 mt-6 pt-6">
            <p className="text-[10px] md:text-xs text-center max-w-6xl leading-relaxed tracking-tight font-normal text-white/50">
              <span className="text-gold-500 font-medium">DISCLAIMER:</span> IBSFINCORP, A Brand Of INCETTO BUSINESS SOLUTIONS PRIVATE LIMITED Is A Loan Assistance And Strategic Financial Consulting Service Provider (Corporate DSA). We Are Not A Bank, NBFC, Or Licensed Lender. All Loan Approvals, Interest Rates, And Terms Are Determined Solely By The Respective Banks And NBFCs Based On Their Eligibility Policies And Internal Criteria. Loan Facilitation Is Subject To Lender Requirements. This Website Does Not Guarantee Loan Approval, Specific Interest Rates, Or Disbursement Timelines. Interest Rates And Terms Are Determined By The Lending Institution.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
