export default function Hero({ 
  title, 
  subtitle, 
  description,
  backgroundImage = '/images/iair/hero-banner.png',
  textPosition = 'center' 
}) {
  return (
    <section
      className="relative bg-cover bg-center h-[600px] md:h-[700px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom w-full">
        <div className="flex justify-center items-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-2xl md:text-4xl text-white/90 font-semibold mb-6">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
