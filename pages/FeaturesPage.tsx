import React from 'react';
import { Features } from '../components/Features';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Built for the modern web</h1>
           <p className="text-xl text-gray-500">
             We handle the complexity of rendering the modern web so you don't have to. 
             Single Page Applications, lazy loading, web fonts, and complex CSS are no match for Smile.
           </p>
        </div>
        
        <Features />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 rounded-3xl p-8 h-[400px] flex items-center justify-center border border-gray-100">
                {/* Abstract visualization */}
                <div className="relative w-64 h-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-4">
                    <div className="h-4 w-32 bg-gray-100 rounded mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-50 rounded"></div>
                        <div className="h-2 w-full bg-gray-50 rounded"></div>
                        <div className="h-2 w-2/3 bg-gray-50 rounded"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-brand-50 p-4 border-t border-brand-100">
                        <div className="text-xs font-semibold text-brand-700">Ad Blocked</div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Ad Blocking</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Our API automatically detects and removes cookie consent banners, newsletters popups, and advertisements before capturing the screenshot. This ensures clean, usable images every time.
                </p>
                <ul className="space-y-2">
                    {["Removes Cookie Banners", "Blocks Tracker Scripts", "Hides Chat Widgets"].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};