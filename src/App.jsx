import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import AdminDashboard from './components/AdminDashboard'
import './index.css'

function App() {
  const [view, setView] = useState('portfolio');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const themes = ['light', 'dark', 'midnight', 'sunset', 'ocean'];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const goToAdmin = () => {
    const password = window.prompt("Enter Admin Password:");
    if (password === 'Admin@123') {
      setView('admin');
    } else if (password !== null) {
      alert("Unauthorized Access!");
    }
  };

  const goToPortfolio = () => setView('portfolio');

  return (
    <div className="app">
      {view === 'portfolio' ? (
        <>
          <Navbar onNameClick={goToAdmin} theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </>
      ) : (
        <AdminDashboard onBack={goToPortfolio} />
      )}
    </div>
  )
}

export default App
