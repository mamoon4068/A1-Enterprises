// 
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Important Pune service locations
const serviceAreas = [
  "Baner", 
  "Aundh", 
   "Wakad",
  "Hinjawadi",
  "Kharadi",
  "Pimple Gurav", 
  "Pimple Saudagar", 
  "New Sangvi", 
  "Old Sangvi", 
  "Kasarwadi",
  "Moshi", 
  "Chikli",
  "Bhosri",
  "Bavdhan", 
  "Balewadi", 
  "Pashan", 
 "Pimpri", 
 "Chinchwad", 
 "Lohegaon", 
 "Other Pune Location",
];

function ServiceAreas() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches) {
      return;
    }

    const ctx = gsap.context(() => {

      // Heading scroll animation
      gsap.fromTo(
        ".area-heading",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".area-heading",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paragraph scroll animation
      gsap.fromTo(
        ".area-description",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".area-description",
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Compact location cards animation
      gsap.fromTo(
        ".area-card",
        {
          opacity: 0,
          y: 25,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: {
            each: 0.04,
            from: "start",
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".area-grid",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#F3F8FB] px-4 py-8 sm:px-6 sm:py-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-6 text-center">

          <p className="mb-2 text-xm font-semibold uppercase tracking-[2px] text-[#228BA3]">
            Our Service Locations
          </p>

          <h2 className="area-heading text-2xl font-bold text-[#18344B] sm:text-3xl">
            Areas We Serve in Pune
          </h2>

          <p className="area-description mx-auto mt-2 max-w-xl text-sm text-gray-600">
            A1 Enterprise provides washing machine, dishwasher and microwave, dryer repair services across major residential areas of Pune and Pimpri-Chinchwad.
          </p>

        </div>

        {/* LOCATION GRID */}
        <div className="area-grid grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {serviceAreas.map((location) => (
            <div
              key={location}
              className="area-card group flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#DDECF0] bg-white px-2 py-3 text-center shadow-sm transition-colors duration-300 hover:border-[#228BA3] hover:bg-[#EAF7FA] hover:shadow-md"
            >

              {/* LOCATION ICON */}
              <MapPin
                size={17}
                className="shrink-0 text-[#228BA3] transition-transform duration-300 group-hover:scale-125"
              />

              {/* LOCATION NAME */}
              <h3 className="text-xs font-medium text-[#18344B] sm:text-sm">
                {location}
              </h3>

            </div>
          ))}

        </div>

        {/* BOTTOM TEXT */}
        {/* <p className="mt-6 text-center text-xs text-gray-600 sm:text-sm">
          Looking for services in your area?
          <span className="ml-1 font-semibold text-[#228BA3]">
            Contact us to check availability.
          </span>
        </p> */}

      </div>
    </section>
  );
}

export default ServiceAreas;