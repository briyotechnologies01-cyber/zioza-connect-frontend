import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import SocialMediaManagement from "@/components/SocialMediaManagement/SocialMediaManagement";
import UnifiedInbox from "@/components/UnifiedInbox/UnifiedInbox";
import WhatsAppAutomation from "@/components/WhatsAppAutomation/WhatsAppAutomation";

export default function Home() {
  return (
    <div className="landing-page w-full overflow-x-hidden min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialMediaManagement />
      <WhatsAppAutomation />
      <UnifiedInbox />
      <hr className="red-500  bg-red-500" />
    </div>
  );
}
