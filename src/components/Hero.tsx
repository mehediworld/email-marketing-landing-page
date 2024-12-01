import React from 'react';
import { ArrowRight, BarChart2, Mail, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Supercharge Your Email Marketing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Drive more engagement, boost conversions, and grow your business with our powerful email marketing platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="flex items-center justify-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              Watch Demo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">10M+ Emails Sent Daily</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">50k+ Happy Customers</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">98% Delivery Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}