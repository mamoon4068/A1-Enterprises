import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";


const services = [
  { name: "Washing Machine Repair", path: "/services/washing-machine-repair" },
  { name: "Microwave Repair", path: "/services/microwave-repair" },
  { name: "Dishwasher Repair", path: "/services/dishwasher-repair" },
  { name: "Dryer Repair", path: "/services/dryer-repair" },
  { name: "RO Repair", path: "/services/ro-repair" },
  { name: "Chimney Repair", path: "/services/chimney-repair" },
];

/**
 * On desktop: arrow-only toggle (Services text is a separate Link in Navbar).
 * On mobile/tablet: ONE Services label with arrow in the same button.
 * The mobile submenu is in document flow so it can expand naturally.
 */
export default function ServicesDropdown({
  mobile = false,
  parentOpen = true,
  onNavigate,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuId = useId();
  const { pathname } = useLocation();

  // Close submenu on navigation or when the hamburger menu closes.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, parentOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavigate = () => {
    setIsOpen(false);
    onNavigate?.();
  };

  return (
    <div ref={dropdownRef} className={mobile ? "w-full" : "relative"}>
      {/* Mobile displays the label once; desktop displays only the arrow. */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={mobile ? undefined : isOpen ? "Close services menu" : "Open services menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className={
          mobile
            ? "flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg/6 font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
            : "flex items-center justify-center text-gray-700 transition-colors duration-300 hover:text-[#228BA3]"
        }
      >
        {mobile && <span>Services</span>}
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <nav
          id={menuId}
          aria-label="Service pages"
          className={
            mobile
              ? "mt-1 w-full rounded-2xl border border-gray-100 bg-white p-2 shadow-sm"
              : "absolute left-1/2 top-full z-100 mt-4 w-67.5 -translate-x-1/2 rounded-[30px] border border-gray-100 bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
          }
        >
          <div className="flex flex-col gap-1">
            {mobile && (
              <Link
                to="/services"
                onClick={handleNavigate}
                className="rounded-xl px-5 py-3.5 text-sm font-semibold leading-6 text-[#103E4B] transition-all duration-300 hover:bg-[#EAF7FA] hover:text-[#228BA3]"
              >
                View All Services
              </Link>
            )}

            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={handleNavigate}
                className="rounded-xl px-5 py-3.5 text-sm font-medium leading-6 text-[#103E4B] transition-all duration-300 hover:translate-x-1 hover:bg-[#EAF7FA] hover:text-[#228BA3]"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
