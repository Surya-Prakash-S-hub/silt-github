import { Route, Routes } from "react-router-dom";
import { ScreenPage } from "./components/DirectorPage";
import { Navigation } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ScreenPage />} />
          <Route path="*" element={<h1>404 we never created this Page!</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
