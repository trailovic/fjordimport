import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Kontakt
          </p>

          <h2 className="mb-6 text-4xl font-black">
            La oss finne riktig importløsning.
          </h2>

          <p className="max-w-xl text-lg leading-8 text-slate-300">
            Har du behov for en pålitelig importpartner, nye leverandører eller
            hjelp med produktflyt? Ta kontakt for en uforpliktende samtale.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:kontakt@fjordimport.no"
              className="flex items-center gap-4 text-slate-300 transition hover:text-white"
            >
              <Mail className="text-white" size={22} />
              kontakt@fjordimport.no
            </a>

            <a
              href="tel:+4700000000"
              className="flex items-center gap-4 text-slate-300 transition hover:text-white"
            >
              <Phone className="text-white" size={22} />
              +47 00 00 00 00
            </a>

            <div className="flex items-center gap-4 text-slate-300">
              <MapPin className="text-white" size={22} />
              Oslo, Norge
            </div>
          </div>
        </div>

        <form className="rounded-4xl border border-white/10 bg-white/4 p-8 shadow-2xl">
          <div className="grid gap-6">
            <input
              type="text"
              placeholder="Navn"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-white/40"
            />

            <input
              type="email"
              placeholder="E-post"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-white/40"
            />

            <input
              type="text"
              placeholder="Firma"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-white/40"
            />

            <textarea
              rows={5}
              placeholder="Fortell oss kort hva du ser etter..."
              className="resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-white/40"
            />

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-slate-200"
            >
              Send forespørsel
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}