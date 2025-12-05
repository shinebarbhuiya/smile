import React from 'react';
import { CodeDemo } from '../components/CodeDemo';

export const IntegrationPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Integrates with your stack</h1>
          <p className="text-xl text-gray-500">
            Whether you use Node.js, Python, Ruby, or Go, getting started takes less than 5 minutes.
          </p>
        </div>

        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                 <div>
                     <h3 className="text-2xl font-bold mb-6">REST API</h3>
                     <p className="text-gray-400 mb-8">
                         Our REST API is language agnostic. Send a simple POST request with your options and get an image buffer or a URL back.
                     </p>
                     
                     <div className="space-y-6">
                         <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-brand-300 font-mono text-lg">POST</div>
                            <div className="font-mono text-gray-300">/v1/screenshot</div>
                         </div>
                         <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-brand-300 font-mono text-lg">GET</div>
                            <div className="font-mono text-gray-300">/v1/quota</div>
                         </div>
                     </div>
                 </div>
                 <CodeDemo />
             </div>
        </div>

        <div className="mt-24">
            <h3 className="text-center text-xl font-bold mb-12">Official Libraries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Node.js', 'Python', 'PHP', 'Ruby', 'Go', 'Java', '.NET', 'Rust'].map(lang => (
                    <div key={lang} className="p-6 rounded-2xl border border-gray-100 bg-white text-center hover:shadow-lg transition-all cursor-pointer hover:border-brand-200">
                        <div className="font-bold text-gray-900">{lang}</div>
                        <div className="text-xs text-gray-400 mt-1">v2.1.0</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};