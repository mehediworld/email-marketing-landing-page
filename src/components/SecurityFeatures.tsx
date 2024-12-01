import React from 'react';
import { Shield, Lock, Key, Server, Eye, AlertTriangle } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'End-to-End Encryption',
    description: 'Military-grade encryption for all your data, both in transit and at rest.',
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: 'Two-Factor Authentication',
    description: 'Extra layer of security with 2FA support for all user accounts.',
  },
  {
    icon: <Key className="h-8 w-8" />,
    title: 'API Security',
    description: 'Secure API access with OAuth 2.0 and API key authentication.',
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Data Backups',
    description: 'Automated daily backups with point-in-time recovery options.',
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: 'Activity Monitoring',
    description: 'Real-time monitoring of all account activities and access logs.',
  },
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: 'Threat Detection',
    description: 'Advanced threat detection and prevention systems.',
  },
];

export function SecurityFeatures() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Enterprise-Grade Security
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Your data security is our top priority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Download Security Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
}