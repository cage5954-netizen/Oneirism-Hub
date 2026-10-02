import React from "react";
import { ArrowUpRight } from "lucide-react";
import { IMAGES, SOCIAL_LINKS } from "../constants";
import { Eyebrow, Scene } from "../components/Presentation";
export default function Community() {
  return (
    <div className="community-page">
      <Scene
        src={IMAGES.gameplay2}
        alt="A glowing portal surrounded by the dark dreamscape"
        className="community-hero"
        priority
      >
        <div className="community-copy">
          <Eyebrow>Stay connected / Community</Eyebrow>
          <h1>
            The
            <br />
            <em>collective.</em>
          </h1>
          <p>
            A place to track development, share thoughts, and connect with the
            community.
          </p>
        </div>
      </Scene>
      <section className="community-links wrap" aria-label="Social links">
        <a
          href={SOCIAL_LINKS.discord}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="small-label">01 / Join</span>
          <div>
            <h2>Discord</h2>
            <p>It’s just Discord. Updates and discussion live there.</p>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a
          href={SOCIAL_LINKS.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="small-label">02 / Follow</span>
          <div>
            <h2>Twitter / X</h2>
            <p>Follow for small updates and occasional highlights.</p>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </div>
  );
}
