import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TechStack } from "../components/TechStack";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export default function Index() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
