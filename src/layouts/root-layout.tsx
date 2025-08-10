import { Outlet } from "react-router-dom";
import { Navbar } from "../components/ui/navbar";
import Footer from "../components/ui/footer";

export function RootLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-background max-w-8xl mx-auto pt-20">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
