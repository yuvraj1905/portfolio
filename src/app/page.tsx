import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  // const { experiences, personalProjects } = portfolioData; // Keep if we add highlights back

  // const experienceHighlights = experiences.slice(0, 2);
  // const projectHighlights = personalProjects.slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-transparent text-white ">
      <HeroSection />
    </main>
  );
}
