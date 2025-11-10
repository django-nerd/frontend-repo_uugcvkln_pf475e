import { FileDown, Link as LinkIcon } from 'lucide-react';

const certs = [
  {
    name: 'IBM Generative AI Course',
    url: 'https://drive.google.com/file/d/1yahvi_bWmo-UVFFekT3CV8lQNb6wemGp/view?usp=sharing',
  },
  {
    name: 'Oracle Cloud Infrastructure',
    url: 'https://drive.google.com/file/d/1vXBJjAGvG96OqE6igZRP_SimsrjT7sn5/view?usp=sharing',
  },
  {
    name: 'Oracle AI Vector Search',
    url: 'https://drive.google.com/file/d/1zrg7uYESOy33BfMF29lJFvAc6l7VQ3hM/view?usp=sharing',
  },
  {
    name: 'AI Agents Intensive Course with Google',
    url: '', // space left for future link
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-16 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Certifications</h2>
        <p className="mt-2 text-gray-600">Download or view the certificates. New items will be added as they arrive.</p>

        <div className="mt-8 divide-y rounded-xl border border-gray-200 bg-white shadow-sm">
          {certs.map((c) => (
            <div key={c.name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5">
              <div>
                <h3 className="font-semibold text-gray-900">{c.name}</h3>
                <p className="text-sm text-gray-600">Google Drive</p>
              </div>
              <div className="flex items-center gap-3">
                {c.url ? (
                  <>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-white shadow hover:bg-indigo-700 transition"
                    >
                      <FileDown size={16} /> Download / View
                    </a>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 transition"
                    >
                      <LinkIcon size={16} /> Open Link
                    </a>
                  </>
                ) : (
                  <span className="text-sm text-gray-500">Link coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
