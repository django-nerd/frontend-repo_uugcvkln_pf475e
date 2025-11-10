import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Code Explainer',
    desc: 'Website that explains input code line by line with the help of AI.',
    stack: ['AI', 'Web'],
  },
  {
    title: 'SmartStudy — AI-Powered Study Assistant',
    desc: 'Personalized study plans and an explainer chatbot using AI.',
    stack: ['React', 'Python (Flask)', 'OpenAI API', 'HTML', 'CSS'],
  },
  {
    title: 'TaskFlow — Productivity Tracker',
    desc: 'To-do app with time tracking, Pomodoro timer, and charts. Firebase-backed.',
    stack: ['React', 'Firebase', 'Node.js'],
  },
  {
    title: 'Smart Traffic Light System (IoT + AI)',
    desc: 'An intelligent traffic signal control concept using sensor input and AI heuristics.',
    stack: ['IoT', 'AI'],
  },
  {
    title: 'Network Simulator for Routing Protocols',
    desc: 'Topologies to test OSPF, RIP, static routing with Python-based visualization.',
    stack: ['C++', 'Packet Tracer', 'Python'],
  },
  {
    title: 'Fitness Tracker (DBMS)',
    desc: 'Database system to track workouts, activities, and health metrics.',
    stack: ['SQL', 'DBMS'],
  },
  {
    title: 'Portfolio Website',
    desc: 'Clean, responsive personal site inspired by modern Indian minimalism.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-16 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h2>
        <p className="mt-2 text-gray-600">Selected work spanning AI, networks, and user-centric web apps.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <ExternalLink className="text-gray-400 group-hover:text-indigo-600 transition" size={18} />
              </div>
              <p className="mt-2 text-gray-700">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs rounded-md bg-indigo-50 text-indigo-700 px-2 py-1 ring-1 ring-indigo-600/20">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
