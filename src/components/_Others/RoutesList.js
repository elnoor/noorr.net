import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../../pages/Home/Home";
import Contact from "./../../pages/Contact/Contact";
import NotFound from "./../../pages/NotFound/NotFound";
import About from "./../../pages/About/About";
import Projects from "./../../pages/Projects/Projects";
import Skills from "./../../pages/Skills/Skills";
import RunGame from "./../../pages/Projects/RunGame/RunGame";

export default function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />}>
        <Route index element={<Projects />} />
        <Route path="run" element={<RunGame />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
