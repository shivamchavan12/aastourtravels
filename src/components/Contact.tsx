"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
  MessageCircle,
  Globe,
} from "lucide-react";

function InstagramIcon({ size = 18, color = "currentColor" }: { size?: number, color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}



type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{10}$/.test(data.phone.trim().replace(/[\s\-()]/g, ""))) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }
  if (!data.service) {
    errors.service = "Please select a service.";
  }
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

const inputClass = (error?: string) =>
  `w-full bg-[#F8FAFC] border rounded-xl px-4 py-3.5 text-[#0F172A] text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-[#94A3B8] ${
    error
      ? "border-red-400 focus:ring-red-200"
      : "border-[#E2E8F0] focus:border-[#0EA5E9] focus:ring-[#0EA5E9]/20"
  }`;

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Location",
    content: "Bhopal, Madhya Pradesh, India",
    color: "#0EA5E9",
  },
  {
    icon: Phone,
    label: "Phone Numbers",
    content: null,
    phones: ["+91 91837 86068"],
    color: "#22C55E",
  },
  {
    icon: Mail,
    label: "Email Address",
    content: "tourstravelsaas@gmail.com",
    href: "mailto:tourstravelsaas@gmail.com",
    color: "#F97316",
  },

  {
    icon: Globe,
    label: "Website",
    content: "www.aastourtravels.in",
    href: "https://www.aastourtravels.in",
    color: "#38BDF8",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (sendError) setSendError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setSendError(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 md:py-12 bg-white relative overflow-hidden"
      aria-label="Contact us"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0EA5E9] via-[#F97316] to-[#0EA5E9]" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-5"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            We&apos;re Here to <span className="gradient-text">Help You.</span>
          </h2>
          <p
            className="text-[#64748B] text-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Reach out via call, WhatsApp, or the form below. We typically respond within 1 hour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* ── Left: Contact info + map ── */}
          <div
            className="lg:col-span-2 rounded-3xl overflow-hidden h-full flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Info panel */}
            <div
              className="p-8 xl:p-10 relative overflow-hidden flex-grow flex flex-col"
              style={{ background: "#0F172A" }}
            >
              {/* Glow */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)" }}
              />

              <h3
                className="text-2xl font-bold text-white mb-8 relative z-10"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6 relative z-10">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${item.color}18`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p
                          className="text-xs text-[#64748B] uppercase tracking-widest mb-1"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {item.label}
                        </p>
                        {item.phones ? (
                          <div className="flex flex-col gap-0.5">
                            {item.phones.map((p) => (
                              <a
                                key={p}
                                href={`tel:${p.replace(/\s/g, "")}`}
                                className="text-white hover:text-[#38BDF8] transition-colors text-sm font-medium"
                              >
                                {p}
                              </a>
                            ))}
                          </div>
                        ) : item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#38BDF8] transition-colors text-sm font-medium"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-white text-sm font-medium">{item.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#EC489918", border: "1px solid #EC489925" }}
                  >
                    <InstagramIcon size={18} color="#EC4899" />
                  </div>
                  <div>
                    <p
                      className="text-xs text-[#64748B] uppercase tracking-widest mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/aastourstravels?igsh=MW9uYmc4OHp3bjU3eQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#38BDF8] transition-colors text-sm font-medium"
                    >
                      @aastourstravels
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919183786068?text=Hello%20AAS%20Tour%20%26%20Travels%2C%20I%20need%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #22C55E, #16A34A)",
                  boxShadow: "0 8px 24px rgba(34,197,94,0.3)",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>


          </div>

          {/* ── Right: Contact form ── */}
          <div
            className="lg:col-span-3 bg-white border border-[#E2E8F0] rounded-3xl p-8 xl:p-10 shadow-sm h-full flex flex-col"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center gap-5 py-20 text-center h-full">
                <div className="w-20 h-20 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-[#22C55E]" />
                </div>
                <h4
                  className="text-2xl font-bold text-[#0F172A]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Message Sent!
                </h4>
                <p
                  className="text-[#64748B] max-w-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Thank you for reaching out. Our team will get back to you within 1 hour during business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSendError(null);
                    setForm({ name: "", email: "", phone: "", service: "", message: "" });
                  }}
                  className="mt-2 text-sm text-[#0EA5E9] font-medium hover:text-[#0284C7] transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-2xl font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Send Us a Message
                </h3>
                <p
                  className="text-[#64748B] text-sm mb-8"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Fill in the details below and we&apos;ll get back to you as soon as possible.
                </p>

                <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} noValidate>
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass(errors.name)}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass(errors.phone)}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass(errors.email)}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass(errors.service)} appearance-none cursor-pointer`}
                    >
                      <option value="">Select a Service</option>
                      <option value="property">Property Sales &amp; Purchase</option>
                      <option value="registry">Registry &amp; E-Stamp</option>
                      <option value="notary">Notary Services</option>
                      <option value="rent">Rent &amp; Lease Agreement</option>
                      <option value="visa">Visa &amp; Immigration</option>
                      <option value="travel">Tour &amp; Travels</option>
                      <option value="international">International Packages</option>
                      <option value="forex">Forex Services</option>
                      <option value="rto">RTO Services</option>
                      <option value="ticket">Ticket Booking</option>
                      <option value="study">Abroad Study Services</option>
                      <option value="counseling">Counseling &amp; College</option>
                      <option value="docs">Documentation Support</option>
                      <option value="other">Other Services</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass(errors.message)}
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error banner */}
                  {sendError && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <span style={{ fontFamily: "var(--font-inter)" }}>{sendError}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={loading}
                    className="w-full sm:w-auto btn-cta-dark disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
