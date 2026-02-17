'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ErrorPage() {
  const router = useRouter();
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 text-center transform transition-all duration-500">
          {/* Error icon with animation */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center animate-scale-in">
                <svg
                  className="w-12 h-12 text-rose-600 animate-shake"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              {/* Warning pulse */}
              <div className="absolute inset-0 bg-rose-400/20 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Header */}
          <h1 className="text-4xl font-bold text-slate-900 mb-3 animate-fade-in-up">
            Login Failed
          </h1>
          <p className="text-slate-600 mb-8 animate-fade-in-up animation-delay-100">
            We couldn't authenticate your account. This might be due to incorrect credentials, network issues, or expired session.
          </p>

          {/* Action buttons */}
          <div className="space-y-3 mb-8 animate-fade-in-up animation-delay-200">
            <button
              onClick={handleRetry}
              disabled={isRetrying}
              className="w-full px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {isRetrying ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Redirecting...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Try Again</span>
                </>
              )}
            </button>
            <Link
              href="/"
              className="block w-full px-6 py-3.5 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Return to Home
            </Link>
          </div>

          {/* Troubleshooting tips */}
          <div className="pt-8 border-t border-slate-200 space-y-4 text-left">
            <h3 className="text-sm font-bold text-slate-900 mb-3 animate-fade-in-up animation-delay-300">
              Troubleshooting Tips:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 animate-fade-in-up animation-delay-400">
                <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-amber-600">1</span>
                </div>
                <p className="text-sm text-slate-600">
                  Check your internet connection and try again
                </p>
              </div>
              <div className="flex items-start gap-3 animate-fade-in-up animation-delay-500">
                <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-amber-600">2</span>
                </div>
                <p className="text-sm text-slate-600">
                  Clear your browser cache and cookies
                </p>
              </div>
              <div className="flex items-start gap-3 animate-fade-in-up animation-delay-600">
                <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-amber-600">3</span>
                </div>
                <p className="text-sm text-slate-600">
                  Verify your account credentials are correct
                </p>
              </div>
            </div>
          </div>

          {/* Support section */}
          <div className="mt-8 p-4 bg-slate-50 rounded-xl animate-fade-in-up animation-delay-700">
            <p className="text-sm text-slate-700">
              Still having issues?{' '}
              <Link
                href="/support"
                className="text-rose-600 hover:text-rose-700 font-semibold underline underline-offset-2"
              >
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}