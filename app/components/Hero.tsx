const PHONE = "210-378-0220";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 relative"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#1B4332]/20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-[#D4A853] font-semibold text-sm uppercase tracking-widest mb-4">
          Greater San Antonio &amp; Greater Austin Area
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#FAF7F2] leading-tight mb-6">
          Life Happens.{" "}
          <span className="text-[#D4A853]">We Make Selling Simple.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#b7d5c4] max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re facing foreclosure, dealing with an inheritance, going through a
          job loss, or relocating — Elro-EE Home Buyers buys your house as-is, fast, with no fees and
          no hassle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#D4A853] text-[#1B4332] font-bold px-8 py-4 rounded-full text-lg hover:bg-[#c49640] transition-colors shadow-lg"
          >
            Get My Cash Offer
          </a>
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="border-2 border-[#FAF7F2] text-[#FAF7F2] font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-[#1B4332] transition-colors"
          >
            Call {PHONE}
          </a>
        </div>
        <p className="text-[#b7d5c4] text-sm mt-8">
          No repairs. No agent fees. No obligation. Close on <em>your</em> timeline.
        </p>
      </div>
    </section>
  );
}

