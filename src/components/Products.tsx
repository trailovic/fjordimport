import {
  ArrowRight,
  Boxes,
  Coffee,
  Home,
  Leaf,
  Search,
  Truck,
} from 'lucide-react';

const categories = [
  {
    title: 'Forbruksvarer',
    description: 'Praktiske produkter for daglig bruk og detaljhandel.',
    icon: Boxes,
  },
  {
    title: 'Hjem og livsstil',
    description: 'Utvalgte produkter for hjem, interiør og moderne livsstil.',
    icon: Home,
  },
  {
    title: 'Mat og drikke',
    description: 'Kvalitetsprodukter fra leverandører med stabile leveranser.',
    icon: Coffee,
  },
  {
    title: 'Naturlige produkter',
    description: 'Produkter med fokus på kvalitet, enkelhet og rene råvarer.',
    icon: Leaf,
  },
  {
    title: 'Skreddersydd sourcing',
    description: 'Vi hjelper bedrifter med å finne spesifikke produkter og leverandører.',
    icon: Search,
  },
  {
    title: 'Logistikk og koordinering',
    description:
      'Koordinering av leveranser, dokumentasjon og kommunikasjon gjennom hele importprosessen.',
    icon: Truck,
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
              Produktområder
            </p>

            <h2 className="max-w-2xl text-4xl font-black text-slate-950">
              Importløsninger tilpasset norske bedrifter.
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-600">
            Vi arbeider med fleksible produktkategorier og hjelper bedrifter
            med å finne riktige varer for sitt marked.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-black text-slate-950">
                  {category.title}
                </h3>

                <p className="mb-6 leading-8 text-slate-600">
                  {category.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-bold text-slate-950 transition group-hover:gap-3"
                >
                  Forespørsel
                  <ArrowRight size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}