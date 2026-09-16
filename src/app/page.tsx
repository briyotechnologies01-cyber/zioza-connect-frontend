import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import SocialMediaManagement from "@/components/SocialMediaManagement/SocialMediaManagement";

export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <SocialMediaManagement />

    </div>
  );
}
