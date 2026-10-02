import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants";
export default function Footer() {
  return (
    <footer className="site-footer wrap">
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-wordmark">
            ONEIRISM
          </Link>
          <p>Things connect over time.</p>
        </div>
        <div className="footer-social">
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord <ArrowUpRight size={16} />
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter / X <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Oneirism</small>
        <nav aria-label="Footer">
          {NAV_LINKS.filter((link) => link.path !== "/").map((link) => (
            <Link key={link.path} to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
