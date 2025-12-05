import React from 'react';
import { Camera, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="bg-black text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Camera size={20} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">smile</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering developers to capture the web with pixel-perfect precision. Built for scale, speed, and reliability.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 cursor-pointer transition-all">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 cursor-pointer transition-all">
                <Github size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-all">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/features" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link to="/integration" className="hover:text-black transition-colors">Integration</Link></li>
              <li><Link to="/pricing" className="hover:text-black transition-colors">Pricing</Link></li>
              <li><Link to="/changelog" className="hover:text-black transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-black transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/legal/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal/cookies" className="hover:text-black transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 font-medium">© 2024 Smile API Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-green-700">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};