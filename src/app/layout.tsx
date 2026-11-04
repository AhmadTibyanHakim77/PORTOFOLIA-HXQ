import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/data";
import { LanguageProvider } from "@/context/LanguageContext";
import CustomCursor from "@/components/CustomCursor";

const sora = localFont({
  src: [
    {
      path: "../../public/fonts/Sora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sora-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sora-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sora",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Ahmad Tibyan Hakim — Full Stack Developer and Data Science Enthusiast based in Yogyakarta, Indonesia. Building modern web applications, developing scalable software solutions, and transforming data into intelligent solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Full Stack Developer & Data Science Enthusiast`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Ahmad Tibyan Hakim",
    "Full Stack Developer",
    "Data Analyst",
    "Data Science Enthusiast",
    "Machine Learning",
    "Next.js",
    "React",
    "Laravel",
    "Python",
    "TypeScript",
    "Yogyakarta",
    "Indonesia",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    title: `${site.name} — Full Stack Developer & Data Science Enthusiast`,
    description,
    url: site.url,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Portfolio`,
    description,
    creator: "@AhmadTibyanHakim77",
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Full Stack Developer · Data Analyst & Data Science Enthusiast",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yogyakarta",
    addressCountry: "Indonesia",
  },
  email: `mailto:${site.email}`,
  sameAs: [site.github],
  knowsAbout: [
    "Full Stack Web Development",
    "Data Analytics",
    "Data Science",
    "Machine Learning",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "Python",
    "MySQL",
    "PostgreSQL",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-screen bg-bg text-fg antialiased selection:bg-accent selection:text-white">
        <LanguageProvider>
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
