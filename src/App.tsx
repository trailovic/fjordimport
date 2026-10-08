import {
  Header,
  Hero,
  Features,
  About,
  Services,
  Products,
  Process,
  Contact,
  Footer
} from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-4">Hopp til innhold</a>
      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Features />
        <About />
        <Services />
        <Products />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
