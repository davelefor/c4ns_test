import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  Lightbulb, 
  Users, 
  HelpCircle, 
  Coffee, 
  Quote, 
  Sparkles,
  ChevronRight,
  Shield,
  Layers,
  FileText
} from 'lucide-react';
import { siteConfig, blogPosts } from '../data/siteData';

export default function HomePage({ navigate }) {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white pt-12 pb-16 sm:pt-20 sm:pb-24">
        {/* Subtle decorative background blur */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Core Tagline & Messaging */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                Registered Swiss non-profit organisation • Geneva
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                <span className="block text-sky-600">Anchored Locally.</span>
                <span className="block text-slate-900">Co-creating Solutions.</span>
                <span className="block text-slate-800">Accelerating Impact.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                The <strong className="text-slate-800 font-semibold">Centre for HDP Nexus Solutions (C4NS)</strong> partners with communities, governments, and organisations to turn humanitarian, development, and peace goals into practical, scalable action.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate('/about')}
                  className="px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/workstream1')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>Strategic Workstreams</span>
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>Help Desk Support</span>
                </button>
              </div>

              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Grounded in Field Reality
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Multi-Stakeholder
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Geneva & Global
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-square">
                  <img
                    src={siteConfig.images.heroHands}
                    alt="Hands together symbolizing collaboration in HDP Nexus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <p className="text-xs uppercase font-bold tracking-wider text-sky-300">
                        Humanitarian • Development • Peace
                      </p>
                      <p className="text-sm font-medium leading-snug">
                        Turning complex policy principles into tangible, durable outcomes for crisis-affected populations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 max-w-xs hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">From Policy to Practice</p>
                    <p className="text-[11px] text-slate-500">Practical tools tailored for teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OECD DAC Quote & Purpose Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-50/80 border border-sky-100 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <Quote className="absolute -right-4 -bottom-4 w-36 h-36 text-sky-200/50 pointer-events-none" />

          <div className="relative space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-sky-600 text-white text-xs font-bold uppercase tracking-wider">
              Our Purpose
            </div>

            <blockquote className="text-lg sm:text-2xl font-serif italic text-slate-800 leading-snug">
              “...to reduce overall vulnerability and the number of unmet needs, strengthen risk management capacities and address root causes of conflict.”
            </blockquote>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-sky-800 uppercase">
              — OECD DAC (2019)
            </p>

            <hr className="border-sky-200/60 my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The C4NS vision is for a world where humanitarian aid, sustainable development, and peacebuilding are seamlessly integrated, empowering communities to thrive in stability, resilience, and dignity.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To advocate for and create localised nexus solutions for lasting impact where humanitarian action, development, and peace come together. We build on local strategies to bring actors across sectors together, foster shared responsibility, and promote holistic approaches that reduce risks and strengthen resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Workstreams Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Three Strategic Workstreams
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            C4NS drives its impact through three mutually reinforcing Strategic Workstreams designed to break silos and accelerate field-level delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Workstream 1 Card */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="h-48 overflow-hidden bg-slate-100 relative">
              <img
                src={siteConfig.images.workstream1}
                alt="Workstream 1: Operationalising the Nexus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                Workstream 1
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Operationalising the Nexus
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Tailored training and advisory support for Teams, Organisations, and Multistakeholder Groups to integrate the Nexus into daily operations, policies, and structures.
                </p>
              </div>
              <button
                onClick={() => navigate('/workstream1')}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 transition cursor-pointer"
              >
                <span>Read details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workstream 2 Card */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="h-48 overflow-hidden bg-slate-100 relative">
              <img
                src={siteConfig.images.workstream2}
                alt="Workstream 2: Knowledge Hub for Collaborative Learning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                Workstream 2
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Knowledge Hub for Collaborative Learning
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Curating actionable knowledge that supports innovation, policy, and practice. Open-access platform, peer learning exchanges, toolkits, and practitioner podcasts.
                </p>
              </div>
              <button
                onClick={() => navigate('/workstream1#ws2')}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 transition cursor-pointer"
              >
                <span>Explore Hub</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workstream 3 Card */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="h-48 overflow-hidden bg-slate-100 relative">
              <img
                src={siteConfig.images.workstream3}
                alt="Workstream 3: Applied Research for Innovative Practice and Policy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                Workstream 3
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Applied Research for Innovative Practice and Policy
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  A "practice-to-policy" research model that learns directly from local actors. Driving evidence-based solutions from field realities into high-level policy spaces.
                </p>
              </div>
              <button
                onClick={() => navigate('/workstream1#ws3')}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 transition cursor-pointer"
              >
                <span>Discover research</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Collaborative Capacity Building (NexusCap) Banner */}
        <div className="bg-slate-900 rounded-3xl text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
              <Layers className="w-4 h-4" />
              Strategic Nexus Capacity Programme (NexusCap)
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Collaborative Capacity Building for Strategic Impact
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              The C4NS Strategic Nexus Capacity Programme (NexusCap) integrates the work of the three workstreams. It supports organisational change, tailored training, locally driven strategic planning, and integrated coordination and action.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">One size does not fit all.</strong> Through its multi-stakeholder approach, C4NS experts design integrated technical assistance packages. These packages ensure that learning is shared, decision-making is relevant to key stakeholders, and results are centered on impact and sustainability.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Request a NexusCap Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections & Reactions (Blog Preview) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Insights & Explorations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Reflections and Reactions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              C4NS regularly posts short reflections on critical nexus issues to spark conversations. These are collaborative explorations, not rigid academic papers.
            </p>
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition cursor-pointer shrink-0"
          >
            <span>Read all reflections</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Featured Blog Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              onClick={() => navigate(`/post/${post.slug}`)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition cursor-pointer flex flex-col group"
            >
              <div className="h-44 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-sky-700">{post.reflectionNo}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-sky-600 transition leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span>{post.date}</span>
                  <span className="font-medium text-sky-600 group-hover:underline flex items-center gap-1">
                    Read article <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nexus Café Invite Callout */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Coffee className="w-7 h-7" />
          </div>
          <div className="space-y-1 text-center sm:text-left flex-1">
            <h4 className="text-base font-bold text-amber-900">
              Let us know your thoughts! Join a Nexus Café
            </h4>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              We want to hear your reactions and thoughts. If there is enough interest on specific topics, we host informal <em>Nexus Cafés</em> with practitioners and stakeholders around the world.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer shrink-0"
          >
            Share feedback
          </button>
        </div>
      </section>

      {/* On-Site Support & Help Desk Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* On-Site Support Box */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                On-Site Support for Nexus Initiatives
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                C4NS deploys experienced team members directly to your location to work alongside your team. We assist in country-level diagnostics, joint analysis sessions, and participatory program design in fragile and crisis-affected settings.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl transition cursor-pointer"
              >
                Inquire about deployment
              </button>
            </div>
          </div>

          {/* Help Desk Box */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Help Desk
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We provide a tailored, flexible approach, whether online, via phone call, or in-person to support your nexus efforts. Get answers to technical bottlenecks and practical implementation questions.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition cursor-pointer"
              >
                Submit Help Desk query
              </button>
            </div>
          </div>
        </div>

        {/* Benefits & How it Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
          {/* Key Benefits */}
          <div className="space-y-5">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
              Key Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <p className="font-bold text-slate-900 mb-1">On-Demand Real-Time Support</p>
                <p className="text-slate-500">Fast assistance whenever programmatic roadblocks arise.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <p className="font-bold text-slate-900 mb-1">Tailored Advice</p>
                <p className="text-slate-500">Context-sensitive recommendations that fit your specific environment.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <p className="font-bold text-slate-900 mb-1">Collaborative Tools</p>
                <p className="text-slate-500">Practical frameworks designed for joint actor coordination.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <p className="font-bold text-slate-900 mb-1">Needs-based Capacity Building</p>
                <p className="text-slate-500">Focused modules customized to team competencies.</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-5">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
              How It Works
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                <div>
                  <p className="font-bold text-slate-900">Submit Your Query</p>
                  <p className="text-slate-500">Describe your operational challenge, programming context, or query.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                <div>
                  <p className="font-bold text-slate-900">Experts Matched to Your Needs</p>
                  <p className="text-slate-500">We pair you with seasoned C4NS practitioners with relevant regional and thematic expertise.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                <div>
                  <p className="font-bold text-slate-900">Solution Delivery</p>
                  <p className="text-slate-500">Receive concrete advisory notes, toolkits, review comments, or workshops.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                <div>
                  <p className="font-bold text-slate-900">Follow-Up</p>
                  <p className="text-slate-500">Continuous check-ins to evaluate operational adoption and lessons learned.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
