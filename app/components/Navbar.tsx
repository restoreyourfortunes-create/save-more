"use client";
import { useState } from "react";

const PHONE = "210-378-0220";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2D6A4F] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-[#FAF7F2] text-2xl font-bold tracking-tight">
          Elro-EE<span className="text-[#D4A853]"> Home Buyers</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#situations" className="text-[#FAF7F2] hover:text-[#D4A853] transition-colors text-sm font-medium">
            How We Help
          </a>
          <a href="#how-it-works" className="text-[#FAF7F2] hover:text-[#D4A853] transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#why-us" className="text-[#FAF7F2] hover:text-[#D4A853] transition-colors text-sm font-medium">
            Why Elro-EE
          </a>
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="bg-[#D4A853] text-[#1B4332] font-bold px-5 py-2 rounded-full hover:bg-[#c49640] transition-colors text-sm"
          >
            {PHONE}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#FAF7F2] focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1B4332] px-4 pb-4 flex flex-col gap-4">
          <a href="#situations" onClick={() => setOpen(false)} className="text-[#FAF7F2] hover:text-[#D4A853] transition-colors text-sm font-medium pt-2">
            How We Help
          </a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-[#FAF7F2] hover:text-[#D4A853] transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#why-us" onClick={() => setOpen(false)} className="text-[#FAF7F2] hover:text-[#D4A853] transition-colors text-sm font-medium">
            Why Elro-EE
          </a>
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="bg-[#D4A853] text-[#1B4332] font-bold px-5 py-2 rounded-full text-center hover:bg-[#c49640] transition-colors text-sm"
          >
            Call {PHONE}
          </a>
        </div>
      )}
    </nav>
  );
}
