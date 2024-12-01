import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    features: ['Up to 10,000 subscribers', 'Basic templates', 'Email support', 'Basic analytics'],
  },
  {
    name: 'Professional',
    price: '79',
    features: ['Up to 50,000 subscribers', 'Advanced templates', 'Priority support', 'Advanced analytics', 'A/B Testing'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    features: ['Unlimited subscribers', 'Custom templates', '24/7 support', 'Advanced analytics', 'Custom integrations'],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Choose the plan that's right for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                <span className="ml-1 text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-4 rounded-lg font-medium ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}