import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate">
          <p className="text-gray-600 mb-4">Your privacy is important to us.</p>
          <p className="text-gray-600 mb-4">It is Smile's policy to respect your privacy regarding any information we may collect while operating our website.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">Information We Collect</h3>
          <p className="text-gray-600 mb-4">We only collect information about you if we have a reason to do so – for example, to provide our Services, to communicate with you, or to make our Services better.</p>
        </div>
      </div>
    </div>
  );
};