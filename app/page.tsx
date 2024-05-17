import {
  Hero,
  Skills,
  Contact,
  Resume,
  Projects,
  MenuNavigation,
} from "./components/index";

export default function Home() {
  return (
    <>
      <MenuNavigation />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
