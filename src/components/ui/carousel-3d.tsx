"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { HERO_VIDEOS } from "@/constants/media";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const baseImages = [...HERO_VIDEOS];

// Duplicate to make 15 faces (3 sets) for the perfect curve
const IMAGES = [...baseImages, ...baseImages, ...baseImages];

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

export default function Carousel3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cylinderWidth, setCylinderWidth] = useState<number>(2400);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(IMAGES.length).fill(null));

  const faceCount = IMAGES.length;

  useEffect(() => {
    const updateDeviceSettings = () => {
      const width = window.innerWidth;
      const perFace = width <= 640 ? 233 : width <= 768 ? 267 : width <= 1024 ? 283 : 316;
      setCylinderWidth(faceCount * perFace);
    };
    updateDeviceSettings();
    window.addEventListener("resize", updateDeviceSettings);
    return () => window.removeEventListener("resize", updateDeviceSettings);
  }, [faceCount]);

  const faceWidth = (cylinderWidth / faceCount) * 1.1;
  const radius = cylinderWidth / (1.7 * Math.PI);
  const angleStep = 360 / faceCount;

  const rotation = useMotionValue(0);

  const transform = useTransform(
    rotation,
    (val: number) => `translateZ(-${radius * 0.6}px) rotate3d(0,1,0,${val}deg)`
  );

  useEffect(() => {
    const unsubscribe = rotation.on("change", (latest) => {
      const currentStep = Math.round(-latest / angleStep);
      const activeIndex = ((currentStep % faceCount) + faceCount) % faceCount;
      setCurrentIndex(activeIndex);
    });
    return () => unsubscribe();
  }, [rotation, angleStep, faceCount]);

  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, []);

  // Restart the centered video from the beginning when the center card changes
  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => { });
    }
  }, [currentIndex]);

  // Sync mute/unmute of video elements based on activeAudioIndex
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeAudioIndex) {
        video.muted = false;
        video.currentTime = 0; // restart unmuted video from beginning
        video.play().catch(() => { });
      } else {
        video.muted = true;
      }
    });
  }, [activeAudioIndex]);

  // Force mute when auto-scrolling is active
  useEffect(() => {
    if (isAutoScrolling) {
      setActiveAudioIndex(null);
    }
  }, [isAutoScrolling]);

  useIntersectionObserver(
    containerRef,
    useCallback(() => {
      videoRefs.current.forEach((video, i) => {
        if (!video) return;
        if (i === activeAudioIndex) {
          video.muted = false;
          video.play().catch(() => { });
        } else {
          video.muted = true;
          video.play().catch(() => { });
        }
      });
    }, [activeAudioIndex]),
    useCallback(() => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.muted = true;
        }
      });
      setActiveAudioIndex(null);
      setIsAutoScrolling(true);
    }, []),
    { threshold: 0.05 }
  );

  const handleCardClick = (index: number) => {
    const currentAngle = rotation.get();
    const snappedAngle = Math.round(currentAngle / angleStep) * angleStep;

    // Calculate the shortest path step rotation
    const currentStep = Math.round(-snappedAngle / angleStep);
    const diff = ((index - (currentStep % faceCount)) + faceCount) % faceCount;

    let stepsToRotate = diff;
    if (diff > faceCount / 2) {
      stepsToRotate = diff - faceCount;
    }

    const targetStep = currentStep + stepsToRotate;
    const targetAngle = -targetStep * angleStep;

    if (index === currentIndex) {
      // Toggle audio if the card is already centered
      if (activeAudioIndex === index) {
        setActiveAudioIndex(null);
        if (autoPlayTimeoutRef.current) {
          clearTimeout(autoPlayTimeoutRef.current);
        }
        autoPlayTimeoutRef.current = setTimeout(() => {
          setIsAutoScrolling(true);
        }, 1000);
      } else {
        setIsAutoScrolling(false);
        if (autoPlayTimeoutRef.current) {
          clearTimeout(autoPlayTimeoutRef.current);
        }
        setActiveAudioIndex(index);
      }
    } else {
      // Rotate the card to the middle first, then unmute it
      setIsAutoScrolling(false);
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }

      const controls = animate(rotation, targetAngle, {
        duration: 0.8,
        ease: "easeInOut",
      });
      controls.then(() => {
        setActiveAudioIndex(index);
      });
    }
  };

  const handleVideoEnded = (index: number) => {
    if (index === currentIndex) {
      const nextIndex = (index + 1) % faceCount;
      const targetAngle = -nextIndex * angleStep;

      if (activeAudioIndex !== null) {
        // If unmuted, transition to next and unmute it
        const controls = animate(rotation, targetAngle, {
          duration: 0.8,
          ease: "easeInOut",
        });
        controls.then(() => {
          setActiveAudioIndex(nextIndex);
        });
      } else {
        // Muted rotation
        animate(rotation, targetAngle, {
          duration: 0.8,
          ease: "easeInOut",
        });
      }
    }
  };
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    const threshold = 50; // swipe threshold in pixels

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swiped Left -> go to next card
        const nextIndex = (currentIndex + 1) % faceCount;
        handleCardClick(nextIndex);
      } else {
        // Swiped Right -> go to previous card
        const prevIndex = (currentIndex - 1 + faceCount) % faceCount;
        handleCardClick(prevIndex);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full overflow-hidden flex flex-col justify-center py-10 md:py-1 mt-8 md:-mt-24"
    >
      <div className="flex grow items-center justify-center [perspective:2500px] [transform-style:preserve-3d]">
        <motion.div
          style={{
            transform: transform,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[550px] md:min-h-[650px] lg:min-h-[750px] items-center justify-center [transform-style:preserve-3d]"
        >
          {IMAGES.map((url, i) => {
            const distance = Math.min(
              Math.abs(i - currentIndex),
              faceCount - Math.abs(i - currentIndex)
            );

            let scaleVal = 0.75;
            let zIndexVal = 0;
            if (distance === 0) {
              scaleVal = 1.15;
              zIndexVal = 30;
            } else if (distance === 1) {
              scaleVal = 0.95;
              zIndexVal = 20;
            } else if (distance === 2) {
              scaleVal = 0.85;
              zIndexVal = 10;
            }

            const isActiveCard = distance === 0;

            return (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  left: "50%",
                  marginLeft: `-${faceWidth / 2}px`,
                  transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                  zIndex: zIndexVal,
                }}
              >
                <motion.div
                  onClick={() => handleCardClick(i)}
                  animate={{ scale: scaleVal }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-[280px] sm:w-[340px] md:w-[360px] lg:w-[480px] aspect-[2.5/4] md:aspect-[3/4] rounded-[32px] overflow-hidden group-hover:border-gold-500/50 cursor-pointer"
                >
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={url}
                    autoPlay
                    muted
                    loop={currentIndex !== i}
                    playsInline
                    onEnded={() => handleVideoEnded(i)}
                    className="pointer-events-none object-cover select-none w-full h-full absolute inset-0"
                  />

                  {/* Customer Info Overlay */}
                  <div className="absolute top-0 left-0 right-0 p-5 md:p-7 bg-gradient-to-b from-black/85 via-black/45 to-transparent text-white z-10 text-left pointer-events-none">
                    <h3 className="font-semibold text-[15px] sm:text-base md:text-lg tracking-tight text-gold-500">
                      {CUSTOMERS[i % baseImages.length].name}
                    </h3>
                    <p className="text-[11px] sm:text-xs md:text-sm text-white/95 font-normal leading-normal">
                      {CUSTOMERS[i % baseImages.length].role}
                    </p>
                    <p className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-wide">
                      {CUSTOMERS[i % baseImages.length].company}
                    </p>
                  </div>

                  {/* Speaker Overlay Indicator for the active centered card */}
                  {isActiveCard && (
                    <div className="absolute bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-lg pointer-events-none">
                      {activeAudioIndex === i ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <line x1="23" y1="9" x2="17" y2="15"></line>
                          <line x1="17" y1="9" x2="23" y2="15"></line>
                        </svg>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
