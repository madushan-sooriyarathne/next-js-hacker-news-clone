import Link from "next/link";
import SideBar from "./sidebar";
import Overlay from "./overlay";

const Page = ({ children }) => {
  return (
    <div className="page">
      <header className="page-header">
        <div className="header-logo">N.J.H.N.C.</div>
        <nav className="header-nav-bar">
          <Link href="/">
            <a className="nav-bar-link">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-bar-link">About</a>
          </Link>
        </nav>
      </header>
      <div className="page-content">{children}</div>
      <Overlay />
      <SideBar />
      <footer className="page-footer">
        <div className="footer-note">
          Made with ❤️ by Madushan in Sri Lanka 🇱🇰. Powered by
          <a href="https://node-hnapi.herokuapp.com/" className="footer-link">
            this
          </a>
          unofficial Hacker News API
        </div>
        <div className="footer-social-links">
          <a
            href="https://github.com/madushan-sooriyarathne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social-link">
              <use xlinkHref="/static/img/sprites.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/madushan.sooriyarathne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social-link">
              <use xlinkHref="/static/img/sprites.svg#icon-facebook"></use>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/iam_madushan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social-link">
              <use xlinkHref="/static/img/sprites.svg#icon-instagram"></use>
            </svg>
          </a>
        </div>
      </footer>
      <style jsx>
        {`
          .page {
            position: relative;
            min-height: 100vh;
            max-width: 100vw;
            overflow: hidden;
            display: grid;
            grid-template-rows: min-content 1fr min-content;
          }

          .page-header {
            grid-row: 1 / 2;

            display: flex;
            align-items: center;

            padding: 2rem;

            background-color: var(--color-primary);
          }

          .header-logo {
            font-size: 3rem;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--color-white);
            margin-right: 3rem;
          }

          .header-nav-bar {
            display: flex;
            align-items: center;
          }

          .header-nav-bar > *:not(:last-child) {
            margin-right: 1rem;
          }

          .nav-bar-link {
            font-size: 1.5rem;
            font-weight: 500;
            text-decoration: none;
            text-transform: uppercase;
            color: var(--color-white);
            transition: all 0.2s ease-out;
          }

          .nav-bar-link:hover {
            color: var(--color-primary-light);
            transform: scale(1.05);
          }

          .page-footer {
            padding: 2rem;

            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: var(--color-primary-darker);
          }

          .footer-note {
            font-size: 1.5rem;
            font-weight: 500;
            color: white;
          }

          .footer-link {
            display: inline-block;
            color: var(--color-primary-light);
            text-decoration: none;
            transition: transform 0.2s ease-in;
            margin: 0 0.5rem;
          }

          .footer-link:hover {
            transform: rotate(-5deg) scale(1.05);
          }

          .footer-social-links {
            display: flex;
            align-items: center;
          }

          .footer-social-links > *:not(:last-child) {
            margin-right: 1rem;
          }

          .social-link {
            fill: var(--color-white);
            width: 3rem;
            height: 3rem;
            transition: all 0.2s ease-in;
          }

          .social-link:hover {
            fill: var(--color-primary-light);
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Page;
