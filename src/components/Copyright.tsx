import React from 'react';
import { Shield, Lock, FileCheck, Scale } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'GDPR Compliant',
    description: 'Full compliance with EU data protection regulations and privacy laws.',
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: 'Data Protection',
    description: 'Enterprise-grade security measures to protect your subscriber data.',
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: 'Legal Templates',
    description: 'Pre-approved email templates that comply with international laws.',
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: 'CAN-SPAM Compliant',
    description: 'Built-in compliance with anti-spam regulations worldwide.',
  },
];

export function Copyright() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Legal Compliance & Protection
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Send emails with confidence, knowing you're protected
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}