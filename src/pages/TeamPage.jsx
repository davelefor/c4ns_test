import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Mail, 
  MapPin, 
  Briefcase, 
  BookOpen, 
  X, 
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { teamMembers } from '../data/siteData';

export default function TeamPage({ initialFilter = 'all', navigate }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    setActiveFilter(initialFilter);
  }, [initialFilter]);

  const filteredMembers = teamMembers.filter((member) => {
    if (activeFilter === 'all') return true;
    return member.category === activeFilter;
  });

  const categories = [
    { id: 'all', label: 'All Members', path: '/members' },
    { id: 'codirector', label: 'Co-Directors', path: '/core-team' },
    { id: 'board', label: 'Board', path: '/board' },
    { id: 'analyst', label: 'Analysts', path: '/team-members' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-12 pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            <Users className="w-3.5 h-3.5 text-sky-600" />
            <span>People & Leadership</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Team
          </h1>

          <div className="max-w-4xl space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Our team brings a wealth of diverse experience, both from the field and headquarters. We have worked on the HDP Nexus across a range of organizations, including the UN, Handicap International, ICRC, Save the Children, Plan International, Oxfam, Action Against Hunger, War Child UK, and ActionAid. Our experience spans many countries, with hands-on experience in settings such as South Sudan and Afghanistan.
            </p>
            <p>
              We approach each assignment collaboratively, pooling our expertise and insights while sharing best practices and lessons learned to deliver the most effective solutions. Each team member serves as a gateway to the collective knowledge and support of our entire group.
            </p>
            <p className="font-semibold text-sky-800">
              We're passionate about what we do and would love to hear from you!
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  if (navigate) navigate(cat.path);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === cat.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeFilter === cat.id ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.id === 'all'
                    ? teamMembers.length
                    : teamMembers.filter((m) => m.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              {/* Photo */}
              <div className="h-72 bg-slate-100 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${
                    member.category === 'codirector'
                      ? 'bg-sky-600/90 text-white'
                      : member.category === 'board'
                      ? 'bg-indigo-600/90 text-white'
                      : 'bg-slate-900/80 text-white'
                  }`}>
                    {member.category === 'codirector' ? 'Co-Director' : member.category === 'board' ? 'Board' : 'Analyst'}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700 mt-1">
                    {member.role}
                  </p>

                  {/* Bio Preview */}
                  <p className="text-xs text-slate-600 mt-3 line-clamp-4 leading-relaxed">
                    {member.bio || 'Centre for HDP Nexus Solutions team contributor.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-sky-600 font-semibold group-hover:underline">
                  <span>View full bio</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Member Bio Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header in Modal */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2">
              <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">
                  {selectedMember.category === 'codirector' ? 'Co-Director' : selectedMember.category === 'board' ? 'Board Member' : 'Analyst'}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-semibold text-sky-700">
                  {selectedMember.role}
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  Centre for HDP Nexus Solutions • Geneva, Switzerland
                </p>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Bio Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {selectedMember.bio || 'Centre for HDP Nexus Solutions team contributor.'}
            </div>

            {/* Contact CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-slate-500">Interested in collaborating?</span>
              <button
                onClick={() => {
                  setSelectedMember(null);
                  if (navigate) navigate('/contact');
                }}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition"
              >
                Contact via Helpdesk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
