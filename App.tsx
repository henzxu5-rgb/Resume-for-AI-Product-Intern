import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competencies from './components/Competencies';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col gap-0">
        <Hero />
        <Competencies />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;