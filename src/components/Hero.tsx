import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-100 pt-28"
    >
      <div className="mx-auto grid min-h-170 max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Norsk importpartner
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight text-slate-950 md:text-7xl">
            Pålitelig import. Sterke forbindelser.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Fjord Import leverer kvalitetsprodukter fra nøye utvalgte
            leverandører verden over — med fokus på kvalitet, pålitelighet
            og langsiktig samarbeid.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Våre tjenester
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-950 transition hover:border-slate-950"
            >
              Kontakt oss
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-4/3 overflow-hidden rounded-4xl bg-slate-300 shadow-2xl">
            <img
              src="/hero.jpg"
              alt="Fjord Import"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-white p-6 shadow-xl md:block">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Fokus
            </p>
            <p className="mt-2 text-xl font-black text-slate-950">
              Kvalitet • Logistikk • Partnerskap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}