import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Archiive - Experience inspiring creative photography, storytelling, and unique visual content in Pune. Book your session or explore our portfolio now!" />
        <meta name="keywords" content="Archiive, photography, archive, creative, visual storytelling, photo studio, Pune, visual content, architectural photography, portraits, portfolio, photographers, inspiration, creative studio" />
        <meta name="author" content="Archiive Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Archiive | Creative Photography, Visual Storytelling & Studio in Pune" />
        <meta property="og:description" content="Archiive is a creative photography studio founded by three architects. We craft engaging visual content and tell stories through our lenses. Book now!" />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:url" content="https://archiive.studio/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Archiive | Creative Photography, Visual Storytelling & Studio in Pune" />
        <meta name="twitter:description" content="Discover unique and engaging visual content crafted by Archiive Studio. Experience architectural photography, portraiture, and more." />
        <meta name="twitter:image" content="/favicon-32x32.png" />

        {/* Structured Data for Google Rich Results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Archiive | Creative Photography Studio",
            "url": "https://archiive.co/",
            "sameAs": [
              "https://www.instagram.com/archiive_visuals",
            ],
            "logo": "/favicon-32x32.png",
            "image": [
              "/favicon-32x32.png"
            ],
            "description": "Archiive - Experience inspiring creative photography, architectural shoots, portraiture, and unique visual storytelling in Pune.",
            
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 8432360136",
              "contactType": "Contact"
            },
            "keywords": ["Archiive", "photography", "creative studio", "visual content", "storytelling", "Pune", "architectural", "portfolio", "portraits"]
          }`
        }} />

        {/* Script to force mobile view on phones */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var isMobile = /Mobi|Android/i.test(navigator.userAgent);
                if (isMobile) {
                  var meta = document.querySelector("meta[name=viewport]");
                  if (meta) {
                    meta.setAttribute("content", "width=480, user-scalable=no");
                  }
                }
              })();
            `,
          }}
        />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
