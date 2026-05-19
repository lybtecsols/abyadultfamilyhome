import { AbyLogo } from "./Logo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Personal Care Assistance",
  "Medication Management",
  "Meal Preparation",
  "Companionship & Activities",
  "Health Monitoring",
  "Safe Home Environment",
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#0F4A44" }} className="text-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="overflow-hidden rounded-2xl inline-block">
                <AbyLogo height={80} />
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Quality care, comfort, safety, and well-being for residents in a warm, family-style
              home in Everett, Washington.
            </p>
            {/* Always Open Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: "rgba(43,181,160,0.2)", border: "1px solid rgba(43,181,160,0.4)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-semibold">Always Open — 24/7</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/profile.php?id=61576564145702"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#1877F2" }}
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-5"
              style={{ fontWeight: 700, fontSize: "1rem", borderBottom: "2px solid #2BB5A0", paddingBottom: "0.5rem" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span style={{ color: "#2BB5A0" }}>›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white mb-5"
              style={{ fontWeight: 700, fontSize: "1rem", borderBottom: "2px solid #2BB5A0", paddingBottom: "0.5rem" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc} className="flex items-center gap-2">
                  <button
                    onClick={() => handleNav("#services")}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span style={{ color: "#2BB5A0" }}>›</span>
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-5"
              style={{ fontWeight: 700, fontSize: "1rem", borderBottom: "2px solid #2BB5A0", paddingBottom: "0.5rem" }}
            >
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#2BB5A0" className="flex-shrink-0 mt-0.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3520+19th+St,+Everett,+WA+98201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm leading-relaxed hover:text-white transition-colors"
                >
                  3520 19th St<br />Everett, WA 98201
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#2BB5A0" className="flex-shrink-0">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+14254267155" className="text-white/70 text-sm hover:text-white transition-colors">
                  (425) 426-7155
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#2BB5A0" className="flex-shrink-0">
                  <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                </svg>
                <p className="text-white/70 text-sm">Fax: 425-666-1043</p>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#2BB5A0" className="flex-shrink-0">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:abyadultfamilyhome@gmail.com"
                  className="text-white/70 text-sm hover:text-white transition-colors break-all"
                >
                  abyadultfamilyhome@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#2BB5A0" className="flex-shrink-0">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                <a
                  href="https://abyadulthome.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Abyadultfamilyhome.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t px-4 sm:px-6 py-5"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Aby Adult Family Home. All rights reserved.
          </p>
          <p className="text-white/50 text-sm text-center">
            3520 19th St, Everett, WA 98201 — Licensed Adult Family Home
          </p>
        </div>
      </div>
    </footer>
  );
}