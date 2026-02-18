import ChatLayout from "@/components/ChatLayout";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ToolsSection from "@/components/ToolsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <Footer />
    </>
  );
}
