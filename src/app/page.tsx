import About from "./components/About";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import './globals.css';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Okafor",
              url: "https://your-domain.com",
              sameAs: [
                "https://github.com/Buch-dev",
                "https://twitter.com/bucheed",
                "https://linkedin.com/in/your-linkedin"
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Your Company"
              }
            }),
          }}
        />
      </Head>
      <div className="">
        <Hero />
        <About />
        <CTA />
      </div>
    </>
  );
}
