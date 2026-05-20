import * as React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import living1 from "../../imports/lgjklkgllkl.jpeg";
import living2 from "../../imports/image-1.png";
import living3 from "../../imports/image-2.png";
import living4 from "../../imports/image.png";
import bedroom1 from "../../imports/sdfgfdshgh.jpeg";
import bedroom2 from "../../imports/fgkhjlhjgll.jpeg";
import bathroom1 from "../../imports/sdfhgfsjgfsjf.jpeg";
import exterior1 from "../../imports/13.jpeg";
import exterior2 from "../../imports/24124.jpeg";
import exterior3 from "../../imports/adsfsadf.jpeg";
import hallway1 from "../../imports/asdfsaf.jpeg";
import hallway2 from "../../imports/asdgadg.jpeg";
import hallway3 from "../../imports/dgjhmvcmvcjm.jpeg";
import hallway4 from "../../imports/hjkhgjgjk.jpeg";

const categories = [
  { key: "all", label: "All Photos" },
  { key: "living", label: "Living Areas" },
  { key: "bedroom", label: "Bedrooms" },
  { key: "bathroom", label: "Bathrooms" },
  { key: "exterior", label: "Exterior" },
  { key: "hallway", label: "Hallways" },
];

const allPhotos = [
  { src: living1, title: "Bright Living Area", category: "living" },
  { src: living2, title: "Family Room", category: "living" },
  { src: living3, title: "Spacious Lounge", category: "living" },
  { src: living4, title: "Inviting Lounge", category: "living" },
  { src: bedroom1, title: "Cozy Bedroom", category: "bedroom" },
  { src: bedroom2, title: "Peaceful Bedroom", category: "bedroom" },
  { src: bathroom1, title: "Accessible Bathroom", category: "bathroom" },
  { src: exterior1, title: "Welcoming Front Entrance", category: "exterior" },
  { src: exterior2, title: "Home Exterior", category: "exterior" },
  { src: exterior3, title: "Landscaped Grounds", category: "exterior" },
  { src: hallway1, title: "Accessible Hallway", category: "hallway" },
  { src: hallway2, title: "Clear Walkway", category: "hallway" },
  { src: hallway3, title: "Main Corridor", category: "hallway" },
  { src: hallway4, title: "Connected Hallway", category: "hallway" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const filtered = React.useMemo(
    () => (activeCategory === "all" ? allPhotos : allPhotos.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filtered.length]);

  const hero = filtered[0];
  const gridThumbs = filtered.slice(1, 5);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
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
            A Warm, Welcoming Place{" "}
            <span style={{ color: "#2BB5A0" }}>to Call Home</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Take a look inside Aby Adult Family Home — thoughtfully designed for comfort, safety, and joy.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const count = cat.key === "all" ? allPhotos.length : allPhotos.filter((p) => p.category === cat.key).length;
            const active = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: active ? "#2BB5A0" : "#F0FDFA",
                  color: active ? "white" : "#1E8A7E",
                  border: `1.5px solid ${active ? "#2BB5A0" : "#A7F3D0"}`,
                }}
              >
                {cat.label}
                <span
                  className="ml-1.5 text-xs"
                  style={{ opacity: active ? 0.8 : 0.6 }}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Redfin-style photo grid */}
        {filtered.length > 0 && (
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "520px" }}>
            <div className="grid h-full gap-2" style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
              {/* Hero — spans full height on left */}
              <div
                className="relative cursor-pointer overflow-hidden group row-span-2"
                onClick={() => openLightbox(0)}
              >
                <ImageWithFallback
                  src={hero.src}
                  alt={hero.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* 2×2 thumbnail grid on right */}
              {[0, 1, 2, 3].map((i) => {
                const photo = gridThumbs[i];
                if (!photo) {
                  return <div key={i} className="bg-gray-100" />;
                }
                const isLast = i === 3;
                const remainingCount = filtered.length - 5;
                return (
                  <div
                    key={i}
                    className="relative cursor-pointer overflow-hidden group"
                    onClick={() => openLightbox(i + 1)}
                  >
                    <ImageWithFallback
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    {isLast && remainingCount > 0 && (
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                        onClick={(e) => { e.stopPropagation(); openLightbox(4); }}
                      >
                        <span className="text-white font-bold" style={{ fontSize: "2rem" }}>+{remainingCount}</span>
                        <span className="text-white/90 text-sm mt-1">See all photos</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* "See all photos" button */}
            <button
              onClick={() => openLightbox(0)}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-200 border border-gray-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="m3 9 18 0" />
                <path d="m9 21 0-12" />
              </svg>
              See all {filtered.length} photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Close gallery"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Counter + title */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
            <span className="text-white/60 text-sm font-medium">
              {lightboxIndex + 1} / {filtered.length}
            </span>
            <span className="text-white font-semibold text-base">
              {filtered[lightboxIndex].title}
            </span>
          </div>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Main image */}
          <div
            className="relative max-w-5xl w-full mx-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Next photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
            {filtered.map((photo, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                style={{
                  width: "64px",
                  height: "48px",
                  opacity: i === lightboxIndex ? 1 : 0.45,
                  border: i === lightboxIndex ? "2px solid #2BB5A0" : "2px solid transparent",
                  transform: i === lightboxIndex ? "scale(1.1)" : "scale(1)",
                }}
                aria-label={photo.title}
              >
                <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
