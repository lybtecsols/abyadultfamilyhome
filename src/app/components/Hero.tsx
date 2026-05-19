import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroPhoto from "../../imports/WhatsApp_Image_2026-05-08_at_18.49.56.jpeg";

export function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroPhoto}
          alt="Aby Adult Family Home"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,120,112,0.85) 0%, rgba(43,181,160,0.70) 50%, rgba(0,0,0,0.45) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            <span className="text-white text-sm font-medium">Always Open · Accepting New Residents</span>
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Compassionate Care <br />
            <span style={{ color: "#A7F3D0" }}>for Your Loved Ones</span>
          </h1>

          <p
            className="text-white/90 mb-8"
            style={{ fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "540px" }}
          >
            At Aby Adult Family Home, we provide a safe, comfortable, and supportive environment
            where every individual feels truly at home — with personalized care, warm companionship,
            and peace of mind for families.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleNav("#contact")}
              className="px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                backgroundColor: "#2BB5A0",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 8px 25px rgba(43,181,160,0.4)",
              }}
            >
              Schedule a Visit
            </button>
            <button
              onClick={() => handleNav("#about")}
              className="px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255,255,255,0.5)",
                color: "white",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14">
            {[
              { value: "24/7", label: "Care & Support" },
              { value: "100%", label: "Personalized Care" },
              { value: "Clinically Guided", label: "Professional Nursing Care by an ARNP, RN" },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#A7F3D0" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.85rem", opacity: 0.85 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}