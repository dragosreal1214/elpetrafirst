export default function SectionDivider() {
  return (
    <div className="relative h-px max-w-3xl mx-auto my-2 flex items-center justify-center">
      <div className="gold-divider w-full" />
      <span className="absolute bg-background px-4 text-gold/70 text-lg">✦</span>
    </div>
  );
}
