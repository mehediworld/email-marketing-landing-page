import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users } from 'lucide-react';

export function ROICalculator() {
  const [subscribers, setSubscribers] = useState(1000);
  const [emailsPerMonth, setEmailsPerMonth] = useState(4);
  const [openRate, setOpenRate] = useState(20);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageOrder, setAverageOrder] = useState(50);

  const monthlyRevenue = Math.round(
    subscribers * (emailsPerMonth * (openRate / 100) * (conversionRate / 100)) * averageOrder
  );
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Calculate Your Email Marketing ROI
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            See how much revenue you could generate with MailFlow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Subscribers
              </label>
              <input
                type="range"
                min="100"
                max="100000"
                value={subscribers}
                onChange={(e) => setSubscribers(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-gray-600 dark:text-gray-400">{subscribers.toLocaleString()}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Emails per Month
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={emailsPerMonth}
                onChange={(e) => setEmailsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-gray-600 dark:text-gray-400">{emailsPerMonth}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Average Open Rate (%)
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={openRate}
                onChange={(e) => setOpenRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-gray-600 dark:text-gray-400">{openRate}%</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Conversion Rate (%)
              </label>
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-gray-600 dark:text-gray-400">{conversionRate}%</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Average Order Value ($)
              </label>
              <input
                type="range"
                min="10"
                max="500"
                value={averageOrder}
                onChange={(e) => setAverageOrder(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-gray-600 dark:text-gray-400">${averageOrder}</span>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Potential Revenue
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Revenue</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${monthlyRevenue.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Yearly Revenue</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${yearlyRevenue.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}