import React from 'react';
import { BarChart, Clock, Globe, Layout, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Drag & Drop Builder',
    description: 'Create beautiful emails with our intuitive drag and drop interface.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Advanced Security',
    description: 'Enterprise-grade security to protect your data and subscribers.',
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: 'Analytics Dashboard',
    description: 'Track performance with detailed analytics and insights.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Global Delivery',
    description: 'Reliable delivery to inboxes worldwide with our optimized network.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Automation',
    description: 'Automate your email campaigns with powerful workflows.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: '24/7 Support',
    description: 'Round-the-clock support to help you succeed.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Everything you need to succeed in email marketing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-800">
              <div className="text-blue-600 dark:text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}