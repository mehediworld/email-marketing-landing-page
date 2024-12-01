import React from 'react';
import { ArrowUpRight, BarChart2, Users, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    company: 'TechStart',
    industry: 'SaaS',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400',
    metrics: [
      { icon: <Users className="h-5 w-5" />, label: 'List Growth', value: '+240%' },
      { icon: <BarChart2 className="h-5 w-5" />, label: 'Open Rate', value: '42%' },
      { icon: <DollarSign className="h-5 w-5" />, label: 'ROI', value: '12x' },
    ],
    quote: "MailFlow transformed our email marketing strategy, leading to a significant increase in customer engagement and revenue.",
    author: "Sarah Chen, CMO"
  },
  {
    company: 'GrowthRetail',
    industry: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=400',
    metrics: [
      { icon: <Users className="h-5 w-5" />, label: 'Conversion Rate', value: '+180%' },
      { icon: <BarChart2 className="h-5 w-5" />, label: 'Click Rate', value: '28%' },
      { icon: <DollarSign className="h-5 w-5" />, label: 'ROI', value: '15x' },
    ],
    quote: "The automation features and personalization capabilities helped us achieve record-breaking sales numbers.",
    author: "Michael Roberts, CEO"
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            See how leading companies achieve remarkable results with MailFlow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={study.image}
                alt={study.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {study.company}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{study.industry}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-blue-600 dark:text-blue-400 mb-1">
                        {metric.icon}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                  "{study.quote}"
                </blockquote>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  - {study.author}
                </p>

                <button className="mt-6 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  Read Full Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}