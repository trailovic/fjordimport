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
      <Header />

      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Products />
        <Process />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}