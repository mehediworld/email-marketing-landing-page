import React from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Email Marketing Trends
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join our newsletter and get the latest tips, trends, and insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}