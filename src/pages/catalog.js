import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function Catalog() {
  const products = [
    {
      title: '14.3 SEER 2 Fixed Speed l Air Conditioner',
      capacity: 'Cooling Capacity: 18-60kBTU/h',
      image: '/images/sunair-wordmark.webp',
      features: [
        'Eco-friendly R-32 refrigerant with low GPW value.',
        'Energy-efficient scroll compressor.',
        'Equipped with thermal overload protection.',
        'High quality condensor with inner-groove copper tube and aluminum fin.',
        'Service valves with sweat connections and easy-access gauge ports.',
        'Factory-installed high-pressure switch',
        'Machanical control with no PCB.',
        'AHRI certified and ETL listed.',
      ]
    },
    {
      title: '14.3 SEER 2 Fixed Speed l Heat Pump',
      capacity: 'Cooling Capacity: 18-60kBTU/h',
      image: '/images/sunair-wordmark.webp',
      features: [
        'Eco-friendly R-32 refrigerant with low GPW value.',
        'Energy-efficient scroll compressor.',
        'Equipped with thermal overload protection.',
        'High quality condensor with inner-groove copper tube and aluminum fin.',
        'Service valves with sweat connections and easy-access gauge ports.',
        'Factory-installed high-pressure switch.',
        'AHRI certified and ETL listed.',
      ]
    },
    {
      title: 'Multi-Position Standard Air Handler Unit',
      capacity: 'Cooling Capacity: 18-60kBTU/h',
      image: '/images/sunair-wordmark.webp',
      features: [
        'Multi-stage blower speed control to align with varying capacity demands.',
        'Multi-position installation: Upflow, Horizontal Right, Downflow, Horizontal Left.',
        'Horizontal and vertical condensate drain pans standard.',
        'Primary and secondary condensate fittings.',
        'Optional electric heater kits: 5, 7.5, 10, 15, 20 kW.',
        'Slide out coil design for easy maintenance.',
        'Integrated filter rack with toolless door access.',
        'All-aluminum heat exchanger prevents formicary corrosion.',
        'Factory installed R-32 refrigerant sensor to ensure safe operation.',
      ]
    },
    {
      title: 'Wall-Mounted Air Handler Unit',
      capacity: 'Cooling Capacity: 18-36kBTU/h',
      image: '/images/sunair-wordmark.webp',
      features: [
        'Multi-speed PSC motor design.',
        'Built-in wall-hanging bracket.',
        'Drains with bottom primary and secondary drain connections.',
        'Optional electric heater kits: 5, 7.5, 10 kW.',
        'Ali-alumimum heat exchanger prevents formicary corrosion.',
        'Factory installed R-32 refrigerant sensor to ensure safe operation.',
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />

      <main className="flex-grow">
        <section className="py-12 md:py-20">
          <div className="container-custom">
            {/* Page Title */}
            <div className="text-center mb-16 fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-sun-blue mb-6">
                HVAC Product Catalog
              </h1>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Browse our complete line of heating and cooling products
              </p>
            </div>

            {/* Download Button */}
            <div className="mb-20 flex justify-center">
              <a 
                href="https://cdn.prod.website-files.com/69a1b89dc4975ea642915275/6a0375ecccd2562cc5fcab18_iAIR%20Catalog.pdf%20(1)%20(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="product-card-hover bg-sun-blue hover:bg-sun-blue-dark text-white font-bold py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center gap-3 shadow-md hover:shadow-lg text-base"
              >
                <div className="text-left">
                  <div className="text-sm font-normal opacity-90">Download Catalog</div>
                  <div className="text-lg font-bold">PDF</div>
                </div>
              </a>
            </div>

            {/* Products */}
            <div className="space-y-16 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
