import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SunLoader from '@/components/SunLoader';

export default function Warranty() {
  const [loading, setLoading] = useState(false);
  const [loadingLabel, setLoadingLabel] = useState('Loading...');
  const loadingTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (loadingTimeout.current) {
        clearTimeout(loadingTimeout.current);
      }
    };
  }, []);

  const openLinkWithLoader = (href, label) => {
    if (loadingTimeout.current) {
      clearTimeout(loadingTimeout.current);
    }

    setLoadingLabel(label);
    setLoading(true);

    loadingTimeout.current = setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
      setLoading(false);
    }, 450);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />
      <SunLoader visible={loading} label={loadingLabel} />

      <main className="flex-grow">
        <section className="relative py-12 md:py-20">
          {/* Background image (nature) behind the three CTA blocks */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-center bg-cover"
              style={{
                backgroundImage: "url('/images/warranty-bg.webp')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* subtle dark overlay for contrast */}
            <div className="absolute inset-0 z-10 bg-black/10" />

          <div className="container-custom relative z-20">
            <div className="mx-auto max-w-4xl">
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-xl shadow-lg">
                  <div className="max-w-4xl mx-auto space-y-2">
              {/* Download Warranty */}
              <div className="text-center fade-in-up">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sun-blue mb-2 leading-tight">
                  Download Warranty <br className="hidden md:block" />Information
                </h1>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => openLinkWithLoader('https://cdn.prod.website-files.com/69a1b89dc4975ea642915275/69a8a432d01e1842b646c289_Warranty.pdf', 'Opening PDF...')}
                    className="product-card-hover inline-block bg-sun-yellow hover:bg-sun-yellow-dark text-sun-blue font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base min-w-[180px]"
                  >
                    Download Here
                  </button>
                </div>
              </div>

              {/* Register Equipment */}
              <div className="text-center fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-sun-blue mb-2 leading-tight">
                  Register Equipment
                </h2>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => openLinkWithLoader('https://sun-air-warranty.vercel.app/', 'Opening warranty system...')}
                    className="product-card-hover inline-block bg-sun-yellow hover:bg-sun-yellow-dark text-sun-blue font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base min-w-[180px]"
                  >
                    Click Here
                  </button>
                </div>
              </div>

              {/* File a Warranty Claim */}
              <div className="text-center fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-sun-blue mb-2 leading-tight">
                  File a Warranty Claim
                </h2>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => openLinkWithLoader('https://finalitygarantia-nu.vercel.app/', 'Opening claim system...')}
                    className="product-card-hover inline-block bg-sun-yellow hover:bg-sun-yellow-dark text-sun-blue font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base min-w-[180px]"
                  >
                    Click Here
                  </button>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
