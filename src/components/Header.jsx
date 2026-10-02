import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig, navItems } from '../data/siteData';

export default function Header({ currentPath, navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDropdownOpen(null);
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-200">
      {/* Top micro banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              {siteConfig.swissRegistration}
            </span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <a href="mailto:connect@hdpnexus.org" className="hover:text-white flex items-center gap-1 transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              connect@hdpnexus.org
            </a>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              +41 22 552 49 99
            </span>
            <span className="text-slate-400">Geneva, Switzerland</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Org Name */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-3.5 group"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <img
                src={siteConfig.images.logoHeader}
                alt="C4NS Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg sm:text-xl leading-tight tracking-tight group-hover:text-sky-700 transition-colors">
                Centre for HDP Nexus Solutions
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                C4NS • Geneva
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.href || 
                (item.href !== '/' && currentPath.startsWith(item.href)) ||
                (item.label === 'Team' && ['/members', '/core-team', '/board', '/team-members'].includes(currentPath));

              if (item.submenu) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-colors ${
                        isActive
                          ? 'text-sky-700 font-semibold bg-sky-50'
                          : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    {/* Submenu dropdown */}
                    <div className="absolute left-0 top-full pt-1.5 w-52 hidden group-hover:block transition-all">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => handleNavClick(e, sub.href)}
                            className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-sky-700 font-semibold bg-sky-50'
                      : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>Help Desk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2.5 text-base font-medium rounded-lg ${
                  currentPath === item.href
                    ? 'text-sky-700 font-bold bg-sky-50'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
              {item.submenu && (
                <div className="pl-6 space-y-1 py-1">
                  {item.submenu.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => handleNavClick(e, sub.href)}
                      className="block px-3 py-1.5 text-sm text-slate-600 hover:text-sky-700"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="w-full text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Get in Touch / Help Desk
            </a>
            <div className="text-center text-xs text-slate-500 pt-2">
              Rue Fendt 1, 1201 Geneva, Switzerland
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
