import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { siteConfig, navItems } from '../data/siteData';
import NewsletterForm from './NewsletterForm';

export default function Footer({ navigate }) {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16">
          <NewsletterForm />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Organization & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 shrink-0">
                <img
                  src={siteConfig.images.logoFooter}
                  alt="C4NS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-base leading-tight">
                  Centre for HDP Nexus Solutions
                </h4>
                <p className="text-xs text-sky-400 font-semibold tracking-wide">
                  C4NS • Geneva
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.swissRegistration}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Anchored Locally. Co-creating Solutions. Accelerating Impact.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h5 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Explore C4NS
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNavClick(e, '/about')}
                  className="hover:text-sky-400 transition-colors"
                >
                  About the Centre
                </a>
              </li>
              <li>
                <a
                  href="/members"
                  onClick={(e) => handleNavClick(e, '/members')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Our Team & Leadership
                </a>
              </li>
              <li>
                <a
                  href="/values"
                  onClick={(e) => handleNavClick(e, '/values')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Our Values & DNA
                </a>
              </li>
              <li>
                <a
                  href="/workstream1"
                  onClick={(e) => handleNavClick(e, '/workstream1')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Three Strategic Workstreams
                </a>
              </li>
              <li>
                <a
                  href="/knowledge-hub"
                  onClick={(e) => handleNavClick(e, '/knowledge-hub')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Knowledge Hub & Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Workstreams & Pillars */}
          <div>
            <h5 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Pillars & Updates
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/workstream1"
                  onClick={(e) => handleNavClick(e, '/workstream1')}
                  className="hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>Workstream 1: Operationalising</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/workstream1#ws2"
                  onClick={(e) => handleNavClick(e, '/workstream1')}
                  className="hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>Workstream 2: Knowledge Hub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/workstream1#ws3"
                  onClick={(e) => handleNavClick(e, '/workstream1')}
                  className="hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>Workstream 3: Applied Research</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => handleNavClick(e, '/blog')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Updates & Reflections
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  onClick={(e) => handleNavClick(e, '/events')}
                  className="hover:text-sky-400 transition-colors"
                >
                  Events & Nexus Café
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Geneva Office */}
          <div>
            <h5 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Head Office
            </h5>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Centre for HDP Nexus Solutions</p>
                  <p>Rue Fendt 1</p>
                  <p>1201 Geneva, Switzerland</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:connect@hdpnexus.org"
                  className="hover:text-sky-400 transition-colors"
                >
                  connect@hdpnexus.org
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+41 22 552 49 99</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>hdpnexus.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Centre for HDP Nexus Solutions (C4NS). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="/values"
              onClick={(e) => handleNavClick(e, '/values')}
              className="hover:text-slate-300 transition-colors"
            >
              Our Values
            </a>
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Contact Us
            </a>
            <span className="text-slate-500">Geneva, CHE-423.412.427</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
