import Image from 'next/image'
import ActionSection from "@/components/homepage/ActionSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";
import TestimonialSection from "@/components/homepage/TestimonialSection";

export const metadata = {
  title: "Home : Work Manager",
};

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24 bg-white w-[100%] gap-x-20">
      <BannerSection />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
       
    </main>
  )
}
