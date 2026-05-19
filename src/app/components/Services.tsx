const services = [
  {
    image: "https://images.unsplash.com/photo-1635301305776-c8cac70cf837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBoZWxwaW5nJTIwZWxkZXJseSUyMHBlcnNvbiUyMGJhdGhpbmclMjBncm9vbWluZ3xlbnwxfHx8fDE3NzYyNjEyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Personal Care Assistance",
    description:
      "Help with daily living activities including bathing, grooming, dressing, and mobility — delivered with dignity and respect.",
  },
  {
    image: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMG1lZGljYXRpb24lMjBwaWxscyUyMHNlbmlvciUyMGNhcmV8ZW58MXx8fHwxNzc2MjYxMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Medication Management",
    description:
      "Our licensed nursing professionals ensure proper medication administration, tracking, and coordination with healthcare providers.",
  },
  {
    image: "https://images.unsplash.com/photo-1765200231320-987437f4acc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY29va2VkJTIwaGVhbHRoeSUyMG1lYWwlMjBzZW5pb3IlMjBlbGRlcmx5fGVufDF8fHx8MTc3NjI2MTIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nutritious Meal Preparation",
    description:
      "Chef-prepared, home-cooked meals tailored to dietary needs and preferences — nourishing both body and soul.",
  },
  {
    image: "https://images.unsplash.com/photo-1659434567031-a98e1187a9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY29tcGFuaW9ucyUyMHBsYXlpbmclMjBib2FyZCUyMGdhbWUlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3NjI2MTIxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Companionship & Social Activities",
    description:
      "Meaningful social engagement, activities, and emotional support to maintain mental well-being and happiness.",
  },
  {
    image: "https://images.unsplash.com/photo-1666887360922-538c23f6dff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGNoZWNraW5nJTIwYmxvb2QlMjBwcmVzc3VyZSUyMGVsZGVybHklMjBwYXRpZW50JTIwaGVhbHRoJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzYyNjEyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Health Monitoring",
    description:
      "Regular health assessments, vital signs monitoring, and coordination with medical teams for proactive wellness care.",
  },
  {
    image: "https://images.unsplash.com/photo-1601617956235-c97e358d054f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwc2VuaW9yJTIwY2FyZSUyMGhvbWUlMjBsaXZpbmclMjByb29tJTIwY29tZm9ydGFibGV8ZW58MXx8fHwxNzc2MjYxMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Safe & Comfortable Home",
    description:
      "A warm residential setting in Everett, WA — designed to feel like home with safety features throughout.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #F0FDFA 0%, #ffffff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#E0F7F4", color: "#2BB5A0" }}
          >
            Our Services
          </span>
          <h2
            className="text-gray-800"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            Everything Your Loved One <br />
            <span style={{ color: "#2BB5A0" }}>Needs to Thrive</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto" style={{ fontSize: "1.05rem" }}>
            We offer a comprehensive range of care services delivered with professionalism, warmth,
            and genuine dedication.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white border overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: "rgba(43,181,160,0.15)",
                boxShadow: "0 2px 16px rgba(43,181,160,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 36px rgba(43,181,160,0.18)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(43,181,160,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 16px rgba(43,181,160,0.07)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(43,181,160,0.15)";
              }}
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Teal overlay tint on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: "#2BB5A0" }}
                />
                {/* Bottom gradient fade into card */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-10"
                  style={{
                    background: "linear-gradient(to bottom, transparent, #ffffff)",
                  }}
                />
              </div>

              {/* Text */}
              <div className="px-6 pb-6 pt-3">
                <h3
                  className="text-gray-800 mb-2"
                  style={{ fontWeight: 700, fontSize: "1.05rem" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-14 p-8 rounded-3xl text-center text-white"
          style={{
            background: "linear-gradient(135deg, #1E8A7E 0%, #2BB5A0 100%)",
          }}
        >
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Not Sure What Your Loved One Needs?
          </h3>
          <p className="text-white/85 mb-6" style={{ fontSize: "1rem" }}>
            Schedule a free consultation with our House Manager, ARNP, RN — we'll guide you every step of the way.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-full bg-white transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ color: "#1E8A7E", fontWeight: 700, fontSize: "1rem" }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}