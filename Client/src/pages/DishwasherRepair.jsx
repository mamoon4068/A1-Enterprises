import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dishwasherRepairImage from "../assets/diswater-reparing.jpg";

import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  PhoneCall,
  PlugZap,
  Power,
  Settings,
  ShieldCheck,
  Volume2,
  Wind,
  Wrench,
  AlertTriangle,
  UtensilsCrossed,
  Thermometer,
  DoorOpen,
  Droplets,
  Waves,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Add your own number, for example: "+91XXXXXXXXXX".
// Until then, the hero call button links to the booking form.
const BUSINESS_PHONE = "";

const HERO_IMAGE = dishwasherRepairImage;

// Optional: set VITE_ENQUIRY_API_URL to your real POST endpoint.
// Example: http://localhost:5000/api/enquiries
const ENQUIRY_API_URL = import.meta.env.VITE_ENQUIRY_API_URL || "";

const serviceOptions = [
  "Dishwasher Not Starting Repair",
  "Dishwasher Not Cleaning Dishes",
  "Dishwasher Drainage Repair",
  "Dishwasher Water Leakage Repair",
  "Dishwasher Heating & Drying Repair",
  "Dishwasher Door & Lock Repair",
  "Dishwasher Installation & Setup",
  "Dishwasher Maintenance & Inspection",
  "Other Dishwasher Issue",
];

const serviceAreas = [
  "Baner", "Aundh", "Kothrud", "Wakad", "Hinjawadi", "Hadapsar",
  "Kharadi", "Viman Nagar", "Kalyani Nagar", "Koregaon Park",
  "Magarpatta", "Wagholi", "Kondhwa", "Katraj", "Undri", "Bavdhan",
  "Balewadi", "Pashan", "Shivajinagar", "Swargate", "Dhanori",
  "Pimpri", "Chinchwad", "Lohegaon", "Other Pune Location",
];

const problems = [
  {
    icon: Power,
    title: "Dishwasher Not Starting",
    description: "Power supply, start button or control-panel issues.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dishes Not Cleaning",
    description: "Poor cleaning, residue or spray-arm problems.",
  },
  {
    icon: Waves,
    title: "Water Not Draining",
    description: "Standing water, blocked filters or drain-pump issues.",
  },
  {
    icon: Droplets,
    title: "Water Leakage",
    description: "Leaks from the door seal, hoses or connections.",
  },
  {
    icon: Settings,
    title: "Water Not Filling",
    description: "Low water flow, inlet valve or filling faults.",
  },
  {
    icon: Wind,
    title: "Dishes Not Drying",
    description: "Wet dishes after a cycle or drying-system problems.",
  },
  {
    icon: Thermometer,
    title: "Water Not Heating",
    description: "Cold wash cycles or heating-related issues.",
  },
  {
    icon: Volume2,
    title: "Unusual Noise",
    description: "Grinding, buzzing or rattling during operation.",
  },
  {
    icon: DoorOpen,
    title: "Door Not Closing",
    description: "Door latch, alignment or lock-related issues.",
  },
  {
    icon: AlertTriangle,
    title: "Error Codes",
    description: "Display warnings, sensor or programme faults.",
  },
  {
    icon: PlugZap,
    title: "Electrical Issues",
    description: "Unexpected shutdown, power tripping or wiring concerns.",
  },
  {
    icon: Wrench,
    title: "Installation & Service",
    description: "New dishwasher setup, hose fitting and maintenance.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Repair Request",
    description: "Call us or fill out the form with your dishwasher details and Pune location.",
  },
  {
    number: "02",
    title: "Discuss the Problem",
    description: "Tell us about cleaning, drainage, leakage or other symptoms.",
  },
  {
    number: "03",
    title: "Inspection & Diagnosis",
    description: "A technician examines the dishwasher and identifies the likely fault.",
  },
  {
    number: "04",
    title: "Repair & Final Check",
    description: "After discussing the work, the repair and basic operational checks are carried out.",
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

export default function DishwasherRepair() {
  const pageRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero entrance animation
        gsap.fromTo(
          ".dw-hero-content > *",
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
          }
        );

        // Home-page style: headings move from left as you scroll
        gsap.utils.toArray("[data-dw-heading]").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -55, y: 12 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );
        });

        // Paragraphs slide gently from the right
        gsap.utils.toArray("[data-dw-paragraph]").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: 45, y: 12 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                end: "top 70%",
                scrub: 1,
              },
            }
          );
        });

        // Each card reveals on reaching the viewport
        gsap.utils.toArray(".dw-problem-card").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 36, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 94%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        gsap.utils.toArray(".dw-step").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -28 },
            {
              opacity: 1,
              x: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        gsap.fromTo(
          ".dw-booking-form",
          { opacity: 0, y: 38 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".dw-booking-form",
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => mm.revert();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    if (feedback) setFeedback(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback(null);

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setFeedback({
        type: "error",
        text: "Enter a valid 10-digit Indian mobile number.",
      });
      return;
    }

    // Without an API URL, do NOT falsely tell the user a booking was sent.
    if (!ENQUIRY_API_URL) {
      setFeedback({
        type: "info",
        text: "Form is filled correctly, but it is in demo mode. Connect your enquiry API to receive bookings.",
      });
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch(ENQUIRY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "dishwasher-repair" }),
      });

      if (!response.ok) throw new Error("Could not submit your request");

      setFeedback({
        type: "success",
        text: "Your repair enquiry was submitted successfully. Our team will contact you.",
      });
      setForm(initialForm);
    } catch (error) {
      setFeedback({
        type: "error",
        text: error.message || "Submission failed. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#DCE8EC] bg-[#F8FBFC] px-4 py-3 text-sm text-[#103E4B] outline-none transition focus:border-[#228BA3] focus:bg-white focus:ring-2 focus:ring-[#228BA3]/15";

  return (
    <main ref={pageRef} className="overflow-hidden bg-[#F3F8FA] text-[#103E4B]">
      {/* =============== 1. HERO SECTION =============== */}
      <section className="relative isolate flex min-h-130 items-center overflow-hidden bg-[#103E4B] px-4 py-20 text-white sm:min-h-142.5 sm:px-6 lg:px-12">
        {/* Background image */}
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        {/* Dark teal overlay for readable text */}
        <div
          className="absolute inset-0 z-10 bg-linear-to-r from-[#0A303C]/95 via-[#103E4B]/85 to-[#103E4B]/40"
          aria-hidden="true"
        />

        <div className="dw-hero-content relative z-20 mx-auto w-full max-w-7xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur-sm">
            <MapPin size={15} /> PUNE & PCMC HOME APPLIANCE SERVICES
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Dishwasher <span className="text-[#81DCEC]">Repair in Pune</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
            Facing drainage, cleaning, water leakage or power problems with your dishwasher?
            Get help with dishwasher inspection, repair, installation and maintenance in Pune.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS_PHONE ? `tel:${BUSINESS_PHONE}` : "#schedule-repair"}
              className="group inline-flex items-center gap-3 rounded-xl bg-[#228BA3] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2D91AA] hover:shadow-xl"
            >
              <PhoneCall size={19} />
              {BUSINESS_PHONE ? "Call Now" : "Book a Repair"}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#dishwasher-problems"
              className="inline-flex items-center gap-2 rounded-xl border border-white/45 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Problems <ChevronRight size={17} />
            </a>
          </div>

          {/* <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-white/90 sm:text-sm">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#81DCEC]" /> Repair & Maintenance</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#81DCEC]" /> Dishwasher Inspection</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-[#81DCEC]" /> Pune Service Areas</span>
          </div> */}



<div className="mt-9 grid w-fit grid-cols-2 items-center gap-x-6 gap-y-3 text-xs font-medium text-white/90 sm:text-sm">

  <span className="inline-flex items-center gap-2">
    <CheckCircle2 size={17} className="shrink-0 text-[#81DCEC]" />
    Repair & Maintenance
  </span>

  <span className="inline-flex items-center gap-2">
    <CheckCircle2 size={17} className="shrink-0 text-[#81DCEC]" />
    Dishwasher Inspection
  </span>

  <span className="inline-flex items-center gap-2">
    <CheckCircle2 size={17} className="shrink-0 text-[#81DCEC]" />
    Pune Service Areas
  </span>

  <span className="inline-flex items-center gap-2">
    <CheckCircle2 size={17} className="shrink-0 text-[#81DCEC]" />
    Drainage & Leak Repair
  </span>

</div>

        </div>
      </section>

      {/* =============== 2. OVERVIEW =============== */}
      <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#228BA3]">Service Overview</p>
            <h2 data-dw-heading className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Dishwasher Repair & Care for Your Home
            </h2>
            <p data-dw-paragraph className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              A dishwasher makes daily kitchen cleaning easier, but clogged drainage, water leakage,
              poor washing performance or unusual noise can interrupt your routine.
              A1 Enterprises provides dishwasher repair and maintenance assistance across Pune.
            </p>
            <p data-dw-paragraph className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              We help inspect built-in and freestanding dishwashers, including common issues with
              water filling, pumps, heating, door seals and controls. Our team discusses the
              problem and possible repair options before service work begins.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: UtensilsCrossed, title: "Built-in Dishwasher", info: "Repair Support" },
              { icon: Settings, title: "Freestanding", info: "Fault Diagnosis" },
              { icon: BadgeCheck, title: "Installation", info: "Setup Assistance" },
              { icon: ShieldCheck, title: "Maintenance", info: "Inspection & Care" },
            ].map(({ icon: Icon, title, info }) => (
              <div key={title} className="dw-problem-card rounded-2xl border border-[#DFE9EC] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F5F8] text-[#228BA3]">
                  <Icon size={25} strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-[#103E4B]">{title}</h3>
                <p className="mt-1 text-xs text-slate-500">{info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== 3. COMMON PROBLEMS =============== */}
      <section id="dishwasher-problems" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#228BA3]">Common Dishwasher Issues</p>
            <h2 data-dw-heading className="text-3xl font-extrabold leading-tight text-[#103E4B] sm:text-4xl">
              We Fix All Types of <span className="text-[#228BA3]">Dishwasher Problems</span>
            </h2>
            <p data-dw-paragraph className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore common dishwasher faults, from water drainage and cleaning to heating and electrical issues.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {problems.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="dw-problem-card group rounded-2xl border border-[#DFE9EC] bg-[#F8FBFC] p-5 transition-colors duration-300 hover:border-[#228BA3] hover:bg-[#EFF9FB] hover:shadow-lg sm:p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3F2F6] text-[#228BA3] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#228BA3] group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-[#103E4B]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =============== 4. PROCESS + BOOKING FORM =============== */}
      <section id="schedule-repair" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#228BA3]">How It Works</p>
            <h2 data-dw-heading className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Our Simple <span className="text-[#228BA3]">Dishwasher Repair Process</span>
            </h2>
            <p data-dw-paragraph className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A straightforward process, from your first enquiry to inspection and repair.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* LEFT: PROCESS */}
            <div className="relative">
              {/* <div className="absolute bottom-10 left-6 top-7 w-px bg-[#B9DDE5]" aria-hidden="true" /> */}//comment out extra line
              <div className="space-y-8">
                {processSteps.map((step) => (
                  <div key={step.number} className="dw-step relative flex gap-5">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#103E4B] text-sm font-bold text-white shadow-md">
                      {step.number}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-[#103E4B]">{step.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#CDE7ED] bg-[#EAF7FA] p-5">
                <Clock3 size={23} className="mt-0.5 shrink-0 text-[#228BA3]" />
                <div>
                  <p className="font-semibold text-[#103E4B]">Service availability</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Appointment timing and service availability are confirmed when our team contacts you.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: BOOKING FORM */}
            <div className="dw-booking-form rounded-3xl border border-[#D9E8ED] bg-white p-5 shadow-[0_15px_50px_rgba(16,62,75,0.08)] sm:p-8">
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F5F8] text-[#228BA3]">
                  <CalendarCheck size={25} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold sm:text-2xl">
                    Schedule Your Dishwasher Repair
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Share your details and appliance issue to request a service enquiry.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Full Name <span className="text-red-500">*</span>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      required maxLength={80} autoComplete="name"
                      placeholder="Enter your name" className={inputClass}
                    />
                  </label>
                  <label className="block text-sm font-semibold">
                    Email Address <span className="text-red-500">*</span>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      required maxLength={120} autoComplete="email"
                      placeholder="Enter your email" className={inputClass}
                    />
                  </label>
                  <label className="block text-sm font-semibold">
                    Phone Number <span className="text-red-500">*</span>
                    <input
                      type="tel" inputMode="numeric" name="phone" value={form.phone}
                      onChange={handleChange} required maxLength={10}
                      pattern="[6-9][0-9]{9}" title="Enter a 10-digit Indian mobile number"
                      autoComplete="tel-national" placeholder="10-digit phone number"
                      className={inputClass}
                    />
                  </label>
                  <label className="block text-sm font-semibold">
                    Repairing Service <span className="text-red-500">*</span>
                    <select name="service" value={form.service} onChange={handleChange} required className={inputClass}>
                      <option value="">Select service</option>
                      {serviceOptions.map((item) => (
                        <option value={item} key={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block text-sm font-semibold">
                  Service Area <span className="text-red-500">*</span>
                  <select name="area" value={form.area} onChange={handleChange} required className={inputClass}>
                    <option value="">Choose your Pune location</option>
                    {serviceAreas.map((area) => (
                      <option value={area} key={area}>{area}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-semibold">
                  Message <span className="text-red-500">*</span>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={4} maxLength={1500} required
                    placeholder="Describe your dishwasher problem..."
                    className={`${inputClass} resize-y`}
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
                  type="submit" disabled={isSending}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#103E4B] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#228BA3] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Submitting..." : "Request Repair Service"}
                  {!isSending && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
                </button>
                <p className="text-center text-xs leading-5 text-slate-500">
                  Our team will confirm your enquiry, availability and next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =============== 5. BOTTOM CTA =============== */}
      <section className="px-4 pb-14 sm:px-6 lg:px-12 lg:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#103E4B] px-6 py-9 text-white sm:px-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Need Dishwasher Repair?</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
              Tell us what is wrong with your dishwasher. We will help you explore the service options available in your area.
            </p>
          </div>
          <a
            href="#schedule-repair"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#103E4B] transition-colors hover:bg-[#E7F5F8]"
          >
            Schedule a Repair <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
