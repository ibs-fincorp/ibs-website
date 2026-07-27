"use client";

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { captureUtm, getUtm } from '@/lib/utm';
import { formSchema, type FormValues } from '@/lib/validations';

const locations = [
  'Chennai', 'Bangalore', 'Puducherry', 'Salem', 'Mysuru',
  'Coimbatore', 'Madurai', 'Tirunelveli', 'Tiruchirappalli',
  'Krishnagiri', 'Nagercoil', 'Hosur', 'Others'
];

const amountRanges = [
  '0 to 10 Lakhs', '11 Lakhs to 25 Lakhs', '25 Lakhs to 50 Lakhs',
  '50 Lakhs to 1 Crore', '1 Crore to 5 Crore', '5 Crore to 10 Crore',
  'Above 10 Crore'
];

const loanTypes = [
  'LOAN AGAINST PROPERTY', 'Home Loan', 'Balance Transfer & Topup',
  'OD CC Loan', 'Dropline OD - DLOD', 'Working Capital Loan'
];

const cibilScores = ['Below 700', '700 - 749', '750 & Above', "-1"];

function SelectArrow() {
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </div>
  );
}

export function ConsultationForm({ onSuccess, onSubmittingChange }: { onSuccess?: () => void; onSubmittingChange?: (submitting: boolean) => void }) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    captureUtm();
  }, []);

  useEffect(() => {
    onSubmittingChange?.(isSubmitting);
  }, [isSubmitting, onSubmittingChange]);

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);
    const utm = getUtm();

    const fields: Record<string, string> = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      location: data.location,
      loanOrReferral: data.loanOrReferral,
      loanRequirements: data.loanRequirements,
      loanType: data.loanType,
      cibilScore: data.cibilScore,
      landing_page: window.location.origin + window.location.pathname,
      referrer: document.referrer || '',
    };

    if (utm.utm_source) fields['utm_source'] = utm.utm_source;
    if (utm.utm_medium) fields['utm_medium'] = utm.utm_medium;
    if (utm.utm_campaign) fields['utm_campaign'] = utm.utm_campaign;

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields }),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      const responseData = await res.json();
      console.log('Form submission response:', responseData);

      setIsSubmitSuccessful(true);
      if (onSuccess) {
        setTimeout(() => onSuccess(), 3000);
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  const inputClass = (error?: boolean) =>
    `w-full bg-white/10 border ${error ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-2 md:py-2.5 text-white placeholder-white/30 outline-none focus:border-gold-500 transition-colors text-sm`;

  const selectClass = (error?: boolean) =>
    `w-full bg-white/10 border ${error ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-2 md:py-2.5 text-white appearance-none outline-none focus:border-gold-500 transition-colors text-sm [&>option]:bg-dark-900 [&>option]:text-white cursor-pointer`;

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Request Received!</h2>
        <p className="text-white/70 max-w-md mx-auto">
          Thank you for reaching out. A dedicated consultant will contact you shortly to discuss your requirements.
        </p>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl md:text-xl font-semibold text-white mb-2 pr-8 leading-tight">
        Get The Best Deal For Your High-Value Secured Loan
      </h2>
      <p className="text-[10px] md:text-xs text-white/40 mb-4 leading-tight pr-4 font-light">
        IBSFINCORP, operated by Incetto Business Solutions Private Limited, acts as a strategic loan consulting firm and Corporate DSA. Final approval, interest rates, and terms are determined solely by partner Banks and NBFCs.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
        <p className="text-white/60 text-[11px] md:text-xs font-medium uppercase tracking-tight">Personal Details</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Name</label>
            <input id="name" {...register('name')} className={inputClass(!!errors.name)} />
            {errors.name && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Phone</label>
            <input id="phone" type="tel" {...register('phone')} className={inputClass(!!errors.phone)} />
            {errors.phone && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="email" className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Email</label>
            <input id="email" type="email" {...register('email')} className={inputClass(!!errors.email)} />
            {errors.email && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="location" className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Location</label>
            <div className="relative">
              <select id="location" {...register('location')} defaultValue="" className={selectClass(!!errors.location)}>
                <option value="" disabled hidden></option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <SelectArrow />
            </div>
            {errors.location && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.location.message}</p>}
          </div>
        </div>

        <p className="text-white/60 text-[11px] md:text-xs font-medium uppercase tracking-tight pt-1">Questions</p>

        <div>
          <label className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Are you looking for a loan or referring one?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                value="Looking for a Loan"
                {...register('loanOrReferral')}
                className="appearance-none w-4 h-4 rounded-full border border-white/40 checked:border-white checked:bg-white/30 transition-all cursor-pointer"
              />
              <span className="text-white/80 text-sm group-hover:text-white transition-colors">Looking for a Loan</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                value="Referring a Loan"
                {...register('loanOrReferral')}
                className="appearance-none w-4 h-4 rounded-full border border-white/40 checked:border-white checked:bg-white/30 transition-all cursor-pointer"
              />
              <span className="text-white/80 text-sm group-hover:text-white transition-colors">Referring a Loan</span>
            </label>
          </div>
          {errors.loanOrReferral && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.loanOrReferral.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="loanRequirements" className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">What are your loan requirements?</label>
            <div className="relative">
              <select id="loanRequirements" {...register('loanRequirements')} defaultValue="" className={selectClass(!!errors.loanRequirements)}>
                <option value="" disabled hidden></option>
                {amountRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              <SelectArrow />
            </div>
            {errors.loanRequirements && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.loanRequirements.message}</p>}
          </div>
          <div>
            <label htmlFor="loanType" className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">What type of loan are you looking for?</label>
            <div className="relative">
              <select id="loanType" {...register('loanType')} defaultValue="" className={selectClass(!!errors.loanType)}>
                <option value="" disabled hidden></option>
                {loanTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <SelectArrow />
            </div>
            {errors.loanType && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.loanType.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="cibilScore" className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">What is your approximate CIBIL score?</label>
          <div className="relative">
            <select id="cibilScore" {...register('cibilScore')} defaultValue="" className={selectClass(!!errors.cibilScore)}>
              <option value="" disabled hidden></option>
              {cibilScores.map((score) => (
                <option key={score} value={score}>{score}</option>
              ))}
            </select>
            <SelectArrow />
          </div>
          {errors.cibilScore && <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.cibilScore.message}</p>}
        </div>

        {submitError && (
          <p className="text-red-400 text-xs text-center">{submitError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-dark-900 font-normal rounded-full py-2.5 md:py-3 mt-1 hover:bg-gray-100 disabled:opacity-60 transition-colors text-sm cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Check Eligibility Today'}
        </button>

        <div className="mt-4 space-y-2 pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
              <input
                type="checkbox"
                {...register('privacyConsent')}
                className="appearance-none w-3.5 h-3.5 rounded border border-white/40 checked:bg-white/30 checked:border-white transition-all peer cursor-pointer"
              />
              <svg className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-[10px] md:text-[11px] text-white/70 group-hover:text-white/90 transition-colors leading-snug">
              I agree to the Privacy Policy and Terms & Conditions and consent to being contacted via Call, SMS or WhatsApp.
            </span>
          </label>
          {errors.privacyConsent && <p className="text-red-400 text-[10px] ml-1">{errors.privacyConsent.message}</p>}
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
              <input
                type="checkbox"
                {...register('termsConsent')}
                className="appearance-none w-3.5 h-3.5 rounded border border-white/40 checked:bg-white/30 checked:border-white transition-all peer cursor-pointer"
              />
              <svg className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-[10px] md:text-[11px] text-white/70 group-hover:text-white/90 transition-colors leading-snug">
              I understand that loan approvals and terms are determined by partner Banks and NBFCs.
            </span>
          </label>
          {errors.termsConsent && <p className="text-red-400 text-[10px] ml-1">{errors.termsConsent.message}</p>}
        </div>
      </form>
    </>
  );
}
