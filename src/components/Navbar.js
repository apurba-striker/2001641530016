import { useState, useCallback } from "react";

const navbarLinks = [{ label: "All Train", href: "/AllTrain", ariaLabel: "alltrain"},];

export const Navbar = ({ gradientBg, pageHeader }) => {
  const bgClass = gradientBg
    ? "bg-[url('/src/assets/features/s3.svg')] bg-fixed"
    : "";


  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`w-full bg-red pt-6 md:pt-8 flex flex-col px-6 justify-center items-center lg:sticky md:sticky relative lg:z-40`}
    >
      

      <div className="w-11/12 flex justify-between items-center relative mb-4">
        
          <NavButtons handleCalendlyClick={handleCalendlyClick} />
      

        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {pageHeader && (
        <OptionalHeader
          title={pageHeader.title}
          subtitle={pageHeader.subtitle}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <MobileNavbar
            onClose={() => setIsOpen(false)}
            onCalendlyClick={handleCalendlyClick}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

const NavButtons = ({ handleCalendlyClick }) => (
  <div className=" justify-end hidden md:flex">
    <div className="flex justify-center items-center p-0 navbar-button-text">
      {navbarLinks.map(({ href, label }) => (
        <a
          key={label}
          className="navbar-link mx-4 lg:mx-8 xl:mx-12"
          href={href}
        >
          {label}
        </a>
      ))}
    </div>
    <button
      onClick={handleCalendlyClick}
      className="bg-[#675AF9] px-4 py-2 flex rounded-full ml-4 lg:mx-8 xl:mx-0 xl:ml-4 navbar-button-2"
    >
      Schedule a Demo
    </button>
  </div>
);

const HamburgerMenu = ({ isOpen, setIsOpen }) => (
  <button
    className="md:hidden flex flex-col px-2 py-3 cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
  >
    <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
    <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
    <div className="w-5 h-0.5 bg-gray-500"></div>
  </button>
);
const LogoComponent = () => (
  <a className="navbar-link" href="/" aria-label="Home">
    <div className="flex justify-start items-center gap-5">
      <img src={Logo} alt="Company Logo" />
    </div>
  </a>
);

const OptionalHeader = ({ title, subtitle }) => (
  <div className="shrink-0 md:px-16 py-10 w-full">
    <div className="gap-3">
      <div className="text-3xl font-['Red_Hat_Display'] font-bold tracking-[1.12] text-[#210076]">
        {title}
      </div>
      <div className="text-lg mt-2 font-['Red_Hat_Text'] text-black/50">
        {subtitle}
      </div>
    </div>
  </div>
);

const MobileNavbar = ({ onClose, onCalendlyClick }) => (
  <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-white z-50 w-full items-center ">
    <div className="flex flex-col h-screen items-center navbar-background w-full">
      {navbarLinks.map(({ label, href, ariaLabel }) => (
        <a
          key={href}
          className="navbar-button-text flex w-full items-center justify-center p-10 px-12"
          href={href}
          onClick={onClose}
          aria-label={ariaLabel}
        >
          {label}
        </a>
      ))}
     
    </div>
  </div>
);
