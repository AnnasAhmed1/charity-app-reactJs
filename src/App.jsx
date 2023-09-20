import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import SerachNotFound from "./pages/serachNotFound";
import Causes from "./pages/causes";
import Blog from "./pages/blog";
import Donate from "./pages/donate";
import DonateModal from "./components/donateModal";
import Faq from "./pages/faq";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="donate" element={<Donate />} />
      <Route path="contact" element={<Contact />} />
      <Route path="causes" element={<Causes />} />
      <Route path="faq" element={<Faq />} />
      <Route path="not-found" element={<SerachNotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
