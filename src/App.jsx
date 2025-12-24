import React, { useState } from 'react'
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

  const goToAdmin = () => setView('admin');
  const goToPortfolio = () => setView('portfolio');

  return (
    <div className="app">
      {view === 'portfolio' ? (
        <>
          <Navbar onNameClick={goToAdmin} />
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
