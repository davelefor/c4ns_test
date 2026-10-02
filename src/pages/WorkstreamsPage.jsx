import React from 'react';
import { 
  Layers, 
  BookOpen, 
  Compass, 
  Users, 
  Building2, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Sparkles,
  FileText
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function WorkstreamsPage({ navigate }) {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-12 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Operational Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Strategic Workstreams
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Operationalise the HDP Nexus with the Centre for HDP Nexus Solutions (C4NS). We provide tailored training, knowledge curation, and practice-to-policy research for lasting impact.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#ws1"
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-xs rounded-lg transition"
            >
              Workstream 1: Operationalising
            </a>
            <a
              href="#ws2"
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-xs rounded-lg transition"
            >
              Workstream 2: Knowledge Hub
            </a>
            <a
              href="#ws3"
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-xs rounded-lg transition"
            >
              Workstream 3: Applied Research
            </a>
          </div>
        </div>
      </section>

      {/* Workstream 1: Operationalising the Nexus */}
      <section id="ws1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Workstream 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Operationalising the Nexus
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We bridge the gap between high-level nexus concepts and real-world execution. Through hands-on training and advisory interventions, we support teams and organisations in making nexus approaches workable and accountable.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-slate-50">
                <img
                  src={siteConfig.images.workstream1}
                  alt="Workstream 1 diagram"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sky-600" />
              <span>Training Programmes & Capacities</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* For Teams */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  For Teams: Building Core Capacities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Objective:</strong> Equip teams with the foundational knowledge and practical skills to integrate the HDP Nexus into their daily work.
                </p>
              </div>

              {/* For Organisations */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  For Organisations: Strategic Alignment and Leadership
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Objective:</strong> Align organisational policies, strategies, and structures with HDP Nexus goals to ensure effective implementation.
                </p>
              </div>

              {/* For Multistakeholder Groups */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  For Multistakeholder Groups: Integrated Approaches for Collaboration and Coordination
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Objective:</strong> Foster shared understanding and collaboration among diverse stakeholders, including governments, NGOs, INGOs, private sector, and local communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workstream 2: Knowledge Hub */}
      <section id="ws2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Workstream 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Knowledge Hub for Collaborative Learning
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We curate and share actionable knowledge that supports innovation, policy, and practice across the HDP Nexus, connecting local, national, regional and global actors.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/knowledge-hub')}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Browse Publications Database</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-slate-50">
                <img
                  src={siteConfig.images.workstream2}
                  alt="Workstream 2 diagram"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base">Our Services Include:</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Open-access Nexus knowledge platform</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Peer learning exchanges and practitioner workshops</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Annual Nexus Forum and Insights Report</span>
                </li>
              </ul>
            </div>

            {/* Knowledge Products */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base">Our Knowledge Products:</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>HDP Nexus fellowships for field-based research</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Policy Briefs and Reports</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Practical Toolkits and Case Studies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Webinars and Podcasts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workstream 3: Applied Research */}
      <section id="ws3" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Workstream 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Applied Research for Innovative Practice and Policy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our research pillar is the engine that drives evidence-based solutions from the field to policy. We are dedicated to bridging the gap between high-level policy and on-the-ground practice by generating actionable insights and fostering a dynamic feedback loop between learning, programming, and policy influence. We champion a "practice-to-policy" research model that learns directly from local actors.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-slate-50">
                <img
                  src={siteConfig.images.workstream3}
                  alt="Workstream 3 diagram"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              Our Research Framework
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">
                  Research and Learning Agenda
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our goal is to ensure our research agenda is responsive to the most pressing HDP challenges faced on the ground and aligned with the needs of national and local actors, non-profits, UN and donor agencies, and academic partners.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">
                  HDP Nexus Fellowship Programme
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The HDP Nexus Fellowship is a key component of our research pillar, supporting researchers with lived experience in fragile and conflict-affected settings, aiming to strengthen practice-oriented research and elevate underrepresented voices in HDP dialogue.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">
                  Strategic Partnerships
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We develop partnerships with academic institutions, think tanks, and policy institutions in both the Global South and North. We collaborate with partners on joint research, co-supervision of fellows, and guest speaking opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold">Ready to operationalise the Nexus?</h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-xl">
              Connect with C4NS to discuss tailored training packages, joint diagnostics, or research partnerships.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-white hover:bg-sky-50 text-sky-800 font-bold text-xs rounded-xl shadow-md transition cursor-pointer shrink-0"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
}
