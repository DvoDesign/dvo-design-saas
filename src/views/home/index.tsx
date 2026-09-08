/**
 * Home view — DvoDesign landing page (Server Component per hard rule #7).
 * Every section below is a client leaf; this file only composes them.
 */
import { PageLoader } from "./page-loader";
import { Header } from "./header";
import { Hero } from "./hero";
import { About } from "./about";
import { CreateBand } from "./create-band";
import { Portfolio } from "./portfolio";
import { Services } from "./services";
import { Stats } from "./stats";
import { Footer } from "./footer";
import { NavMenu } from "./nav-menu";
import { RequestModal } from "./request-modal";
import {
  PORTFOLIO_ITEMS,
  SERVICES,
  STATS,
} from "@/data/mocks/home";

export const HomeView = () => {
  return (
    <>
      <a
        href="#main"
        className="fixed top-4 left-4 z-60 -translate-y-20 rounded-control bg-ink px-4 py-2 text-sm text-white focus:translate-y-0"
      >
        Skip to content
      </a>

      <PageLoader />
      <Header />

      <main id="main" className="min-h-lvh">
        <Hero />
        <About />
        <CreateBand />
        <Portfolio items={PORTFOLIO_ITEMS} />
        <Services items={SERVICES} />
        <Stats items={STATS} />
      </main>

      <Footer />
      <NavMenu />
      <RequestModal />
    </>
  );
};
