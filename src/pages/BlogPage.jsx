import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  Coffee,
  Search
} from 'lucide-react';
import { blogPosts } from '../data/siteData';

export default function BlogPage({ navigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.reflectionNo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-12 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-sky-600" />
            <span>Discussions & Perspectives</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Updates & Reflections
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Short, critical reflections on emerging issues across the Humanitarian-Development-Peace Nexus. These are collaborative explorations, not formal research papers, designed to spark discussion.
          </p>

          {/* Search bar */}
          <div className="pt-2 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search reflections..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => navigate(`/post/${post.slug}`)}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-sky-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  {post.reflectionNo}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600 group-hover:underline">
                  <span>Read full reflection</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nexus Café Invitation Banner */}
        <div className="mt-16 bg-amber-50/70 border border-amber-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Coffee className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <h3 className="text-lg font-bold text-amber-900">
              Join the Conversation at our Nexus Café
            </h3>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed max-w-2xl">
              We want to hear your reactions and thoughts on these reflections. If there is enough interest on specific questions, we host interactive online Nexus Cafés to exchange viewpoints.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer shrink-0"
          >
            Suggest a topic / Reaction
          </button>
        </div>
      </section>
    </div>
  );
}
