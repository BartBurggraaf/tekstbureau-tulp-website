import Link from "next/link";

const waarden = [
  {
    title: "Persoonlijke aandacht",
    body: "Elk project begint met een goed gesprek. Ik leer uw bedrijf kennen zodat de teksten echt van u zijn.",
  },
  {
    title: "Authenticiteit",
    body: "Alles wordt eerst door u goedgekeurd. Uw eigen stijl en stem blijven altijd het vertrekpunt.",
  },
  {
    title: "Bondige, pakkende teksten",
    body: "Geen wollige zinnen of jargon — alleen heldere teksten die uw doelgroep direct aanspreken.",
  },
];

export default function OverPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <section className="bg-[var(--color-surface-container-low)] py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <p className="font-[var(--font-label)] text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Over ons
          </p>
          <h1 className="font-[var(--font-headline)] text-5xl md:text-6xl font-bold italic text-[var(--color-on-surface)] leading-tight max-w-2xl">
            Klaar als u tevreden bent
          </h1>
        </div>
      </section>

      {/* ── Story ───────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-[var(--font-label)] text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Het verhaal
            </p>
            <h2 className="font-[var(--font-headline)] text-4xl font-bold italic text-[var(--color-on-surface)] leading-tight">
              Ontmoet Rosanne Burggraaf
            </h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              Tekstbureau Tulp is ontstaan uit de creatieve geest van Rosanne Burggraaf. Met een achtergrond in sociaal werk, coaching, jeugdzorg en ondernemerschap brengt ze een unieke blik op taal en communicatie.
            </p>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
              Haar doel: andere ondernemers helpen hun bedrijf op te bouwen en hun doelgroep te bereiken — met persoonlijke aandacht, authenticiteit en bondige, pakkende teksten.
            </p>
            <blockquote className="border-l-4 border-[var(--color-primary)] pl-5 italic font-[var(--font-headline)] text-xl text-[var(--color-on-surface)]">
              &ldquo;Zo als men ijzer met ijzer scherpt, zo scherpt de mens zijn medemens.&rdquo;
            </blockquote>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-[var(--radius-brand)] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://tekstbureautulp.nl/wp-content/uploads/2023/08/bloemen-tekstbureau-tulp-scaled.jpg"
                alt="Rosanne Burggraaf — Tekstbureau Tulp"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tonal overlay card */}
            <div className="absolute -bottom-5 -right-5 bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-brand)] px-5 py-4 shadow-[0_20px_40px_rgba(0,32,30,0.06)] space-y-0.5">
              <p className="font-[var(--font-headline)] font-bold text-[var(--color-on-surface)] italic">Rosanne Burggraaf</p>
              <p className="text-xs font-[var(--font-label)] uppercase tracking-widest text-[var(--color-on-surface-variant)]">
                Oprichter & tekstschrijver
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waarden ─────────────────────────────────────── */}
      <section className="bg-[var(--color-surface-container-low)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 space-y-3">
            <p className="font-[var(--font-label)] text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Kernwaarden
            </p>
            <h2 className="font-[var(--font-headline)] text-4xl font-bold italic text-[var(--color-on-surface)]">
              Waar Tulp voor staat
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {waarden.map(({ title, body }) => (
              <div
                key={title}
                className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-brand)] p-8 space-y-3 shadow-[0_4px_24px_rgba(0,32,30,0.04)]"
              >
                <h3 className="font-[var(--font-headline)] text-xl font-bold italic text-[var(--color-on-surface)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-[var(--font-headline)] text-3xl font-bold italic text-[var(--color-on-surface)]">
            Zullen we samenwerken?
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[var(--color-secondary)] text-[var(--color-on-secondary)] text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-[var(--radius-brand)] hover:bg-[var(--color-secondary-container)] transition-colors font-[var(--font-label)]"
            >
              Neem contact op
            </Link>
            <Link
              href="/diensten"
              className="inline-flex items-center border-2 border-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-[var(--radius-brand)] hover:border-[var(--color-primary)] transition-colors font-[var(--font-label)]"
            >
              Bekijk diensten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
