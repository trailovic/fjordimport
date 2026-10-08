import { useRef, useState } from 'react';
import { Menu, Ship, X } from 'lucide-react';

const navItems = [
  { label: 'Hjem', href: '#home' },
  { label: 'Om oss', href: '#about' },
  { label: 'Tjenester', href: '#services' },
  { label: 'Produkter', href: '#products' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header onKeyDown={(event) => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }} className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:py-5">
        <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
            <Ship size={22} />
          </div>

          <div>
            <p className="text-sm font-bold sm:text-lg tracking-[0.2em] text-slate-950">
              FJORD IMPORT
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Quality goods
            </p>
          </div>
        </a>

        <nav aria-label="Hovedmeny" className="hidden items-center gap-9 lg:flex">
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
          className="hidden rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 lg:inline-flex"
        >
          Kontakt oss
        </a>
        <button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Lukk meny' : 'Åpne meny'} onClick={() => setOpen(!open)} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 lg:hidden">
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobilmeny" hidden={!open} className="max-h-[calc(100dvh-70px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-slate-100">{item.label}</a>)}
      </nav>
    </header>
  );
}
