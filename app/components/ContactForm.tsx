"use client";
import { useState } from "react";

const PHONE = "210-378-0220";

const situations = [
  "Foreclosure",
  "Inherited Property",
  "Job Loss",
  "Health Issues",
  "PCS / Military Relocation",
  "Divorce",
  "Major Repairs Needed",
  "Relocation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    situation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please call us directly at 210-378-0220.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#1B4332]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#D4A853] font-semibold text-sm uppercase tracking-widest mb-3">
            Get Started Today
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAF7F2]">
            Request Your Free Cash Offer
          </h2>
          <p className="text-[#b7d5c4] mt-4">
            Fill out the form below or call us directly at{" "}
            <a href={`tel:${PHONE.replace(/-/g, "")}`} className="text-[#D4A853] font-bold hover:underline">
              {PHONE}
            </a>
            . No obligation, no pressure.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#2D6A4F] rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-[#FAF7F2] text-2xl font-bold mb-2">We Got Your Request!</h3>
            <p className="text-[#b7d5c4]">
              Thank you, {form.name}. We&apos;ll be in touch within 24 hours with your cash offer.
              If you need to reach us sooner, call{" "}
              <a href={`tel:${PHONE.replace(/-/g, "")}`} className="text-[#D4A853] font-bold">
                {PHONE}
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAF7F2] rounded-2xl p-8 md:p-10 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[#1B4332] font-semibold text-sm mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
                />
              </div>
              <div>
                <label className="block text-[#1B4332] font-semibold text-sm mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(210) 555-0100"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#1B4332] font-semibold text-sm mb-1">
                Property Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                placeholder="123 Main St, San Antonio, TX 78201"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
              />
            </div>

            <div>
              <label className="block text-[#1B4332] font-semibold text-sm mb-1">
                What Best Describes Your Situation?
              </label>
              <select
                name="situation"
                value={form.situation}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] bg-white"
              >
                <option value="">Select a situation...</option>
                {situations.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#1B4332] font-semibold text-sm mb-1">
                Anything Else We Should Know? (Optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us a little more about your situation or the property..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#2D6A4F] text-[#FAF7F2] font-bold py-4 rounded-full text-lg hover:bg-[#1B4332] transition-colors disabled:opacity-60"
            >
              {loading ? "Sending..." : "Get My Free Cash Offer →"}
            </button>

            <p className="text-gray-500 text-xs text-center">
              By submitting this form, you agree to be contacted by Elro-EE Home Buyers. We respect your privacy and will never share your information.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
