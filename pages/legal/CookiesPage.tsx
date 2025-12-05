import React from 'react';

export const CookiesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <div className="prose prose-slate">
          <p className="text-gray-600 mb-4">This is the Cookie Policy for Smile, accessible from smileapi.com.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">What Are Cookies</h3>
          <p className="text-gray-600 mb-4">As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.</p>
        </div>
      </div>
    </div>
  );
};