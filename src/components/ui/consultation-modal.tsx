"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConsultationForm } from './consultation-form';
import { CloseIcon } from '@/components/ui/icons';

export const OPEN_MODAL_EVENT = 'open-consultation-modal';

export const openConsultationModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(OPEN_MODAL_EVENT));
  }
};

export function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener(OPEN_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_MODAL_EVENT, handleOpen);
  }, []);

  const handleClose = () => {
    if (isFormSubmitting) return;
    setIsOpen(false);
  };

  const handleSuccess = () => {
    setIsOpen(false);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-[600px] bg-white/20 backdrop-blur-xl border border-white/20 rounded-xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              disabled={isFormSubmitting}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <CloseIcon width={24} height={24} strokeWidth={1.5} />
            </button>

            <ConsultationForm onSuccess={handleSuccess} onSubmittingChange={setIsFormSubmitting} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
