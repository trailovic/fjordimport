import { Ship, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Ship size={22} />
            </div>

            <div>
              <p className="text-lg font-bold tracking-[0.2em] text-slate-950">
                FJORD IMPORT
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Quality goods
              </p>
            </div>
          </a>

          <p className="mt-5 max-w-sm leading-7 text-slate-600">
            Pålitelig importpartner for norske bedrifter, med fokus på kvalitet,
            logistikk og langsiktige samarbeid.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-black text-slate-950">Navigasjon</h3>

          <div className="space-y-3">
            {['Om oss', 'Tjenester', 'Produkter', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Om oss' ? 'about' : item === 'Tjenester' ? 'services' : item === 'Produkter' ? 'products' : 'contact'}`}
                className="block text-slate-600 transition hover:text-slate-950"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-black text-slate-950">Kontakt</h3>

          <div className="space-y-4 text-slate-600">
            <a href="mailto:kontakt@fjordimport.no" className="flex items-center gap-3 hover:text-slate-950">
              <Mail size={18} />
              kontakt@fjordimport.no
            </a>

            <a href="tel:+4700000000" className="flex items-center gap-3 hover:text-slate-950">
              <Phone size={18} />
              +47 00 00 00 00
            </a>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              Oslo, Norge
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
        <p>©{new Date().getFullYear()} trailovic.dev | Alle rettigheter reservert</p>
        <p>Import • Distribusjon • B2B-partnerskap</p>
      </div>
    </footer>
  );
}