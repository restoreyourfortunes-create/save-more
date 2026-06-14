const benefits = [
  {
    icon: "💵",
    title: "Cash Offers",
    description: "No financing contingencies. No deal falling through at the last minute. Cash means certainty.",
  },
  {
    icon: "🔨",
    title: "As-Is Condition",
    description: "Don't spend a dime on repairs or cleaning. We buy the house exactly as it stands.",
  },
  {
    icon: "🚫",
    title: "Zero Fees or Commissions",
    description: "No real estate agent commissions. No closing costs on your end. What we offer is what you get.",
  },
  {
    icon: "📅",
    title: "You Choose the Closing Date",
    description: "Need to move fast? Need more time? We work around your schedule, not ours.",
  },
  {
    icon: "🤝",
    title: "Local & Trustworthy",
    description: "We're right here in San Antonio. We care about our community and treat every seller with respect.",
  },
  {
    icon: "📋",
    title: "No Obligation",
    description: "Our offer is completely free. If it doesn't work for you, there's no pressure and no hard feelings.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#2D6A4F] font-semibold text-sm uppercase tracking-widest mb-3">
            The Save More Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332]">
            Why Homeowners Choose Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            We built Save More around one idea: selling your home should feel like a relief, not another burden.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl flex-shrink-0">{b.icon}</div>
              <div>
                <h3 className="text-[#1B4332] font-bold text-lg mb-1">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
