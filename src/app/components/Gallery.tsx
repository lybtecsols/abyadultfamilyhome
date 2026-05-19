import { ImageWithFallback } from "./figma/ImageWithFallback";
import galleryPhoto1 from "../../imports/lgjklkgllkl.jpeg";
import galleryPhoto2 from "../../imports/sdfgfdshgh.jpeg";
import galleryPhoto3 from "../../imports/sdfhgfsjgfsjf.jpeg";

const photos = [
  { src: galleryPhoto1, alt: "Aby Adult Family Home — welcoming living area" },
  { src: galleryPhoto2, alt: "Aby Adult Family Home — cozy room" },
  { src: galleryPhoto3, alt: "Aby Adult Family Home — home environment" },
];

export function Gallery() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #F0FDFA 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#E0F7F4", color: "#2BB5A0" }}
          >
            Our Home
          </span>
          <h2
            className="text-gray-800"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            A Warm, Welcoming Place <br />
            <span style={{ color: "#2BB5A0" }}>to Call Home</span>
          </h2>
          <p
            className="text-gray-500 mt-4 max-w-xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Take a look inside Aby Adult Family Home — thoughtfully designed for comfort, safety, and joy.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Large left photo */}
          <div className="sm:col-span-2 rounded-3xl overflow-hidden shadow-lg" style={{ height: "380px" }}>
            <ImageWithFallback
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Stacked right photos */}
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl overflow-hidden shadow-lg flex-1" style={{ minHeight: "175px" }}>
              <ImageWithFallback
                src={photos[1].src}
                alt={photos[1].alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg flex-1" style={{ minHeight: "175px" }}>
              <ImageWithFallback
                src={photos[2].src}
                alt={photos[2].alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-10 text-center">
          <p
            className="text-gray-500 italic"
            style={{ fontSize: "1rem", lineHeight: 1.7 }}
          >
            "Every room, every detail — designed with our residents' comfort and dignity in mind."
          </p>
        </div>
      </div>
    </section>
  );
}
