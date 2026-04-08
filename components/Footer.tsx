import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tekstbureautulp.nl/wp-content/uploads/2023/08/Tekstbureau-tulp-logo-cropped.png"
            alt="Tekstbureau Tulp"
            className="h-10 w-auto brightness-[10]"
          />
          <p className="text-sm opacity-70 leading-relaxed">
            Fleurige teksten voor een bloeiend bedrijf.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest opacity-50 font-[var(--font-label)]">
            Navigatie
          </p>
          {[
            { href: "/", label: "Home" },
            { href: "/diensten", label: "Diensten" },
            { href: "/over", label: "Over" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest opacity-50 font-[var(--font-label)]">
            Contact
          </p>
          <p className="text-sm opacity-70">Info@tekstbureautulp.nl</p>
          <p className="text-sm opacity-70">06-14627019</p>
          <p className="text-sm opacity-70">KVK: 91155657</p>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-6xl mx-auto px-6 py-4">
        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Tekstbureau Tulp. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
