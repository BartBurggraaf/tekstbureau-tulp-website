import Link from "next/link";
import { getPage } from "@/lib/supabase";

const valueProps = [
  { title: "Creatieve invalshoeken", body: "We schrijven creatieve teksten die klanten trekken, zodat u zich kunt focussen op uw klant.", icon: "✦" },
  { title: "Laat uw stem horen!", body: "Authenticiteit is prioriteit! Alles wordt eerst door u goedgekeurd. Zo houdt u eigen stijl en stem.", icon: "◆" },
  { title: "Blijf bij de tijd", body: "Een frisse blik op uw website of publicatie, met tips en tricks om uw publiek te bereiken.", icon: "❋" },
];

const offerings = [
  "Webcontent & SEO-artikelen",
  "Quickscan voor uw website",
  "AI-prompts die werken voor uw bedrijf",
  "Redactie van geschreven teksten",
  "Website optimalisatie",
  "Zoekwoorden- en doelgroeponderzoek",
];

export default async function Home() {
  const c = await getPage("home") ?? {};

  const heroHeading    = c.hero_heading    ?? "Fleurige teksten voor een bloeiend bedrijf!";
  const heroBody       = c.hero_body       ?? "Tekstbureau Tulp schrijft pakkende teksten die klanten trekken — met authenticiteit als prioriteit.";
  const heroCta1       = c.hero_cta_primary  ?? "Ontdek onze diensten";
  const heroCta2       = c.hero_cta_secondary ?? "Gratis quickscan";
  const sectionHeading = c.section_heading ?? "De kunst van messcherpe teksten";
  const servicesHeading = c.services_heading ?? "Tekstbureau Tulp denkt altijd in mogelijkheden.";
  const servicesBody   = c.services_body   ?? "Van een korte redactiesessie tot een volledige contentstrategie — ik pas mijn aanpak aan op uw wensen en doelgroep.";
  const ctaHeading     = c.cta_heading     ?? "Klaar voor een frisse blik op uw website?";
  const ctaBody        = c.cta_body        ?? "De quickscan kijkt naar leesbaarheid, doelgroep, online vindbaarheid en kansen. Volledig gratis en vrijblijvend.";

  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] min-h-[88vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="font-[var(--font-label)] text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Tekstbureau Tulp
            </p>
            <h1 className="font-[var(--font-headline)] text-5xl md:text-6xl font-bold leading-[1.05] text-[var(--color-on-surface)] italic">
              {heroHeading}
            </h1>
            <p className="text-lg text-[var(--color-on-surface-variant)] leading-relaxed max-w-md">
              {heroBody}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/diensten" className="inline-flex items-center bg-[var(--color-secondary)] text-[var(--color-on-secondary)] text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-[var(--radius-brand)] hover:bg-[var(--color-secondary-container)] transition-colors font-[var(--font-label)]">
                {heroCta1}
              </Link>
              <Link href="/contact" className="inline-flex items-center border-2 border-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-[var(--radius-brand)] hover:border-[var(--color-primary)] transition-colors font-[var(--font-label)]">
                {heroCta2}
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-[4/3] rounded-[var(--radius-brand)] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://tekstbureautulp.nl/wp-content/uploads/2023/08/bloemen-tekstbureau-tulp-scaled.jpg" alt="Tekstbureau Tulp" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-brand)] px-6 py-4 shadow-[0_20px_40px_rgba(0,32,30,0.08)]">
              <p className="font-[var(--font-headline)] text-3xl font-bold text-[var(--color-primary)] italic">15+</p>
              <p className="text-xs font-[var(--font-label)] uppercase tracking-widest text-[var(--color-on-surface-variant)] mt-0.5">Jaren ervaring</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value props ─────────────────────────────────── */}
      <section className="bg-[var(--color-surface-container-low)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 space-y-3">
            <p className="font-[var(--font-label)] text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">Waarom Tulp</p>
            <h2 className="font-[var(--font-headline)] text-4xl font-bold italic text-[var(--color-on-surface)]">{sectionHeading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map(({ title, body, icon }) => (
              <div key={title} className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-brand)] p-8 space-y-4 shadow-[0_4px_24px_rgba(0,32,30,0.04)]">
                <span className="text-3xl text-[var(--color-primary)]">{icon}</span>
                <h3 className="font-[var(--font-headline)] text-xl font-bold text-[var(--color-on-surface)] italic">{title}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services list ───────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-[var(--font-label)] text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)]">Wat ik doe</p>
            <h2 className="font-[var(--font-headline)] text-4xl font-bold italic text-[var(--color-on-surface)] leading-tight">{servicesHeading}</h2>
            <p className="text-[var(--color-on-surface-variant)] leading-relaxed">{servicesBody}</p>
            <Link href="/diensten" className="inline-flex items-center text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest font-[var(--font-label)] border-b-2 border-[var(--color-primary-fixed)] pb-0.5 hover:border-[var(--color-primary)] transition-colors">
              Bekijk alle diensten →
            </Link>
          </div>
          <ul className="space-y-4">
            {offerings.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                <span className="text-[var(--color-on-surface-variant)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="bg-[var(--color-primary)] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <p className="font-[var(--font-label)] text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary-fixed)]">Gratis aangeboden</p>
          <h2 className="font-[var(--font-headline)] text-4xl md:text-5xl font-bold italic text-[var(--color-on-primary)] leading-tight">{ctaHeading}</h2>
          <p className="text-[var(--color-on-primary)]/80 max-w-xl mx-auto leading-relaxed">{ctaBody}</p>
          <Link href="/contact" className="inline-flex items-center bg-[var(--color-on-primary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-fixed)] transition-colors font-[var(--font-label)]">
            Vraag gratis quickscan aan
          </Link>
        </div>
      </section>
    </>
  );
}
