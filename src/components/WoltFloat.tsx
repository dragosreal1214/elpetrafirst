const WOLT_URL =
  "https://wolt.com/ro/rou/iasi/restaurant/el-petra-shawarma-69ccfdd5844ce44e47771616";

export default function WoltFloat() {
  return (
    <a
      href={WOLT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Comandă pe Wolt"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full pl-4 pr-5 py-3 text-white font-bold text-sm shadow-2xl transition-transform hover:-translate-y-1 hover:scale-105"
      style={{ backgroundColor: "#009DE0", boxShadow: "0 10px 30px -5px rgba(0,157,224,0.6)" }}
    >
      <span className="text-xl">🛵</span>
      <span className="hidden sm:inline tracking-wider">Comandă pe Wolt</span>
    </a>
  );
}
