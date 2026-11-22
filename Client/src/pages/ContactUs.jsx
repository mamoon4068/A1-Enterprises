import { ENQUIRY_API_URL } from "../enquiryApi";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  CheckCircle2,
  Headset,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import logoA1 from "../assets/A1 Enterprises Appliance Services Logo.png";

gsap.registerPlugin(ScrollTrigger);

// ADD YOUR VERIFIED A1 ENTERPRISES DETAILS HERE.
// The earlier Genius Enterprises phone/address has NOT been
// confirmed as the A1 Enterprises contact details.
const CONTACT = {
  phone: "",    // e.g. "+91XXXXXXXXXX"
  email: "",    // e.g. "your-business-email@example.com"
  address: "",  // A1 Enterprises' real office address
};

const repairingServices = [
  "AC Repair & Installation",
  "Refrigerator Repair",
  "Washing Machine Repair",
  "Microwave Repair",
  "Dishwasher Repair",
  "Dryer Repair",
  "RO Water Purifier Repair",
  "Kitchen Chimney Repair",
  "Other Appliance Service",
];

const serviceAreas = [
  "Baner", "Aundh", "Kothrud", "Wakad", "Hinjawadi", "Hadapsar",
  "Kharadi", "Viman Nagar", "Kalyani Nagar", "Koregaon Park",
  "Magarpatta", "Wagholi", "Kondhwa", "Katraj", "Undri",
  "Bavdhan", "Balewadi", "Pashan", "Shivajinagar", "Swargate",
  "Dhanori", "Pimpri", "Chinchwad", "Lohegaon", "Other Pune Location",
];

// Requested marketing copy. Confirm 24/7 staffing, live tracking,
// licensing and certifications are actually offered before publishing.
const benefits = [
  {
    icon: BellRing,
    title: "Service Reminders & Live Tracking",
    description:
      "Stay informed about appointments, visit updates and the status of your service request.",
    number: "01",
  },
  {
    icon: Headset,
    title: "24/7 Customer Support Available",
    description:
      "Get help with repair enquiries, service information and booking assistance when you need it.",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "Respectful Teams That Protect Your Home",
    description:
      "We value careful work, clear communication and respect for your home during a service visit.",
    number: "03",
  },
  {
    icon: BadgeCheck,
    title: "Fully Licensed & Certified Technicians",
    description:
      "Our goal is dependable service, thoughtful inspection and professional appliance care.",
    number: "04",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  area: "",
  message: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-[#DCE8EC] bg-[#F8FBFC] px-4 py-3 text-sm text-[#103E4B] outline-none transition-colors focus:border-[#228BA3] focus:bg-white focus:ring-2 focus:ring-[#228BA3]/15";

export default function ContactUs() {
  const pageRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // First section: gentle entrance, similar to the home page.
        gsap.fromTo(
          ".contact-hero-content > *",
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.11,
            ease: "power2.out",
          }
        );

        // Headings move a little from the left as the user scrolls.
        gsap.utils.toArray("[data-contact-heading]").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -45, y: 10 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                end: "top 70%",
                scrub: 0.8,
              },
            }
          );
        });

        // Descriptions enter smoothly from the right.
        gsap.utils.toArray("[data-contact-paragraph]").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: 40, y: 10 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                end: "top 70%",
                scrub: 0.8,
              },
            }
          );
        });

        // Contact information and four benefit cards.
        gsap.utils.toArray(".contact-reveal").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 34, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 93%",
                once: true,
              },
            }
          );
        });
      });

      return () => mm.revert();
    }, pageRef);

    return () => context.revert();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (feedback) setFeedback(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    setFeedback(null);

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setFeedback({
        type: "error",
        text: "Please enter a valid 10-digit Indian mobile number.",
      });
      return;
    }

    if (!ENQUIRY_API_URL) {
      setFeedback({
        type: "info",
        text: "Form is ready, but your enquiry API is not connected yet. This request has not been sent.",
      });
      return;
    }

    setSending(true);
    try {
      const response = await fetch(ENQUIRY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact-page" }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Could not send your enquiry.");
      }

      setFeedback({
        type: "success",
        text: "Your enquiry has been submitted successfully. Our team will contact you.",
      });
      setForm(initialForm);
    } catch (error) {
      setFeedback({
        type: "error",
        text: error.message || "Submission failed. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const contactCards = [
    {
      icon: PhoneCall,
      title: "Phone Number",
      value: CONTACT.phone || "Add your phone number",
      href: CONTACT.phone ? `tel:${CONTACT.phone.replace(/\s/g, "")}` : null,
    },
    {
      icon: Mail,
      title: "Email Address",
      value: CONTACT.email || "Add your business email",
      href: CONTACT.email ? `mailto:${CONTACT.email}` : null,
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: CONTACT.address || "Add your verified office address",
      href: CONTACT.address
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`
        : null,
    },
  ];

  return (
    <main ref={pageRef} className="overflow-x-clip bg-[#F3F8FA] text-[#103E4B]">
      {/* ===================================================
          SECTION 1: CONTACT HERO
      =================================================== */}
      <section className="relative isolate overflow-hidden bg-[#103E4B] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#228BA3]/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-44 left-0 h-80 w-80 rounded-full bg-[#81DCEC]/10 blur-3xl" />

        <div className="contact-hero-content relative z-10 mx-auto max-w-7xl">
          <div className="mb-7 flex items-center gap-3">
            {/* < className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-lg sm:h-18 sm:w-18">
              {/* <img
                src={logoA1}
                alt="A1 Enterprises logo"
                className="h-full w-full object-contain"
              /> */}
            
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[2px] text-[#BCECF4]">
              <Headset size={16} /> CONTACT US
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            We're Here To <span className="text-[#81DCEC]">Help Today</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/85 sm:text-base">
            Need help with your air conditioner, washing machine, refrigerator,
            microwave or another home appliance? Tell A1 Enterprises what you need,
            and our team can discuss available repair, installation and maintenance services in Pune.
          </p>

          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#228BA3] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2D91AA] hover:shadow-lg"
          >
            Get in Touch <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ===================================================
          SECTION 2: CONTACT INFO
      =================================================== */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            {/* Not a button: intentionally no click or hover action */}
            <span className="inline-flex cursor-default select-none items-center gap-2 rounded-full border border-[#CDE5EB] bg-[#E7F5F8] px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[#228BA3]">
              <PhoneCall size={16} /> Contact Info
            </span>

            <h2
              data-contact-heading
              className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl"
            >
              Need Appliance Help? <span className="text-[#228BA3]">Let's Get in Touch</span>
            </h2>

            <p
              data-contact-paragraph
              className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base"
            >
              Contact us to ask about home appliance repair, installation or maintenance.
              Share your location and appliance problem so we can guide you on the next steps.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contactCards.map(({ icon: Icon, title, value, href }) => (
              <article
                key={title}
                className="contact-reveal rounded-2xl border border-[#DDE9ED] bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F5F8] text-[#228BA3]">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold">{title}</h3>
                {href ? (
                  <a
                    href={href}
                    target={title === "Office Address" ? "_blank" : undefined}
                    rel={title === "Office Address" ? "noopener noreferrer" : undefined}
                    className="mt-2 block wrap-break-word text-sm leading-7 text-slate-600 hover:text-[#228BA3]"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-2 wrap-break-word text-sm leading-7 text-slate-500">{value}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 3: STICKY ENQUIRY FORM + FOUR SERVICE CARDS
      =================================================== */}
      <section id="contact-form" className="scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-12 lg:pb-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* LEFT: FORM STICKS DURING RIGHT COLUMN SCROLL */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="contact-reveal rounded-3xl border border-[#D9E8ED] bg-white p-5 shadow-[0_16px_50px_rgba(16,62,75,0.08)] sm:p-8">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F5F8] text-[#228BA3]">
                  <Wrench size={25} />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold leading-tight sm:text-2xl">
                    Reach Out to Our Team
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Fill in your details and tell us which appliance needs attention.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Full Name <span className="text-red-500">*</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      maxLength={80}
                      placeholder="Enter your name"
                      className={inputClass}
                      required
                    />
                  </label>

                  <label className="block text-sm font-semibold">
                    Email Address <span className="text-red-500">*</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      maxLength={120}
                      placeholder="Enter your email"
                      className={inputClass}
                      required
                    />
                  </label>

                  <label className="block text-sm font-semibold">
                    Phone Number <span className="text-red-500">*</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={10}
                      pattern="[6-9][0-9]{9}"
                      title="Enter a valid 10-digit Indian mobile number"
                      placeholder="10-digit phone number"
                      className={inputClass}
                      required
                    />
                  </label>

                  <label className="block text-sm font-semibold">
                    Repairing Services <span className="text-red-500">*</span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="">Select service</option>
                      {repairingServices.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block text-sm font-semibold">
                  Service Area <span className="text-red-500">*</span>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="">Select your Pune location</option>
                    {serviceAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-semibold">
                  Message <span className="text-red-500">*</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={1500}
                    placeholder="Describe your appliance problem..."
                    className={`${inputClass} resize-y`}
                    required
                  />
                </label>

                {feedback && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl p-3 text-sm leading-6 ${
                      feedback.type === "success"
                        ? "bg-emerald-50 text-emerald-800"
                        : feedback.type === "error"
                        ? "bg-red-50 text-red-700"
                        : "bg-[#EAF7FA] text-[#103E4B]"
                    }`}
                  >
                    {feedback.text}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#103E4B] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#228BA3] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                  {sending ? null : <Send size={18} className="transition-transform group-hover:translate-x-1" />}
                </button>

                <p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-500">
                  <CheckCircle2 size={16} className="shrink-0 text-[#228BA3]" />
                  Service availability is confirmed after your enquiry.
                </p>
              </form>
            </div>
          </div>

          {/* RIGHT: FOUR FEATURE GRID CARDS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {benefits.map(({ icon: Icon, title, description, number }) => (
              <article
                key={title}
                className="contact-reveal group relative flex min-h-51.25 flex-col rounded-2xl border border-[#DDE9ED] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#228BA3] hover:bg-[#F4FBFC] hover:shadow-lg sm:p-7 lg:min-h-56.25"
              >
                <span className="absolute right-6 top-6 text-sm font-bold text-[#B8D5DC]">
                  {number}
                </span>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E7F5F8] text-[#228BA3] transition-colors duration-300 group-hover:bg-[#228BA3] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>
                <h3 className="max-w-sm text-lg font-bold leading-snug text-[#103E4B]">
                  {title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
