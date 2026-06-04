const steps = [
  {
    number: '01',
    title: 'Innledende dialog',
    description:
      'Vi starter med å forstå dine behov, produkter og målsetninger.',
  },
  {
    number: '02',
    title: 'Leverandør og sourcing',
    description:
      'Vi identifiserer relevante leverandører og vurderer kvalitet, kapasitet og pris.',
  },
  {
    number: '03',
    title: 'Import og logistikk',
    description:
      'Vi koordinerer transport, dokumentasjon og levering gjennom hele prosessen.',
  },
  {
    number: '04',
    title: 'Langsiktig samarbeid',
    description:
      'Vi bygger stabile relasjoner og hjelper med videre vekst og nye muligheter.',
  },
];

export default function Process() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Vår prosess
          </p>

          <h2 className="text-4xl font-black text-slate-950">
            En enkel og transparent arbeidsflyt
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Vi tror på tydelig kommunikasjon, realistiske forventninger
            og langsiktige partnerskap.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-4xl border border-slate-200 bg-slate-50 p-8"
            >
              <span className="text-5xl font-black text-slate-200">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-black text-slate-950">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}