import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('heat-pumps');

  const productTabs = [
    { id: 'heat-pumps', label: 'HEAT PUMPS', image: '/images/sunair-logo.png', description: 'Heat pumps have earned a reputation as the system of choice for mild climates. During warm weather, a heat pump operates as an air conditioner to keep you cool and comfortable. When the temperatures start to drop, your heat pump will keep your living space nice and toasty.' },
    { id: 'air-conditioners', label: 'AIR CONDITIONERS', image: '/images/iair/ac-new.png', description: "SunAir supply INC air conditioners have been tested to perform even in the hottest climates, with equipment that's quiet, dependable, and affordable." },
    { id: 'air-handlers', label: 'AIR HANDLERS', image: '/images/iair/ah-new.png', description: "Your air handler's job is to circulate warm or cool air through your home year-round—and that's a task SunAir supply INC accomplishes with ease. Our air handlers are designed with multiple installation configurations, giving you a variety of options to fit any existing space." },
    { id: 'furnaces', label: 'FURNACES', image: '/images/iair/furnace-new.png', description: "When the weather gets chilly, you'll get comfortable, consistent heating—and you can also be confident these furnaces are built for durable performance over the long haul." },
    { id: 'coils', label: 'COILS', image: '/images/iair/coil-new.png', description: "The function of indoor air coils is simple: heating or cooling your system's air and removing humidity. SunAir supply INC indoor air coils make that process as effective as possible, maximizing the efficiency of all system components—and keeping you as comfortable as possible in all seasons." },
  ];

  const activeProduct = productTabs.find(p => p.id === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Welcome Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sun-blue mb-6">
                Welcome to SunAir supply INC
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                When it comes to heating and cooling, sometimes you just don't need all the extra frills. 
                SunAir supply INC keeps it simple and affordable, giving you quality heating and cooling options 
                that won't break the bank.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Feature Cards - Affordability, Durability, Versatility */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Affordability */}
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group bg-white">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="bg-sun-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-sun-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sun-blue font-bold text-lg mb-2">Affordability</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    SunAir supply INC offers straightforward and economical solutions for heating and cooling, without unnecessary frills. We provide quality products that deliver comfortable temperatures at an affordable price.
                  </p>
                </div>
              </div>

              {/* Durability */}
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group bg-white">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="bg-sun-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-sun-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-sun-blue font-bold text-lg mb-2">Durability</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    With SunAir supply INC, you can rely on consistent performance even in the most challenging heating and cooling conditions. We offer a hassle-free, no-registration warranty to give you peace of mind.
                  </p>
                </div>
              </div>

              {/* Versatility */}
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group bg-white">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="bg-sun-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-sun-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sun-blue font-bold text-lg mb-2">Versatility</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    No matter what you need, the space it needs to fit, or your budget, there's a SunAir supply INC system that's up to the task: air conditioners, heat pumps, furnaces, packaged units, air handlers, and indoor coils.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section with Tabs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Tabs and Description */}
              <div>
                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {productTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-xs font-semibold rounded transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-sun-blue text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {activeProduct?.description}
                </p>
              </div>

              {/* Right - Product Image */}
              <div className="flex items-center justify-center">
                <img 
                  src={activeProduct?.image} 
                  alt={activeProduct?.label}
                  className="w-full max-w-lg h-auto object-contain transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sun-blue to-sun-blue-dark text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Contact us today for a quote or to learn more about our products and services.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-sun-yellow hover:bg-sun-yellow-dark text-sun-blue font-bold py-4 px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
