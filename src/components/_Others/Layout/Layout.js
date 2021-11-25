import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="app">
      <div className="container py-3 text-secondary text-center">
        <Header />
        <main className="py-md-5">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 border-bottom border-custom-color">
        <Link
          to="/"
          className="d-flex align-items-center text-info text-decoration-none"
        >
          <span className="brand fs-2 lh-1">Elnur Mammadli</span>
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <NavLink to="/" className="me-4 py-2 link-info text-decoration-none">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="me-4 py-2 link-info text-decoration-none"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="me-4 py-2 link-info text-decoration-none"
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className="me-4 py-2 link-info text-decoration-none"
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 link-info text-decoration-none"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="pt-4 pt-md-5 border-top border-custom-color">
      <div className="row">
        <div className="col-12 col-md text-md-start">
          <legend>noorr.net</legend>
          <small className="d-block mb-3 text-muted">
            © 2015 – {new Date().getFullYear()}
          </small>
        </div>
        <div className="col-6 col-md text-md-start">
          <h5 className="text-light text-opacity-75">Pages</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/about">
                About me
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                to="/contact"
              >
                Contact me
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                to="/skills"
              >
                My skills
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                to="/projects"
              >
                My Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md text-md-start">
          <h5 className="text-light text-opacity-75">Projects</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a
                className="link-secondary text-decoration-none"
                href="https://play.google.com/store/apps/details?id=net.noorr.menote.menote"
                target="_blank"
                rel="noreferrer"
              >
                MeNote
              </a>
            </li>
            <li className="mb-1">
              <a
                className="link-secondary text-decoration-none"
                href="https://candysnake.netlify.com"
                target="_blank"
                rel="noreferrer"
              >
                Candy Snake
              </a>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                to="projects/run"
              >
                Run Against Gravity
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md text-md-start">
          <h5 className="text-light text-opacity-75">Me on</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link className="link-secondary text-decoration-none" to="/about">
                LinkedIn
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                to="/contact"
              >
                GitHub
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                to="/skills"
              >
                Stack Overflow
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                to="/projects"
              >
                Medium
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
