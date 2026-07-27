"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const AnimatedTick = ({ idx }: { idx: number }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 md:w-[18px] md:h-[18px]"
    fill="none"
    stroke="#000000ff"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.path
      d="M20 6L9 17L4 12"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
    />
  </svg>
);

const AnimatedCross = ({ idx }: { idx: number }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 md:w-[18px] md:h-[18px]"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.path
      d="M18 6L6 18"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.3, delay: idx * 0.08, ease: "easeOut" }}
    />
    <motion.path
      d="M6 6l12 12"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.3, delay: idx * 0.08 + 0.12, ease: "easeOut" }}
    />
  </svg>
);

export default function ComparisonAppSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => { });
      }
    }
  };

  useIntersectionObserver(
    videoRef,
    () => { videoRef.current?.play().catch(() => { }); },
    () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    },
    { threshold: 0.1 }
  );

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 50%"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const line1Opacity = useTransform(scrollYProgress, [0.33, 0.4], [0, 1]);
  const line2Opacity = useTransform(scrollYProgress, [0.66, 0.73], [0, 1]);

  return (
    <section id="comparison" className="py-8 bg-comparison-gradient text-dark-900 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* App Showcase with Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center justify-items-center w-full max-w-6xl mx-auto mb-32 mt-10 px-4">

          {/* Left Cards */}
          <div className="flex flex-col gap-8 lg:gap-14 z-20 w-full max-w-xl lg:max-w-[320px] items-end text-right translate-x-4 md:translate-x-12 lg:translate-x-0 lg:-translate-y-15">
            <div className="flex flex-col items-end text-right w-full max-w-xl lg:max-w-[320px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 mb-4">
                <div className="relative w-13 h-13">
                  <Image src="/assets/higherloan.png" alt="Higher Loan Icon" fill sizes="52px" className="object-contain" />
                </div>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-2">Higher Loan Amounts</h3>
              <p className="text-sm leading-tight font-Manrope">
                Access substantial funding based on your property value and repayment capacity.
              </p>
            </div>

            <div className="flex flex-col items-end text-right w-full max-w-xl lg:max-w-[320px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 mb-4">
                <div className="relative w-13 h-13">
                  <Image src="/assets/flexible.png" alt="Flexible Repayment Icon" fill sizes="52px" className="object-contain" />
                </div>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-2">Flexible Repayment Tenures</h3>
              <p className="text-sm leading-tight font-Manrope">
                Choose customized repayment plans that align with your financial goals and cash flow.
              </p>
            </div>
          </div>

          {/* Center Phone Mockup */}
          <div className="relative z-0 flex justify-center w-full">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-500/20 blur-[100px] rounded-full"></div>

            {/* Video container with sound toggle */}
            <div
              onClick={() => toggleMute()}
              className="w-full h-full md:w-[310px] md:h-[620px] relative z-10 rounded-[50px] overflow-hidden hover:scale-105 transition-transform duration-500 flex items-center justify-center cursor-pointer group"

            >
              <video
                ref={videoRef}
                src="/assets/ibs-mob-processed.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className=" w-full h-full object-cover relative z-10"
              />

              {/* Sound status indicator overlay */}
              <button
                onClick={(e) => toggleMute(e)}
                className="absolute bottom-6 right-6 z-30 p-2.5 bg-black/60 hover:bg-black/80 hover:scale-110 text-white rounded-full transition-all backdrop-blur-xs flex items-center justify-center border border-white/10 shadow-lg"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="22" y1="9" x2="16" y2="15"></line>
                    <line x1="16" y1="9" x2="22" y2="15"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-10 lg:gap-14 z-20 w-full max-w-xl lg:max-w-[320px] items-start text-left -translate-x-4 md:-translate-x-12 lg:translate-x-0 lg:translate-y-5">
            <div className="flex flex-col items-start text-left w-full max-w-xl lg:max-w-[320px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 mb-4">
                <div className="relative w-13 h-13">
                  <Image src="/assets/doorstep.png" alt="Doorstep Assistance Icon" fill sizes="52px" className="object-contain" />
                </div>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-2">Doorstep Assistance</h3>
              <p className="text-sm leading-tight font-Manrope">
                Document Collection And Coordination Come To You. No Queues, No Branch Visits Required At Any Stage.
              </p>
            </div>

            <div className="flex flex-col items-start text-left w-full max-w-xl lg:max-w-[320px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 mb-4">
                <div className="relative w-13 h-13">
                  <Image src="/assets/trust.png" alt="Trusted Partner Icon" fill sizes="52px" className="object-contain" />
                </div>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-2">Trusted & Reliable Partner</h3>
              <p className="text-sm leading-tight font-Manrope">
                Built on transparency, integrity, and long-term financial relationships.
              </p>
            </div>
          </div>
        </div>
        {/* Section Header for Table */}
        <div className="text-center mb-16 relative z-10 text-dark-900">
          <TextBlurReveal
            as="h2"
            text="What Makes IBSFINCORP Different"
            className="text-3xl md:text-5xl font-medium tracking-tight mb-4"
          />
          <TextBlurReveal
            as="p"
            text="Unlock Exclusive High-Value Benefits"
            className="text-sm md:text-lg"
            delay={0.3}
          />
        </div>
        {/* Comparison Table */}
        <div className="max-w-[1200px] mx-auto mb-32 relative z-10 text-dark-900 mt-12">
          <div className="relative">
            {/* Main Table BG */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl pointer-events-none"></div>

            {/* Middle Column Border */}
            <div className="absolute inset-y-0 left-[40%] w-[30%] border-l border-white/20 pointer-events-none"></div>

            {/* IBS Highlight BG */}
            <div className="absolute inset-y-0 right-0 w-[30%] bg-white/20 backdrop-blur-xl border-l border-white/20 rounded-r-3xl pointer-events-none"></div>

            {/* Table Content */}
            <div className="relative z-10 grid grid-cols-[40%_30%_30%] py-4 md:py-6">
              {/* Headers */}
              <div className="font-medium text-[11px] sm:text-sm md:text-2xl pl-5 pr-2 md:pl-10 md:pr-4 flex items-center justify-start pb-4">Features</div>
              <div className="font-medium text-[11px] sm:text-sm md:text-2xl px-1 md:px-4 text-center flex items-center justify-center pb-4 leading-tight">
                <span>Conventional<br className="sm:hidden" /> Loan Agents</span>
              </div>
              <div className="font-medium text-[11px] sm:text-sm md:text-2xl px-1 md:px-4 text-center flex items-center justify-center pb-4">IBSFINCORP</div>

              {/* Rows */}
              {[
                "Wide Bank & NBFC Network",
                "Strategic Lender Matching",
                "Free Eligibility Check",
                "End-To-End Premium Support",
                "Doorstep Experience",
                "Faster Turnaround Time",
                "Zero Client Commission",
              ].map((feature, idx) => (
                <React.Fragment key={idx}>
                  <div className="pl-5 pr-2 md:pl-10 md:pr-4 font-medium text-[11px] sm:text-xs md:text-lg tracking-tight flex items-center leading-tight py-2 md:py-2.5">{feature}</div>
                  <div className={`px-1 md:px-4 text-center text-base md:text-xl flex items-center justify-center font-light py-2 md:py-2.5 ${idx === 0 || idx === 4 ? "opacity-100" : "opacity-50"}`}>
                    {idx === 0 || idx === 4 ? (
                      <AnimatedTick idx={idx} />
                    ) : (
                      <AnimatedCross idx={idx} />
                    )}
                  </div>
                  <div className="px-1 md:px-4 text-center font-light text-base md:text-xl flex items-center justify-center opacity-100 py-2 md:py-2.5">
                    <AnimatedTick idx={idx} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Steps / Timeline */}
        <div className="max-w-6xl mx-auto relative z-10 mt-32 mb-12" ref={timelineRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">

            {/* Desktop Continuous Bottom Track Line */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white/20 z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)"></div>

            {/* Desktop Continuous Bottom Glow Line */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-[2px] z-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
              <motion.div
                className="w-full h-full bg-gold-400 origin-left shadow-[0_0_10px_2px_rgba(255,215,0,0.5)]"
                style={{ scaleX, willChange: "transform" }}
              />
            </div>
            {/* Mobile Continuous Left Track Line */}
            <div className="md:hidden absolute top-[41px] bottom-[250px] sm:bottom-[220px] left-0 w-[1px] bg-white/20 z-10"></div>
            {/* Mobile Continuous Left Glow Line */}
            <motion.div
              className="md:hidden absolute top-[41px] bottom-[250px] sm:bottom-[220px] left-0 w-[2px] bg-gold-400 z-20 origin-top shadow-[0_0_10px_2px_rgba(255,215,0,0.5)]"
              style={{ scaleY, willChange: "transform" }}
            />

            {/* Step 1 */}
            <div className="group relative px-8 pb-12">
              <h2 className="text-6xl font-semibold text-white mb-4">01</h2>
              <h3 className="text-xl font-semibold text-white mb-4 pr-4">Corporate<br />DSA Advisory Company</h3>
              <p className="text-base text-[#828282] tracking-tight leading-tight">
                Providing strategic loan consulting and lender matchmaking services tailored to your financial goals and funding requirements.
              </p>

              {/* Right Vertical Line */}
              <div className="hidden md:block absolute right-0 bottom-0 w-[1px] h-full bg-white/10 z-10"></div>
              <motion.div
                className="hidden md:block absolute right-0 bottom-0 w-[1px] h-full bg-gradient-to-t from-gold-400 to-transparent z-10"
                style={{ opacity: line1Opacity, willChange: "opacity" }}
              />

              {/* Corner Dot (Desktop right-bottom) */}
              <div className="hidden md:block absolute -bottom-[4px] -right-[5px] w-[10px] h-[10px] rounded-full bg-white/20 z-10"></div>
              <motion.div
                className="hidden md:block absolute -bottom-[4px] -right-[5px] w-[10px] h-[10px] rounded-full bg-white z-20"
                style={{ opacity: line1Opacity, boxShadow: "0 0 10px 4px rgba(255,215,0,0.8)", willChange: "opacity" }}
              />

              {/* Corner Dot (Mobile top-left) */}
              <div className="md:hidden absolute top-[36px] -left-[5px] w-[10px] h-[10px] rounded-full bg-white/20 z-10"></div>
              <motion.div
                className="md:hidden absolute top-[36px] -left-[5px] w-[10px] h-[10px] rounded-full bg-white z-20"
                style={{ opacity: 1, boxShadow: "0 0 10px 4px rgba(255,215,0,0.8)", willChange: "opacity" }}
              />
            </div>

            {/* Step 2 */}
            <div className="group relative px-8 pb-12">
              <h2 className="text-6xl font-semibold text-white mb-4">02</h2>
              <h3 className="text-xl font-semibold text-white mb-4 pr-4">Loans Facilitated Through RBI-<br />Regulated Banks & NBFCs</h3>
              <p className="text-base text-[#828282] tracking-tight leading-tight">
                Get access to the most suitable loan terms and eligibility through our network of 50+ banks and NBFCs.
              </p>

              {/* Right Vertical Line */}
              <div className="hidden md:block absolute right-0 bottom-0 w-[1px] h-full bg-white/10 z-10"></div>
              <motion.div
                className="hidden md:block absolute right-0 bottom-0 w-[1px] h-full bg-gradient-to-t from-gold-400 to-transparent z-10"
                style={{ opacity: line2Opacity, willChange: "opacity" }}
              />

              {/* Corner Dot (Desktop) */}
              <div className="hidden md:block absolute -bottom-[4px] -right-[5px] w-[10px] h-[10px] rounded-full bg-white/20 z-10"></div>
              <motion.div
                className="hidden md:block absolute -bottom-[4px] -right-[5px] w-[10px] h-[10px] rounded-full bg-white z-20"
                style={{ opacity: line2Opacity, boxShadow: "0 0 10px 4px rgba(255,215,0,0.8)", willChange: "opacity" }}
              />

              {/* Corner Dot (Mobile) */}
              <div className="md:hidden absolute top-[36px] -left-[5px] w-[10px] h-[10px] rounded-full bg-white/20 z-10"></div>
              <motion.div
                className="md:hidden absolute top-[36px] -left-[5px] w-[10px] h-[10px] rounded-full bg-white z-20"
                style={{ opacity: line1Opacity, boxShadow: "0 0 10px 4px rgba(255,215,0,0.8)", willChange: "opacity" }}
              />
            </div>

            {/* Step 3 */}
            <div className="group relative px-8 pb-12">
              <h2 className="text-6xl font-semibold text-white mb-4">03</h2>
              <h3 className="text-xl font-semibold text-white mb-4 pr-4">Secure Data Handling & Privacy<br />Protection</h3>
              <p className="text-base text-[#828282] tracking-tight leading-tight">
                Your personal and financial information is managed with strict confidentiality, security, and responsible data practices.
              </p>

              {/* Corner Dot (Mobile) */}
              <div className="md:hidden absolute top-[36px] -left-[5px] w-[10px] h-[10px] rounded-full bg-white/20 z-10"></div>
              <motion.div
                className="md:hidden absolute top-[36px] -left-[5px] w-[10px] h-[10px] rounded-full bg-white z-20"
                style={{ opacity: line2Opacity, boxShadow: "0 0 10px 4px rgba(255,215,0,0.8)", willChange: "opacity" }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* SVG Chroma Key Filter for Green Screen */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="chroma-key-green" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 2.5 -4.0 2.5 1.0 -0.05"
            />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
