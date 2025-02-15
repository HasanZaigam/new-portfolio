import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import WorkExperience from "@/components/main/WorkExp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-10">
        <Hero />
        <WorkExperience/>
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
