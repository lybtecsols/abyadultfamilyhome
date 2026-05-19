import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      label: "Address",
      value: "3520 19th St, Everett, WA 98201",
      link: "https://maps.google.com/?q=3520+19th+St+Everett+WA+98201",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      label: "Phone",
      value: "(425) 426-7155",
      link: "tel:+14254267155",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      value: "abyadultfamilyhome@gmail.com",
      link: "mailto:abyadultfamilyhome@gmail.com",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
        </svg>
      ),
      label: "Hours",
      value: "Always Open — 24/7",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #F0FDFA 0%, #E0F7F4 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#2BB5A0", color: "white" }}
          >
            Contact Us
          </span>
          <h2
            className="text-gray-800"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            We'd Love to Hear From You <br />
            <span style={{ color: "#2BB5A0" }}>Schedule a Visit Today</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto" style={{ fontSize: "1.05rem" }}>
            Reach out to our care team to ask questions, schedule a tour, or learn how we can help
            your family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-sm"
                style={{ border: "1.5px solid #C6F0EA" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#E0F7F4", color: "#2BB5A0" }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-0.5" style={{ fontWeight: 500 }}>
                    {info.label}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:underline"
                      style={{ fontWeight: 600, fontSize: "1rem" }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-800" style={{ fontWeight: 600, fontSize: "1rem" }}>
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Fax */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-sm"
              style={{ border: "1.5px solid #C6F0EA" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#E0F7F4", color: "#2BB5A0" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-0.5" style={{ fontWeight: 500 }}>
                  Fax
                </p>
                <p className="text-gray-800" style={{ fontWeight: 600, fontSize: "1rem" }}>
                  425-666-1043
                </p>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ height: "200px", border: "1.5px solid #C6F0EA" }}
            >
              <iframe
                title="Aby Adult Family Home Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.3!2d-122.20!3d47.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3520+19th+St%2C+Everett%2C+WA+98201!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg" style={{ border: "1.5px solid #C6F0EA" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#E0F7F4" }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#2BB5A0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "1.4rem", color: "#1E8A7E" }}>
                  Message Sent!
                </h3>
                <p className="text-gray-500 mt-3" style={{ maxWidth: "300px" }}>
                  Thank you for reaching out. We'll get back to you shortly to schedule your visit.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#2BB5A0", fontWeight: 600 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-gray-800 mb-6" style={{ fontWeight: 700, fontSize: "1.3rem" }}>
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-600 text-sm mb-1.5" style={{ fontWeight: 600 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                      style={{
                        borderColor: "#C6F0EA",
                        fontSize: "0.95rem",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#2BB5A0")}
                      onBlur={(e) => (e.target.style.borderColor = "#C6F0EA")}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 text-sm mb-1.5" style={{ fontWeight: 600 }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                        style={{ borderColor: "#C6F0EA", fontSize: "0.95rem" }}
                        onFocus={(e) => (e.target.style.borderColor = "#2BB5A0")}
                        onBlur={(e) => (e.target.style.borderColor = "#C6F0EA")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm mb-1.5" style={{ fontWeight: 600 }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="(425) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border outline-none transition-all"
                        style={{ borderColor: "#C6F0EA", fontSize: "0.95rem" }}
                        onFocus={(e) => (e.target.style.borderColor = "#2BB5A0")}
                        onBlur={(e) => (e.target.style.borderColor = "#C6F0EA")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1.5" style={{ fontWeight: 600 }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your loved one's needs or ask us any questions..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none"
                      style={{ borderColor: "#C6F0EA", fontSize: "0.95rem" }}
                      onFocus={(e) => (e.target.style.borderColor = "#2BB5A0")}
                      onBlur={(e) => (e.target.style.borderColor = "#C6F0EA")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #1E8A7E, #2BB5A0)",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    Send Message
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-2">
                    Or call us directly:{" "}
                    <a href="tel:+14254267155" style={{ color: "#2BB5A0", fontWeight: 600 }}>
                      (425) 426-7155
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
