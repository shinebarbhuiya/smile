import React from 'react';

export const ChangelogPage: React.FC = () => {
  const changes = [
    {
      version: "v2.4.0",
      date: "October 24, 2024",
      title: "Improved PDF Rendering",
      desc: "Added support for A3, A4, and A5 formats with custom margin controls. PDF text is now selectable by default.",
      tags: ["New", "Improvement"]
    },
    {
      version: "v2.3.1",
      date: "October 10, 2024",
      title: "Japan Region Support",
      desc: "We've added a new rendering node in Tokyo (ap-northeast-1) to reduce latency for Asian customers.",
      tags: ["Infrastructure"]
    },
    {
      version: "v2.3.0",
      date: "September 28, 2024",
      title: "Element Selector Screenshot",
      desc: "You can now pass a CSS selector to capture only a specific element on the page instead of the full viewport.",
      tags: ["New"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12">Changelog</h1>
        
        <div className="space-y-16">
          {changes.map((change, i) => (
            <div key={i} className="relative pl-8 border-l border-gray-200">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand-400 border-2 border-white ring-2 ring-brand-100"></div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm font-mono text-gray-500">{change.date}</span>
                <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-xs font-semibold">{change.version}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{change.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{change.desc}</p>
              <div className="flex gap-2">
                {change.tags.map(tag => (
                   <span key={tag} className="px-2 py-1 rounded border border-gray-200 text-xs text-gray-500">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};