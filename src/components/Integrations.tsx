import React from 'react';
import { Box, Database, Github, Slack, Trello, Figma } from 'lucide-react';

const integrations = [
  { icon: <Slack className="h-8 w-8" />, name: 'Slack' },
  { icon: <Github className="h-8 w-8" />, name: 'GitHub' },
  { icon: <Trello className="h-8 w-8" />, name: 'Trello' },
  { icon: <Database className="h-8 w-8" />, name: 'CRM Systems' },
  { icon: <Box className="h-8 w-8" />, name: 'Zapier' },
  { icon: <Figma className="h-8 w-8" />, name: 'Figma' },
];

export function Integrations() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Seamless Integrations
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Connect with your favorite tools and services
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-3">
                {integration.icon}
              </div>
              <span className="text-gray-900 dark:text-gray-200 font-medium">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}