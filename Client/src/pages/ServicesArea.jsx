
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceAreaHeroImage from "../assets/A1 Enterprises Neighborhood Service Coverage.png";

import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MapPinned,
  Navigation,
  PhoneCall,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// OFFICE DETAILS
// Confirm this previously shared Genius Enterprises address
// is also correct for A1 Enterprises before publishing.
const OFFICE = {
  name: "A1 Enterprises",
  address:
    "Shop No. 4, Chandrang Society, Near Chintamani Chowk, Walhekarwadi, Chinchwad, Pune, Maharashtra 411033, India",
  phone: "+917718978719",
};

// 24 SERVICE LOCATIONS
const serviceAreas = [
  "Baner", "Aundh", "Kothrud", "Wakad",
  "Hinjawadi", "Hadapsar", "Kharadi", "Viman Nagar",
  "Kalyani Nagar", "Koregaon Park", "Magarpatta",
  "Wagholi", "Kondhwa", "Katraj", "Undri",
  "Bavdhan", "Balewadi", "Pashan",
  "Shivajinagar", "Swargate", "Dhanori",
  "Pimpri", "Chinchwad", "Lohegaon",
];

const mapQuery = encodeURIComponent(OFFICE.address);
const mapEmbedUrl =
  `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const directionsUrl =
  `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function ServiceArea() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          // HERO ANIMATION
          gsap.fromTo(
            ".service-area-hero > *",
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power2.out",
            }
          );

          // HEADING SCROLL ANIMATION
          gsap.utils
            .toArray("[data-area-heading]")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { opacity: 0, x: -45, y: 10 },
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 96%",
                    end: "top 74%",
                    scrub: 1,
                  },
                }
              );
            });

          // PARAGRAPH SCROLL ANIMATION
          gsap.utils
            .toArray("[data-area-paragraph]")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { opacity: 0, x: 35, y: 10 },
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 96%",
                    end: "top 74%",
                    scrub: 1,
                  },
                }
              );
            });

          // OFFICE SECTION REVEAL
          gsap.utils
            .toArray(".office-reveal")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.75,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    once: true,
                  },
                }
              );
            });

          // LOCATION CARDS SCROLL ANIMATION
          gsap.utils
            .toArray(".service-location-item")
            .forEach((element, index) => {
              gsap.fromTo(
                element,
                {
                  opacity: 0,
                  y: 24,
                  scale: 0.97,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.5,
                  delay: (index % 6) * 0.045,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 94%",
                    once: true,
                  },
                }
              );
            });
        }
      );

      return () => mm.revert();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#F3F8FA] text-[#103E4B]"
    >

      {/* SECTION 1 - HERO */}
      <section
        className="bg-[#103E4B] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-12"
        style={{ backgroundImage: `linear-gradient(rgb(16 62 75 / 78%), rgb(16 62 75 / 78%)), url("${serviceAreaHeroImage}")`, backgroundPosition: "78% center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      >
        <div className="service-area-hero mx-auto max-w-7xl text-left">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-[#BCECF4]">
            <MapPin size={16} />
            PUNE & PCMC SERVICE LOCATIONS
          </span>

          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Home Appliance Repair{" "}
            <span className="text-[#81DCEC]">
              Service Areas in Pune
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            A1 Enterprises provides home appliance repair,
            installation and maintenance assistance across
            Pune and Pimpri-Chinchwad. Find your location below.
          </p>

          <a
            href="#service-locations"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#228BA3] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2D91AA]"
          >
            Explore Service Locations
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

      {/* SECTION 2 - OFFICE LOCATION */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#228BA3]">
              Our Office
            </p>

            <h2
              data-area-heading
              className="mt-3 text-3xl font-extrabold sm:text-4xl"
            >
              Find Our{" "}
              <span className="text-[#228BA3]">
                Office Location
              </span>
            </h2>

            <p
              data-area-paragraph
              className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
            >
              Visit or contact our office for home appliance
              repair and installation enquiries.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-2">

            {/* OFFICE ADDRESS CARD */}
            <div className="office-reveal rounded-2xl border border-[#DDE9ED] bg-white p-6 shadow-sm sm:p-8">

              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#E7F5F8] text-[#228BA3]">
                <MapPinned size={28} />
              </div>

              <h3 className="text-xl font-bold sm:text-2xl">
                {OFFICE.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#228BA3]">
                Office Address
              </p>

              <p className="mt-4 max-w-md text-sm leading-8 text-slate-600 sm:text-base">
                {OFFICE.address}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#103E4B] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#228BA3]"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>

                <a
                  href={`tel:${OFFICE.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#BFD6DD] bg-[#F3F8FA] px-5 py-3 text-sm font-semibold text-[#103E4B] transition-all hover:border-[#228BA3] hover:bg-[#EAF7FA]"
                >
                  <PhoneCall size={18} />
                  Call Office
                </a>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="office-reveal min-h-72.5 overflow-hidden rounded-2xl border border-[#DDE9ED] bg-white shadow-sm sm:min-h-87.5">
              <iframe
                title="Office address map"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-72.5 w-full sm:min-h-87.5"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICE LOCATIONS */}
      <section
        id="service-locations"
        className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#228BA3]">
              Areas We Cover
            </p>

            <h2
              data-area-heading
              className="mt-3 text-3xl font-extrabold sm:text-4xl"
            >
              Our{" "}
              <span className="text-[#228BA3]">
                Service Areas
              </span>
            </h2>

            <p
              data-area-paragraph
              className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
            >
              We provide home appliance service assistance in
              these major Pune and PCMC localities. Contact
              our team to confirm availability at your address.
            </p>
          </div>

          {/* LOCATION GRID */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

            {serviceAreas.map((location) => (
              <div
                key={location}
                className="service-location-item"
              >
                <div className="group flex h-full min-h-12 items-center justify-center gap-2 rounded-lg border border-[#DDECF0] bg-[#F8FBFC] px-2 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#228BA3] hover:bg-[#EAF7FA] hover:shadow-md">

                  <MapPin
                    size={17}
                    className="shrink-0 text-[#228BA3] transition-transform duration-300 group-hover:scale-125"
                  />

                  <h3 className="text-xs font-medium text-[#18344B] sm:text-sm">
                    {location}
                  </h3>

                </div>
              </div>
            ))}

          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-600">
            <CheckCircle2
              size={18}
              className="text-[#228BA3]"
            />
            Can't find your location? Call to check service availability.
          </div>

        </div>
      </section>

      {/* SECTION 4 - CONTACT CTA */}
      <section className="px-4 py-10 sm:px-6 lg:px-12">
        <div className="office-reveal mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-2xl bg-[#103E4B] px-6 py-8 text-white sm:px-10 lg:flex-row lg:items-center">

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Need Appliance Repair in Your Area?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-7 text-white/80">
              Tell us your location and appliance issue.
              Our team can confirm available repair services.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#103E4B] transition-colors hover:bg-[#E7F5F8]"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}
