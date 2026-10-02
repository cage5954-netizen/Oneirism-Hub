import React from "react";
import { ArrowDown, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import {
  IMAGES,
  GAMEPLAY_HIGHLIGHTS,
  NEWS_ITEMS,
  MOTTO_LINES,
  CHARACTERS,
} from "../constants";
import Button from "../components/ui/Button";
import {
  Eyebrow,
  Reveal,
  Scene,
  SceneImage,
  TextLink,
} from "../components/Presentation";
import Trailer from "../components/Trailer";
export default function Home() {
  const reduced = useReducedMotion();
  const descend = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({
      behavior: reduced ? "instant" : "smooth",
      block: "start",
    });
    target?.focus({ preventScroll: true });
  };
  return (
    <div className="home-page">
      <Scene
        src={IMAGES.hero}
        alt="The lava arena suspended in the blue-grey dreamscape"
        className="home-hero"
        priority
      >
        <div className="hero-topline">
          <span>An exploratory experience</span>
          <span>Built in Unreal Engine 5</span>
        </div>
        <div className="hero-main">
          <h1>ONEIRISM</h1>
          <div className="hero-bottom">
            <p>
              A world built from connected pieces.
              <br />
              Find your way through dreamlike spaces.
            </p>
            <div className="hero-actions">
              <Button onClick={() => descend("trailer-section")}>
                <Play size={14} fill="currentColor" aria-hidden="true" />
                Watch trailer
              </Button>
              <TextLink to="/about">Read the story</TextLink>
            </div>
          </div>
        </div>
        <button
          className="descend"
          onClick={() => descend("premise")}
          aria-label="Explore the world below"
        >
          <ArrowDown size={17} />
          <span>Descend into the world</span>
        </button>
        <span className="hero-note">Movement / Perception / Dream logic</span>
      </Scene>
      <section id="premise" className="premise wrap" tabIndex={-1}>
        <Eyebrow>The world of Oneirism</Eyebrow>
        <Reveal>
          <h2>
            {MOTTO_LINES[0]}
            <span className="accent">.</span>
          </h2>
        </Reveal>
        <div className="premise-aside">
          <p>
            No enemies. Guidance is indirect. Movement is how you begin to
            understand the world.
          </p>
          <p className="muted">
            {MOTTO_LINES[2]}. {MOTTO_LINES[3]}.
          </p>
        </div>
      </section>
      <Trailer />
      <section className="world-intro wrap">
        <Eyebrow>02 / Traversal</Eyebrow>
        <Reveal>
          <h2>
            The terrain
            <br />
            is the challenge.
          </h2>
        </Reveal>
        <p>
          Every jump must be calculated.
          <br />
          Every landing precise.
        </p>
      </section>
      <Scene
        src={IMAGES.verticalParkour}
        alt="A suspended chain bridge above glowing ruins"
        className="bridge-scene"
      >
        <div className="scene-caption">
          <Eyebrow>Suspended ruins</Eyebrow>
          <h2>{GAMEPLAY_HIGHLIGHTS[1].title}</h2>
          <p>{GAMEPLAY_HIGHLIGHTS[1].desc}</p>
          <TextLink to="/gameplay">Explore the gameplay</TextLink>
        </div>
        <span className="image-note">In-game environment / Chain bridge</span>
      </Scene>
      <section className="gameplay-pair wrap">
        {[GAMEPLAY_HIGHLIGHTS[0], GAMEPLAY_HIGHLIGHTS[2]].map((item, i) => (
          <Reveal key={item.title} className={`gameplay-moment moment-${i}`}>
            <figure>
              <SceneImage
                src={item.img}
                alt={item.title}
                sizes="(max-width: 700px) 100vw, 55vw"
              />
              <figcaption>
                <span className="small-label">
                  {i === 0 ? "I / Arrival" : "II / Timing"}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </section>
      <Scene
        src={IMAGES.gameplay2}
        alt="An illuminated portal within the dark rock of the dream world"
        className="portal-scene"
      >
        <div className="portal-copy">
          <Eyebrow>03 / Dream logic</Eyebrow>
          <Reveal>
            <h2>
              Meaning
              <br />
              settles later.
            </h2>
          </Reveal>
          <p>
            The world doesn’t explain itself. Corridors loop. Landmarks shift.
          </p>
          <TextLink to="/gameplay">Enter the environments</TextLink>
        </div>
      </Scene>
      <section className="home-characters wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>04 / Presences</Eyebrow>
            <h2>Faces of the world.</h2>
          </div>
          <TextLink to="/characters">Meet the characters</TextLink>
        </div>
        <div className="character-teaser">
          <SceneImage
            src={IMAGES.char3}
            alt="Fireman, a fiery manifestation above a rocky ledge"
            sizes="(max-width: 700px) 100vw, 70vw"
          />
          <div>
            <Eyebrow>{CHARACTERS[2].role}</Eyebrow>
            <h3>{CHARACTERS[2].name}</h3>
            <p>{CHARACTERS[2].desc}</p>
          </div>
        </div>
      </section>
      <section className="behind-build wrap">
        <div>
          <Eyebrow>05 / Behind the build</Eyebrow>
          <Reveal>
            <h2>
              A dream,
              <br />
              made tangible.
            </h2>
          </Reveal>
        </div>
        <div className="build-copy">
          <p>
            Built in Unreal Engine 5 with Blueprint scripting, Niagara VFX and
            motion-matching tools.
          </p>
          <p className="muted">
            Individual sequences were made independently and later connected.
            Structure took shape through testing and refinement, with each
            traversal event developed around how the environment feels.
          </p>
          <TextLink to="/about">The thinking behind Oneirism</TextLink>
          <div className="build-disciplines">
            <span>Level design</span>
            <span>Gameplay</span>
            <span>Environment</span>
          </div>
        </div>
      </section>
      <section className="home-news wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>From the project</Eyebrow>
            <h2>Transmissions.</h2>
          </div>
          <TextLink to="/news">View archive</TextLink>
        </div>
        <div className="news-list">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id}>
              <span className="small-label">{item.date}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
