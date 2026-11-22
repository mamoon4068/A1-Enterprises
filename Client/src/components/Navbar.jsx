
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

import logoA1 from "../assets/A1 Enterprises Appliance Services Logo.png";
import ServicesDropdown from "./ServicesDropdown";

// =====================================
// NAVIGATION LINKS
// =====================================

const navigationLinks = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Services Area", href: "/servicesarea" },
  { label: "Contact Us", href: "/contact" },
];

const phoneNumber = "+91 77189 787199";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const phoneHref = `tel:${phoneNumber.replace(/[^\d+]/g, "")}`;

  // =====================================
  // SCROLL DETECTION
  // =====================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================
  // NAVBAR ENTRANCE ANIMATION
  // =====================================

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const elements = [
        logoRef.current,
        ...linksRef.current.filter(Boolean),
        buttonRef.current,
      ].filter(Boolean);

      gsap.from(elements, {
        opacity: 0,
        y: -14,
        duration: 0.65,
        stagger: 0.065,
        ease: "power2.out",
        clearProps: "all",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // =====================================
  // MOBILE MENU ANIMATION
  // =====================================

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.killTweensOf(menu);

    if (open) {
      gsap.set(menu, { display: "block" });

      if (reducedMotion) {
        gsap.set(menu, {
          height: "auto",
          opacity: 1,
          y: 0,
        });
      } else {
        gsap.fromTo(
          menu,
          {
            height: 0,
            opacity: 0,
            y: -8,
          },
          {
            height: "auto",
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          }
        );
      }
    } else {
      if (reducedMotion) {
        gsap.set(menu, {
          display: "none",
          height: 0,
          opacity: 0,
        });
      } else {
        gsap.to(menu, {
          height: 0,
          opacity: 0,
          y: -8,
          duration: 0.25,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(menu, { display: "none" });
          },
        });
      }
    }

    return () => gsap.killTweensOf(menu);
  }, [open]);

  // =====================================
  // CLOSE MOBILE MENU AFTER NAVIGATION
  // =====================================

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // =====================================
  // KEYBOARD + OUTSIDE CLICK
  // =====================================

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        mobileButtonRef.current?.focus();
      }
    };

    const handleOutsideClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, [open]);

  // =====================================
  // CLOSE MENU ON DESKTOP RESIZE
  // =====================================

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (media.matches) setOpen(false);
    };

    media.addEventListener("change", handleResize);

    return () => {
      media.removeEventListener("change", handleResize);
    };
  }, []);

  // =====================================
  // NAVIGATION LINK DESIGN
  // =====================================

  const linkClass = (active) => `
    relative inline-flex h-10 items-center
    whitespace-nowrap text-[15px] font-medium
    transition-colors duration-300
    hover:text-[#14748A]
    after:absolute after:bottom-1 after:left-0
    after:h-[2px] after:rounded-full
    after:bg-[#14748A]
    after:transition-all after:duration-300
    hover:after:w-full
    ${
      active
        ? "text-[#103E4B] after:w-full"
        : "text-slate-700 after:w-0"
    }
  `;

  // =====================================
  // MAIN NAVBAR
  // =====================================

  return (
    <header
      ref={navRef}
      className={`
        sticky top-0 z-50 w-full
        border-b border-slate-100
        bg-white/95 backdrop-blur-xl
        transition-shadow duration-300
        ${
          scrolled
            ? "shadow-[0_8px_30px_rgba(15,23,42,0.09)]"
            : "shadow-none"
        }
      `}
    >
      <nav
        aria-label="Main navigation"
        className={`
          mx-auto flex w-full max-w-375
          items-center justify-between
          gap-3 px-3 sm:px-6 lg:px-5 xl:px-10
          transition-[height] duration-300
          ${
            scrolled
              ? "h-20 sm:h-24 lg:h-28"
              : "h-24 sm:h-28 lg:h-32"
          }
        `}
      >
        {/* =====================================
            BRAND / LOGO
        ===================================== */}

        <Link
          ref={logoRef}
          to="/home"
          onClick={() => setOpen(false)}
          aria-label="A1 Enterprises - Home"
          className="
            group flex min-w-0 shrink-0
            items-center gap-2 sm:gap-3
          "
        >
          <img
            src={logoA1}
            alt="A1 Enterprises Logo"
            className={`
              w-auto shrink-0 object-contain
              transition-all duration-300
              group-hover:scale-[1.035]
              ${
                scrolled
                  ? "h-14 sm:h-16 lg:h-20"
                  : "h-16 sm:h-20 lg:h-24"
              }
            `}
          />

          <span
            className="
              whitespace-nowrap
              text-[17px] font-bold
              tracking-tight text-[#103E4B]
              transition-colors duration-300
              group-hover:text-[#14748A]
              sm:text-xl lg:text-xl xl:text-2xl
            "
          >
            A1 Enterprises
          </span>
        </Link>

        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <div
          className="
            hidden items-center justify-center
            gap-3 lg:flex xl:gap-7
          "
        >
          {navigationLinks.map((link, index) => {
            if (link.label === "Services") {
              const active =
                location.pathname === "/services" ||
                location.pathname.startsWith("/services/");

              return (
                <div
                  key={link.label}
                  ref={(el) => {
                    linksRef.current[index] = el;
                  }}
                  className="flex items-center gap-1"
                >
                  <NavLink
                    to="/services"
                    className={linkClass(active)}
                  >
                    Services
                  </NavLink>

                  <ServicesDropdown />
                </div>
              );
            }

            return (
              <NavLink
                key={link.label}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
                to={link.href}
                className={({ isActive }) =>
                  linkClass(isActive)
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </div>

        {/* =====================================
            RIGHT SIDE BUTTON
        ===================================== */}

        <div className="flex shrink-0 items-center gap-3">
          <a
            ref={buttonRef}
            href={phoneHref}
            className="
              group hidden items-center
              justify-center gap-2
              rounded-lg bg-[#103E4B]
              px-4 py-2.5
              text-sm font-medium text-white
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#16596A]
              hover:shadow-md
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#14748A]
              lg:inline-flex
              xl:px-5
            "
          >
            Get Started

            <ArrowUpRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* =====================================
              MOBILE MENU TOGGLE
          ===================================== */}

          <button
            ref={mobileButtonRef}
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation-menu"
            className="
              flex h-11 w-11 items-center
              justify-center rounded-xl
              border border-slate-200
              bg-white text-[#103E4B]
              transition-all duration-300
              hover:border-[#14748A]
              hover:bg-[#EDF7F9]
              focus-visible:outline-2
              focus-visible:outline-[#14748A]
              lg:hidden
            "
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* =====================================
          MOBILE DROPDOWN MENU
      ===================================== */}

      <div
        ref={mobileMenuRef}
        id="mobile-navigation-menu"
        aria-hidden={!open}
        inert={!open}
        className="
          absolute left-0 top-full z-40
          hidden max-h-[calc(100dvh-6rem)]
          w-full overflow-y-auto
          border-t border-slate-100
          bg-white shadow-xl
          lg:hidden
        "
      >
        <div className="flex flex-col gap-1 px-5 py-5">
          {navigationLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div
                  key={link.label}
                  className="w-full"
                >
                  <ServicesDropdown
                    mobile
                    parentOpen={open}
                    onNavigate={() => setOpen(false)}
                  />
                </div>
              );
            }

            return (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `
                  flex items-center
                  rounded-xl px-4 py-3.5
                  text-[15px] font-medium
                  transition-all duration-300
                  hover:translate-x-1
                  hover:bg-[#EDF7F9]
                  hover:text-[#103E4B]
                  ${
                    isActive
                      ? "bg-[#EDF7F9] text-[#103E4B]"
                      : "text-slate-700"
                  }
                `}
              >
                {link.label}
              </NavLink>
            );
          })}

          {/* MOBILE GET STARTED */}

          <a
            href={phoneHref}
            onClick={() => setOpen(false)}
            className="
              mt-4 flex items-center
              justify-center gap-2
              rounded-lg bg-[#103E4B]
              px-5 py-3
              text-sm font-semibold text-white
              transition-all duration-300
              hover:bg-[#16596A]
              hover:shadow-md
            "
          >
            Get Started
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
