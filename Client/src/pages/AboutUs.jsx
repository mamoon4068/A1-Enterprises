
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  BadgeCheck,
  Clock3,
  Snowflake,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle2,
  Headset,
  MapPin,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

// Keep your existing About Us image
import aboutImage from "../assets/About-logo- design.png";
// Place the supplied cropped photo in src/assets/
import technicianImage from "../assets/why-choose-technician.jpg";
import OurValuesLastPic from "../assets/our-values-last-pic.webp"
import Image6 from "../assets/images-6.jpg";
import Image5 from "../assets/images-5.jpg";


gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Professional Diagnosis",
    description: "We carefully check the appliance to identify the actual cause of the problem.",
  },
  {
    title: "Reliable Repair Solutions",
    description: "We focus on practical repair solutions designed to restore proper appliance performance.",
  },
  {
    title: "Convenient Home Service",
    description: "Get appliance repair support at your home without the need to transport heavy appliances.",
  },
  {
    title: "Clear Communication",
    description: "We explain the appliance issue and required repair before proceeding with the work.",
  },
  {
    title: "Experienced Service",
    description: "Our technicians handle common problems across washing machines, dishwashers and microwave ovens.",
  },
  {
    title: "Customer-Focused Support",
    description: "We aim to make every service visit convenient, professional and dependable.",
  },
];

const features = [
  {
    icon: Wrench,
    title: "Expert Repair",
    description: "Practical repair solutions for home appliances and everyday household problems.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description: "Careful troubleshooting and maintenance focused on dependable results.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description: "Helpful assistance for appliance repair, installation and service enquiries.",
  },
];

// Keep these images inside Client/public/images/.
// The third one should be a transparent-background PNG for the screenshot look.
const IMAGES = {
  customer: "/images/customer-service-technician.jpg",
  improvement: "/images/technician-at-work.jpg",
  cta: "/images/technician-cutout.png",
};

export default function AboutUs({ phone = "" }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Heading: same as Home.jsx
        gsap.utils.toArray("h1, h2, h3").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -32, y: 10, scale: 0.98 },
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

        // Paragraph: same as Home.jsx
        gsap.utils.toArray("p").forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: 28, y: 12 },
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

        // Reveal the remaining marked elements separately.
        gsap.utils.toArray("[data-about-reveal]:not(h1, h2, h3, p)").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                once: true,
              },
            }
          );
        });

        // Timeline items appear individually as you reach them
        gsap.utils.toArray(".why-timeline-item").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 93%",
                once: true,
              },
            }
          );
        });

        // Image reveals softly, without continuous floating
        gsap.fromTo(
          ".why-technician-image",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".why-technician-image",
              start: "top 90%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".about-feature-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".about-feature-grid",
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      return () => mm.revert();
    }, pageRef);

    return () => ctx.revert();
  }, []);


  const sectionRef = useRef(null);
  const contactLink = phone ? `tel:${phone}` : "/contact";

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".values-heading",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".values-heading",
              start: "top 90%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".values-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".values-grid",
              start: "top 88%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".values-cta",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".values-cta",
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      return () => mm.revert();
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef} className="overflow-hidden bg-[#F3F8FA] text-[#103E4B]">
      {/* SECTION 1: EXISTING ABOUT INTRO */}
      <section id="about" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p data-about-reveal className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-[#228BA3]">
              About A1 Enterprises
            </p>

            <h1 data-about-reveal className="text-3xl font-extrabold leading-tight text-[#103E4B] sm:text-4xl lg:text-5xl">
              Your Home Appliances,
              <span className="mt-2 block text-[#228BA3]">Our Responsibility.</span>
            </h1>

            <p data-about-reveal className="mt-5 max-w-xl text-sm leading-8 text-gray-600 sm:text-base">
              Welcome to A1 Enterprises, your home appliance service partner in Pune.
              We provide appliance repairing, installation and maintenance services
              to help keep your household running smoothly.
            </p>

            <p data-about-reveal className="mt-4 max-w-xl text-sm leading-8 text-gray-600 sm:text-base">
              From air conditioners and refrigerators to washing machines,
              water purifiers and other appliances, our focus is on practical
              solutions, reliable support and customer satisfaction.
            </p>

            <div data-about-reveal className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={19} className="shrink-0 text-[#228BA3]" />
                <p className="text-sm font-medium text-[#103E4B]">Home Appliance Repair &amp; Maintenance</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={19} className="shrink-0 text-[#228BA3]" />
                <p className="text-sm font-medium text-[#103E4B]">Installation &amp; Service Assistance</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={19} className="shrink-0 text-[#228BA3]" />
                <p className="text-sm font-medium text-[#103E4B]">Serving Pune &amp; Pimpri-Chinchwad</p>
              </div>
            </div>

            <div data-about-reveal className="mt-8">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#103E4B] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#228BA3]"
              >
                Contact Our Team
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div data-about-reveal className="relative">
            <div className="absolute -inset-3 rounded-[30px] bg-[#228BA3]/15" />
            <div className="relative overflow-hidden rounded-[26px] border-[6px] border-white bg-white shadow-xl">
              <img
                src={aboutImage}
                alt="A1 Enterprises home appliance services"
                loading="lazy"
                className="h-72 w-full object-cover object-center sm:h-96 lg:h-105"
              />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-[#E1ECEF] bg-white px-4 py-3 shadow-lg sm:left-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7F5F8] text-[#228BA3]">
                <Settings size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#103E4B]">Appliance Care</h3>
                <p className="text-xs text-gray-500">Repair • Installation • Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NEW SCREENSHOT-STYLE WHY CHOOSE US TIMELINE */}
      <section className="bg-[#103E4B] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 data-about-reveal className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Why Choose A1 Enterprises
            </h2>
            <p data-about-reveal className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white sm:text-base">
              Reliable appliance repair is about more than fixing a fault. We focus
              on providing a convenient service experience from diagnosis to completion.
            </p>
          </header>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left: gold vertical timeline with 6 circle markers */}
            <div className="relative">
              <div className="space-y-9 sm:space-y-11">
                {reasons.map((reason, index) => (
                  <div key={reason.title} className="why-timeline-item relative pl-8">
                    {index < reasons.length - 1 && (
                      <div
                        className="absolute -bottom-11 left-1.75 top-2 w-px bg-[#E8AA35] sm:-bottom-13"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-white bg-[#228BA3]"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white sm:text-base">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: technician photo centered next to timeline */}
            <div className="why-technician-image w-full self-center">
              <img
                src={technicianImage}
                alt="Technician repairing a washing machine"
                loading="lazy"
                className="h-85 w-full rounded-3xl object-cover object-center sm:h-112.5 lg:h-140"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXISTING FEATURE CARDS */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 text-center">
            <p data-about-reveal className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[#228BA3]">
              Why Choose Us
            </p>
            <h2 data-about-reveal className="text-2xl font-bold text-[#103E4B] sm:text-3xl lg:text-4xl">
              Service You Can Count On
            </h2>
            <p data-about-reveal className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              We focus on practical appliance repair solutions, dependable service
              and helpful customer support.
            </p>
          </div>

          <div className="about-feature-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="about-feature-card h-full">
                  <div className="group flex h-full flex-col rounded-xl border border-[#DDE9ED] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#228BA3] hover:shadow-lg sm:p-7">
                    <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#E7F5F8] text-[#228BA3] transition-colors duration-300 group-hover:bg-[#228BA3] group-hover:text-white">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[#103E4B]">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Our values */}

       <section
            id="our-values"
            ref={sectionRef}
            className="w-full overflow-hidden bg-white px-4 pb-10 pt-8 text-[#080F1B] sm:px-6 sm:pb-12 sm:pt-10 lg:px-8 lg:pb-14 lg:pt-12"
          >
            <div className="mx-auto max-w-7xl">
              {/* INTRO */}
              <div className="values-heading mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#DCEEF3] px-4 py-2 text-xs font-bold text-[#188EAC]">
                  <Snowflake size={14} />
                  Our Values
                </span>
      
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[32px]">
                  Values That Drive Our Professional Service
                </h2>
      
                <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:text-[15px]">
                  We believe good appliance repair should be reliable,
                  transparent and convenient for every customer.
                </p>
              </div>
      
              {/* THREE-COLUMN VALUES LAYOUT */}
              <div className="values-grid mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
                {/* LEFT: CUSTOMER FIRST */}
                <article className="values-card relative min-h-87.5 overflow-hidden rounded-[20px] bg-[#E6EEF1] sm:min-h-92.5 lg:min-h-91.25">
                    <img
                   src={Image6}
                   alt="A1 Enterprises Appliance Repair Services"
                   className="absolute inset-0 h-full w-full object-cover object-center"
                   onError={(e) => {
                   console.error("Image failed to load:", e.currentTarget.src);
                    }}
                   />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      
                  <span className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-br-[20px] bg-white text-[#C48616]">
                    <Headset size={31} strokeWidth={2.6} />
                  </span>
      
                  <div className="absolute bottom-3 left-3 right-3 z-10 rounded-2xl bg-white px-5 py-5 shadow-sm sm:px-6">
                    <h3 className="text-lg font-bold">Customer-First Service</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      We put your appliance needs and convenience first.
                    </p>
                  </div>
                </article>
      
                {/* MIDDLE: TWO STACKED VALUE CARDS */}
                <div className="grid grid-rows-2 gap-5">
                  <article className="values-card relative flex min-h-41.25 flex-col justify-center overflow-hidden rounded-[20px] bg-[#E8F4F7] px-5 py-7 text-black sm:px-6">
                    <span className="absolute left-0 top-0 flex h-13 w-13 items-center justify-center rounded-br-[19px] bg-white text-[#C5891B]">
                      <BadgeCheck size={29} fill="currentColor" stroke="white" strokeWidth={2} />
                    </span>
                    <h3 className="mt-9 text-lg font-bold">Honesty &amp; Transparency</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      Clear communication about the appliance problem and required service.
                    </p>
                  </article>
      
                  <article className="values-card relative flex min-h-41.25 flex-col justify-center overflow-hidden rounded-[20px] bg-[#E8F4F7] px-5 py-7 sm:px-6">
                    <span className="absolute left-0 top-0 flex h-13 w-13 items-center justify-center rounded-br-[19px] bg-white text-[#d39115]">
                      <Award size={30} strokeWidth={2.8} />
                    </span>
                    <h3 className="mt-9 text-lg font-bold">Quality Workmanship</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      Professional attention to detail with a focus on dependable repair solutions.
                    </p>
                  </article>
                </div>
      
                {/* RIGHT: CONTINUOUS IMPROVEMENT */}
                <article className="values-card relative min-h-87.5 overflow-hidden rounded-[20px] bg-[#DCE8ED] sm:min-h-92.5 md:col-span-2 lg:col-span-1 lg:min-h-91.25">
                   <img
                   src={Image5}
                   alt="A1 Enterprises Appliance Repair Services"
                   className="absolute inset-0 h-full w-full object-cover object-center"
                   onError={(e) => {
                     console.error("Image failed to load:", e.currentTarget.src);
                   }}
                 />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      
                  <span className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-br-[20px] bg-white text-[#C48616]">
                    <TrendingUp size={31} strokeWidth={2.7} />
                  </span>
      
                  <div className="absolute bottom-3 left-3 right-3 z-10 rounded-2xl bg-white px-5 py-5 shadow-sm sm:px-6">
                    <h3 className="text-lg font-bold">Continuous Improvement</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      We continuously improve our service approach to provide a better customer experience.
                    </p>
                  </div>
                </article>
              </div>
      
              {/* BLUE CTA BANNER */}
          {/* BLUE CTA BANNER */}
<div className="values-cta relative mt-16 min-h-85 rounded-[20px] bg-[#103E4B] px-7 pt-10 text-white sm:mt-20 sm:px-10 md:mt-24 md:flex md:items-center md:px-12 md:py-12 lg:min-h-91.25">

  {/* LEFT SIDE CONTENT */}
  <div className="relative z-20 max-w-120 md:w-[55%]">

    <h2 className="max-w-105 text-2xl font-extrabold leading-tight sm:text-3xl">
      Get Reliable Appliance Repair Today
    </h2>

    <p className="mt-5 max-w-110 text-sm leading-6 text-white/95">
      Having trouble with your washing machine, dishwasher,
      microwave or dryer? Contact A1 Enterprises for convenient
      and professional home appliance repair services.
    </p>

    <a
      href={contactLink}
      className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#08121A] transition-colors hover:bg-[#E8F4F7]"
    >
      {phone ? "Call Now" : "Contact Now"}
      <ArrowRight size={17} />
    </a>

  </div>

  {/* RIGHT SIDE - OUR VALUES IMAGE */}
  <img
    src={OurValuesLastPic}
    alt="A1 Enterprises service technician"
    className="pointer-events-none relative z-10 mx-auto md:left-157 mt-30 h-65 max-w-full object-contain object-bottom md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-105 md:w-[51%] lg:right-3"
    onError={(e) => {
      e.currentTarget.style.display = "none";
    }}
  />

  {/* FLOATING BADGE 1 */}
  <span className="pointer-events-none absolute right-[25%] top-5 hidden items-center gap-2 rounded-full bg-white/30 px-7 py-2  text-xs font-bold text-white backdrop-blur-sm md:inline-flex">
    <Clock3 size={16} />
    Appliance Repair Support
  </span>

  {/* FLOATING BADGE 2 */}
  <span className="pointer-events-none absolute right-5 top-20 hidden items-center gap-2 rounded-full bg-white/30 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm md:inline-flex">
    Fast Response
    <Zap size={15} fill="currentColor" />
  </span>

  {/* MOBILE DECORATION */}
  <Wrench
    className="pointer-events-none absolute bottom-5 right-5 text-white/10 md:hidden"
    size={55}
  />

</div>
</div>
</section>
</main>
);
}
