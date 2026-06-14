const steps = [
  {
    number: "01",
    title: "Tell Us About Your Home",
    description:
      "Fill out our short form or give us a call. We just need a few details about the property — no lengthy paperwork.",
  },
  {
    number: "02",
    title: "Receive Your Cash Offer",
    description:
      "We'll review the info and present you with a fair, no-obligation cash offer — typically within 24 hours.",
  },
  {
    number: "03",
    title: "Close On Your Timeline",
    description:
      "Need to close in 7 days? Need a few weeks? You pick the date. We handle all the closing details.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#2D6A4F]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#D4A853] font-semibold text-sm uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAF7F2]">
            How It Works
          </h2>
          <p className="text-[#b7d5c4] mt-4 max-w-xl mx-auto">
            We&apos;ve made this as easy as possible. Three steps and you&apos;re done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-[#52B788] opacity-40" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1B4332] border-2 border-[#D4A853] mb-5">
                <span className="text-[#D4A853] text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-[#FAF7F2] font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-[#b7d5c4] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
