import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import SocialMediaManagement from "@/components/SocialMediaManagement/SocialMediaManagement";
import WhatsAppAutomation from "@/components/WhatsAppAutomation/WhatsAppAutomation";

export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <SocialMediaManagement />
      <WhatsAppAutomation />

    </div>
  );
}
