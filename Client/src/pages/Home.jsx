
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Snowflake,
  Refrigerator,
  WashingMachine,
  Fan,
  Droplets,
  Microwave,
  ShieldCheck,
  Headset,
  CheckCircle2,
  Phone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ======================================
// SERVICE IMAGES
// ======================================

import logoA1 from "../assets/A1 Enterprises Appliance Services Logo.png";
import aboutImage from "../assets/About-logo- design.png";
import acInstallationImage from "../assets/Ac installation & reparing.jpg";
import roRepairImage from "../assets/RO-reparing.webp";
import microwaveRepairImage from "../assets/Microwave-Repair.png";
import dishwasherRepairImage from "../assets/diswater-reparing.jpg";
import chimneyRepairImage from "../assets/chimni-repair.jpg";

// ======================================
// BRAND LOGOS
// ======================================

import lgLogoImage from "../assets/lg-logo-image.png";
import samsungLogoImage from "../assets/samsung-logo.avif";
import whirlpoolLogoImage from "../assets/whirlpool-logo-png.png";
import ifbLogoImage from "../assets/IFB-logo.png";
import godrejLogoImage from "../assets/godrej-logo-png.png";
import blueStarLogoImage from "../assets/blue-star-limited-logo.png";
import voltasLogoImage from "../assets/voltas-logo.jpg";
import haierLogoImage from "../assets/Haier-Logo.wine.svg";
import washingMachineHome from "../assets/washing-machine-home.webp";
import boschLogoImage from "../assets/Bosch-Logo-ac-comapy.png";
import daikinLogoImage from "../assets/Daikin-AC-company.jpg";
import lloydLogoImage from "../assets/LLOYD-Logo-New-ac company.png";
import oGeneralLogoImage from "../assets/O-general-AC-comapy.avif";
import siemensLogoImage from "../assets/Siemens-Logo.wine-ac-copany.png";
import panasonicLogoImage from "../assets/panasonic-logo-png-svg.webp";
// Add testimonials
import Testimonials from "./Testimonials.jsx";
import ServiceArea from "./ServiceArea.jsx";

// ======================================
// BUSINESS CONFIGURATION
// ======================================

const BUSINESS = {
  name: "A1 Enterprises",
  phone: "+91 7718978719",
  logo: "/a1-logo.png",
  aboutImage,
};

// ======================================
// HERO SLIDES
// ======================================

const slides = [
  {
    id: 1,
    title: "AC Installation & Repair",
    description:
      "Professional AC installation, servicing, gas refilling, leakage repair and maintenance for your home or office.",
    image: acInstallationImage,
  },
  {
    id: 2,
    title: "Washing Machine Repair",
    description:
      "Professional washing machine repair for washing, spinning, drainage, noise and other common problems.",
    image: washingMachineHome,
  },
  {
    id: 3,
    title: "RO Repair & Maintenance",
    description:
      "Reliable RO water purifier repair and maintenance for leakage, low water flow and filtration issues.",
    image: roRepairImage,
  },
  {
    id: 4,
    title: "Microwave Repair & Services",
    description:
      "Microwave repair solutions for heating problems, power issues, display faults and operating problems.",
    image: microwaveRepairImage,
  },
  {
    id: 5,
    title: "Dishwasher Repair",
    description:
      "Dishwasher repair services for cleaning, draining and common operating problems.",
    image: dishwasherRepairImage,
  },
  {
    id: 6,
    title: "Chimney Repair",
    description:
      "Kitchen chimney repair, cleaning and maintenance services for your home.",
    image: chimneyRepairImage,
  },
];

// ======================================
// TRUSTED BRAND LOGOS
// ======================================

const companyLogos = [
  { name: "LG", image: lgLogoImage },
  { name: "Samsung", image: samsungLogoImage },
  { name: "Whirlpool", image: whirlpoolLogoImage },
  { name: "IFB", image: ifbLogoImage },
  { name: "Godrej", image: godrejLogoImage },
  { name: "Blue Star", image: blueStarLogoImage },
  { name: "Voltas", image: voltasLogoImage },
  { name: "Haier", image: haierLogoImage },
  { name: "Bosch", image: boschLogoImage },
  { name: "Daikin", image: daikinLogoImage },
  { name: "Lloyd", image: lloydLogoImage },
  { name: "O General", image: oGeneralLogoImage },
  { name: "Siemens", image: siemensLogoImage },
  { name: "Panasonic", image: panasonicLogoImage },
];

// ======================================
// WHY CHOOSE US
// ======================================

const highlights = [
  {
    icon: Wrench,
    title: "Experienced Service",
    description:
      "Practical repair and maintenance solutions for everyday appliance problems.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Repairs",
    description:
      "Careful troubleshooting and service focused on long-lasting appliance performance.",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description:
      "Helpful guidance for repair, installation and maintenance enquiries.",
  },
];

// ======================================
// SERVICES
// ======================================

const services = [
  {
    id: 1,
    title: "AC Repair & Installation",
    description:
      "AC installation, uninstallation, cooling checks, cleaning and general repair services.",
    icon: Snowflake,
  },
  {
    id: 2,
    title: "Refrigerator Repair",
    description:
      "Service for cooling issues, unusual noise, leakage and other common refrigerator problems.",
    icon: Refrigerator,
  },
  {
    id: 3,
    title: "Washing Machine Repair",
    description:
      "Repair assistance for washing, spinning, drainage and other machine faults.",
    icon: WashingMachine,
  },
  {
    id: 4,
    title: "Air Cooler Service",
    description:
      "Cooler cleaning, water pump checks, fan maintenance and repair solutions.",
    icon: Fan,
  },
  {
    id: 5,
    title: "RO Water Purifier Repair",
    description:
      "RO maintenance, filter checks, leakage inspection and water flow troubleshooting.",
    icon: Droplets,
  },
  {
    id: 6,
    title: "Microwave Repair",
    description:
      "Microwave troubleshooting for heating issues, controls and general operating problems.",
    icon: Microwave,
  },
];

// ======================================
// HOME COMPONENT
// ======================================

export default function Home() {
  const [current, setCurrent] = useState(0);

  const pageRef = useRef(null);
  const marqueeRef = useRef(null);

  const activeSlide = slides[current];

  const phoneLink = BUSINESS.phone
    ? `tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`
    : "/contact";

  // ======================================
  // HERO CONTROLS
  // ======================================

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // ======================================
  // AUTO SLIDER
  // ======================================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // ======================================
  // GSAP MARQUEE + SCROLL ANIMATIONS
  // ======================================

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          // TRUSTED BRAND ANIMATION
          if (marqueeRef.current) {
            gsap.to(marqueeRef.current, {
              xPercent: -50,
              duration: 25,
              ease: "none",
              repeat: -1,
            });
          }

          // HEADING SCROLL ANIMATION (LEFT TO RIGHT + FADE)
          // Movement follows the user's scrolling position.
          gsap.utils
            .toArray("[data-home-heading]")
            .forEach((item) => {
              gsap.fromTo(
                item,
                {
                  opacity: 0,
                  x: -35,
                  y: 8,
                  scale: 0.98,
                },
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 95%",
                    end: "top 65%",
                    scrub: 1,
                  },
                }
              );
            });

          // PARAGRAPH SCROLL ANIMATION (RIGHT TO LEFT + FADE)
          gsap.utils
            .toArray("[data-home-paragraph]")
            .forEach((item) => {
              gsap.fromTo(
                item,
                {
                  opacity: 0,
                  x: 30,
                  y: 10,
                },
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 95%",
                    end: "top 65%",
                    scrub: 1,
                  },
                }
              );
            });

          // EXISTING ABOUT / CONTENT REVEAL (UNCHANGED)
          gsap.utils
            .toArray(".about-reveal")
            .forEach((item) => {
              gsap.fromTo(
                item,
                {
                  opacity: 0,
                  y: 18,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.75,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 92%",
                    once: true,
                  },
                }
              );
            });

          // SERVICE CARDS
          gsap.fromTo(
            ".service-card",
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".services-grid",
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      );

      return () => mm.revert();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="w-full overflow-hidden bg-[#F3F8FA] text-[#103E4B]"
    >

      {/* =====================================
          SECTION 1 - HERO SLIDER
      ===================================== */}

      <section className="w-full px-4 py-7 sm:px-6 lg:px-8 lg:py-10">

        <div className="mx-auto max-w-7xl">

          <div className="relative flex min-h-120 items-center overflow-hidden rounded-2xl bg-[#103E4B] sm:min-h-132.5 lg:min-h-147.5">

            {/* BACKGROUND IMAGE */}
            {activeSlide.image && (
              <img
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT */}
            <div className="relative z-10 w-full px-6 py-14 sm:px-12 lg:px-20">

              <div className="max-w-2xl">

                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white">
                  <Wrench size={15} />
                  HOME APPLIANCE SERVICES
                </span>

                <h1 data-home-heading="true" className="max-w-2xl text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {activeSlide.title}
                </h1>

                <p data-home-paragraph="true" className="mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                  {activeSlide.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">

                  <a
                    href={phoneLink}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#103E4B] hover:bg-[#EAF4F6]"
                  >
                    Book Services
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href="#about"
                    className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Learn More
                  </a>

                </div>
              </div>
            </div>

            {/* ARROWS */}
            <div className="absolute right-5 bottom-5 z-20 flex items-center gap-3 sm:right-8 sm:bottom-8">

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white hover:bg-white hover:text-[#103E4B]"
              >
                <ChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white hover:bg-white hover:text-[#103E4B]"
              >
                <ChevronRight size={21} />
              </button>

            </div>
          </div>

          {/* SLIDER DOTS */}
          <div className="mt-5 flex items-center justify-center gap-2">

            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  current === index ? "true" : undefined
                }
                className={`h-2 rounded-full ${
                  current === index
                    ? "w-9 bg-[#103E4B]"
                    : "w-2 bg-[#B7CDD4]"
                }`}
              />
            ))}

          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 2 - TRUSTED BRANDS
      ===================================== */}

      <section className="w-full overflow-hidden bg-[#F3F8FA] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-10 max-w-2xl text-center">

            <span className="inline-block rounded-full border border-[#DCE9ED] bg-white px-4 py-2 text-xs font-semibold text-[#103E4B]">
              Trusted Brands
            </span>

            <h2 data-home-heading="true" className="mt-5 text-3xl font-bold tracking-tight text-[#103E4B] sm:text-4xl">
              Trusted Appliance Brands
              <span className="block">
                We Service
              </span>
            </h2>

            <p data-home-paragraph="true" className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We provide repair and maintenance services for
              appliances from leading and trusted brands.
            </p>

          </div>

          {/* GSAP MARQUEE */}
          <div className="w-full overflow-hidden">

            <div
              ref={marqueeRef}
              className="flex w-max items-center"
            >

              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-center"
                  aria-hidden={copy === 1}
                >

                  {companyLogos.map((brand) => (
                    <div
                      key={`${copy}-${brand.name}`}
                      className="mx-3 flex h-28 w-40 shrink-0 items-center justify-center rounded-xl border border-[#E0E9ED] bg-white p-5 sm:w-44"
                    >
                      <img
                        src={brand.image}
                        alt={
                          copy === 0
                            ? `${brand.name} logo`
                            : ""
                        }
                        loading="lazy"
                        draggable={false}
                        className="max-h-16 w-full object-contain"
                      />
                    </div>
                  ))}

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* ======================================
          SECTION 3 - ABOUT OUR COMPANY
      ====================================== */}

      <section
        id="about"
        className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8 lg:py-20"
      >

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE - EXISTING CONTENT */}
          <div className="about-reveal">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl text-white">

                <img
                  src={logoA1}
                  alt="A1 Enterprises Logo"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement
                      .querySelector("svg")
                      ?.classList.remove("hidden");
                  }}
                />

                <Snowflake
                  size={25}
                  className="hidden"
                />

              </div>

              <div>
                <p data-home-paragraph="true" className="text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[5px] text-[#228BA3]">
                  ABOUT OUR COMPANY
                </p>

                <p data-home-paragraph="true" className="text-2xl font-semibold">
                  A1 Enterprises
                </p>
              </div>

            </div>

            <h2 data-home-heading="true" className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
              Your Home Appliances,
              <span className="block text-[#228BA3]">
                Our Responsibility.
              </span>
            </h2>

            <p data-home-paragraph="true" className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              At A1 Enterprises, we provide home appliance
              repair, installation and maintenance services
              designed to help keep your household running
              smoothly.
            </p>

            <p data-home-paragraph="true" className="mt-4 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              From air conditioners and refrigerators to
              washing machines and water purifiers, we help
              customers find practical solutions for their
              everyday appliance needs.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-[#103E4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#195565]"
              >
                Explore Services
                <ArrowRight size={17} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#BFD5DB] bg-white px-6 py-3 text-sm font-semibold text-[#103E4B] hover:bg-[#EAF3F5]"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </a>

            </div>
          </div>

          {/* ======================================
              RIGHT SIDE - NEW IMAGE
              ONLY THIS DESIGN IS UPDATED
          ====================================== */}

          <div className="about-reveal w-full lg:pl-4">

            <div className="relative mx-auto w-full max-w-140">

              {/* SOFT OUTER BORDER */}
              <div className="absolute -inset-3 rounded-[30px] bg-[#228BA3]/15" />

              {/* MAIN IMAGE BORDER */}
              <div className="relative overflow-hidden rounded-[26px] border-[6px] border-white bg-white shadow-lg">

                <img
                  src={BUSINESS.aboutImage}
                  alt="Home appliance repair technician at work"
                  loading="lazy"
                  className="h-70 w-full object-cover object-center sm:h-90 lg:h-105  "
                />

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ======================================
          SECTION 4 - WHY CHOOSE US
      ====================================== */}

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        <div className="about-reveal mx-auto max-w-7xl rounded-2xl bg-[#103E4B] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold tracking-[2px] text-[#A5E2ED]">
              WHY CHOOSE A1 ENTERPRISES
            </span>

            <h2 data-home-heading="true" className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Experienced Service.
              <span className="block">
                Reliable Repairs. Expert Support.
              </span>
            </h2>

            <p data-home-paragraph="true" className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Our focus is on practical service, careful
              appliance troubleshooting and clear support
              throughout your repair or installation enquiry.
            </p>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">

            {highlights.map(
              ({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/20 p-5 sm:p-6"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#A5E2ED]">
                    <Icon size={25} />
                  </div>

                  <h3 data-home-heading="true" className="mt-5 text-lg font-semibold">
                    {title}
                  </h3>

                  <p data-home-paragraph="true" className="mt-3 text-sm leading-7 text-slate-200">
                    {description}
                  </p>

                </div>
              )
            )}

          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 5 - SERVICES
      ====================================== */}

      <section
        id="services"
        className="scroll-mt-24 px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="about-reveal mx-auto mb-11 max-w-3xl text-center">

            <span className="inline-block rounded-full border border-[#DCE9ED] bg-white px-4 py-2 text-xs font-bold tracking-wide text-[#228BA3]">
              OUR SERVICES
            </span>

            <h2 data-home-heading="true" className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#103E4B] sm:text-4xl">
              Comprehensive Home Appliance
              <span className="block">
                Repair Services
              </span>
            </h2>

            <p data-home-paragraph="true" className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore our repair, installation and maintenance
              services for the appliances you use every day.
            </p>

          </div>

          <div className="services-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="service-card group flex flex-col rounded-2xl border border-[#DFE9EC] bg-white p-6 shadow-sm transition-colors duration-200 hover:border-[#9DC6D0] sm:p-7"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EAF4F6] text-[#103E4B]">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 data-home-heading="true" className="mt-6 text-lg font-bold text-[#103E4B]">
                    {service.title}
                  </h3>

                  <p data-home-paragraph="true" className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href={phoneLink}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#228BA3] hover:text-[#103E4B]"
                  >
                    Enquire Now
                    <ArrowUpRight size={17} />
                  </a>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      <Testimonials />
      <ServiceArea />

      {/* ======================================
          SECTION 6 - CONTACT CTA
      ====================================== */}

      <section className="px-4 pb-6 sm:px-6 lg:px-8 lg:pb-8">

        <div className="about-reveal mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-[#DFE9EC] bg-white p-7 sm:p-10 lg:flex-row lg:items-center">

          <div>

            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#228BA3]">
              <CheckCircle2 size={18} />
              HOME APPLIANCE ASSISTANCE
            </div>

            <h2 data-home-heading="true" className="text-2xl font-bold text-[#103E4B] sm:text-3xl">
              Need Help With an Appliance?
            </h2>

            <p data-home-paragraph="true" className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Tell us about your appliance issue and contact
              our team to discuss the available service options.
            </p>

          </div>

          <a
            href={phoneLink}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#103E4B] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#195565]"
          >
            <Phone size={18} />
            {BUSINESS.phone ? "Call Our Team" : "Contact Us"}
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}
