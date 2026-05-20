export default function ProductCard({ 
  title, 
  capacity,
  features = [],
  image,
  pdfLink,
}) {
  return (
    <div className="w-full mb-16 pb-12 border-b border-gray-200 last:border-b-0 fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-sun-blue mb-4 leading-tight">
            {title}
          </h1>
          
          {capacity && (
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              {capacity}
            </h2>
          )}

          {features.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-sun-blue mb-6">
                Standard Features
              </h3>
              <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-sun-yellow text-2xl font-bold flex-shrink-0 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Right Column - Image */}
        {image && (
          <div className="image-container p-8 h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
