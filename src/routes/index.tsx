import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-shawarma.jpg";
import interiorImg from "@/assets/interior.jpg";
import beefImg from "@/assets/shawarma-beef.jpg";
import mixImg from "@/assets/shawarma-mix.jpg";
import menuImg from "@/assets/shawarma-menu.jpg";
import SectionDivider from "@/components/SectionDivider";
import { Star, Quote, Flame, Leaf, MapPin } from "lucide-react";

const WOLT_URL =
  "https://wolt.com/ro/rou/iasi/restaurant/el-petra-shawarma-69ccfdd5844ce44e47771616";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Petra Shawarma — Shawarma arabescă autentică în Iași" },
      {
        name: "description",
        content:
          "Shawarma iordaniană autentică în centrul Iașului. Rețete tradiționale, carne marinată lent, condimente din Orient. Comandă pe Wolt.",
      },
      { property: "og:title", content: "El Petra Shawarma — Iași" },
      {
        property: "og:description",
        content: "Gustul Orientului, în inima Iașului.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Shawarma autentică pe rotisor"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 starfield opacity-40" />
        <div className="absolute inset-0 sand-grain" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <div className="text-gold text-3xl mb-6">☾ ✦ ☾</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-wheat leading-tight">
            Shawarma Arabescă
            <span className="block text-gold mt-2">Autentică</span>
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-wheat/90 mt-8 max-w-2xl mx-auto">
            Rețete iordaniene tradiționale, preparate cu pasiune în centrul Iașului.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={WOLT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Comandă pe Wolt
            </a>
            <a href="#meniu" className="btn-gold-outline">
              Vezi meniul
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/50 text-2xl animate-pulse">
          ⌄
        </div>
      </section>

      {/* POVESTEA */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 sand-grain opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-display text-gold text-sm tracking-[0.3em] mb-4">
              POVESTEA NOASTRĂ
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-wheat leading-tight">
              Nu e shaorma. <em className="text-gold">E artă.</em>
            </h2>
            <div className="gold-divider my-6 max-w-[120px] mx-0" />
            <p className="text-wheat/85 leading-relaxed mb-4">
              El Petra aduce în Iași autenticitatea shawarma-ului iordanian — preparat
              după rețete tradiționale, cu carne marinată lent și condimentată cu
              mirodenii din Orient. Un gust pe care nu l-ai mai simțit până acum.
            </p>
            <p className="text-wheat/70 leading-relaxed italic">
              Localul nostru a deschis în martie 2026 și a primit imediat sute de fani
              — cozi de sute de metri s-au format în prima zi de la lansare.
            </p>
          </div>
          <div className="ornate-frame rounded-lg overflow-hidden">
            <img
              src={interiorImg}
              alt="Interior El Petra Shawarma cu mural Petra"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SPECIALITĂȚI */}
      <section id="meniu" className="py-24 bg-surface relative">
        <div className="absolute inset-0 starfield opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="font-display text-gold text-sm tracking-[0.3em] mb-3">
            ★ MENIU ★
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-wheat">Specialitățile casei</h2>
          <div className="gold-divider my-6 max-w-[160px] mx-auto" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                img: beefImg,
                title: "Shaorma de Vită la Lipie",
                desc: "Carne de vită marinată, condimentată tradițional, servită în lipie caldă cu sosuri artizanale.",
                price: "43 RON",
              },
              {
                img: mixImg,
                title: "Shaorma Mix la Lipie",
                desc: "Combinația perfectă de vită și pui, pentru cei care nu se pot decide.",
                price: "43 RON",
              },
              {
                img: menuImg,
                title: "Meniu Shaorma Arăbească",
                desc: "Shaorma + garnitură + băutură — masa completă, gustul deplin.",
                price: "55 RON",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-lift bg-background border border-gold/20 rounded-lg overflow-hidden text-left"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-gold">{item.title}</h3>
                  <p className="text-wheat/80 text-sm mt-3 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gold/15">
                    <span className="font-display text-2xl text-wheat font-bold">
                      {item.price}
                    </span>
                    <a
                      href={WOLT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-sm font-bold tracking-wider hover:underline"
                    >
                      COMANDĂ →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/meniu" className="btn-gold-outline">
              Vezi meniul complet
            </Link>
          </div>
        </div>
      </section>

      {/* DE CE EL PETRA */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-display text-gold text-sm tracking-[0.3em] mb-3">
              DE CE EL PETRA?
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-wheat">
              Trei motive. <em className="text-gold">Un singur gust.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="text-gold" size={32} />,
                title: "Rețete iordaniene autentice",
                desc: "Nu shaorma românească — shawarma arabă adevărată, cu condimente tradiționale.",
              },
              {
                icon: <Flame className="text-gold" size={32} />,
                title: "Carne marinată lent",
                desc: "Fiecare bucată de carne este pregătită cu grijă pentru un gust rafinat.",
              },
              {
                icon: <MapPin className="text-gold" size={32} />,
                title: "În centrul Iașului",
                desc: "La doi pași de Starea Civilă, ușor de găsit, imposibil de uitat.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="card-lift bg-surface border border-gold/15 rounded-lg p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mx-auto mb-5">
                  {f.icon}
                </div>
                <h3 className="font-serif text-xl text-gold">{f.title}</h3>
                <p className="text-wheat/75 mt-3 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-surface relative">
        <div className="absolute inset-0 starfield opacity-25" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-display text-gold text-sm tracking-[0.3em] mb-3">
              TESTIMONIALE
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-wheat">Ce spun clienții</h2>
            <div className="gold-divider my-6 max-w-[140px] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Am comandat o shaorma de vită, meniu. Geniala. Este, cred, cea mai bună shaorma pe care am mâncat-o până acum. Carnea are un gust genial. Și foarte generoasă porția.",
                author: "Raluca",
                meta: null,
              },
              {
                quote:
                  "În sfârșit o shaorma adevărată așa cum trebuie — este o operă de artă, gustul este rafinat. Continuați tot așa!",
                author: "Client verificat",
                meta: "Mâncare 5 · Servire 5 · Ambianță 5",
              },
              {
                quote:
                  "Cea mai bună shaorma arabească mix din Iași. Preț corect, 20–40 lei per persoană.",
                author: "Ionuț-Alexandru B.",
                meta: "Mâncare 5 · Servire 5",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="card-lift bg-background border border-gold/20 rounded-lg p-8 relative"
              >
                <Quote className="text-gold/30 absolute top-4 right-4" size={36} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-wheat/85 italic leading-relaxed font-serif">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-gold/15">
                  <div className="text-gold font-bold tracking-wider text-sm">{t.author}</div>
                  {t.meta && <div className="text-wheat/60 text-xs mt-1">{t.meta}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 starfield opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-wheat">
            Foame? <em className="text-gold">Suntem la un click distanță.</em>
          </h2>
          <p className="text-wheat/70 mt-4 font-serif italic">
            Livrare rapidă în tot Iașul prin Wolt.
          </p>
          <a
            href={WOLT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-flex"
          >
            Comandă acum pe Wolt
          </a>
        </div>
      </section>
    </>
  );
}
