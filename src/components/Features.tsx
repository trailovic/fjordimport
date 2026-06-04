import { Globe2, PackageCheck, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    title: 'Globalt nettverk',
    description: 'Utvalgte leverandører og stabile internasjonale forbindelser.',
    icon: Globe2,
  },
  {
    title: 'Kvalitetskontroll',
    description: 'Produkter vurderes nøye før import og distribusjon.',
    icon: ShieldCheck,
  },
  {
    title: 'Effektiv logistikk',
    description: 'Smidig prosess fra leverandør til norsk marked.',
    icon: Truck,
  },
  {
    title: 'Langsiktig samarbeid',
    description: 'Fokus på tillit, tydelig kommunikasjon og gode avtaler.',
    icon: PackageCheck,
  },
];

export default function Features() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Icon size={22} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-950">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}