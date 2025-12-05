import React from 'react';
import { Copy, Check } from 'lucide-react';

export const CodeDemo: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const code = `curl "https://api.smile.com/v1/screenshot" \\
  -X POST \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://heroui.com",
    "full_page": true,
    "viewport": { "width": 1920, "height": 1080 },
    "format": "png",
    "delay": 2
  }'`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
       <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
        <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs text-gray-400 font-mono">terminal</div>
          <button 
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm font-mono text-gray-300 leading-relaxed">
            <code>
              <span className="text-purple-400">curl</span> <span className="text-green-400">"https://api.smile.com/v1/screenshot"</span> \<br/>
              &nbsp;&nbsp;<span className="text-blue-400">-X</span> POST \<br/>
              &nbsp;&nbsp;<span className="text-blue-400">-H</span> <span className="text-orange-300">"Authorization: Bearer YOUR_API_KEY"</span> \<br/>
              &nbsp;&nbsp;<span className="text-blue-400">-H</span> <span className="text-orange-300">"Content-Type: application/json"</span> \<br/>
              &nbsp;&nbsp;<span className="text-blue-400">-d</span> <span className="text-gray-400">'{'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"url"</span>: <span className="text-green-400">"https://heroui.com"</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"full_page"</span>: <span className="text-purple-400">true</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"viewport"</span>: <span className="text-gray-400">{'{'}</span> <span className="text-blue-300">"width"</span>: <span className="text-yellow-400">1920</span>, <span className="text-blue-300">"height"</span>: <span className="text-yellow-400">1080</span> <span className="text-gray-400">{'}'}</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"format"</span>: <span className="text-green-400">"png"</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"delay"</span>: <span className="text-yellow-400">2</span><br/>
              &nbsp;&nbsp;<span className="text-gray-400">{'}'}'</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};