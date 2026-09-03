import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import { openConsultationModal } from "@/components/ui/consultation-modal";
import { ArrowUpRight } from "@/components/ui/icons";
import { CDN_URL } from "@/lib/cdn";

export default function CtaSection() {
  return (
    <section id="cta" className="py-18 bg-white relative overflow-hidden flex justify-center">
      <div className="container mx-auto px-4 flex justify-center max-w-[1400px]">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-full h-[600px] flex flex-col items-center justify-center text-center p-8">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={`${CDN_URL}/assets/bookaconsultation.png`}
              alt="Book a Consultation"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />

          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl">
            <TextBlurReveal
              as="h2"
              text="Unlock Your Exclusive Free Consultation"
              className="text-4xl md:text-5xl font-medium mb-4 tracking-tight leading-tight text-white"
            />
            <TextBlurReveal
              as="p"
              delay={0.3}
              text="Your Dedicated Relationship Manager Will Guide You Through The Next Steps."
              className="text-lg md:text-xl mb-8 leading-tight tracking-tight" />
            <button onClick={openConsultationModal} className="bg-white/30 text-white pl-6 pr-2 py-2 rounded-full text-sm md:text-base font-normal hover:bg-black transition-all duration-300 flex items-center justify-center gap-4 group shadow-lg">
              Book A Free Consultation
              <span className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
