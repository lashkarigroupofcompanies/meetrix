"use client";

import React, { useState } from "react";
import { Users, Layers, ShieldCheck, CheckCircle2, ArrowRight, Zap, Target } from "lucide-react";

interface TierInfo {
  id: string;
  name: string;
  range: string;
  category: string;
  focus: string;
  architectureDetails: string[];
  collabFormats: string[];
  verificationStandard: string;
}

const tiers: TierInfo[] = [
  {
    id: "micro",
    name: "Micro-Influence Tier",
    range: "10K — 50K Followers",
    category: "Small Influencer Segment",
    focus: "Hyper-niche community engagement and dedicated audience trust.",
    architectureDetails: [
      "Direct collaborator-to-creator communication without agency intermediaries",
      "Audience authenticity verification to filter out automated or inactive followers",
      "Streamlined milestone tracking for physical product seeding and digital assets",
    ],
    collabFormats: [
      "Product Experience & Dedicated Reviews",
      "Niche Community Social Integrations",
      "Targeted Conversion Partnerships",
    ],
    verificationStandard: "Audience Activity & Real Engagement Verification",
  },
  {
    id: "rising",
    name: "Mid-Tier Influence Tier",
    range: "50K — 250K Followers",
    category: "Mid-Range Influencer Segment",
    focus: "Established category authority balancing production quality and scalable reach.",
    architectureDetails: [
      "Dynamic campaign scoping with pre-structured milestone deliverables",
      "Audience demographic validation across primary social channels",
      "Integrated escrow terms protecting creative deliverables and campaign release",
    ],
    collabFormats: [
      "Multi-Phase Content Series",
      "Long-term Brand Ambassadorships",
      "Integrated Sponsored Segments",
    ],
    verificationStandard: "Cross-Platform Demographic & Follower Audit",
  },
  {
    id: "macro",
    name: "Macro Influence Tier",
    range: "250K — 1M Followers",
    category: "Large Influencer Segment",
    focus: "Broad cultural footprint and cross-channel tastemaker impact.",
    architectureDetails: [
      "Automated contract generation tailored to industry-standard usage rights",
      "Dedicated collaboration dashboard for multi-stakeholder campaign approvals",
      "Strict compliance verification with clear disclosure guidelines",
    ],
    collabFormats: [
      "Flagship Campaign Headliners",
      "Product Line Co-Creation",
      "High-Impact Keynote & Event Coverage",
    ],
    verificationStandard: "Comprehensive Brand Safety & Reach Audit",
  },
  {
    id: "mega",
    name: "Mega & Global Tier",
    range: "1M — 10M+ Followers",
    category: "Big Influencer & Celebrity Segment",
    focus: "Mass market visibility, widespread cultural dominance, and global reach.",
    architectureDetails: [
      "White-glove executive coordination backed by Lashkari Group of Companies",
      "Multi-tier milestone escrow for enterprise-level collaboration budgets",
      "Custom legal scaffolding for global broadcast, digital, and print rights",
    ],
    collabFormats: [
      "Global Brand Identity Campaigns",
      "Worldwide Media & Digital Broadcasts",
      "Exclusive Category Endorsements",
    ],
    verificationStandard: "Enterprise Verification & Legal Escrow Scaffolding",
  },
];

export default function InfluencerOrbMatrix({ onOpenConnect }: { onOpenConnect: () => void }) {
  const [activeTier, setActiveTier] = useState<string>("micro");
  const selected = tiers.find((t) => t.id === activeTier) || tiers[0];

  return (
    <div className="w-full">
      {/* Tier Switcher Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {tiers.map((t) => {
          const isActive = t.id === activeTier;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTier(t.id)}
              className={`px-4 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border ${
                isActive
                  ? "bg-maroon text-white border-maroon shadow-lg shadow-maroon/20 scale-[1.02]"
                  : "bg-white text-ink/75 border-maroon/15 hover:border-maroon/40 hover:bg-maroon/5"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? "bg-gold" : "bg-maroon/30"}`} />
              <span className="font-semibold">{t.name}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded font-mono font-medium ${
                  isActive ? "bg-white/20 text-white" : "bg-cream text-ink/60"
                }`}
              >
                {t.range.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Tier Highlight Card */}
      <div className="relative bg-white border border-maroon/20 rounded-2xl p-6 sm:p-9 shadow-xl shadow-maroon/5 overflow-hidden transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Scope & Focus */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-maroon/10 text-maroon border border-maroon/20">
                <Target className="w-3.5 h-3.5 text-gold" />
                <span>{selected.category}</span>
              </span>
              <span className="text-xs text-ink/60 font-mono">Spectrum: {selected.range}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-ink font-normal leading-tight">
              {selected.name}
            </h3>

            <p className="text-ink/80 text-sm sm:text-base leading-relaxed font-sans">
              {selected.focus}
            </p>

            {/* Architecture Details */}
            <div className="pt-2 space-y-2.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-maroon font-sans">
                Platform Architecture Capabilities
              </div>
              {selected.architectureDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/75">
                  <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Direct Connect Action */}
            <div className="pt-4">
              <button
                onClick={onOpenConnect}
                className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-maroon-vivid hover:underline group"
              >
                <span>Connect for {selected.name} opportunities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Collaboration Formats & Standards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF8F5] border border-maroon/15 rounded-xl p-5 space-y-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink/60 mb-2 font-sans">
                  Supported Collaboration Formats
                </div>
                <ul className="space-y-2">
                  {selected.collabFormats.map((format, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-ink/80 flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-maroon/10"
                    >
                      <Zap className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>{format}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-maroon/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink/60 mb-1 font-sans">
                  Platform Verification Protocol
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-maroon bg-white px-3 py-2 rounded-lg border border-maroon/15">
                  <ShieldCheck className="w-4 h-4 text-maroon flex-shrink-0" />
                  <span>{selected.verificationStandard}</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-maroon/5 border border-dashed border-maroon/25 rounded-xl text-center">
              <p className="text-xs text-ink/75">
                Looking to connect in this follower range?{" "}
                <button
                  onClick={onOpenConnect}
                  className="text-maroon font-semibold hover:underline"
                >
                  Request Connection
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
