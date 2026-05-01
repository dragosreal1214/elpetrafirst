import { createFileRoute } from "@tanstack/react-router";

const WOLT_URL =
  "https://wolt.com/ro/rou/iasi/restaurant/el-petra-shawarma-69ccfdd5844ce44e47771616";

export const Route = createFileRoute("/meniu")({
  head: () => ({
    meta: [
      { title: "Meniu — El Petra Shawarma Iași" },
      {
        name: "description",
        content:
          "Meniul El Petra: shaorma de vită, pui și mix, meniu arăbesc, garnituri, băuturi și sosuri. Prețuri corecte în centrul Iașului.",
      },
      { property: "og:title", content: "Meniu El Petra Shawarma" },
      {
        property: "og:description",
        content: "Shaorma la lipie, meniuri arăbești, garnituri și sosuri tradiționale.",
      },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; price: string; tag?: string; desc?: string };

function Section({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: Item[];
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2 className="font-display text-2xl md:text-3xl text-gold tracking-widest">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gold/20" />
      </div>
      <ul className="space-y-5">
        {items.map((it) => (
          <li key={it.name} className="flex items-baseline">
            <div className="flex-shrink-0">
              <div className="font-serif text-lg text-wheat">
                {it.name}
                {it.tag && (
                  <span className="ml-3 text-xs font-display tracking-wider text-gold">
                    ⭐ {it.tag}
                  </span>
                )}
              </div>
              {it.desc && (
                <div className="text-wheat/60 text-sm italic mt-1">{it.desc}</div>
              )}
            </div>
            <span className="menu-leader" />
            <span className="font-display text-lg text-gold font-bold whitespace-nowrap">
              {it.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuPage() {
  return (
    <div className="pt-32 pb-20 bg-background relative">
      <div className="absolute inset-0 starfield opacity-15 pointer-events-none" />
      <div className="absolute inset-0 sand-grain pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        <header className="text-center mb-14">
          <div className="font-display text-gold text-sm tracking-[0.3em] mb-3">
            ✦ MENIU ✦
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-wheat">Meniul nostru</h1>
          <p className="font-serif italic text-wheat/70 mt-4">
            Rețete iordaniene autentice, pregătite cu mirodenii din Orient.
          </p>
          <div className="gold-divider my-6 max-w-[200px] mx-auto" />
        </header>

        <Section
          icon="🥙"
          title="SHAORMA LA LIPIE"
          items={[
            { name: "Shaorma de Vită la Lipie", price: "43 RON", tag: "Popular" },
            {
              name: "Shaorma Mix la Lipie",
              price: "43 RON",
              desc: "Vită + pui",
            },
            { name: "Shaorma de Pui la Lipie", price: "41 RON", tag: "Popular" },
          ]}
        />

        <Section
          icon="🍽️"
          title="MENIU SHAORMA ARĂBEASCĂ"
          items={[
            {
              name: "Meniu Shaorma Arăbească",
              price: "55 RON",
              desc: "Shaorma + garnitură + băutură",
            },
          ]}
        />

        <Section
          icon="🥗"
          title="GARNITURI"
          items={[
            { name: "Cartofi prăjiți", price: "12 RON" },
            { name: "Salată orientală", price: "14 RON" },
            { name: "Hummus cu lipie", price: "16 RON" },
          ]}
        />

        <Section
          icon="🥤"
          title="BĂUTURI RĂCORITOARE"
          items={[
            { name: "Coca-Cola / Fanta / Sprite 0.33L", price: "8 RON" },
            { name: "Apă plată / minerală 0.5L", price: "6 RON" },
            { name: "Ayran tradițional", price: "9 RON" },
          ]}
        />

        <Section
          icon="🫙"
          title="SOSURI"
          items={[
            { name: "Sos de usturoi (toum)", price: "5 RON" },
            { name: "Sos picant arabesc", price: "5 RON" },
            { name: "Tahini", price: "5 RON" },
          ]}
        />

        <p className="font-serif italic text-gold/90 text-center mt-12 mb-8">
          Meniul complet disponibil și pe Wolt pentru comandă online cu livrare.
        </p>

        <div className="text-center">
          <a
            href={WOLT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Comandă pe Wolt
          </a>
        </div>
      </div>
    </div>
  );
}
