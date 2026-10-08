import { useRef, useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'demo'>('idle');
  const pending = useRef(false);
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    if (!endpoint) { setStatus('demo'); return; }
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;
    pending.current = true;
    setStatus('sending');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('success');
    } catch { setStatus('error'); }
    finally { window.clearTimeout(timeout); pending.current = false; }
  }
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

          <p className="mt-6 text-sm text-slate-400">Demoinnhold – kontaktopplysningene nedenfor er eksempler.</p>
          <div className="mt-10 space-y-5">
            <div
              className="flex items-center gap-4 text-slate-300 transition hover:text-white"
            >
              <Mail className="text-white" size={22} />
              kontakt@example.com
            </div>

            <div
              className="flex items-center gap-4 text-slate-300 transition hover:text-white"
            >
              <Phone className="text-white" size={22} />
              +47 00 00 00 00
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <MapPin className="text-white" size={22} />
              Oslo, Norge
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} aria-describedby="form-note" className="rounded-4xl border border-white/10 bg-white/4 p-5 sm:p-8 shadow-2xl">
          <p id="form-note" className="mb-6 text-sm leading-6 text-slate-300">{endpoint ? 'Send en forespørsel via skjemaet.' : 'Dette er et demoskjema. Ingen opplysninger blir sendt eller lagret. Bruk gjerne fiktive opplysninger for å prøve det.'}</p>
          <div className="hidden" aria-hidden="true"><label htmlFor="website">Nettside</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
          <div className="grid gap-6">
            <label className="grid gap-2 text-sm font-semibold" htmlFor="contact-name">
              Navn
            <input id="contact-name" name="name" autoComplete="name" required maxLength={200}
              type="text"
              placeholder="Navn"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-white/40"
            />
            </label>

            <label className="grid gap-2 text-sm font-semibold" htmlFor="contact-email">
              E-post
            <input id="contact-email" name="email" autoComplete="email" required maxLength={200}
              type="email"
              placeholder="E-post"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-white/40"
            />
            </label>

            <label className="grid gap-2 text-sm font-semibold" htmlFor="contact-company">
              Firma (valgfritt)
            <input id="contact-company" name="company" autoComplete="organization"  maxLength={200}
              type="text"
              placeholder="Firma"
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-white/40"
            />
            </label>

            <label className="grid gap-2 text-sm font-semibold" htmlFor="contact-message">Melding
            <textarea id="contact-message" name="message" required maxLength={5000}
              rows={5}
              placeholder="Fortell oss kort hva du ser etter..."
              className="resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-white/40"
            />
            </label>

            <button
              type="submit" disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-slate-200 disabled:cursor-wait disabled:opacity-60"
            >
              {status === 'sending' ? 'Sender…' : endpoint ? 'Send forespørsel' : 'Prøv demoskjema'}
              <Send size={18} />
            </button>
            <p role="status" aria-live="polite" className="text-sm leading-6 text-slate-200">
              {status === 'demo' && 'Skjemaet er fylt ut riktig. Dette er en demo – ingenting er sendt.'}
              {status === 'success' && 'Takk! Forespørselen er sendt.'}
              {status === 'error' && 'Kunne ikke sende forespørselen. Prøv igjen om litt. Opplysningene dine står fortsatt i skjemaet.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
