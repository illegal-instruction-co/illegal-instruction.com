import './Main.css';

import components from './components';
import pages from './pages';

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <BrowserRouter>
      <components.Header />
      <Routes>
        <Route path="/about" element={<pages.About />} />
        <Route path="/projects" element={<pages.Projects />} />
        <Route path="/blog" element={<pages.Blog />} />
        <Route path="/" element={<pages.Home />} />
      </Routes>
      <components.Footer />
    </BrowserRouter>
  );
}

