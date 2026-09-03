"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedHomeIcon, AnimatedCardIcon, AnimatedSeamlessIcon, AnimatedPersonIcon } from "@/components/ui/animated-icons";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import { CDN_URL } from "@/lib/cdn";

const SUB_CARDS = [
  {
    id: "termloan",
    title: "Term Loan",
    icon: `${CDN_URL}/assets/solutions/termloan.svg`,
    className: "left-[2%] top-[10%] w-[15%] h-[28%]",
    type: "outer",
  },
  {
    id: "industry",
    title: "Industrial Property Purchase & Construction",
    icon: `${CDN_URL}/assets/solutions/industry.svg`,
    className: "left-[20%] top-[10%] w-[15%] h-[28%]",
    type: "inner",
  },
  {
    id: "dropline",
    title: "Dropline OD (DLOD)",
    icon: `${CDN_URL}/assets/solutions/dlod.svg`,
    className: "left-[2%] top-[62%] w-[15%] h-[28%]",
    type: "outer",
  },
  {
    id: "nri",
    title: "NRI Mortgage",
    icon: `${CDN_URL}/assets/solutions/nri.svg`,
    className: "left-[20%] top-[62%] w-[15%] h-[28%]",
    type: "inner",
  },
  {
    id: "commercial",
    title: "Commercial Property Purchase & Construction",
    icon: `${CDN_URL}/assets/solutions/commercial.svg`,
    className: "left-[65%] top-[10%] w-[15%] h-[28%]",
    type: "inner",
  },
  {
    id: "school",
    title: "School Funding",
    icon: `${CDN_URL}/assets/solutions/school.svg`,
    className: "left-[83%] top-[10%] w-[15%] h-[28%]",
    type: "outer",
  },
  {
    id: "bank2bank",
    title: "Bank-to-Bank Balance Transfer",
    icon: `${CDN_URL}/assets/solutions/transfer.svg`,
    className: "left-[65%] top-[62%] w-[15%] h-[28%]",
    type: "inner",
  },
  {
    id: "lease",
    title: "Lease Rental Discounting",
    icon: `${CDN_URL}/assets/solutions/lease.svg`,
    className: "left-[83%] top-[62%] w-[15%] h-[28%]",
    type: "outer",
  },
];

const innerLineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.95,
    transition: {
      pathLength: { duration: 0.8, ease: "easeOut" as const },
      opacity: { duration: 0.2, ease: "easeOut" as const }
    }
  }
};

const outerLineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.95,
    transition: {
      pathLength: { delay: 0.8, duration: 0.8, ease: "easeOut" as const },
      opacity: { delay: 0.8, duration: 0.2, ease: "easeOut" as const }
    }
  }
};

const innerCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.8, duration: 0.4, ease: "easeOut" as const }
  }
};

const outerCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.6, duration: 0.4, ease: "easeOut" as const }
  }
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function SolutionsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // Premium custom ease-out
      },
    },
  };

  return (
    <section id="solutions" className="py-24 bg-white text-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextBlurReveal
            as="h2"
            text="Secured Loan Solutions"
            className="text-2xl md:text-5xl font-medium mb-4 tracking-tight"
          />
          <TextBlurReveal
            as="p"
            text="Tailored High-Value Loan Solutions For Ambitious Growth"
            className="text-sm md:text-lg"
            delay={0.3}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {/* Top Row - Redesigned Network Graph / Responsive Grid */}
          <motion.div
            variants={cardUpVariants}
            className="w-full relative"
          >
            {/* Desktop Version */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="hidden md:block w-full relative aspect-[16/7] rounded-[40px] overflow-hidden bg-gray-50/20 border border-gray-100 p-8 shadow-sm"
            >
              {/* Background glowing rings */}
              <div className="absolute left-[37.5%] top-[27.5%] w-[25%] h-[45%] rounded-[38px] bg-gold-400/20 blur-2xl animate-pulse" style={{ zIndex: 0, willChange: "transform, opacity" }} />
              <div className="absolute left-[45%] top-[35%] w-[10%] h-[30%] rounded-full bg-gold-300/30 blur-xl animate-ping duration-[3s]" style={{ zIndex: 0, willChange: "transform, opacity" }} />

              {/* SVG Network Connector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 700" preserveAspectRatio="none" style={{ zIndex: 1 }}>
                <defs>
                  <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g filter="url(#glow-blur)">
                  {/* Left Inner Lines */}
                  <motion.path
                    d="M 740 196 L 712 168 L 440 168"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={innerLineVariants}
                  />
                  <motion.path
                    d="M 740 504 L 712 532 L 440 532"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={innerLineVariants}
                  />

                  {/* Left Outer Lines */}
                  <motion.path
                    d="M 440 168 L 152 168"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={outerLineVariants}
                  />
                  <motion.path
                    d="M 440 532 L 152 532"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={outerLineVariants}
                  />

                  {/* Right Inner Lines */}
                  <motion.path
                    d="M 860 196 L 888 168 L 1160 168"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={innerLineVariants}
                  />
                  <motion.path
                    d="M 860 504 L 888 532 L 1160 532"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={innerLineVariants}
                  />

                  {/* Right Outer Lines */}
                  <motion.path
                    d="M 1160 168 L 1448 168"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={outerLineVariants}
                  />
                  <motion.path
                    d="M 1160 532 L 1448 532"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={outerLineVariants}
                  />
                </g>
              </svg>

              {/* Cards Area (Positioned Absolutely) */}
              <div className="absolute inset-0" style={{ zIndex: 10 }}>
                {/* Center Card */}
                <div
                  className="absolute left-[38%] top-[28%] w-[24%] h-[44%] flex flex-col items-center justify-center p-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[36px] shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_15px_45px_rgba(0,0,0,0.03)] text-center select-none"
                >
                  <div className="w-[40%] aspect-square mb-4 flex items-center justify-center">
                    <AnimatedHomeIcon width={64} height={64} className="w-full h-full object-contain" color="#1D1E1C" />
                  </div>
                  <h3 className="text-sm lg:text-lg xl:text-xl font-bold leading-snug tracking-tight text-dark-900 px-2">
                    Loan Against Property (LAP)
                  </h3>
                </div>

                {/* 8 Sub Cards */}
                {SUB_CARDS.map((card) => (
                  <motion.div
                    key={card.id}
                    variants={card.type === "inner" ? innerCardVariants : outerCardVariants}
                    className={`absolute flex flex-col items-center justify-center p-2.5 lg:p-4 bg-white/80 backdrop-blur-sm border border-white/60 rounded-[24px] shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_8px_30px_rgba(241,196,15,0.15)] hover:scale-[1.03] transition-all duration-300 text-center select-none ${card.className}`}
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 mb-1 lg:mb-2 flex items-center justify-center shrink-0">
                      <Image src={card.icon} alt={card.title} width={40} height={40} className="object-contain" />
                    </div>
                    <span className="text-[9px] lg:text-[11px] xl:text-xs font-semibold leading-tight text-dark-800 tracking-tight px-1">
                      {card.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Version */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              className="block md:hidden w-full relative aspect-[1/2.2] rounded-[32px] overflow-hidden bg-gray-50/20 border border-gray-100 p-4 shadow-sm"
            >
              {/* Background glowing rings */}
              <div className="absolute left-[25%] top-[40%] w-[50%] h-[20%] rounded-full bg-gold-400/25 blur-2xl pointer-events-none" style={{ zIndex: 0, willChange: "transform, opacity" }} />

              {/* SVG Connector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 880" preserveAspectRatio="none" style={{ zIndex: 1 }}>
                <defs>
                  <filter id="glow-blur-mobile" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g filter="url(#glow-blur-mobile)">
                  {/* Top Diagonal Connectors */}
                  <motion.path
                    d="M 180 380 L 100 330 L 100 300"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={innerLineVariants}
                  />
                  <motion.path
                    d="M 220 380 L 300 330 L 300 300"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={innerLineVariants}
                  />

                  {/* Top Vertical Connectors */}
                  <motion.path
                    d="M 100 180 L 100 140"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={outerLineVariants}
                  />
                  <motion.path
                    d="M 300 180 L 300 140"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={outerLineVariants}
                  />

                  {/* Bottom Diagonal Connectors */}
                  <motion.path
                    d="M 180 500 L 100 550 L 100 580"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={innerLineVariants}
                  />
                  <motion.path
                    d="M 220 500 L 300 550 L 300 580"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={innerLineVariants}
                  />

                  {/* Bottom Vertical Connectors */}
                  <motion.path
                    d="M 100 700 L 100 740"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={outerLineVariants}
                  />
                  <motion.path
                    d="M 300 700 L 300 740"
                    stroke="#FFBB00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    variants={outerLineVariants}
                  />
                </g>
              </svg>

              {/* Cards Area (Positioned Absolutely) */}
              <div className="absolute inset-0" style={{ zIndex: 10 }}>
                {/* Center LAP Card */}
                <div
                  className="absolute left-[30%] top-[43.2%] w-[40%] h-[13.6%] bg-white/40 backdrop-blur-xl border border-white/60 rounded-[20px] p-2 shadow-sm text-center flex flex-col items-center justify-center select-none"
                >
                  <div className="w-[32%] aspect-square mb-1.5 flex items-center justify-center shrink-0">
                    <AnimatedHomeIcon width={28} height={28} className="w-full h-full object-contain" color="#1D1E1C" />
                  </div>
                  <h3 className="text-[9px] font-bold leading-tight tracking-tight text-dark-900 px-1">
                    Loan Against Property (LAP)
                  </h3>
                </div>

                {/* Sub Cards */}
                {/* Row 1 Left: Term Loan */}
                <motion.div
                  variants={outerCardVariants}
                  className="absolute left-[5%] top-[2.3%] w-[40%] h-[13.6%] bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-2.5 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center select-none"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center shrink-0">
                    <Image src={SUB_CARDS[0].icon} alt={SUB_CARDS[0].title} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-dark-800 tracking-tight px-1">
                    {SUB_CARDS[0].title}
                  </span>
                </motion.div>

                {/* Row 1 Right: Industrial Property */}
                <motion.div
                  variants={outerCardVariants}
                  className="absolute left-[55%] top-[2.3%] w-[40%] h-[13.6%] bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-2.5 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center select-none"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center shrink-0">
                    <Image src={SUB_CARDS[1].icon} alt={SUB_CARDS[1].title} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-dark-800 tracking-tight px-1">
                    {SUB_CARDS[1].title}
                  </span>
                </motion.div>

                {/* Row 2 Left: Dropline OD */}
                <motion.div
                  variants={innerCardVariants}
                  className="absolute left-[5%] top-[20.5%] w-[40%] h-[13.6%] bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-2.5 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center select-none"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center shrink-0">
                    <Image src={SUB_CARDS[2].icon} alt={SUB_CARDS[2].title} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-dark-800 tracking-tight px-1">
                    {SUB_CARDS[2].title}
                  </span>
                </motion.div>

                {/* Row 2 Right: NRI Mortgage */}
                <motion.div
                  variants={innerCardVariants}
                  className="absolute left-[55%] top-[20.5%] w-[40%] h-[13.6%] bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-2.5 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center select-none"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center shrink-0">
                    <Image src={SUB_CARDS[3].icon} alt={SUB_CARDS[3].title} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-dark-800 tracking-tight px-1">
                    {SUB_CARDS[3].title}
                  </span>
                </motion.div>

                {/* Row 4 Left: Commercial Property */}
                <motion.div
                  variants={innerCardVariants}
                  className="absolute left-[5%] top-[66%] w-[40%] h-[13.6%] bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-2.5 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center select-none"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center shrink-0">
                    <Image src={SUB_CARDS[4].icon} alt={SUB_CARDS[4].title} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-dark-800 tracking-tight px-1">
                    {SUB_CARDS[4].title}
                  </span>
                </motion.div>

                {/* Row 4 Right: School Funding */}
                <motion.div
                  variants={innerCardVariants}
                  className="absolute left-[55%] top-[66%] w-[40%] h-[13.6%] bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-2.5 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center select-none"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center shrink-0">
                    <Image src={SUB_CARDS[5].icon} alt={SUB_CARDS[5].title} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-dark-800 tracking-tight px-1">
                    {SUB_CARDS[5].title}
                  </span>
                </motion.div>

                {/* Row 5 Left: Bank-to-Bank Transfer */}
                <motion.div
                  variants={outerCardVariants}
                  className="absolute left-[5%] top-[84.1%] w-[40%] h-[13.6%] bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-2.5 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center select-none"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center shrink-0">
                    <Image src={SUB_CARDS[6].icon} alt={SUB_CARDS[6].title} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-dark-800 tracking-tight px-1">
                    {SUB_CARDS[6].title}
                  </span>
                </motion.div>

                {/* Row 5 Right: Lease Rental */}
                <motion.div
                  variants={outerCardVariants}
                  className="absolute left-[55%] top-[84.1%] w-[40%] h-[13.6%] bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-2.5 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center select-none"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center shrink-0">
                    <Image src={SUB_CARDS[7].icon} alt={SUB_CARDS[7].title} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-dark-800 tracking-tight px-1">
                    {SUB_CARDS[7].title}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              variants={cardUpVariants}
              className="bg-gray-100 rounded-3xl p-6 flex flex-row items-center gap-4 md:gap-6"
            >
              <AnimatedCardIcon width={72} height={72} className="w-12 h-12 md:w-[72px] md:h-[72px] shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1 tracking-tight">Strong Credit Profile</h3>
                <p className="text-xs md:text-sm text-[#6F7275] tracking-tight leading-snug">
                  Designed For Financially Disciplined Businesses And Individuals Seeking Structured Funding Solutions.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardUpVariants}
              className="bg-gold-350 rounded-3xl p-6 flex flex-row items-center gap-4 md:gap-6 text-dark-900"
            >
              <AnimatedSeamlessIcon width={72} height={72} className="w-12 h-12 md:w-[72px] md:h-[72px] shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1 tracking-tight">Seamless Experience</h3>
                <p className="text-xs md:text-sm tracking-tight leading-snug opacity-90">
                  Save Time And Effort With A Smooth, Transparent, And Relationship-Driven Funding Journey.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardUpVariants}
              className="bg-dark-700 rounded-3xl p-6 flex flex-row items-center gap-4 md:gap-6 text-white"
            >
              <AnimatedPersonIcon width={64} height={64} className="w-12 h-12 md:w-[64px] md:h-[64px] shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1 tracking-tight">Dedicated Expert Support</h3>
                <p className="text-xs md:text-sm tracking-tight leading-snug opacity-90">
                  Get Tailored Guidance From Experienced Funding Specialists At Every Stage.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
