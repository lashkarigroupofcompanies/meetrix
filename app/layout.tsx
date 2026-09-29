import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEETRIX — Where Influence Meets Collaboration | LGC Venture",
  description:
    "Meetrix is the premier connection platform bridging visionary collaborators and brands with small to big influencers. An LGC Company.",
  keywords: [
    "Meetrix",
    "LGC",
    "Lashkari Group",
    "Influencer Connection Platform",
    "Creator Collaborations",
    "Brand Partnerships",
    "Micro Influencers",
    "Macro Influencers",
  ],
  authors: [{ name: "Lashkari Group of Companies" }],
  openGraph: {
    title: "MEETRIX — The Influencer & Collaborator Ecosystem",
    description: "Connecting brands and collaborators with small to big influencers. In active development.",
    siteName: "MEETRIX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#FAF8F5] text-ink font-sans min-h-[100dvh] relative flex flex-col justify-between selection:bg-maroon/20 selection:text-maroon">
        {children}
      </body>
    </html>
  );
}
