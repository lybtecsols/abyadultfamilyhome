import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutPhoto1 from "../../imports/image-1.png";
import aboutPhoto2 from "../../imports/image-2.png";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#E0F7F4", color: "#2BB5A0" }}
          >
            About Us
          </span>
          <h2
            className="text-gray-800"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            Warmth, Dignity & Compassion <br />
            <span style={{ color: "#2BB5A0" }}>in Every Corner</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: "260px" }}>
                <ImageWithFallback
                  src={aboutPhoto1}
                  alt="Caregiver helping a resident in a comfortable home setting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8" style={{ height: "260px" }}>
                <ImageWithFallback
                  src={aboutPhoto2}
                  alt="Resident enjoying a calm and welcoming home environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl"
              style={{ backgroundColor: "#2BB5A0", minWidth: "220px", whiteSpace: "nowrap" }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div>
                <p style={{ color: "white", fontWeight: 700, fontSize: "0.9rem" }}>Licensed & Professional</p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem" }}>Expert Nursing-Led Care by an ARNP, RN</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 mt-6 md:mt-0">
            <p className="text-gray-600" style={{ fontSize: "1.05rem", lineHeight: 1.9 }}>
              We are excited to open our doors and hearts to serve families in our community with
              compassionate, professional care. At <strong style={{ color: "#2BB5A0" }}>Aby Adult Family Home</strong>,
              we believe every person deserves to feel at home.
            </p>
            <p className="text-gray-600" style={{ fontSize: "1.05rem", lineHeight: 1.9 }}>
              Our dedicated team is here to offer personalized care, warm companionship, and peace of
              mind to families seeking high-quality <strong style={{ color: "#2BB5A0" }}>adult family home care</strong> services in Everett, Washington.
            </p>

            {/* Value Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Safe Environment", "Comfortable Living", "Professional Care", "24/7 Support", "Warm Companionship"].map(
                (val) => (
                  <span
                    key={val}
                    className="px-4 py-1.5 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "#E0F7F4", color: "#1E8A7E" }}
                  >
                    {val}
                  </span>
                )
              )}
            </div>

            {/* Mission statement card */}
            <div
              className="flex items-center gap-4 p-5 rounded-2xl mt-4"
              style={{ backgroundColor: "#F0FDFA", border: "1.5px solid #A7F3D0" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#2BB5A0" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "#1E8A7E", fontSize: "1rem" }}>Our Promise to You</p>
                <p className="text-gray-500 text-sm mt-0.5">
                  "Every resident is family to us — treated with dignity, love, and respect."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}