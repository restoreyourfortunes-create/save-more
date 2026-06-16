const PHONE = "210-378-0220";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-[#FAF7F2] text-2xl font-bold mb-2">
              Elro-EE<span className="text-[#D4A853]"> Home Buyers</span>
            </p>
            <p className="text-sm max-w-xs leading-relaxed">
              We buy houses fast, as-is, for cash in San Antonio and the Greater Austin area.
            </p>
          </div>

          <div>
            <p className="text-[#FAF7F2] font-semibold mb-3">Contact</p>
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="text-[#D4A853] font-bold text-lg hover:underline block mb-1"
            >
              {PHONE}
            </a>
            <p className="text-sm">San Antonio &amp; Greater Austin, TX</p>
          </div>

          <div>
            <p className="text-[#FAF7F2] font-semibold mb-3">Quick Links</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="#situations" className="hover:text-[#D4A853] transition-colors">How We Help</a></li>
              <li><a href="#how-it-works" className="hover:text-[#D4A853] transition-colors">How It Works</a></li>
              <li><a href="#why-us" className="hover:text-[#D4A853] transition-colors">Why Elro-EE</a></li>
              <li><a href="#contact" className="hover:text-[#D4A853] transition-colors">Get My Offer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Elro-EE Home Buyers. All rights reserved. We buy houses in San Antonio, TX and surrounding areas.
        </div>
      </div>
    </footer>
  );
}
