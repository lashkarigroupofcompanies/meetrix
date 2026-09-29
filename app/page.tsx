"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Mail,
  ChevronDown,
  Layers,
  CheckCircle,
  Clock,
  Compass,
  Building2,
  Flame,
  UserCheck,
} from "lucide-react";
import LivingWhiteAtmosphere from "@/components/meetrix/LivingWhiteAtmosphere";
import ConnectModal from "@/components/meetrix/ConnectModal";
import InfluencerOrbMatrix from "@/components/meetrix/InfluencerOrbMatrix";

export default function MeetrixHome() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const scrollToMatrix = () => {
    const el = document.getElementById("matrix-scale");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen text-ink overflow-x-hidden">
      {/* Living Atmospheric White & Maroon Backdrop */}
      <LivingWhiteAtmosphere />

      {/* Connect Modal Component */}
      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />

      {/* ── TOP NAVIGATION ── */}
      <header className="relative z-30 w-full border-b border-maroon/10 bg-[#FAF8F5]/80 backdrop-blur-md sticky top-0 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* LGC Hallmark & MEETRIX Identity */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-maroon/20 shadow-sm bg-white p-1">
                <Image
                  src="/lgc-logo.png"
                  alt="Lashkari Group of Companies Logo"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-2xl sm:text-3xl text-maroon tracking-wider">
                    MEETRIX
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold tracking-widest bg-maroon/10 text-maroon border border-maroon/20">
                    LGC Venture
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-ink/50 font-sans font-medium">
                  Lashkari Group of Companies
                </div>
              </div>
            </div>
          </div>

          {/* Center Construction Status (Desktop) */}
          <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-maroon/15 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-maroon"></span>
            </span>
            <span className="text-xs font-medium text-ink/80 font-sans tracking-wide">
              Site Under Construction • <span className="text-maroon font-semibold">Private Alpha</span>
            </span>
          </div>

          {/* Right Action: Connect CTA */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:lashkarigroupofcompanies@gmail.com"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs text-ink/70 hover:text-maroon transition-colors py-2 px-3"
            >
              <Mail className="w-3.5 h-3.5 text-maroon" />
              <span>Contact LGC</span>
            </a>

            <button
              onClick={() => setIsConnectOpen(true)}
              className="py-2.5 px-5 sm:px-6 bg-maroon hover:bg-maroon-vivid text-white rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-maroon/20 hover:shadow-lg hover:shadow-maroon/30 active:scale-[0.98] transition-all flex items-center gap-2 border border-maroon-light/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Connect</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <main className="relative z-10">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 text-center">
          {/* LGC Venture Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-maroon/20 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-maroon" />
            <span className="text-xs font-semibold tracking-wider uppercase text-maroon font-sans">
              Lashkari Group of Companies Presents
            </span>
          </div>

          {/* Under Construction Notice Banner */}
          <div className="max-w-xl mx-auto mb-8 px-4 py-2.5 rounded-xl bg-maroon/5 border border-maroon/20 text-ink/80 text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm">
            <Clock className="w-4 h-4 text-maroon flex-shrink-0" />
            <span>
              <strong>Platform Under Active Construction.</strong> Early collaborator registration is now open.
            </span>
          </div>

          {/* Grand Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-ink tracking-tight leading-[1.08] mb-6">
            Where Visionary Collaborators <br className="hidden sm:inline" />
            Meet <span className="text-maroon italic font-medium">Influencers</span> of Every Scale.
          </h1>

          {/* Clear Description Paragraph */}
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-ink/75 font-sans leading-relaxed mb-10">
            <strong>Meetrix</strong> is the proprietary connection platform bridging ambitious brands,
            collaborators, and agencies with creators from <strong>micro-niche innovators (10K+)</strong> to{" "}
            <strong>global mega icons (10M+)</strong>. Seamless discoverability, verified audience authenticity, and
            frictionless partnership contracts — all under one unified network.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <button
              onClick={() => setIsConnectOpen(true)}
              className="w-full sm:w-auto py-3.5 px-8 bg-maroon hover:bg-maroon-vivid text-white rounded-xl text-sm sm:text-base font-semibold tracking-wide shadow-xl shadow-maroon/25 hover:shadow-2xl hover:shadow-maroon/35 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 border border-maroon-light/40 group"
            >
              <span>Connect Now / Request Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold" />
            </button>

            <button
              onClick={scrollToMatrix}
              className="w-full sm:w-auto py-3.5 px-6 bg-white hover:bg-maroon/5 border border-maroon/25 text-maroon rounded-xl text-sm sm:text-base font-medium transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Explore Scale Matrix</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Platform Pillars Overview */}
          <div className="pt-6 border-t border-maroon/15 max-w-2xl mx-auto grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-maroon">10K — 10M+</div>
              <div className="text-[11px] sm:text-xs text-ink/60 uppercase font-sans mt-0.5">Influencer Spectrum</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-maroon">Direct</div>
              <div className="text-[11px] sm:text-xs text-ink/60 uppercase font-sans mt-0.5">Zero Broker Bloat</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-maroon">Enterprise</div>
              <div className="text-[11px] sm:text-xs text-ink/60 uppercase font-sans mt-0.5">LGC Quality Standard</div>
            </div>
          </div>
        </section>

        {/* ── THE INFLUENCER CONTINUUM (SMALL TO BIG) ── */}
        <section id="matrix-scale" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon/10 text-maroon text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>The Spectrum Matrix</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight">
              Small to Big: <span className="text-maroon italic">Every Tier Connected</span>
            </h2>
            <p className="text-ink/70 text-sm sm:text-base font-sans mt-3">
              Whether you need 20 hyper-targeted micro-creators for authentic niche conversion or a single global
              celebrity for national dominance, Meetrix orchestrates the entire bridge.
            </p>
          </div>

          {/* Interactive Tier Showcase */}
          <InfluencerOrbMatrix onOpenConnect={() => setIsConnectOpen(true)} />
        </section>

        {/* ── WHY MEETRIX (CORE ARCHITECTURE) ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              Designed to Redefine <span className="text-maroon italic">Collaborations</span>
            </h2>
            <p className="text-ink/70 text-sm font-sans mt-2">
              Building the infrastructure modern creators and forward-thinking brands actually need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white border border-maroon/15 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-maroon/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-maroon/10 text-maroon flex items-center justify-center mb-5 group-hover:bg-maroon group-hover:text-white transition-all">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-medium mb-2.5">
                Precision Matching
              </h3>
              <p className="text-ink/70 text-sm leading-relaxed font-sans">
                Stop sifting through random DMs. Meetrix matches collaborators with creators based on true audience
                sentiment, demographic resonance, and brand safety.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-maroon/15 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-maroon/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-maroon/10 text-maroon flex items-center justify-center mb-5 group-hover:bg-maroon group-hover:text-white transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-medium mb-2.5">
                Verified Authenticity
              </h3>
              <p className="text-ink/70 text-sm leading-relaxed font-sans">
                Backed by Lashkari Group standards, every creator profile undergoing our review is verified for real engagement, active audience retention, and credible past campaigns.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-maroon/15 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-maroon/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-maroon/10 text-maroon flex items-center justify-center mb-5 group-hover:bg-maroon group-hover:text-white transition-all">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-medium mb-2.5">
                Direct Contracts & Escrow
              </h3>
              <p className="text-ink/70 text-sm leading-relaxed font-sans">
                Streamlined legal agreements, milestone approvals, and automated secure payouts. No middleman delays, no payment disputes, just seamless execution.
              </p>
            </div>
          </div>
        </section>

        {/* ── UNDER CONSTRUCTION ROADMAP ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-white border border-maroon/20 rounded-2xl p-7 sm:p-10 shadow-lg shadow-maroon/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-maroon/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-maroon mb-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>Under Construction Status</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal mb-4">
                Rollout Roadmap & Private Access
              </h3>
              <p className="text-ink/75 text-sm sm:text-base font-sans mb-8 leading-relaxed">
                Meetrix is currently in intensive engineering under Lashkari Group of Companies. We are accepting a
                limited cohort of collaborators, brands, and creators for our phased rollout.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-maroon/15">
                  <div className="w-7 h-7 rounded-full bg-maroon text-white flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-ink">Phase 1: Architecture & Invitation Queue</h4>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-maroon/10 text-maroon">
                        NOW ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-ink/70 mt-1 font-sans">
                      Private applications open for priority collaborators and creators across all follower tiers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-maroon/10 opacity-80">
                  <div className="w-7 h-7 rounded-full bg-maroon/20 text-maroon flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-ink">Phase 2: Closed Alpha Connection Engine</h4>
                      <span className="text-[11px] font-mono text-ink/50">Q4 2026</span>
                    </div>
                    <p className="text-xs text-ink/70 mt-1 font-sans">
                      Direct brand-creator collaboration portal and structured negotiation workflow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-maroon/10 opacity-70">
                  <div className="w-7 h-7 rounded-full bg-maroon/10 text-maroon/60 flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-ink">Phase 3: Public Ecosystem Release</h4>
                      <span className="text-[11px] font-mono text-ink/50">2027</span>
                    </div>
                    <p className="text-xs text-ink/70 mt-1 font-sans">
                      Universal directory open to global creators, marketing agencies, and enterprise brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION BANNER ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-maroon-deep via-maroon to-maroon-vivid text-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-maroon/30 text-center relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.2),transparent_60%)]" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold text-xs font-semibold uppercase tracking-wider backdrop-blur-sm border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Priority Access</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
                Be First in Line When Meetrix Goes Live.
              </h2>

              <p className="text-white/80 text-sm sm:text-base font-sans leading-relaxed">
                Connect with our team today to ensure your brand or creator profile gets immediate access upon alpha rollout.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsConnectOpen(true)}
                  className="w-full sm:w-auto py-3.5 px-8 bg-white hover:bg-cream text-maroon rounded-xl text-sm font-bold tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4 text-maroon" />
                  <span>Connect With Us</span>
                </button>

                <a
                  href="mailto:lashkarigroupofcompanies@gmail.com?subject=MEETRIX%20Inquiry"
                  className="w-full sm:w-auto py-3.5 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>Email LGC Directly</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative z-20 border-t border-maroon/15 bg-white/80 backdrop-blur-md pt-12 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-maroon/10">
            {/* LGC Brand Details */}
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-maroon/20 p-1 bg-white">
                <Image
                  src="/lgc-logo.png"
                  alt="LGC Hallmark"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-maroon tracking-wider">MEETRIX</span>
                <p className="text-[11px] text-ink/60">An enterprise venture by Lashkari Group of Companies</p>
              </div>
            </div>

            {/* Quick Links / Status */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-ink/70 font-sans">
              <button onClick={() => setIsConnectOpen(true)} className="hover:text-maroon transition-colors font-medium">
                Connect Option
              </button>
              <button onClick={scrollToMatrix} className="hover:text-maroon transition-colors">
                Influencer Scale
              </button>
              <a
                href="mailto:lashkarigroupofcompanies@gmail.com"
                className="hover:text-maroon transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-maroon" />
                <span>lashkarigroupofcompanies@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink/50 gap-3 font-sans">
            <div>
              © {new Date().getFullYear()} MEETRIX. All rights reserved. Under active construction by Lashkari Group of
              Companies (LGC).
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Private Alpha Network Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
