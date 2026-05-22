import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#FFD700" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Discover SunAir supply INC's premium HVAC systems: heat pumps, air conditioners, furnaces, and air handlers. Efficient, reliable comfort solutions for every season." />
        <meta name="keywords" content="HVAC, heating, cooling, heat pumps, air conditioning, furnaces, air handlers" />
        <meta name="author" content="SunAir supply INC" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph (Social Media Sharing) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SunAir supply INC | Premium Heating & Cooling Solutions" />
        <meta property="og:description" content="Premium HVAC systems for complete climate control. Heat pumps, air conditioners, furnaces & more." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://sunair.example.com" />
        <meta property="og:site_name" content="SunAir supply INC" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SunAir supply INC | Premium Heating & Cooling Solutions" />
        <meta name="twitter:description" content="Premium HVAC systems for complete climate control." />
        <meta name="twitter:image" content="/images/twitter-image.png" />
        
        {/* Preconnect & DNS Prefetch for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        
        {/* Google Fonts - Professional Font Stack */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/images/sunair-logo.png" />
        <link rel="shortcut icon" href="/images/sunair-logo.png" />
        
        {/* CSS Variables for Theming */}
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --primary-color: #FFD700;
            --secondary-color: #0052CC;
            --text-dark: #1a1a1a;
            --text-light: #666666;
            --bg-light: #f9f9f9;
            --border-color: #e0e0e0;
            --transition: all 0.3s ease-in-out;
          }
        `}} />
        
        {/* No-JS Fallback */}
        <noscript>
          <style>{`
            body::before {
              content: "This website requires JavaScript. Please enable JavaScript in your browser settings.";
              display: block;
              padding: 20px;
              background-color: #fff3cd;
              color: #856404;
              text-align: center;
              font-family: Arial, sans-serif;
            }
          `}</style>
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
