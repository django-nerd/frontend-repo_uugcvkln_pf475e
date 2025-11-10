import Spline from '@splinetool/react-spline';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-600/20">
            Portfolio · AI & Web Development
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Tanmay Kartikay
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            19 · B.Tech CSE (AI & ML), Vellore Institute of Technology · Expected Graduation 2027
          </p>
          <p className="mt-4 text-gray-700">
            I design and build modern, interactive web apps and explore AI-driven systems — from
            study assistants to network visualizations.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:tanmay.kartikay2023@vitstudent.ac.in"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 transition"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="tel:+917976867972"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 transition"
            >
              <Phone size={18} /> +91 79768 67972
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 transition"
            >
              <ExternalLink size={18} /> View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
