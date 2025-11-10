import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">Tanmay Kartikay</a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a className="hover:text-gray-900" href="#skills">Skills</a>
            <a className="hover:text-gray-900" href="#projects">Projects</a>
            <a className="hover:text-gray-900" href="#certifications">Certifications</a>
            <a className="hover:text-gray-900" href="#languages">Languages</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Languages />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Tanmay Kartikay · Built with a clean, modern, minimal design.
          </p>
          <p className="mt-2">Contact: tanmay.kartikay2023@vitstudent.ac.in · +91 79768 67972</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
