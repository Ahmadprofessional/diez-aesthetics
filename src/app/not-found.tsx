import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Calendar } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
          PAGE NOT FOUND
        </span>
        <h1 className="font-serif text-6xl sm:text-8xl font-light text-white">
          404
        </h1>
        <p className="text-sm text-zinc-400 font-light leading-relaxed">
          The aesthetic procedure or page you are looking for may have moved or is no longer available.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-gold-500 text-black text-xs uppercase tracking-wider font-semibold hover:bg-gold-400 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/treatments/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-white/10 text-white hover:border-gold-500/50 text-xs uppercase tracking-wider font-medium transition-colors"
          >
            <span>Browse Treatments</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
