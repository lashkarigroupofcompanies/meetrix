"use client";

import React, { useState } from "react";
import { X, Send, Sparkles, CheckCircle2, Mail, User, AtSign, Building } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [role, setRole] = useState<"collaborator" | "influencer" | "agency">("collaborator");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setHandle("");
    setNote("");
    onClose();
  };

  const mailtoHref = `mailto:lashkarigroupofcompanies@gmail.com?subject=${encodeURIComponent(
    `MEETRIX Connection Request — ${role.toUpperCase()}: ${fullName || "Inquiry"}`
  )}&body=${encodeURIComponent(
    `To Lashkari Group of Companies,\n\nI would like to connect regarding MEETRIX platform partnerships.\n\nRole: ${role}\nName: ${fullName}\nEmail: ${email}\nHandle / Organization: ${handle}\nNotes: ${note}\n\nThank you.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#161215]/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-maroon/20 rounded-2xl shadow-2xl shadow-maroon/15 p-6 sm:p-8 z-10 my-8 overflow-hidden">
        {/* Subtle Luxury Corner Glows */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-maroon/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-gold/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-ink/60 hover:text-maroon hover:bg-maroon/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon/10 text-maroon text-xs font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Direct Connection Channel</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ink tracking-tight">
                Connect With <span className="text-maroon font-medium italic">Meetrix</span>
              </h3>
              <p className="text-ink/70 text-sm mt-2 leading-relaxed font-sans">
                The platform is currently under active construction. Submit your details below or contact our team directly to establish connection.
              </p>
            </div>

            {/* Role Selector Tabs */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider font-semibold text-ink/80 mb-2 font-sans">
                Connection Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "collaborator", label: "Brand / Collaborator" },
                  { id: "influencer", label: "Creator / Influencer" },
                  { id: "agency", label: "Agency / Media" },
                ].map((item) => {
                  const isSelected = role === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRole(item.id as typeof role)}
                      className={`text-xs sm:text-sm py-2.5 px-2 rounded-lg font-medium transition-all text-center border ${
                        isSelected
                          ? "bg-maroon text-white border-maroon shadow-md shadow-maroon/20"
                          : "bg-white text-ink/80 border-maroon/15 hover:border-maroon/40 hover:bg-maroon/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-ink/70 mb-1.5">
                  Full Name / Organization
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name or company"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-maroon/20 rounded-lg text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-ink/70 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-maroon/20 rounded-lg text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-ink/70 mb-1.5">
                    {role === "influencer" ? "Social Handle" : "Website or Brand"}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink/40">
                      {role === "influencer" ? <AtSign className="w-4 h-4" /> : <Building className="w-4 h-4" />}
                    </div>
                    <input
                      type="text"
                      required
                      value={handle}
                      onChange={(e) => setHandle(e.target.value)}
                      placeholder={role === "influencer" ? "@handle (IG / YouTube / TikTok)" : "yourdomain.com"}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-maroon/20 rounded-lg text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-ink/70 mb-1.5">
                  Message / Collaboration Inquiry (Optional)
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Share details about your audience reach, brand needs, or partnership objectives..."
                  className="w-full p-3 bg-white border border-maroon/20 rounded-lg text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-5 bg-maroon hover:bg-maroon-vivid active:scale-[0.99] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-maroon/25 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Details</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href={mailtoHref}
                  className="py-3 px-4 bg-white hover:bg-maroon/5 border border-maroon/25 text-maroon rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all hover:border-maroon"
                  title="Direct mail to Lashkari Group of Companies"
                >
                  <Mail className="w-4 h-4 text-maroon" />
                  <span className="hidden sm:inline">Direct Mail</span>
                </a>
              </div>
            </form>

            <div className="mt-4 text-center">
              <span className="text-[11px] text-ink/50">
                Official Venture of Lashkari Group of Companies (LGC) • Direct Contact: lashkarigroupofcompanies@gmail.com
              </span>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-maroon/10 text-maroon rounded-full flex items-center justify-center mx-auto ring-8 ring-maroon/5">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-3xl font-medium text-ink">
                Details Received
              </h4>
              <p className="text-ink/75 text-sm max-w-md mx-auto font-sans leading-relaxed">
                Thank you{fullName ? `, ${fullName}` : ""}. Your connection inquiry has been recorded. Our team at Lashkari Group of Companies will review your submission.
              </p>
            </div>

            <div className="p-4 bg-white border border-maroon/15 rounded-xl text-left text-xs space-y-1.5 text-ink/80 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-ink/50">Category:</span>
                <span className="font-semibold capitalize text-maroon">{role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/50">Contact:</span>
                <span className="font-medium">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/50">Handle / Brand:</span>
                <span className="font-medium">{handle}</span>
              </div>
            </div>

            <div className="pt-3 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="py-2.5 px-6 bg-maroon hover:bg-maroon-vivid text-white rounded-lg text-sm font-medium transition-all shadow-md shadow-maroon/20"
              >
                Close
              </button>
              <a
                href={mailtoHref}
                className="py-2.5 px-4 bg-white border border-maroon/20 text-maroon hover:bg-maroon/5 rounded-lg text-sm font-medium transition-all inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Follow Up via Email</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
