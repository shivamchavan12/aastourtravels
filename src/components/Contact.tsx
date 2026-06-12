"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
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

const fieldClass = (error?: string) =>
  `w-full bg-primary border rounded-lg px-4 py-3 text-off-white focus:outline-none transition-colors ${error
    ? "border-red-500 focus:border-red-400"
    : "border-[rgba(201,168,76,0.2)] focus:border-[#C9A84C]"
  }`;

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-primary relative border-t border-[rgba(201,168,76,0.1)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="text-accent-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Have a question or need our services? Contact us today for a free consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 bg-dark-section rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.2)] shadow-2xl">
          {/* Contact Info (Left) */}
          <div className="lg:w-2/5 bg-[linear-gradient(135deg,#111111_0%,#1a1710_100%)] p-10 lg:p-12 relative overflow-hidden" data-aos="fade-right">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C] opacity-[0.05] blur-[100px] rounded-full"></div>
            <h3 className="text-3xl font-heading font-bold text-off-white mb-8 relative z-10">Contact Information</h3>
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#C9A84C] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-off-white mb-1">Our Location</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Bhopal, MP India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[#C9A84C] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-off-white mb-1">Phone Numbers</h4>
                  <p className="text-gray-400 text-sm flex flex-col gap-1">
                    <a href="tel:+919183435883" className="hover:text-[#C9A84C] transition-colors">+91 918 343 5883</a>
                    <a href="tel:+919183786068" className="hover:text-[#C9A84C] transition-colors">+91 918 378 6068</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#C9A84C] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-off-white mb-1">Email Address</h4>
                  <a href="mailto:tourstravelsaas@gmail.com" className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors">
                    tourstravelsaas@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="text-[#C9A84C] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-off-white mb-1">Website</h4>
                  <a href="https://www.aastourtravels.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors">
                    www.aastourtravels.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="text-[#C9A84C] mt-1 flex-shrink-0" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <div>
                  <h4 className="font-bold text-off-white mb-1">Instagram</h4>
                  <a
                    href="https://www.instagram.com/aastourstravels?igsh=MW9uYmc4OHp3bjU3eQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    @aastourstravels
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:w-3/5 p-10 lg:p-12" data-aos="fade-left">
            <h3 className="text-3xl font-heading font-bold text-off-white mb-8">Send Us a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle2 size={56} className="text-[#C9A84C]" />
                <h4 className="text-2xl font-heading font-bold text-off-white">Message Sent!</h4>
                <p className="text-gray-400 max-w-sm">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", message: "" }); }}
                  className="mt-4 text-sm text-[#C9A84C] underline underline-offset-4 hover:text-[#F0D080] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={fieldClass(errors.name)}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={fieldClass(errors.phone)}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Service */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">
                    Service Interested In <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${fieldClass(errors.service)} appearance-none`}
                  >
                    <option value="">Select a Service</option>
                    <option value="property">Property Sales &amp; Purchase</option>
                    <option value="visa">Passport &amp; Visa</option>
                    <option value="travel">Tour &amp; Travels</option>
                    <option value="legal">Legal &amp; Registry Services</option>
                    <option value="forex">Forex Services</option>
                    <option value="other">Other Services</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={fieldClass(errors.message)}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-[#C9A84C] text-primary font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#F0D080] transition-all w-full md:w-auto"
                >
                  <Send size={18} />
                  Submit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
