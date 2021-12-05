import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import NotFound from "../../pages/NotFound/NotFound";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Skills from "../../pages/Skills/Skills";
import Blog from "../../pages/Blog/Blog";
import Layout from "./Layout/Layout";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
