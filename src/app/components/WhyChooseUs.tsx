import { ImageWithFallback } from "./figma/ImageWithFallback";
import whyPhoto from "../../imports/hjkhgjgjk.jpeg";

const reasons = [
  {
    number: "01",
    title: "Licensed & Professional",
    description:
      "Our home is managed by an ARNP, RN ensuring the highest standards of care, safety, and well-being for every resident.",
  },
  {
    number: "02",
    title: "Small, Intimate Setting",
    description:
      "Unlike large facilities, our adult family home provides a personalized, family-like environment where every resident is known by name and valued.",
  },
  {
    number: "03",
    title: "24/7 Availability",
    description:
      "We are always open and always available. Your loved ones receive round-the-clock attention and care whenever they need it.",
  },
  {
    number: "04",
    title: "Personalized Care Plans",
    description:
      "Every resident receives a customized care plan tailored to their unique health needs, preferences, and daily routines.",
  },
];

const testimonials = [
  {
    quote:
      "The care team at Aby Adult Family Home treats my mother like their own. She has never been happier or safer.",
    author: "Caitlin K.",
    role: "Daughter of Resident",
  },
  {
    quote:
      "Finding a place this warm, professional, and caring in Everett was a blessing for our entire family.",
    author: "Josh M.",
    role: "Son of Resident",
  },
  {
    quote:
      "Dorcas and her team go above and beyond every single day. Peace of mind is priceless.",
    author: "Vivian W.",
    role: "Family Member",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#E0F7F4", color: "#2BB5A0" }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-gray-800"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            A Place Where Your Loved One <br />
            <span style={{ color: "#2BB5A0" }}>Truly Belongs</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Reasons */}
          <div className="space-y-6">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="flex gap-5 p-5 rounded-2xl transition-all duration-200 hover:bg-gray-50"
              >
                <span
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black"
                  style={{ backgroundColor: "#E0F7F4", color: "#2BB5A0" }}
                >
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-gray-800 mb-1" style={{ fontWeight: 700, fontSize: "1rem" }}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-500" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: "480px" }}>
              <ImageWithFallback
                src={whyPhoto}
                alt="Aby Adult Family Home — comfortable and caring environment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div
              className="absolute -bottom-5 -left-5 p-5 rounded-2xl shadow-xl"
              style={{ backgroundColor: "white", border: "2px solid #E0F7F4", minWidth: "200px" }}
            >
              <div className="flex items-center gap-3 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm font-semibold">Highly Rated Care</p>
              <p className="text-gray-400 text-xs mt-0.5">Trusted by families in Everett, WA</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3
            className="text-center text-gray-700 mb-8"
            style={{ fontWeight: 700, fontSize: "1.4rem" }}
          >
            What Families Are Saying
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl"
                style={{
                  background: idx === 1 ? "linear-gradient(135deg, #1E8A7E, #2BB5A0)" : "#F8FFFE",
                  border: idx === 1 ? "none" : "1.5px solid #E0F7F4",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill={idx === 1 ? "rgba(255,255,255,0.4)" : "#A7F3D0"}
                  className="mb-4"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p
                  className="mb-5"
                  style={{
                    color: idx === 1 ? "rgba(255,255,255,0.9)" : "#4B5563",
                    fontSize: "0.93rem",
                    lineHeight: 1.7,
                  }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: idx === 1 ? "white" : "#1E8A7E",
                      fontSize: "0.9rem",
                    }}
                  >
                    {t.author}
                  </p>
                  <p
                    style={{
                      color: idx === 1 ? "rgba(255,255,255,0.7)" : "#9CA3AF",
                      fontSize: "0.8rem",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}