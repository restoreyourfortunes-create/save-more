const situations = [
  {
    icon: "🏦",
    title: "Foreclosure",
    description:
      "Behind on payments and facing foreclosure? We can close quickly and help you avoid the long-term damage to your credit.",
  },
  {
    icon: "🏠",
    title: "Inherited Property",
    description:
      "Inherited a house you don't want to manage or maintain? We handle the details so you can move forward with peace of mind.",
  },
  {
    icon: "💼",
    title: "Job Loss",
    description:
      "Unexpected job loss putting pressure on your finances? We offer a fast, fair solution so you can stabilize and start fresh.",
  },
  {
    icon: "🏥",
    title: "Health Issues",
    description:
      "Dealing with medical challenges that make managing a property overwhelming? Let us take it off your hands.",
  },
  {
    icon: "🎖️",
    title: "PCS / Military Relocation",
    description:
      "Permanent Change of Station orders don't wait. We move fast so you don't have to worry about a house left behind.",
  },
  {
    icon: "💔",
    title: "Divorce",
    description:
      "Going through a divorce and need to sell quickly? We make the process simple so both parties can move on.",
  },
  {
    icon: "🔧",
    title: "Major Repairs Needed",
    description:
      "House needs significant repairs you can't afford? We buy as-is — no fixes, no inspections, no stress.",
  },
  {
    icon: "🚚",
    title: "Relocation",
    description:
      "Moving out of state and need to sell fast? We can close in days, not months, so you can focus on your next chapter.",
  },
];

export default function Situations() {
  return (
    <section id="situations" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#2D6A4F] font-semibold text-sm uppercase tracking-widest mb-3">
            We Understand Your Situation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332]">
            Whatever You&apos;re Going Through, We Can Help
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            There&apos;s no judgment here. Life is unpredictable. Save More exists to give homeowners
            a simple, respectful way out — no matter the reason.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {situations.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#52B788] transition-all"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-[#1B4332] font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
