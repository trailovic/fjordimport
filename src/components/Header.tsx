import { Ship } from 'lucide-react';

const navItems = [
  { label: 'Hjem', href: '#home' },
  { label: 'Om oss', href: '#about' },
  { label: 'Tjenester', href: '#services' },
  { label: 'Produkter', href: '#products' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
        >
          Kontakt oss
        </a>
      </div>
    </header>
  );
}