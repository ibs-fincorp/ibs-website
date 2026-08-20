import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import StatsGraphic from "@/components/ui/stats-graphic";
import HouseOutlineGraphic from "@/components/ui/house-outline-graphic";
import { CircularProgress } from "@/components/ui/circular-progress";

export default function AboutStatsSection() {
  return (
    <section id="about" className="py-18 bg-white text-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1 mb-8 text-sm md:text-base font-medium tracking-tighter">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> ABOUT US
          </div>
          <TextBlurReveal
            as="h2"
            text="Empowering Businesses & Professionals with Intelligent Funding Solutions that Drive Growth, Liquidity, and Financial Success through Strategic Loan Against Property Solutions."
            className="text-xl md:text-5xl font-medium leading-[1] tracking-tight"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr_1fr] gap-6">

          {/* Card 1: Loans Disbursed */}
          <div className="bg-[#F7F7F7] text-dark-900 rounded-[16px] p-2 flex flex-col shadow-sm border border-gray-100 overflow-hidden">
            {/* Image Part Card */}
            <div className="bg-dark-700 rounded-[16px] h-[280px] md:h-[300px] relative flex items-center justify-center p-4">
              <div className="relative w-full h-full max-h-[300px] flex items-center justify-center">
                <StatsGraphic className="w-[95%] h-[95%] max-h-[310px]" />
              </div>
            </div>

            {/* Text Part */}
            <div className="p-4 pt-6 flex flex-col xl:flex-row justify-between items-start gap-2 xl:gap-6">
              <div className="shrink-0">
                <h3 className="text-2xl font-medium">₹3000Cr+</h3>
                <p className="text-base font-medium tracking-tight whitespace-nowrap">Loans Disbursed</p>
              </div>
              <p className="text-[14px] text-[#828282] leading-normal tracking-tight xl:mt-1">
                Successfully facilitated loan disbursements worth over ₹3000 crore across diverse financial needs.
              </p>
            </div>
          </div>

          {/* Card 2: Partners & Commission */}
          <div className="flex flex-col gap-6 h-[450px] lg:h-full">

            {/* Top Center Card */}
            <div className="bg-[#F7F7F7] rounded-[16px] p-2 flex-1 flex flex-col shadow-sm border border-gray-100">
              <div className="bg-dark-700 text-white rounded-[12px] p-6 lg:p-8 flex-1 flex flex-col">
                <div className="flex items-start gap-4">
                  <h3 className="text-5xl font-medium">50<span className="text-4xl">+</span></h3>
                  <p className="text-2xl font-normal max-w-[150px] leading-tight">Bank & NBFC Partners</p>
                </div>
                <div className="flex-1 flex items-center justify-center mt-4 relative w-full h-full max-h-[160px]">
                  <HouseOutlineGraphic className="w-[70%] h-[70%] max-h-[125px]" />
                </div>
              </div>
            </div>

            {/* Bottom Center Card */}
            <div className="bg-[#F7F7F7] rounded-[16px] p-2 h-32 flex flex-col shadow-sm border border-gray-100">
              <div className="bg-dark-700 text-white rounded-[12px] px-6 lg:px-8 flex-1 flex items-center justify-between h-full gap-4">
                <h3 className="text-5xl font-medium">100<span className="text-4xl">%</span></h3>
                <p className="text-xl lg:text-2xl font-medium text-left leading-tight min-w-[140px]">Commission Free</p>
              </div>
            </div>

          </div>

          {/* Card 3: Satisfaction */}
          <div className="bg-[#F7F7F7] text-dark-900 rounded-[16px] p-3 flex flex-col h-[450px] lg:h-full shadow-sm ">
            {/* Image Part Card */}
            <div className="bg-white rounded-[16px] flex-1 relative flex flex-col items-center justify-center p-4">
              <div className="relative w-40 h-40 mb-4">
                <CircularProgress value={90} size={160} strokeWidth={12}>
                  <span className="text-3xl font-bold text-dark-900">4.9/5</span>
                </CircularProgress>
              </div>
              <p className="font-medium text-center text-xl tracking-tight">Based On 1000+ Verified Client Reviews</p>
              <div className="flex gap-1 text-gold-350 mt-2 text-xl">
                ★ ★ ★ ★ ★
              </div>
            </div>

            {/* Text Part */}
            <div className="p-4 pt-6">
              <h3 className="text-lg font-medium mb-2 text-dark-900">Client Satisfaction</h3>
              <p className="text-base text-[#828282] leading-tight tracking-tight">
                Automate follow-ups, tasks, and workflows so your team spends less time on manual work.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
