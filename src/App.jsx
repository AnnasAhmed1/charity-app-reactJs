import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import SerachNotFound from "./pages/serachNotFound";
import Causes from "./pages/causes";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="causes" element={<Causes />} />
      <Route path="not-found" element={<SerachNotFound />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route> */}
    </Routes>
  );
}

export default App;
