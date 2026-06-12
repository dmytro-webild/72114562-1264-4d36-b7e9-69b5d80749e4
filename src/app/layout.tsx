import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Ritaj Dar El Hout - Fresh Moroccan Seafood in Meknes',
  description: 'Experience premium, fresh Moroccan seafood at Ritaj Dar El Hout in Meknes. Enjoy exceptional taste, friendly service, and a welcoming, family-friendly atmosphere.',
  keywords: ["Moroccan seafood restaurant, Meknes, fresh fish, seafood, Ritaj Dar El Hout, family dining, traditional Moroccan food, best seafood Meknes, restaurant Meknes"],
  openGraph: {
    "title": "Ritaj Dar El Hout - Fresh Moroccan Seafood in Meknes",
    "description": "Experience premium, fresh Moroccan seafood at Ritaj Dar El Hout in Meknes. Enjoy exceptional taste, friendly service, and a welcoming, family-friendly atmosphere.",
    "url": "/",
    "siteName": "Ritaj Dar El Hout",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/fish-with-herbs-lemon-slice-narsharab_140725-6623.jpg",
        "alt": "Fresh Seafood Display at Ritaj Dar El Hout"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Ritaj Dar El Hout - Fresh Moroccan Seafood in Meknes",
    "description": "Experience premium, fresh Moroccan seafood at Ritaj Dar El Hout in Meknes. Enjoy exceptional taste, friendly service, and a welcoming, family-friendly atmosphere.",
    "images": [
      "http://img.b2bpic.net/free-photo/fish-with-herbs-lemon-slice-narsharab_140725-6623.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
