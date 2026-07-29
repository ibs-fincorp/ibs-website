"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextBlurReveal } from "../ui/text-blur-reveal";

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState<string>("chennai");

  const locationMap: Record<string, { embedUrl: string; gmbUrl: string; label: string; address: string }> = {
    chennai: {
      embedUrl: "https://maps.google.com/maps?q=13.0489558,80.2097347&z=15&output=embed",
      gmbUrl: "https://www.google.com/maps/place/IBSFINCORP+-+Chennai+-+Loan+Against+Property,+Home+Loan,+Working+Capital+Loans+%26+LRD+Loan+Consultants/@13.0489558,80.2071598,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526681bd4ec045:0xd40f6680c789efcc!8m2!3d13.0489558!4d80.2097347!16s%2Fg%2F11c1mzltkz?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
      label: "IBSFINCORP - Chennai - Loan Against Property, Home Loan, Working Capital Loans & LRD Loan Consultants",
      address: "3rd Floor, Gulecha Towers, No. 158, Arcot Rd, Ottagapalayam, Somasundara Bharathi Nagar, Vadapalani, Chennai, Greater Chennai, Tamil Nadu 600026",
    },
    bangalore: {
      embedUrl: "https://maps.google.com/maps?q=12.9260071,77.5847726&z=15&output=embed",
      gmbUrl: "https://www.google.com/maps/place/IBSFINCORP+-+Bengaluru+-+Loan+Against+Property,+Home+Loan,+Working+Capital+Loans+%26+LRD+Loan+Consultants/@12.9260071,77.5821977,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae153917a800fd:0x82127ec22bd20864!8m2!3d12.9260071!4d77.5847726!16s%2Fg%2F11krfhfjh1?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
      label: "IBSFINCORP - Bengaluru - Loan Against Property, Home Loan, Working Capital Loans & LRD Loan Consultants",
      address: "756, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
    },
    coimbatore: {
      embedUrl: "https://maps.google.com/maps?q=11.01279,76.964986&z=15&output=embed",
      gmbUrl: "https://www.google.com/maps/place/IBSFINCORP+-+Coimbatore+-+Loan+Against+Property,+Home+Loan,+Working+Capital+Loans+%26+LRD+Loan+Consultants/@11.01279,76.9624111,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859fdd692ed73:0x38e34bb2c3466f90!8m2!3d11.01279!4d76.964986!16s%2Fg%2F11xdfs33px?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
      label: "IBSFINCORP - Coimbatore - Loan Against Property, Home Loan, Working Capital Loans & LRD Loan Consultants",
      address: "9, Betaspace, 35, Desabandhu St, Ram Nagar, Coimbatore, Tamil Nadu 641009",
    },
    madurai: {
      embedUrl: "https://maps.google.com/maps?q=9.926663,78.0944307&z=15&output=embed",
      gmbUrl: "https://www.google.com/maps/place/IBSFINCORP+-+Madurai+-+Loan+Against+Property,+Home+Loan,+Working+Capital+Loans+%26+LRD+Loan+Consultants/@9.926663,78.0918558,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00cfe0bfc5fcdd:0xc73488a95e84f8d3!8m2!3d9.926663!4d78.0944307!16s%2Fg%2F11yd1dy8y0?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
      label: "IBSFINCORP - Madurai - Loan Against Property, Home Loan, Working Capital Loans & LRD Loan Consultants",
      address: "No 39A, Bizzbay CoWork Space, 2nd Floor, Kalasekar Tower, Sokalinga Nagar Main Road, Bypass Road, Madurai, Tamil Nadu 625016",
    },
  };

  return (
    <section id="locations" className="py-10 bg-white text-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <TextBlurReveal
            as="h2"
            text="Serving South India's Prime Borrowers"
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4"
          />
          <TextBlurReveal
            as="p"
            text="Present Where Your Assets And Ambitions Are. Click locations below to view on map."
            className="text-sm md:text-lg"
            delay={0.3}
          />
        </div>

        {/* Map Container */}
        <a
          href={locationMap[activeLocation].gmbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-6xl mx-auto bg-gray-100 rounded-3xl h-[500px] border border-gray-200 mb-16 relative overflow-hidden shadow-inner block cursor-pointer"
        >
          <iframe
            src={locationMap[activeLocation].embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: 'none' }}
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          ></iframe>

          {/* Address Info Card */}
          <div className="absolute top-4 left-4 right-4 md:right-auto z-20 max-w-xs md:max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-xl border border-gray-200 text-left"
              >
                <p className="text-sm sm:text-base font-normal leading-tight mb-2 ">
                  {locationMap[activeLocation].label}
                </p>
                <p className=" font-normal text-xs tracking-normal mb-1">
                  {locationMap[activeLocation].address}
                </p>
                
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtle overlay gradient to blend edges */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>
        </a>

        {/* Location Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 max-w-6xl mx-auto">
          {([
            { state: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem'] },
            { state: 'Karnataka', cities: ['Bangalore', 'Mysore'] },
            { state: 'Pondicherry (UT)', cities: ['Puducherry'] },
            { state: 'Other Major Indian Cities', cities: ['Subject To Eligibility & Lender Coverage'] },
          ] as const).map((group) => {
            const cityMapKey: Record<string, 'chennai' | 'bangalore' | 'coimbatore' | 'madurai' | null> = {
              Chennai: 'chennai',
              Coimbatore: 'coimbatore',
              Madurai: 'madurai',
              Salem: null,
              Bangalore: 'bangalore',
              Mysore: null,
              Puducherry: null,
              'Subject To Eligibility & Lender Coverage': null,
            };
            const hasActiveCity = group.cities.some((c) => cityMapKey[c] === activeLocation);

            return (
              <div key={group.state} className="text-left">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-3.5 h-3.5 rounded-full shrink-0 transition-all duration-300 bg-[#FFBB00]`}
                  />
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-dark-900 leading-tight tracking-tight">{group.state}</h3>
                    <p className="text-sm leading-tight tracking-tight">
                      {group.cities.map((city, i) => {
                        const mapKey = cityMapKey[city];
                        const isActive = mapKey !== null && mapKey === activeLocation;
                        const separator = i > 0 ? <span> · </span> : null;

                        if (mapKey) {
                          return (
                            <span key={city}>
                              {separator}
                              <button
                                onClick={() => setActiveLocation(mapKey)}
                                className={`cursor-pointer transition-colors hover:text-[#FFBB00] ${
                                  isActive ? 'text-[#FFBB00] font-medium' : ''
                                }`}
                              >
                                {city}
                              </button>
                            </span>
                          );
                        }

                        return <span key={city}>{separator}{city}</span>;
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
