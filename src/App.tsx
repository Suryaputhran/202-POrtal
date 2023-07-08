import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Services from "./pages/Services";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import Link from "./pages/Link";
import AboutUs from "./pages/AboutUs";
import Insights from "./pages/Insights";
import Portal from "./pages/Portal";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-16":
        title = "";
        metaDescription = "";
        break;
      case "/frame-18":
        title = "";
        metaDescription = "";
        break;
      case "/link":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/insights":
        title = "";
        metaDescription = "";
        break;
      case "/202-portal":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path="/frame-16" element={<FrameComponent />} />
      <Route path="/frame-18" element={<FrameComponent1 />} />
      <Route path="/link" element={<Link />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/202-portal" element={<Portal />} />
    </Routes>
  );
}
export default App;
