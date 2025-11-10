import { Brain, Code2, Atom, Network } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-16 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills & Interests</h2>
        <p className="mt-2 text-gray-600">A blend of software engineering foundations with a growing focus on AI and modern web development.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Code2 className="text-indigo-600" />
              <h3 className="font-semibold text-gray-900">Programming Languages</h3>
            </div>
            <p className="mt-3 text-gray-700">C · C++ · Python · JavaScript</p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Atom className="text-indigo-600" />
              <h3 className="font-semibold text-gray-900">Web Development</h3>
            </div>
            <p className="mt-3 text-gray-700">HTML · CSS · React.js</p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Brain className="text-indigo-600" />
              <h3 className="font-semibold text-gray-900">Academic Interests</h3>
            </div>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Operating Systems & Synchronization</li>
              <li>Computer Networks</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Network className="text-indigo-600" />
              <h3 className="font-semibold text-gray-900">SDN Research</h3>
            </div>
            <p className="mt-3 text-gray-700">Studied 19 papers and prepared a case study on Software-Defined Networking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
