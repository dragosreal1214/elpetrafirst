import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import beef from "@/assets/shawarma-beef.jpg";
import mix from "@/assets/shawarma-mix.jpg";
import menuPlate from "@/assets/shawarma-menu.jpg";
import sauces from "@/assets/sauces.jpg";
import fries from "@/assets/fries.jpg";
import rotisserie from "@/assets/rotisserie.jpg";
import interior from "@/assets/interior.jpg";
import ambient1 from "@/assets/ambient-1.jpg";
import ambientPetra from "@/assets/ambient-petra.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — El Petra Shawarma Iași" },
      {
        name: "description",
        content:
          "Galerie foto El Petra: preparate autentice, interior cu murale Petra, ambianță orientală în centrul Iașului.",
      },
      { property: "og:title", content: "Galerie El Petra Shawarma" },
      {
        property: "og:description",
        content: "Imagini cu preparatele și ambianța orientală a restaurantului.",
      },
    ],
  }),
  component: GalleryPage,
});

type Cat = "all" | "food" | "interior" | "ambient";

const photos: { src: string; alt: string; cat: Exclude<Cat, "all"> }[] = [
  { src: beef, alt: "Shaorma de vită", cat: "food" },
  { src: interior, alt: "Interior cu mural Petra", cat: "interior" },
  { src: mix, alt: "Shaorma mix", cat: "food" },
  { src: ambientPetra, alt: "Mural Petra Jordan", cat: "ambient" },
  { src: menuPlate, alt: "Meniu shawarma complet", cat: "food" },
  { src: ambient1, alt: "Mural cort beduin cu cer înstelat", cat: "ambient" },
  { src: rotisserie, alt: "Rotisor cu carne marinată", cat: "food" },
  { src: sauces, alt: "Sosuri tradiționale", cat: "food" },
  { src: fries, alt: "Cartofi prăjiți garnitură", cat: "food" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = filter === "all" ? photos : photos.filter((p) => p.cat === filter);

  const tabs: { id: Cat; label: string }[] = [
    { id: "all", label: "Toate" },
    { id: "food", label: "🥙 Preparate" },
    { id: "interior", label: "🏠 Interior" },
    { id: "ambient", label: "🌟 Ambianță" },
  ];

  return (
    <div className="pt-32 pb-20 bg-background relative">
      <div className="absolute inset-0 sand-grain pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <header className="text-center mb-10">
          <div className="font-display text-gold text-sm tracking-[0.3em] mb-3">
            ✦ GALERIE ✦
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-wheat">
            Lasă imaginile să vorbească
          </h1>
          <p className="font-serif italic text-wheat/70 mt-4 max-w-xl mx-auto">
            Shawarma autentică, ambianță orientală, experiențe memorabile.
          </p>
          <div className="gold-divider my-6 max-w-[200px] mx-auto" />
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-display tracking-wider border transition-all ${
                filter === t.id
                  ? "bg-gold text-background border-gold"
                  : "border-gold/30 text-wheat/80 hover:border-gold hover:text-gold"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setLightbox(i)}
              className="block w-full mb-5 break-inside-avoid group relative overflow-hidden rounded-lg ornate-frame card-lift"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-wheat text-sm font-serif italic">{p.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-gold p-2 hover:scale-110 transition-transform"
            onClick={() => setLightbox(null)}
            aria-label="Închide"
          >
            <X size={32} />
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg ornate-frame"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
