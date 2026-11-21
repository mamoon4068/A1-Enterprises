// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// // Sample testimonials - replace with genuine reviews
// const reviews = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     service: "AC Repair",
//     location: "Pune",
//     message:
//       "Excellent service! The technician was professional and completed the work on time.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Priya Verma",
//     service: "Washing Machine Repair",
//     location: "Pune",
//     message:
//       "Very quick response and affordable pricing. I am happy with the service.",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Amit Kumar",
//     service: "Refrigerator Repair",
//     location: "Pune",
//     message:
//       "Great experience! Friendly staff and good quality repair service.",
//     rating: 5,
//   },
// ];

// function Testimonials() {
//   const sectionRef = useRef(null);

//   // Simple GSAP animation
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".testimonial-heading",
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.8 }
//       );

//       gsap.fromTo(
//         ".testimonial-card",
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           delay: 0.2,
//           ease: "power2.out",
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#F3F8FB] px-4 py-12 sm:px-6 sm:py-16 lg:px-12"
//     >
//       <div className="mx-auto max-w-7xl">

//         {/* Heading */}
//         <div className="testimonial-heading mb-10 text-center">
//           <p className="mb-2 text-sm font-semibold text-[#228BA3]">
//             CUSTOMER REVIEWS
//           </p>

//           <h2 className="text-3xl font-bold text-[#18344B] sm:text-4xl">
//             What Our Customers Say
//           </h2>

//           <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
//             Customer satisfaction is our first priority.
//             See what people say about our services.
//           </p>
//         </div>

//         {/* Testimonial Cards */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="testimonial-card flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
//             >

//               {/* Stars */}
//               <div className="mb-4 text-xl text-yellow-500">
//                 {"★".repeat(review.rating)}
//               </div>

//               {/* Review */}
//               <p className="mb-6 flex-1 text-sm leading-7 text-gray-600">
//                 "{review.message}"
//               </p>

//               {/* Customer Details */}
//               <div className="flex items-center gap-3 border-t border-gray-100 pt-4">

//                 {/* Avatar */}
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DDEEF2] font-bold text-[#228BA3]">
//                   {review.name
//                     .split(" ")
//                     .map((word) => word[0])
//                     .join("")}
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-[#18344B]">
//                     {review.name}
//                   </h3>

//                   <p className="text-xs text-gray-500">
//                     {review.service} • {review.location}
//                   </p>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Sample testimonials
// const reviews = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     service: "AC Repair",
//     location: "Pune",
//     message:
//       "Excellent service! The technician was professional and completed the work on time.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Priya Verma",
//     service: "Washing Machine Repair",
//     location: "Pune",
//     message:
//       "Very quick response and affordable pricing. I am happy with the service.",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Amit Kumar",
//     service: "Refrigerator Repair",
//     location: "Pune",
//     message:
//       "Great experience! Friendly staff and good quality repair service.",
//     rating: 5,
//   },
// ];

// function Testimonials() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       // 1. Heading scrolling animation
//       gsap.fromTo(
//         ".testimonial-title",
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.9,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".testimonial-title",
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//         }
//       );

//       // 2. Paragraph scrolling animation
//       gsap.fromTo(
//         ".testimonial-description",
//         {
//           opacity: 0,
//           y: 35,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           delay: 0.15,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".testimonial-description",
//             start: "top 90%",
//             toggleActions: "play none none none",
//           },
//         }
//       );

//       // 3. Cards scrolling animation
//       gsap.fromTo(
//         ".testimonial-card",
//         {
//           opacity: 0,
//           y: 60,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".testimonial-card",
//             start: "top 90%",
//             toggleActions: "play none none none",
//           },
//         }
//       );

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#F3F8FB] px-4 py-12 sm:px-6 sm:py-16 lg:px-12"
//     >
//       <div className="mx-auto max-w-7xl">

//         {/* Heading */}
//         <div className="mb-10 text-center">

//           <div className="testimonial-title">
//             <p className="mb-2 text-sm font-semibold text-[#228BA3]">
//               CUSTOMER REVIEWS
//             </p>

//             <h2 className="text-3xl font-bold text-[#18344B] sm:text-4xl">
//               What Our Customers Say
//             </h2>
//           </div>

//           <p className="testimonial-description mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
//             Customer satisfaction is our first priority.
//             See what people say about our services.
//           </p>

//         </div>

//         {/* Testimonial Cards */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="testimonial-card flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
//             >

//               {/* Stars */}
//               <div className="mb-4 text-xl text-yellow-500">
//                 {"★".repeat(review.rating)}
//               </div>

//               {/* Review */}
//               <p className="mb-6 flex-1 text-sm leading-7 text-gray-600">
//                 "{review.message}"
//               </p>

//               {/* Customer Details */}
//               <div className="flex items-center gap-3 border-t border-gray-100 pt-4">

//                 {/* Avatar */}
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DDEEF2] font-bold text-[#228BA3]">
//                   {review.name
//                     .split(" ")
//                     .map((word) => word[0])
//                     .join("")}
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-[#18344B]">
//                     {review.name}
//                   </h3>

//                   <p className="text-xs text-gray-500">
//                     {review.service} • {review.location}
//                   </p>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sample testimonials - replace with genuine reviews
const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    service: "AC Repair",
    location: "Pune",
    message:
      "Excellent service! The technician was professional and completed the work on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    service: "Washing Machine Repair",
    location: "Pune",
    message:
      "Very quick response and affordable pricing. I am happy with the service.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Kumar",
    service: "Refrigerator Repair",
    location: "Pune",
    message:
      "Great experience! Friendly staff and good quality repair service.",
    rating: 5,
  },
];

function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reduced motion preference support
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {

      // 1. Small heading: slide from left
      gsap.fromTo(
        ".testimonial-label",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-label",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Main heading: slide from right + zoom
      gsap.fromTo(
        ".testimonial-heading",
        {
          opacity: 0,
          x: 120,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-heading",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Description: move upward
      gsap.fromTo(
        ".testimonial-description",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonial-description",
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 4. Cards: upward + rotate + scale
      gsap.fromTo(
        ".testimonial-card",
        {
          opacity: 0,
          y: 100,
          rotation: -3,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 5. Text inside cards: fade in upward
      gsap.fromTo(
        ".review-message",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonial-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 6. User details: slide from left
      gsap.fromTo(
        ".review-user",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonial-grid",
            start: "top 78%",
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
      className="overflow-hidden bg-[#F3F8FB] px-4 py-12 sm:px-6 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading Section */}
        <div className="mb-10 text-center">

          <p className="testimonial-label mb-2 text-sm font-semibold text-[#228BA3]">
            CUSTOMER REVIEWS
          </p>

          <h2 className="testimonial-heading text-3xl font-bold text-[#18344B] sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="testimonial-description mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
            Customer satisfaction is our first priority.
            See what people say about our services.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="testimonial-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="testimonial-card flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >

              {/* Rating Stars */}
              <div className="mb-4 text-xl text-yellow-500">
                {"★".repeat(review.rating)}
              </div>

              {/* Review Text */}
              <p className="review-message mb-6 flex-1 text-sm leading-7 text-gray-600">
                "{review.message}"
              </p>

              {/* Customer Information */}
              <div className="review-user flex items-center gap-3 border-t border-gray-100 pt-4">

                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DDEEF2] font-bold text-[#228BA3]">
                  {review.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h3 className="font-semibold text-[#18344B]">
                    {review.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {review.service} • {review.location}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;