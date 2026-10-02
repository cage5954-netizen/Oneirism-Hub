import React from "react";
import { IMAGES } from "../constants";
import {
  Eyebrow,
  PageHeading,
  Reveal,
  Scene,
  SceneImage,
  TextLink,
} from "../components/Presentation";
export default function About() {
  return (
    <div className="about-page">
      <PageHeading
        label="The project / About"
        title={
          <>
            Born from
            <br />
            <em>a burn.</em>
          </>
        }
      />
      <section className="about-origin wrap">
        <Eyebrow>The beginning</Eyebrow>
        <div className="prose">
          <p className="lead">
            Oneirism began when a burn injury prompted me to think differently
            about perception and narrative continuity.
          </p>
          <p>
            Since then, the project has grown through a range of other
            influences and continued exploration. The result is a world built
            from connected pieces rather than a single linear story.
          </p>
          <p>
            The word <em>oneirism</em> refers to a state of awareness within
            layered dreams, where structure is sensed before it is understood.
            This idea provided an anchor.
          </p>
          <p>
            Individual sequences were made independently and later connected,
            with structure forming gradually through testing and refinement.
          </p>
        </div>
      </section>
      <Scene
        src={IMAGES.spawnArena}
        alt="Fire and volcanic rock in the spawn area"
        className="about-world"
        priority
      >
        <div className="scene-caption">
          <Eyebrow>Dream-like logic</Eyebrow>
          <h2>
            Coherence without
            <br />
            explanation.
          </h2>
        </div>
      </Scene>
      <section className="philosophy wrap">
        <Eyebrow>What it’s trying to be</Eyebrow>
        <Reveal>
          <blockquote>
            A landscape welded together by dream-like logic, where coherence
            emerges without explicit explanation.
          </blockquote>
        </Reveal>
        <div className="philosophy-detail">
          <h2>
            Nothing here tells you
            <br />
            exactly what to do.
          </h2>
          <div className="prose">
            <p>
              Oneirism is structured as an exploratory experience. There are no
              enemies; guidance is indirect.
            </p>
            <p>
              Movement is central to the experience. Spaces respond subtly,
              encouraging exploration through motion rather than instruction.
            </p>
            <p>
              The world doesn’t guide you step by step. Patterns emerge through
              repetition. Meaning is something you notice, not something you’re
              told.
            </p>
          </div>
        </div>
      </section>
      {/* Current build only. Add Evolution after this section when genuine historical material exists. */}
      <section id="behind-the-build" className="about-build wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>Behind the build / Current work</Eyebrow>
            <h2>Making it real.</h2>
          </div>
          <span className="small-label">Unreal Engine 5</span>
        </div>
        <figure className="build-image">
          <SceneImage
            src={IMAGES.lightningTrap}
            alt="Current Lightning Axe Trap environment viewed from above"
          />
          <figcaption>
            Lightning Axe Trap / Existing in-game material
          </figcaption>
        </figure>
        <div className="build-notes">
          <article>
            <Eyebrow>Tools & gameplay</Eyebrow>
            <h3>From idea to interaction.</h3>
            <p>
              Built using UE5’s Blueprint scripting, Niagara VFX and
              motion-matching tools. Development follows an iterative process,
              with new mechanics added, tested and refined as ideas evolve.
            </p>
          </article>
          <article>
            <Eyebrow>Environment & direction</Eyebrow>
            <h3>Refined through feeling.</h3>
            <p>
              Visual elements were frequently revised or removed entirely if
              they didn’t serve the intended feeling. Each feature, camera cut
              and traversal event was tested until the environment felt
              responsive and deliberate.
            </p>
          </article>
        </div>
        <p className="build-closing">
          Oneirism remains a work in progress. At its core, it’s a consistent
          effort to simulate dreamlike logic using responsive level design and
          real-time rendering.
        </p>
        <TextLink to="/gameplay">Explore the result</TextLink>
      </section>
    </div>
  );
}
