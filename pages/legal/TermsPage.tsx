import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate">
          <p className="text-gray-600 mb-4">Last updated: October 2024</p>
          <p className="text-gray-600 mb-4">Please read these terms carefully before using Smile API.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
          <p className="text-gray-600 mb-4">By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <h3 className="text-xl font-bold mt-8 mb-4">2. Usage License</h3>
          <p className="text-gray-600 mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Smile's website for personal, non-commercial transitory viewing only.</p>
        </div>
      </div>
    </div>
  );
};