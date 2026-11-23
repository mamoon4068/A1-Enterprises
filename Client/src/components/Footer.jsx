
import { useState } from "react";
import logoA1 from "../assets/A1 Enterprises Appliance Services Logo.png";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

// =====================================
// A1 ENTERPRISES BUSINESS DETAILS
// =====================================

const business = {
  name: "A1 Enterprises",

  // Add your actual contact details
  phone: "917718978719",
  email: "a1enterprisesservices03@gmail.com",
  address: "Pawar Nagar Near  Dange Chowk Pune 411033",

  // Add actual social media profile URLs
  facebook: "",
  instagram: "",
  youtube: "",
  linkedin: "",
};

// =====================================
// QUICK LINKS
// =====================================

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

// =====================================
// SERVICES
// =====================================

const services = [
  "AC Repair & Installation",
  "Refrigerator Repair",
  "Washing Machine Repair",
  "Dishwasher Repair",
  "Chimney Repair",
];

// =====================================
// SOCIAL MEDIA
// =====================================

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: business.facebook,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: business.instagram,
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: business.youtube,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: business.linkedin,
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: business.phone
      ? `https://wa.me/${business.phone}`
      : "",
  },
];

// =====================================
// FOOTER COMPONENT
// =====================================

export default function Footer() {
  const [email, setEmail] = useState("");

  const phoneLink = business.phone
    ? `tel:+${business.phone}`
    : "/contact";

  const emailLink = business.email
    ? `mailto:${business.email}`
    : "/contact";

  // EMAIL ENQUIRY FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!business.email) {
      alert("Please add your business email address.");
      return;
    }

    const subject = encodeURIComponent(
      "Appliance Service Enquiry - A1 Enterprises"
    );

    const body = encodeURIComponent(
      `Hello A1 Enterprises,

I would like to enquire about your appliance services.

My Email: ${email}

Thank you.`
    );

    window.location.href =
      `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  // BACK TO TOP
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <footer className="w-full">

      {/* ==================================
          TOP CONTACT BAR
      ================================== */}

      <div className="bg-[#EAF4F6] text-[#102C3A]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:justify-items-center">

          {/* EMAIL */}
          <a
            href={emailLink}
            className="group flex items-center gap-3"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#228BA3] text-white">
              <Mail size={23} />
            </span>

            <span className="min-w-0">
              <strong className="block text-sm font-semibold">
                Email
              </strong>

              <span className="mt-1 block break-all text-sm text-slate-600 group-hover:text-[#228BA3]">
                {business.email || "Send an Email Enquiry"}
              </span>
            </span>
          </a>

          {/* PHONE */}
          <a
            href={phoneLink}
            className="group flex items-center gap-3"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#228BA3] text-white">
              <Phone size={23} />
            </span>

            <span>
              <strong className="block text-sm font-semibold">
                Phone
              </strong>

              <span className="mt-1 block text-sm text-slate-600 group-hover:text-[#228BA3]">
                {business.phone
                  ? `+${business.phone}`
                  : "Call A1 Enterprises"}
              </span>
            </span>
          </a>

          {/* OFFICE ADDRESS */}
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#228BA3] text-white">
              <MapPin size={23} />
            </span>

            <span>
              <strong className="block text-sm font-semibold">
                Office Address
              </strong>

              <span className="mt-1 block text-sm leading-6 text-slate-600">
                {business.address}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* ==================================
          MAIN FOOTER
      ================================== */}

      <div className="bg-[#103E4B] text-white">
        <div className="mx-auto max-w-7xl px-5 pt-10 pb-8 sm:px-8">

          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {/* COMPANY DETAILS */}
            <div>
              <a
                href="/"
                className="flex items-center gap-3"
              >
                <img src={logoA1} alt="A1 Enterprises logo" className="h-20 w-20 shrink-0 rounded-xl object-contain" />

                <span>
                  <h2 className="text-xl font-bold">
                    A1 Enterprises
                  </h2>

                  <p className="mt-1 text-xs text-slate-300">
                    Home Appliance Services
                  </p>
                </span>
              </a>

              <p className="mt-5 text-sm leading-7 text-slate-200">
                AC, refrigerator, washing machine and cooler
                repair, servicing and installation.
              </p>

              {/* SOCIAL MEDIA ICONS */}
              <h4 className="mt-5 mb-3 text-sm font-semibold">
                Follow Us
              </h4>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(
                  ({ name, icon: Icon, url }) => (
                    <a
                      key={name}
                      href={url || "/contact"}
                      target={url ? "_blank" : undefined}
                      rel={
                        url
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={name}
                      title={name}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white hover:border-sky-300 hover:text-sky-300"
                    >
                      <Icon size={18} />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="mb-5 text-lg font-bold">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm text-slate-200">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="hover:text-sky-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="mb-5 text-lg font-bold">
                Our Services
              </h3>

              <ul className="space-y-3 text-sm text-slate-200">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="/services"
                      className="hover:text-sky-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div>
              <h3 className="mb-5 text-lg font-bold">
                Get in Touch
              </h3>

              {/* PHONE */}
              <a
                href={phoneLink}
                className="mb-3 flex items-center gap-3 text-sm text-slate-200 hover:text-sky-300"
              >
                <Phone size={17} className="shrink-0" />
                <span>
                  {business.phone
                    ? `+${business.phone}`
                    : "Call A1 Enterprises"}
                </span>
              </a>

              {/* EMAIL */}
              <a
                href={emailLink}
                className="mb-3 flex items-center gap-3 text-sm text-slate-200 hover:text-sky-300"
              >
                <Mail size={17} className="shrink-0" />

                <span className="break-all">
                  {business.email || "Email Enquiry"}
                </span>
              </a>

              {/* ADDRESS */}
              <div className="mb-5 flex items-start gap-3 text-sm text-slate-200">
                <MapPin
                  size={17}
                  className="mt-1 shrink-0"
                />

                <span className="leading-6">
                  {business.address}
                </span>
              </div>

              {/* EMAIL FORM */}
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="footer-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Send an Enquiry
                </label>

                <div className="flex overflow-hidden rounded-md bg-white">
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="min-w-0 flex-1 px-3 py-3 text-sm text-gray-800 outline-none"
                  />

                  <button
                    type="submit"
                    aria-label="Send enquiry"
                    className="flex items-center justify-center bg-[#228BA3] px-4 text-white hover:bg-[#176F83]"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ==================================
            COPYRIGHT BAR
        ================================== */}

        <div className="border-t border-white/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 text-center text-xs text-slate-300 sm:flex-row sm:px-8">

            <p>
              © {new Date().getFullYear()} A1 Enterprises.
              All Rights Reserved.
            </p>

            <p>
              Designed by{" "}
              <span className="font-semibold text-white">
                Earthix
              </span>
            </p>

            <button
              type="button"
              onClick={backToTop}
              className="flex items-center gap-1 text-white hover:text-sky-300"
            >
              Back to Top
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
