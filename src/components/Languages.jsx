import { Globe2 } from 'lucide-react';

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Japanese', level: 'Basic proficiency', proof: 'https://drive.google.com/file/d/1mnRddiT5pi71SXZhz2zCNdTO6O5QKb2j/view?usp=sharing' },
];

export default function Languages() {
  return (
    <section id="languages" className="relative w-full py-16 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <Globe2 className="text-indigo-600" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Languages</h2>
        </div>
        <p className="mt-2 text-gray-600">Languages I speak and my proficiency level.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((l) => (
            <div key={l.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">{l.name}</h3>
              <p className="mt-1 text-gray-700">{l.level}</p>
              {l.proof && (
                <a
                  href={l.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-indigo-700 hover:underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
