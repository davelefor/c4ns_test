import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Download, 
  Mail, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { blogPosts } from '../data/siteData';

export default function BlogPostPage({ slug, navigate }) {
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <article className="pb-24 pt-8">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-sky-50 px-3.5 py-2 rounded-lg transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Updates & Reflections</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-600 text-white tracking-wider">
            {post.reflectionNo}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-slate-800">
              <User className="w-4 h-4 text-sky-600" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-slate-400" />
              {post.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Print as PDF</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 max-h-96 w-full bg-slate-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
          {post.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-6 pb-2">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'subheading') {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-900 pt-4 pb-1 text-sky-900">
                  {block.text}
                </h3>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={idx} className="space-y-2.5 my-4 pl-4 border-l-2 border-sky-400 text-sm sm:text-base text-slate-700">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'callout') {
              return (
                <div key={idx} className="my-8 p-6 sm:p-8 bg-sky-50/90 border border-sky-200 rounded-2xl text-slate-800 text-sm sm:text-base space-y-3">
                  <div className="font-bold text-sky-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600" />
                    <span>Operationalizing the Nexus with C4NS</span>
                  </div>
                  <p className="leading-relaxed">{block.text}</p>
                  <div className="pt-2">
                    <button
                      onClick={() => navigate('/contact')}
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-lg transition cursor-pointer"
                    >
                      Contact C4NS Helpdesk
                    </button>
                  </div>
                </div>
              );
            }
            return (
              <p key={idx} className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Footer of Article */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Published by Centre for HDP Nexus Solutions • Geneva, Switzerland
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-xl shadow-xs transition"
          >
            Send Feedback on this Reflection
          </button>
        </div>
      </div>
    </article>
  );
}
