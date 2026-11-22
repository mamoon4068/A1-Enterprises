
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TopAnnouncement = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    const animation = gsap.to(marquee, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    return () => animation.kill();
  }, []);

 const services = [
  "AC Installation",
  "Washing Machine Repair",
  "Home Appliance Repair",
  "Expert Technicians",
  "10,000+ Happy Customers",
  "Same-Day Service",
  "Affordable Pricing",
  "Guaranteed Quality",
  "24/7 Customer Support",
  "Genius Same-Day Service",
  "Transparent Pricing",
  "Customer Satisfaction",
];

  return (
    <div className="relative z-50 top-0 w-full overflow-hidden bg-white text-black py-3">
      <div
        ref={marqueeRef}
        className="flex w-max whitespace-nowrap"
      >
        {[...services, ...services].map((service, index) => (
          <span
            key={index}
            className="mx-8 text-sm md:text-base font-semibold tracking-wide"
          >
            <span className="text-yellow-400 mr-2">✦</span>
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopAnnouncement;
