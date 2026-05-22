import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />

      <main className="flex-grow">
        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-sun-blue mb-16 text-center fade-in-up">
                Contact SunAir supply INC
              </h1>
              
              {/* Contact Form */}
              <div className="bg-white p-10 md:p-16 rounded-2xl shadow-2xl border border-gray-100 fade-in-up">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
