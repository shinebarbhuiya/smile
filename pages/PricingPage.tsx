import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "For hobbyists and side projects.",
      features: ["1,000 screenshots/mo", "Standard quality", "Email support", "10 concurrent requests"],
      cta: "Start Free",
      color: "white"
    },
    {
      name: "Pro",
      price: "$29",
      desc: "For scaling startups and teams.",
      features: ["50,000 screenshots/mo", "Retina (2x) quality", "Priority support", "Block ads & trackers", "50 concurrent requests"],
      cta: "Get Started",
      popular: true,
      color: "dark"
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large scale applications.",
      features: ["Unlimited volume", "4K resolution", "Dedicated account manager", "Custom retention policy", "SLA Guarantee"],
      cta: "Contact Sales",
      color: "white"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-500">
            Start for free, scale as you grow. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative rounded-3xl p-8 border ${plan.popular ? 'border-brand-300 shadow-xl shadow-brand-100' : 'border-gray-200'} bg-white flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-300 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                </div>
                <p className="text-gray-500 text-sm">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                fullWidth 
                variant={plan.popular ? 'solid' : 'bordered'}
                color={plan.popular ? 'primary' : 'default'}
                className={plan.popular ? '' : 'border-gray-200 hover:border-gray-900 hover:bg-transparent'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};