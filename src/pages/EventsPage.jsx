import React from 'react';
import { Calendar, Bell, Coffee, ArrowRight } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';

export default function EventsPage({ navigate }) {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-12 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            <span>Community & Convenings</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Events & Convenings
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Workshops, practitioner roundtables, webinars, and Nexus Cafés organised or hosted by the Centre for HDP Nexus Solutions.
          </p>
        </div>
      </section>

      {/* Events Status Box */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-10 sm:p-14 text-center shadow-xs space-y-6">
          <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              No events at the moment
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We are currently preparing upcoming Nexus Cafés and peer-exchange practitioner workshops. Subscribe below to be notified as soon as dates are announced.
            </p>
          </div>

          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition cursor-pointer"
            >
              Propose a Joint Event
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter signup container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm inline={false} />
      </section>
    </div>
  );
}
