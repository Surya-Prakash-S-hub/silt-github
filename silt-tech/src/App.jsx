import { Route, Routes } from "react-router-dom";
import { ScreenPage } from "./components/DirectorPage"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { PageNotFound } from "./components/pages/404";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out"
    });
  },[]);
  useEffect(() => {
    const setBodyDimensions = () => {
      const body = document.body;
      body.style.setProperty('--x-width', `${body.offsetWidth}px`);
      body.style.setProperty('--x-height', `${body.offsetHeight}px`);
    };

    setBodyDimensions();

    window.addEventListener('resize', setBodyDimensions);

    return () => {
      window.removeEventListener('resize', setBodyDimensions);
    };
  })
  return (
    <>
        <Routes>
          <Route path="/" element={<ScreenPage />} />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </>
  );
}

export default App;
