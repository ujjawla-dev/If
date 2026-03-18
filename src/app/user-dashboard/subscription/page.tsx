import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started and exploring the platform.',
    features: [
      'Basic Profile Setup',
      'Guided Storytelling (Limited)',
      'Legacy Messaging (1 recipient)',
      'Basic Family Tree',
      'Secure Cloud Storage (1GB)',
    ],
    icon: Zap,
    buttonText: 'Get Started',
    highlight: false,
  },
  {
    name: 'Yearly',
    price: '$99',
    period: '/year',
    description: 'Our most popular plan for preserving your full legacy.',
    features: [
      'Full Profile Access',
      'Unlimited Storytelling Prompts',
      'Unlmited Legacy Messaging',
      'Interactive Family Tree',
      'Secure Cloud Storage (50GB)',
      'Media Upload (Audio & Video)',
      'Priority Customer Support',
    ],
    icon: Star,
    buttonText: 'Select Yearly',
    highlight: true,
  },
  {
    name: 'Lifetime',
    price: '$299',
    period: 'one-time',
    description: 'A permanent digital heirloom for generations to come.',
    features: [
      'All Yearly Features',
      'Advanced AI Personalization',
      'Legacy Delivery Scheduling',
      'Unlimited Cloud Storage',
      'Direct Funeral Service API',
      'No Recurring Fees',
      'Lifetime Updates & Support',
    ],
    icon: Crown,
    buttonText: 'Select Lifetime',
    highlight: false,
  },
];

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col gap-8 w-full pb-10">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
        <h1 className="text-4xl font-light">
          Choose Your <span className="font-semibold text-white">Legacy Plan</span>
        </h1>
        <p className="text-white/60 text-lg">
          Select the plan that best fits your journey. Preserve your memories and ensure your final wishes are honored.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-8 transition-all duration-300 hover:scale-[1.02] ${
              plan.highlight
                ? 'dashboard-widget-highlight border-[#E6663E]/40'
                : 'dashboard-widget'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E6663E] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                plan.highlight ? 'bg-white/20' : 'bg-white/5'
              }`}>
                <plan.icon className={`w-6 h-6 ${plan.highlight ? 'text-white' : 'text-white/70'}`} />
              </div>
              <h2 className="text-2xl font-bold">{plan.name}</h2>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-white/50 ml-1">{plan.period}</span>
              <p className="text-white/60 mt-3 text-sm leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="flex-1 mb-8">
              <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-widest">
                What's Included
              </h3>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 group text-sm">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      plan.highlight ? 'bg-[#E6663E]/20 text-[#E6663E]' : 'bg-white/10 text-white/40'
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                plan.highlight
                  ? 'bg-white text-[#151733] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
              }`}
            >
              {plan.highlight ? 'Get Started Now' : plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="dashboard-widget p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
        <div className="max-w-xl">
          <h3 className="text-xl font-semibold mb-2">Need a custom plan for your family?</h3>
          <p className="text-white/60 text-sm">
            We offer specialized packages for families, trusts, and larger groups. Contact our support team for a personalized quote.
          </p>
        </div>
        <button className="bg-transparent border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
          Contact Support
        </button>
      </div>
    </div>
  );
}
