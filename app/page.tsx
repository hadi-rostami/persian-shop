import { Metadata } from "next";
import HomeHero from "./components/HomeHero";
import HomeFeatures from "./components/HomeFeatures";
import PricingPlans from "./components/PricingPlans";

export const metadata: Metadata = {
  title: "ربات پرشین | بهترین و سریعترین ربات مدیریت گروه روبیکا",
  description:
    "با ربات مدیریت گروه روبیکا می‌توانید گروه‌های خود را راحت مدیریت کنید، اعضا سرگرم شوند و از پیام‌های اضافی و اسپم‌ها راحت شوید.",
  openGraph: {
    title: "ربات مدیریت گروه روبیکا | مدیریت آسان گروه‌ها",
    description:
      "ربات هوشمند و خودکار برای مدیریت گروه‌های روبیکا؛ آسان، سریع و امن.",
    url: "https://persian-shop.vercel.app/",
    siteName: "ربات پرشین",
    images: [
      {
        url: "https://persian-shop.vercel.app/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "ربات مدیریت گروه روبیکا",
      },
    ],
    locale: "fa-IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ربات مدیریت گروه روبیکا | مدیریت آسان گروه‌ها",
    description:
      "ربات هوشمند و خودکار برای مدیریت گروه‌های روبیکا؛ آسان، سریع و امن.",
    images: ["https://persian-shop.vercel.app/images/logo.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <PricingPlans />
    </>
  );
}
