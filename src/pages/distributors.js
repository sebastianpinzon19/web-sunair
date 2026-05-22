import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Distributors() {
  const submittals = [
    { name: '1.5 / 2 / 2.5 Ton Split System Air Conditioner', file: '/pdfs/submittals-1.5-2-2.5-ton-ac.pdf' },
    { name: '3 Ton Split System Air Conditioner', file: '/pdfs/submittals-3-ton-ac.pdf' },
    { name: '3.5 / 4 / 5 Ton Split System Air Conditioner', file: '/pdfs/submittals-3.5-4-5-ton-ac.pdf' },
    { name: '1.5 / 2 / 2.5 Ton Split System Heat Pump', file: '/pdfs/submittals-1.5-2-2.5-ton-hp.pdf' },
    { name: '3 Ton Split System Heat Pump', file: '/pdfs/submittals-3-ton-hp.pdf' },
    { name: '3.5 / 4 / 5 Ton Split System Heat Pump', file: '/pdfs/submittals-3.5-4-5-ton-hp.pdf' },
    { name: '1.5 / 2 /2.5 / 3 / 3.5 Ton Multi-Position Standard Air Handler (STD)', file: '/pdfs/submittals-1.5-3.5-ton-ah-std.pdf' },
    { name: '4 / 5 Ton Multi-Position Standard Air Handler (STD)', file: '/pdfs/submittals-4-5-ton-ah-std.pdf' },
    { name: '1.5 / 2 Ton Wall-Mount Air Handler', file: '/pdfs/submittals-1.5-2-ton-ah-wall.pdf' },
    { name: '2.5 / 3 Ton Wall-Mount Air Handler', file: '/pdfs/submittals-2.5-3-ton-ah-wall.pdf' },
  ];

  const specifications = [
    { name: 'Inverter Rooftop Package Unit', file: '/pdfs/specs-inverter-rooftop.pdf' },
    { name: 'Split Systems', file: '/pdfs/specs-split-systems.pdf' },
  ];

  const installations = [
    { name: 'Split System Heat Pump & Air Conditioner', file: '/pdfs/installation-ac-hp.pdf' },
    { name: 'High Efficiency Air-Handler', file: '/pdfs/installation-air-handler.pdf' },
    { name: 'Wall-Mount Air Handlers', file: '/pdfs/installation-wall-mount-ah.pdf' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />

      <main className="flex-grow">
        <section className="py-12 md:py-20">
          <div className="container-custom">
            {/* Submittals Section */}
            <div className="mb-20">
              <h1 className="text-5xl md:text-6xl font-bold text-sun-blue mb-12 text-center fade-in-up">
                Submittals
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {submittals.map((item, index) => (
                  <a
                    key={index}
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card-hover group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border-l-4 border-sun-yellow transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="text-4xl">📄</div>
                    <div className="flex-1">
                      <p className="text-sun-blue font-semibold group-hover:text-sun-blue-dark transition">
                        {item.name}
                      </p>
                    </div>
                    <div className="text-sun-blue text-2xl group-hover:translate-x-2 transition-transform">→</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Specification Documents */}
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-sun-blue mb-12 text-center fade-in-up">
                Specification Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {specifications.map((item, index) => (
                  <a
                    key={index}
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card-hover group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl border-l-4 border-sun-blue transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="text-4xl">📋</div>
                    <div className="flex-1">
                      <p className="text-sun-blue font-semibold group-hover:text-sun-blue-dark transition text-lg">
                        {item.name}
                      </p>
                    </div>
                    <div className="text-sun-blue text-2xl group-hover:translate-x-2 transition-transform">→</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Installation Instructions */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-sun-blue mb-12 text-center fade-in-up">
                Installation Instructions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {installations.map((item, index) => (
                  <a
                    key={index}
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card-hover group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl border-l-4 border-sun-yellow transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="text-4xl">🔧</div>
                    <div className="flex-1">
                      <p className="text-sun-blue font-semibold group-hover:text-sun-blue-dark transition">
                        {item.name}
                      </p>
                    </div>
                    <div className="text-sun-blue text-2xl group-hover:translate-x-2 transition-transform">→</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
