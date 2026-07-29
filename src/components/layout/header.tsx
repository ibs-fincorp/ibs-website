"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CloseIcon } from "@/components/ui/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
    },
  },
};

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const logoHref = pathname === '/' ? '/' : '/#footer';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 0.1);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href={logoHref}>
              <Image src="/assets/logo.png" alt="IBS FINCORP Logo" width={100} height={25} style={{ height: "auto" }} className="object-contain rounded-md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center items-center gap-12 text-base font-normal">
            <Link href="#about" className="hover:text-gold-400 transition-colors whitespace-nowrap">About</Link>
            <Link href="#solutions" className="hover:text-gold-400 transition-colors whitespace-nowrap">Solutions</Link>
            <Link href="#why-us" className="hover:text-gold-400 transition-colors whitespace-nowrap">Why IBSFINCORP</Link>
            <Link href="#partners" className="hover:text-gold-400 transition-colors whitespace-nowrap">Partners</Link>
            <Link href="#reviews" className="hover:text-gold-400 transition-colors whitespace-nowrap">Reviews</Link>
            <Link href="#locations" className="hover:text-gold-400 transition-colors whitespace-nowrap">Locations</Link>
            <Link href="#faq" className="hover:text-gold-400 transition-colors whitespace-nowrap">FAQ</Link>
          </nav>

          {/* Desktop CTA & Mobile Hamburger */}
          <div className="flex justify-end items-center gap-4">
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex bg-white text-dark-700 px-6 py-2 rounded-full font-medium text-sm hover:bg-gold-400 transition-colors items-center gap-2 whitespace-nowrap shadow-md cursor-pointer"
              >
                Contact Us
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 top-full mt-2 w-64 bg-[#1D1E1C]/75 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-1 z-50 text-left"
                  >
                    <a
                      href="tel:+919962299260"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-white/10 transition-colors group"
                    >
                      <svg className="w-4 h-4 text-gold-500 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/45 leading-none mb-0.5">Call Us</span>
                        <span className="text-xs font-medium tracking-tight text-white">+91 9962299260</span>
                      </div>
                    </a>

                    <a
                      href="mailto:contact@ibsfincorp.com"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-white/10 transition-colors group"
                    >
                      <svg className="w-4 h-4 text-gold-500 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/45 leading-none mb-0.5">Email Us</span>
                        <span className="text-xs font-medium tracking-tight text-white">contact@ibsfincorp.com</span>
                      </div>
                    </a>

                    <a
                      href="https://wa.link/xpwwox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-white/10 transition-colors group"
                    >
                      <svg className="w-4 h-4 text-gold-500 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.59 2.01 14.12 1.01 11.5 1.01 6.066 1.01 1.641 5.38 1.637 10.81c-.001 1.737.472 3.427 1.372 4.9l-.367 1.341 1.451-.381c1.554.851 3.238 1.3 4.966 1.3h-.014zm9.957-6.728c-.273-.137-1.616-.797-1.867-.889-.252-.09-.435-.137-.617.137-.182.273-.706.889-.866 1.072-.16.182-.32.205-.593.069-.273-.137-1.15-.424-2.19-1.353-.809-.721-1.355-1.613-1.514-1.886-.16-.273-.017-.421.12-.557.123-.122.273-.32.41-.48.137-.16.182-.273.273-.455.09-.182.046-.341-.023-.48-.069-.136-.617-1.486-.846-2.036-.222-.533-.448-.46-.617-.468-.16-.008-.342-.01-.525-.01-.182 0-.48.069-.731.341-.252.273-.96.938-.96 2.287 0 1.349.98 2.649 1.117 2.83.137.182 1.928 2.946 4.671 4.127.653.28 1.162.447 1.559.574.656.208 1.254.179 1.726.108.527-.079 1.616-.66 1.844-1.298.228-.639.228-1.186.16-1.298-.069-.113-.252-.182-.525-.32z" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/45 leading-none mb-0.5">WhatsApp</span>
                        <span className="text-xs font-medium tracking-tight text-white">Chat on WhatsApp</span>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger Icon */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0F0F0F] z-[60] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <CloseIcon width={28} height={28} />
            </button>

            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-6 text-center"
            >
              <motion.div variants={itemVariants}>
                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">About</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Solutions</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Why IBSFINCORP</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#partners" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Partners</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Reviews</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#locations" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Locations</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">FAQ</Link>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-2 w-full flex flex-col items-center">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="bg-white text-dark-700 px-8 py-3 rounded-full font-medium hover:bg-gold-400 transition-colors flex items-center gap-2 shadow-md cursor-pointer"
                >
                  Contact Us
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isMobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden w-64 bg-white/5 border border-white/10 rounded-2xl p-2 mt-3 flex flex-col gap-1 text-left"
                    >
                      <a
                        href="tel:+919962299260"
                        onClick={() => {
                          setIsMobileDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
                      >
                        <svg className="w-4 h-4 text-gold-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-white/45 leading-none mb-0.5">Call Us</span>
                          <span className="text-[13px] font-medium text-white">+91 9962299260</span>
                        </div>
                      </a>

                      <a
                        href="mailto:contact@ibsfincorp.com"
                        onClick={() => {
                          setIsMobileDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
                      >
                        <svg className="w-4 h-4 text-gold-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-white/45 leading-none mb-0.5">Email Us</span>
                          <span className="text-[13px] font-medium text-white">contact@ibsfincorp.com</span>
                        </div>
                      </a>

                      <a
                        href="https://wa.link/xpwwox"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setIsMobileDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
                      >
                        <svg className="w-4 h-4 text-gold-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.59 2.01 14.12 1.01 11.5 1.01 6.066 1.01 1.641 5.38 1.637 10.81c-.001 1.737.472 3.427 1.372 4.9l-.367 1.341 1.451-.381c1.554.851 3.238 1.3 4.966 1.3h-.014zm9.957-6.728c-.273-.137-1.616-.797-1.867-.889-.252-.09-.435-.137-.617.137-.182.273-.706.889-.866 1.072-.16.182-.32.205-.593.069-.273-.137-1.15-.424-2.19-1.353-.809-.721-1.355-1.613-1.514-1.886-.16-.273-.017-.421.12-.557.123-.122.273-.32.41-.48.137-.16.182-.273.273-.455.09-.182.046-.341-.023-.48-.069-.136-.617-1.486-.846-2.036-.222-.533-.448-.46-.617-.468-.16-.008-.342-.01-.525-.01-.182 0-.48.069-.731.341-.252.273-.96.938-.96 2.287 0 1.349.98 2.649 1.117 2.83.137.182 1.928 2.946 4.671 4.127.653.28 1.162.447 1.559.574.656.208 1.254.179 1.726.108.527-.079 1.616-.66 1.844-1.298.228-.639.228-1.186.16-1.298-.069-.113-.252-.182-.525-.32z" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-white/45 leading-none mb-0.5">WhatsApp</span>
                          <span className="text-[13px] font-medium text-white">Chat on WhatsApp</span>
                        </div>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
