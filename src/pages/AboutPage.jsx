import React from 'react';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  Users, 
  FileText, 
  Sparkles,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function AboutPage({ navigate }) {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-12 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-sky-600"></span>
            About C4NS
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl">
            About the Centre for HDP Nexus Solutions (C4NS)
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            The Centre for HDP Nexus Solutions (C4NS) is an international non-profit organisation grounded in decades of field experience, co-creating practical, scalable solutions with actors across sectors and regions.
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{siteConfig.swissRegistration}</span>
          </div>

          {/* Quick jump navigation buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => navigate('/members')}
              className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs rounded-lg transition cursor-pointer flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Meet the team</span>
            </button>
            <a
              href="#mission"
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-xs rounded-lg transition"
            >
              Our Mission & Vision
            </a>
            <button
              onClick={() => navigate('/values')}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-xs rounded-lg transition cursor-pointer"
            >
              Our Values
            </button>
            <a
              href="#approach"
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-xs rounded-lg transition"
            >
              Why Integrated Approach?
            </a>
          </div>
        </div>
      </section>

      {/* Main Narrative & Hands Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Transforming Nexus Commitments into Field Action
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We transform HDP nexus efforts with actionable, locally driven solutions. Our team of international experts at C4NS transforms field-tested insights into tools, guidance, and partnerships that drive impact where it matters most: in the lives of affected populations.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Headquartered in Geneva, Switzerland, C4NS works across fragile and crisis-affected countries in Africa, the Middle East, Asia, and Latin America. We convene humanitarian responders, development practitioners, peacebuilders, government officials, and grassroots communities to co-create solutions tailored to real operating environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="font-bold text-slate-900 text-sm">International Expertise</p>
                <p className="text-xs text-slate-500 mt-1">Decades of leadership in UN, INGO, and local community coordination.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="font-bold text-slate-900 text-sm">Locally Driven</p>
                <p className="text-xs text-slate-500 mt-1">Directly empowering local and national actors as architects of durable peace.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src={siteConfig.images.aboutHands}
                alt="All Hands In - picture of many hands together in a circle"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-4 bg-white text-center text-xs text-slate-500 font-medium">
                Collaboration is at the heart of C4NS — bringing all hands together.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our vision is a world where humanitarian aid, sustainable development, and peacebuilding are seamlessly integrated, empowering communities to thrive in stability, resilience, and dignity.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-4 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-sky-500 text-slate-950 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our mission is to advocate for and create localised nexus solutions for lasting impact where humanitarian action, development, and peace come together. We build on local strategies to bring actors across sectors together, foster shared responsibility, and promote holistic approaches that reduce risks and strengthen resilience. In this way, we help shape inclusive, sustainable development pathways and lay the foundations for durable peace for communities in fragile and crisis-affected contexts.
            </p>
          </div>
        </div>
      </section>

      {/* The Need for an Integrated Approach & Triple Nexus Diagram */}
      <section id="approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                Context & Urgency
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                The need for an integrated approach is greater than ever
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nexus implementation remains fragmented, policy-heavy, and disconnected from field realities. High-level resolutions frequently fail to translate into practical coordination on the ground.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The <strong className="text-slate-900 font-semibold">Centre for HDP Nexus Solutions (C4NS)</strong> is a lean, agile platform dedicated to translating Nexus principles into practice. We co-create tools, share knowledge, and catalyse innovation, helping local and global actors deliver coherent, community-driven outcomes in complex contexts.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At C4NS, we believe in the power of collaboration and innovation. We believe that through our expertise, we can help organisations and initiatives <strong className="text-slate-900 font-semibold">make a real impact in the world</strong>.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/workstream1')}
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl shadow-xs transition cursor-pointer flex items-center gap-2"
                >
                  <span>Explore our three workstreams</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-xs max-w-sm w-full">
                <img
                  src={siteConfig.images.nexusVenn}
                  alt="Triple nexus venn diagram"
                  className="w-full h-auto rounded-xl object-contain mx-auto"
                />
                <p className="text-center text-xs text-slate-500 font-semibold mt-3">
                  The Triple Nexus: Humanitarian, Development, and Peace convergence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery of Context / Real-World Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Real Contexts
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            Centred on Affected Populations
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            From emergency displacement to long-term reconstruction and social cohesion, nexus solutions must be rooted where people live.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl overflow-hidden h-44 shadow-xs bg-slate-100">
            <img
              src="/assets/nsplsh_4bd62aae458d411a9c2201c5f5402523~mv2.jpg"
              alt="Children walking through a refugee camp"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-44 shadow-xs bg-slate-100">
            <img
              src="/assets/nsplsh_dafcd8dc48f6493b90f27935d960afeb~mv2.jpg"
              alt="Settlement overhead view"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-44 shadow-xs bg-slate-100">
            <img
              src="/assets/nsplsh_437671437a77564f68434d~mv2_d_5905_3890_s_4_2.jpg"
              alt="Children smiling at camera"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-44 shadow-xs bg-slate-100">
            <img
              src="/assets/nsplsh_35584a6172716c77765041~mv2_d_4898_3265_s_4_2.jpg"
              alt="Graffiti about equality"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
