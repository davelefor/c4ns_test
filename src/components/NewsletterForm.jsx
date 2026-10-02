import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, AlertCircle } from 'lucide-react';

export default function NewsletterForm({ inline = false }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    subscribeChecked: true,
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.organisation) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    if (!formData.subscribeChecked) {
      setStatus('error');
      setErrorMessage('Please check the subscription agreement box.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center max-w-lg mx-auto">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
        <h4 className="text-lg font-bold text-emerald-900 mb-1">Thank you for subscribing!</h4>
        <p className="text-sm text-emerald-700">
          You've been added to the Centre for HDP Nexus Solutions mailing list. We look forward to sharing our latest reflections, knowledge products, and events with you.
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full ${inline ? '' : 'max-w-2xl mx-auto'}`}>
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-2 text-sky-700">
          <Mail className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Stay Connected</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Subscribe to our newsletter • Don’t miss out!
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          Receive regular reflections, updates on HDP Nexus operationalisation, upcoming events, and publications directly in your inbox.
        </p>

        {status === 'error' && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-sm text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Your first name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Your last name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
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
                placeholder="name@organisation.org"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Organisation name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                required
                placeholder="e.g. UN, INGO, Ministry"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="subscribeChecked"
                checked={formData.subscribeChecked}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-sky-600 rounded-sm border-slate-300 focus:ring-sky-500"
              />
              <span className="text-xs text-slate-600 leading-normal">
                I want to subscribe to your mailing list.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{status === 'submitting' ? 'Subscribing...' : 'Join'}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
