'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/dashboard');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4">
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-3.5t-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse-slow-delayed" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 text-center transform transition-all duration-500">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center animate-scale-in">
                <svg
                  className="w-12 h-12 text-emerald-600 animate-check-draw"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ripple" />
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ripple-delayed" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-3 animate-fade-in-up">
            Login Successful!
          </h1>
          <p className="text-slate-600 mb-2 animate-fade-in-up animation-delay-100">
            You've been successfully authenticated.
          </p>
          <p className="text-sm text-slate-500 mb-8 animate-fade-in-up animation-delay-200">
            Redirecting to your dashboard in{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-700 font-bold rounded-full">
              {countdown}
            </span>{' '}
            seconds...
          </p>

          <div className="space-y-3 animate-fade-in-up animation-delay-300">
            <Link
              href="/dashboard"
              className="block w-full px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Go to Dashboard Now
            </Link>
            <Link
              href="/"
              className="block w-full px-6 py-3.5 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Return to Home
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 space-y-3 text-left">
            <div className="flex items-start gap-3 animate-fade-in-up animation-delay-400">
              <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Secure Session</p>
                <p className="text-xs text-slate-600">Your connection is encrypted and secure</p>
              </div>
            </div>
            <div className="flex items-start gap-3 animate-fade-in-up animation-delay-500">
              <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Account Verified</p>
                <p className="text-xs text-slate-600">All permissions have been granted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}