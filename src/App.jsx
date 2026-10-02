import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ValuesPage from './pages/ValuesPage';
import WorkstreamsPage from './pages/WorkstreamsPage';
import KnowledgeHubPage from './pages/KnowledgeHubPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    // Check if it's an anchor on the current page
    if (path.includes('#')) {
      const [targetPath, hash] = path.split('#');
      if (targetPath && targetPath !== currentPath) {
        window.history.pushState({}, '', path);
        setCurrentPath(targetPath);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching
  const renderPage = () => {
    const path = currentPath.toLowerCase();

    if (path === '/' || path === '') {
      return <HomePage navigate={navigate} />;
    }
    if (path === '/about') {
      return <AboutPage navigate={navigate} />;
    }
    if (path === '/members' || path === '/team') {
      return <TeamPage initialFilter="all" navigate={navigate} />;
    }
    if (path === '/core-team') {
      return <TeamPage initialFilter="codirector" navigate={navigate} />;
    }
    if (path === '/board') {
      return <TeamPage initialFilter="board" navigate={navigate} />;
    }
    if (path === '/team-members') {
      return <TeamPage initialFilter="analyst" navigate={navigate} />;
    }
    if (path === '/values') {
      return <ValuesPage navigate={navigate} />;
    }
    if (path === '/workstream1' || path === '/workstreams') {
      return <WorkstreamsPage navigate={navigate} />;
    }
    if (path === '/knowledge-hub' || path === '/knowledge-hub-database' || path === '/knowledge-hub-database-1' || path === '/resources') {
      return <KnowledgeHubPage />;
    }
    if (path === '/blog') {
      return <BlogPage navigate={navigate} />;
    }
    if (path.startsWith('/post/')) {
      const slug = path.replace('/post/', '');
      return <BlogPostPage slug={slug} navigate={navigate} />;
    }
    if (path === '/events' || path === '/event-list') {
      return <EventsPage navigate={navigate} />;
    }
    if (path === '/contact') {
      return <ContactPage />;
    }

    // Default fallback to HomePage
    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      <Header currentPath={currentPath} navigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
