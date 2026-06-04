import {
  Globe,
  Package,
  Ship,
  Handshake,
} from 'lucide-react';

const services = [
  {
    title: 'Internasjonal sourcing',
    description:
      'Vi identifiserer og evaluerer leverandører fra utvalgte markeder for å finne produkter som oppfyller norske kvalitetskrav.',
    icon: Globe,
  },
  {
    title: 'Import og distribusjon',
    description:
      'Vi håndterer prosessen fra bestilling til levering, med fokus på effektiv logistikk og forutsigbarhet.',
    icon: Ship,
  },
  {
    title: 'Produktutvalg',
    description:
      'Vi arbeider med nøye utvalgte produkter og leverandører som tilbyr kvalitet, stabilitet og langsiktig verdi.',
    icon: Package,
  },
  {
    title: 'B2B-partnerskap',
    description:
      'Vi bygger langsiktige relasjoner med bedrifter som ønsker en pålitelig partner innen import og vareflyt.',
    icon: Handshake,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Våre tjenester
          </p>

          <h2 className="text-4xl font-black text-slate-950">
            Hvordan vi skaper verdi
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Fjord Import hjelper bedrifter med å etablere stabile forsyningskjeder,
            finne kvalitetsprodukter og skape langsiktige handelsforbindelser.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-4xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}