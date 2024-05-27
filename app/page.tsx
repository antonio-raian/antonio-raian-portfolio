import {
  Hero,
  Skills,
  Contact,
  Resume,
  Projects,
  MenuNavigation,
  Coffee,
} from "./components/index";

export default function Home() {
  return (
    <>
      <MenuNavigation />
      <main className="flex min-h-screen flex-col items-center justify-between font-mono">
        <Coffee />
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer>Pé</footer>
    </>
  );
}
