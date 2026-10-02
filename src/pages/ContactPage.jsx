import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Globe, 
  AlertCircle,
  HelpCircle,
  Clock,
  Building
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    message: '',
    serviceInterest: 'helpdesk',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-12 pb-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-sky-600" />
            <span>Connect & Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Reach out today to discover how our expertise can make a difference. Whether you need Help Desk guidance, on-site deployment, or research collaboration.
          </p>
        </div>
      </section>

      {/* Contact Form & Office Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Get in touch with us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              Send us a message and our team will get back to you promptly.
            </p>

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2.5 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900">Thanks for submitting!</h3>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Your message has been received by the Centre for HDP Nexus Solutions team. We will review your query and reply to {formData.email} shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        organisation: '',
                        message: '',
                        serviceInterest: 'helpdesk',
                      });
                    }}
                    className="text-xs text-emerald-800 font-bold hover:underline"
                  >
                    Send another query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Your first name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Your last name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@organisation.org"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder="e.g. UN, INGO, Ministry"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Area / Inquiry Type
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition bg-white"
                  >
                    <option value="helpdesk">Help Desk Query & Technical Advice</option>
                    <option value="onsite">On-Site Support & Country Deployment</option>
                    <option value="training">NexusCap Capacity Building & Training</option>
                    <option value="research">Applied Research & Fellowships</option>
                    <option value="general">General Inquiries & Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can C4NS support your team or initiative?"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl shadow-xs hover:shadow transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{status === 'submitting' ? 'Sending...' : 'Send'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Geneva Head Office */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-sky-400">
                  Head Office
                </span>
                <h3 className="text-2xl font-bold">Centre for HDP Nexus Solutions</h3>
                <p className="text-xs text-slate-300">
                  {siteConfig.swissRegistration}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Office Location</p>
                    <p className="text-slate-300 text-xs">Rue Fendt 1</p>
                    <p className="text-slate-300 text-xs">1201 Geneva, Switzerland</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href="mailto:connect@hdpnexus.org"
                      className="text-slate-300 hover:text-white transition text-xs"
                    >
                      connect@hdpnexus.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-slate-300 text-xs">+41 22 552 49 99</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Website</p>
                    <p className="text-slate-300 text-xs">hdpnexus.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Helpdesk Notice */}
            <div className="bg-sky-50 rounded-3xl p-6 border border-sky-100 space-y-3">
              <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                <span>Help Desk Response Times</span>
              </div>
              <p className="text-xs text-sky-900 leading-relaxed">
                Queries submitted through the helpdesk are reviewed by our practice lead coordinators within 24 to 48 hours. For urgent operational emergencies, please indicate urgency in your message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
