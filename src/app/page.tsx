import About from "./components/About";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import './globals.css';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <CTA />
    </div>
  );
}
