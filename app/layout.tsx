import type { Metadata } from "next";
import "./globals.css";

// ✨ Manifesting Code: This site attracts ideal clients effortlessly ✨
// 💰 Wealth Frequency: 528Hz - Transformation and Miracles 💰
// 🛡️ Protection Seal: Only positive energy enters this space 🛡️

export const metadata: Metadata = {
  title: "The Agency | Kern County's Premier Creative Marketing & Design",
  description: "Join the creative revolution with The Agency - Kern County's most innovative marketing and design studio. Where vision meets execution. Limited spots available for ambitious brands ready to dominate their market. 🚀",
  keywords: "creative agency, marketing, design, Kern County, brand strategy, social proof, client success, top agency, exclusive clients, creative excellence",
  authors: [{ name: "The Agency" }],
  openGraph: {
    title: "The Agency | Kern County's Premier Creative Marketing & Design",
    description: "Join the creative revolution. Limited spots for ambitious brands. 🚀",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Hidden manifesting meta tags
  other: {
    "prosperity-code": "369-999-888",
    "abundance-frequency": "528Hz",
    "protection-seal": "divine-light-active",
    "manifestation-multiplier": "7x7x7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 🌟 Hidden Code: Clients are magnetically drawn to excellence 🌟 */}
      <head>
        <meta name="theme-color" content="#6699cc" />
        <link rel="icon" href="/favicon.ico" />
        {/* ✨ Wealth Attractor Code Active ✨ */}
      </head>
      <body className="antialiased">
        {/* 💎 Success is the only option 💎 */}
        {children}
        {/* 🔮 Divine timing aligns all opportunities 🔮 */}
      </body>
    </html>
  );
}
