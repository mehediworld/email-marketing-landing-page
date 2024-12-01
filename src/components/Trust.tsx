import React from 'react';
import { CheckCircle } from 'lucide-react';

const trustPoints = [
  'Automated unsubscribe management',
  'IP warming and sender reputation monitoring',
  'Real-time bounce handling',
  'Spam complaint monitoring',
  'Automated list cleaning',
  'Double opt-in verification',
  'Custom suppression lists',
  'Automated compliance reports'
];

export function Trust() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Built-in Trust & Compliance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our platform automatically handles all compliance requirements, so you can focus on growing your business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-3"></div>
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Compliance Guarantee
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We guarantee that all emails sent through our platform comply with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">GDPR Requirements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">CAN-SPAM Act</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">CASL Regulations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">International Email Laws</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}