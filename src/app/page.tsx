import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import LogoMarquee from "@/components/LogoMarquee";
import Testimonials from "@/components/Testimonials";
import Courses from "@/components/Courses";
import CTA from "@/components/CTA";
import Founder from "@/components/Founder";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Showcase />
      <LogoMarquee />
      <Testimonials />
      <Courses />
      <CTA />
      <Founder />
    </main>
  );
}
