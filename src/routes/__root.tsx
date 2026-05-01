import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WoltFloat from "@/components/WoltFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 font-serif text-xl text-wheat">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-wheat/70">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold">
            Înapoi acasă
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WoltFloat />
    </>
  );
}
