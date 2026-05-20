'use client';

import { useState } from 'react';

const TabsSection = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 md:px-8 py-3 md:py-4 font-bold text-sm md:text-base rounded-full transition duration-300 ${
                activeTab === index
                  ? 'bg-sun-blue text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-lg border border-gray-200">
          <h3 className="text-3xl md:text-4xl font-bold text-sun-blue mb-6">
            {tabs[activeTab].label}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            {tabs[activeTab].content}
          </p>
          {tabs[activeTab].features && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tabs[activeTab].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-sun-yellow text-2xl">✓</span>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
