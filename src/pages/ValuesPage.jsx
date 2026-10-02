import React from 'react';
import { 
  ShieldCheck, 
  Database, 
  Users2, 
  Scale, 
  Lightbulb, 
  Megaphone, 
  Zap, 
  HeartHandshake,
  ArrowRight,
  Compass
} from 'lucide-react';
import { valuesList } from '../data/siteData';

export default function ValuesPage({ navigate }) {
  const icons = [
    <ShieldCheck className="w-6 h-6 text-sky-600" />,
    <Database className="w-6 h-6 text-blue-600" />,
    <Users2 className="w-6 h-6 text-indigo-600" />,
    <Scale className="w-6 h-6 text-teal-600" />,
    <Lightbulb className="w-6 h-6 text-amber-600" />,
    <Megaphone className="w-6 h-6 text-rose-600" />,
    <Zap className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-12 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Guiding Principles</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Values
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            At the <strong className="text-slate-900 font-semibold">Centre for HDP Nexus Solutions (C4NS)</strong>, our values guide how we design, partner, and deliver. They are our DNA—shaping every tool we build, every partnership we convene, and every solution we scale.
          </p>
        </div>
      </section>

      {/* The 7 Values Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesList.map((val, idx) => (
            <div
              key={val.number}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 group-hover:text-sky-200 transition-colors">
                    0{val.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  C4NS Value 0{val.number}
                </span>
              </div>
            </div>
          ))}

          {/* Promise Card to complete the 8-grid layout or feature */}
          <div className="bg-slate-900 rounded-3xl text-white p-8 shadow-xl flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-sky-400" />
                Our Commitment
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Our Promise
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                C4NS exists to help partners move from <span className="text-white font-semibold underline decoration-sky-400 decoration-2">talking Nexus</span> to <span className="text-white font-semibold underline decoration-emerald-400 decoration-2">doing Nexus</span>. Our values are the compass that keeps us true to that mission.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/workstream1')}
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition cursor-pointer flex items-center gap-2"
              >
                <span>See Workstreams in Action</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition cursor-pointer"
              >
                Partner with C4NS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
