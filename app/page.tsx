import { ClientStories } from "@/components/client-stories";
import { Faqs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/Hero";
import { LuxeTreats } from "@/components/luxe-treats";
import { Message } from "@/components/message";
import { MindfulnessMarqueeAnimation } from "@/components/mindfulness-marquee-animation";
import { OurStory } from "@/components/our-story";
import { Sisterhood } from "@/components/sisterhood";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurStory />
      <LuxeTreats />
      <MindfulnessMarqueeAnimation />
      <Sisterhood />
      <ClientStories />
      <Faqs />
      <Message />
      <Footer />
    </main>
  );
}
