"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_VIDEOS } from "@/constants/media";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const CUSTOMERS = [
  {
    name: "Mr. Sampath Raman",
    role: "Founder & CMD",
    company: "DPK Generators Pvt LTD"
  },
  {
    name: "Mr. Seshgiri Darshan",
    role: "Management Trustee",
    company: "SaS Charitable Trust"
  },
  {
    name: "Dr. R Pruthviraj",
    role: "Principal & Professor in Physiotherapy",
    company: "Reputed College in Bangalore"
  },
  {
    name: "Mr. Suresh Binani",
    role: "General Secretary",
    company: "Milestones Institute of Pharmaceutical Sciences"
  },
  {
    name: "Mr. DK Raju",
    role: "Proprietor",
    company: "DK Chicken and Poultry Traders"
  },
  {
    name: "Mr. Fayaz Ahmed",
    role: "Managing Director",
    company: "Gulf Stone Engineering PVT LTD, Chennai"
  },
  {
    name: "Mr. Ramasamy",
    role: "Founder & Managing Director",
    company: "Galaxy Enterprises Pvt Ltd"
  }
];

export default function CardStackCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const VIDEOS = [...HERO_VIDEOS];
  const [cards, setCards] = useState(VIDEOS);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  const [isMuted, setIsMuted] = useState(true);

  const rotateCarousel = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handleVideoEnded = () => {
    rotateCarousel();
  };

  const handleFrontClick = () => {
    const frontSrc = cards[0];
    const video = videoRefs.current.get(frontSrc);
    if (video) {
      const willBeMuted = !video.muted;
      video.muted = willBeMuted;
      if (!willBeMuted) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
      setIsMuted(willBeMuted);
    }
  };

  useEffect(() => {
    const frontSrc = cards[0];
    const video = videoRefs.current.get(frontSrc);
    if (video) {
      video.currentTime = 0;
      video.muted = isMuted;
      video.play().catch(() => {});
    }
  }, [cards, isMuted]);

  useIntersectionObserver(
    containerRef,
    useCallback(() => {
      videoRefs.current.forEach((video, src) => {
        if (src === cards[0]) {
          video.muted = isMuted;
          video.play().catch(() => {});
        } else {
          video.muted = true;
          video.play().catch(() => {});
        }
      });
    }, [cards, isMuted]),
    useCallback(() => {
      videoRefs.current.forEach((video) => {
        video.pause();
        video.muted = true;
      });
    }, []),
    { threshold: 0.05 }
  );

  return (
    <div ref={containerRef} className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[450px]">
      <AnimatePresence mode="popLayout">
        {cards.slice(0, 3).map((src, index) => {
          const isFront = index === 0;
          const isMiddle = index === 1;
          const isBack = index === 2;

          return (
            <motion.div
              key={src}
              layout
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 80,
                rotate: 0,
              }}
              animate={{
                opacity: isFront ? 1 : isMiddle ? 0.9 : 0.65,
                scale: isFront ? 1 : isMiddle ? 0.94 : 0.88,
                x: isFront ? 0 : isMiddle ? 30 : 60,
                y: isFront ? 0 : isMiddle ? 6 : 12,
                rotate: 0,
                zIndex: 30 - index,
              }}
              exit={{
                opacity: 0,
                x: -100,
                scale: 0.9,
                rotate: 0,
                transition: { duration: 0.4 }
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
              }}
              className="absolute inset-0 w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              onClick={isFront ? handleFrontClick : undefined}
            >
              <video
                ref={(el) => { if (el) videoRefs.current.set(src, el); else videoRefs.current.delete(src); }}
                src={src}
                autoPlay
                muted={!isFront || isMuted}
                loop={!isFront}
                playsInline
                onEnded={isFront ? handleVideoEnded : undefined}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              {/* Customer Info Overlay */}
              <div className="absolute top-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-b from-black/85 via-black/45 to-transparent text-white z-10 text-left pointer-events-none">
                <h3 className="font-semibold text-sm sm:text-base tracking-tight text-gold-500">
                  {CUSTOMERS[VIDEOS.indexOf(src) % CUSTOMERS.length].name}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/95 font-normal leading-normal">
                  {CUSTOMERS[VIDEOS.indexOf(src) % CUSTOMERS.length].role}
                </p>
                <p className="text-[9px] sm:text-[11px] font-semibold tracking-wide">
                  {CUSTOMERS[VIDEOS.indexOf(src) % CUSTOMERS.length].company}
                </p>
              </div>

              {/* Speaker Overlay Indicator for the front card */}
              {isFront && (
                <div className="absolute bottom-4 right-4 z-40 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-lg pointer-events-none">
                  {!isMuted ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
