import { HeroSection } from "@/components/landing/hero-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { BlogSection } from "@/components/landing/blog-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function Landing() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ReviewsSection />
      <BlogSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}