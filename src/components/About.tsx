import { Anchor, CheckCircle2 } from 'lucide-react';

const points = [
  'Nøye utvalgte leverandører',
  'Tydelig kommunikasjon gjennom hele prosessen',
  'Fokus på kvalitet, stabilitet og langsiktige avtaler',
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Om Fjord Import
          </p>

          <h2 className="mb-6 text-4xl font-black leading-tight text-slate-950">
            En moderne importpartner med nordisk kvalitet i fokus.
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            Fjord Import hjelper norske bedrifter med å finne, importere og
            distribuere kvalitetsprodukter fra pålitelige internasjonale
            leverandører. Vi kombinerer strukturert logistikk, tydelig
            kommunikasjon og kommersiell forståelse.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="text-slate-950" size={22} />
                <span className="font-medium text-slate-800">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-4 sm:p-8 shadow-xl">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/about.jpg"
              alt="Norsk fjord"
              loading="lazy" decoding="async"
              className="absolute inset-0 h-full w-full object-cover blur-[2px]"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-slate-950/50" />

            {/* Content */}
            <div className="relative flex aspect-square flex-col items-center justify-center p-8 text-center text-white">
              <Anchor size={56} />

              <h3 className="mt-8 text-3xl font-black">
                Global handel.
                <br />
                Norsk standard.
              </h3>

              <p className="mt-5 max-w-sm leading-7 text-slate-200">
                Vi bygger broer mellom internasjonale leverandører og det norske
                markedet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
