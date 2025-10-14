import { Navigation } from "./NavBar";
import { LandingPage } from "./pages/LandingPage";
import { AboutPage } from "./pages/AboutPage";
import { PurposePage } from "./pages/ProvidePage";
import { Mission } from "./pages/Mission";
import { ContactPage } from "./pages/Contact";
import { Footer } from "./Footer";

export const ScreenPage = () => {
  return (
    <>
      <Navigation />
        <main>
          <LandingPage />
          <AboutPage />
          <PurposePage />
          <Mission />
          <ContactPage />
        </main>
      <Footer />
    </>
  );
};
