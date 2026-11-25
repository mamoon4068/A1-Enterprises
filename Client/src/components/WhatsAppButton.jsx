
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+91 77189 78719";

  const message =
    "Hello! I would like to know more about your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-25 right-10 sm:bottom-10 sm:right-10 z-9999 group flex items-center justify-center"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us!
      </span>

      {/* Pulse Animation */}
      <span className="absolute h-full w-full rounded-full bg-[#25D366] animate-ping opacity-30"></span>

      {/* WhatsApp Icon */}
      <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E]">
        <FaWhatsapp className="text-3xl sm:text-4xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
