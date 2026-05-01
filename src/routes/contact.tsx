import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const WOLT_URL =
  "https://wolt.com/ro/rou/iasi/restaurant/el-petra-shawarma-69ccfdd5844ce44e47771616";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — El Petra Shawarma Iași" },
      {
        name: "description",
        content:
          "Vizitează-ne pe Strada Vasile Alecsandri 7-11, Iași. Telefon: +40 790 915 977. Program zilnic. Comandă online pe Wolt.",
      },
      { property: "og:title", content: "Contact El Petra Shawarma" },
      {
        property: "og:description",
        content: "Adresă, program și contact El Petra Shawarma Iași.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-background relative">
      <div className="absolute inset-0 starfield opacity-15 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <header className="text-center mb-14">
          <div className="font-display text-gold text-sm tracking-[0.3em] mb-3">
            ✦ CONTACT ✦
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-wheat">
            Vino să ne <em className="text-gold">cunoști</em>
          </h1>
          <div className="gold-divider my-6 max-w-[200px] mx-auto" />
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <InfoRow icon={<MapPin className="text-gold" size={22} />} title="Adresă">
              <p>Str. Vasile Alecsandri 7-11, Iași 700054</p>
              <p className="text-wheat/60 text-sm italic mt-1">
                față în față cu Starea Civilă Iași
              </p>
            </InfoRow>

            <InfoRow icon={<Phone className="text-gold" size={22} />} title="Telefon">
              <a
                href="tel:+40790915977"
                className="text-wheat hover:text-gold transition-colors"
              >
                +40 790 915 977
              </a>
            </InfoRow>

            <InfoRow icon={<Clock className="text-gold" size={22} />} title="Program">
              <ul className="space-y-1 text-wheat/85">
                <li>Luni–Joi & Duminică: 10:00 – 22:00</li>
                <li>Vineri–Sâmbătă: 11:00 – 23:00</li>
              </ul>
            </InfoRow>

            <InfoRow
              icon={<span className="text-2xl">🛵</span>}
              title="Comandă online"
            >
              <a
                href={WOLT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-wheat hover:text-gold transition-colors inline-flex items-center gap-2"
              >
                Wolt — livrare în tot Iașul →
              </a>
            </InfoRow>

            <InfoRow icon={<Instagram className="text-gold" size={22} />} title="Instagram">
              <a
                href="https://instagram.com/elpetrashawarma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wheat hover:text-gold transition-colors"
              >
                @elpetrashawarma
              </a>
            </InfoRow>
          </div>

          {/* Map */}
          <div className="ornate-frame rounded-lg overflow-hidden h-[420px] md:h-full min-h-[420px]">
            <iframe
              title="El Petra Shawarma — locație pe hartă"
              src="https://www.google.com/maps?q=El+Petra+Shawarma+Strada+Vasile+Alecsandri+Iasi&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 grayscale-[20%] contrast-110"
              style={{ filter: "invert(0.85) hue-rotate(180deg) saturate(0.6)" }}
            />
          </div>
        </div>

        {/* Form */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-wheat text-center">Trimite-ne un mesaj</h2>
          <div className="gold-divider my-6 max-w-[140px] mx-auto" />

          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-5 bg-surface border border-gold/15 rounded-lg p-8"
          >
            <Field label="Nume">
              <input
                type="text"
                name="name"
                required
                className="form-input"
              />
            </Field>
            <Field label="Telefon / Email">
              <input
                type="text"
                name="contact"
                required
                className="form-input"
              />
            </Field>
            <Field label="Subiect">
              <select name="subject" className="form-input">
                <option value="Feedback">Feedback</option>
                <option value="Colaborare">Colaborare</option>
                <option value="Altele">Altele</option>
              </select>
            </Field>
            <Field label="Mesaj">
              <textarea
                name="message"
                rows={5}
                required
                className="form-input resize-none"
              />
            </Field>
            <button type="submit" className="btn-gold w-full">
              Trimite mesajul
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--background);
          border: 1px solid oklch(0.30 0.04 60 / 0.5);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: var(--foreground);
          font-family: var(--font-sans);
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px oklch(0.74 0.14 70 / 0.15);
        }
      `}</style>
    </div>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start bg-surface border border-gold/15 rounded-lg p-5 card-lift">
      <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-display text-gold text-xs tracking-[0.25em] mb-1">
          {title.toUpperCase()}
        </div>
        <div className="text-wheat">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-display text-xs text-gold tracking-widest mb-2 block">
        {label.toUpperCase()}
      </span>
      {children}
    </label>
  );
}
