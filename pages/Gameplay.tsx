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
export default function Gameplay() {
  return (
    <div className="gameplay-page">
      <PageHeading
        label="The experience / Gameplay"
        title={
          <>
            Traversal
            <br />
            <em>gauntlet.</em>
          </>
        }
      >
        No enemies. No tutorials. Just you and the shifting dreamscape.
      </PageHeading>
      <Scene
        src={IMAGES.gameplay1}
        alt="Bridge jump traversal amid lava and suspended terrain"
        className="gameplay-opener"
        priority
      >
        <span className="image-note">In-game environment / Bridge jump</span>
      </Scene>
      <section className="editorial-section wrap">
        <Eyebrow>01 / Sensory movement</Eyebrow>
        <Reveal>
          <h2>
            The environment
            <br />
            is a physical puzzle.
          </h2>
        </Reveal>
        <div className="prose">
          <p>
            Movement in Oneirism is about flow. Navigate vertical parkour zones,
            time your dashes through lightning traps, and adapt to gravity that
            feels heavier the deeper you sleep.
          </p>
          <p>
            It’s not about fighting; it’s about overcoming the terrain itself.
            Every jump must be calculated, every landing precise.
          </p>
        </div>
      </section>
      <div className="traversal-diptych wrap">
        <figure>
          <SceneImage
            src={IMAGES.verticalParkour}
            alt="Chain bridge crossing over the dream abyss"
            sizes="(max-width: 700px) 100vw, 60vw"
          />
          <figcaption>
            Chain bridge crossing <span>Suspended ruins</span>
          </figcaption>
        </figure>
        <figure>
          <SceneImage
            src={IMAGES.lightningTrap}
            alt="Lightning Axe Trap seen from above"
            sizes="(max-width: 700px) 100vw, 40vw"
          />
          <figcaption>
            Lightning Axe Trap <span>Timing-based survival</span>
          </figcaption>
        </figure>
      </div>
      <Scene
        src={IMAGES.gameplay2}
        alt="A luminous portal within a shadowed passage"
        className="portal-scene"
      >
        <div className="portal-copy">
          <Eyebrow>02 / Dream logic</Eyebrow>
          <h2>
            A sensory
            <br />
            sketchbook.
          </h2>
          <p>
            The world doesn’t explain itself. Corridors loop. Landmarks shift.
            You are walking through a sensory sketchbook of perception.
          </p>
        </div>
      </Scene>
      <section className="logic-statement wrap">
        <Reveal>
          <h2>
            Consistent only
            <br />
            to the dream itself.
          </h2>
        </Reveal>
        <p>
          Every element exists to ask a question, not give an answer. The logic
          is internal, consistent only to the dream itself.
        </p>
      </section>
      <section className="pillars wrap">
        <Eyebrow>Core pillars</Eyebrow>
        {[
          {
            title: "Atmosphere first",
            text: "Visuals and audio drive the experience, creating a heavy, drowsy fog that anchors you.",
          },
          {
            title: "Responsive world",
            text: "The environment watches you. It shifts. Sometimes it repeats. It responds to your presence.",
          },
          {
            title: "Unforgiving",
            text: "It’s not trying to be fair. It’s trying to be honest. Precision is your only tool.",
          },
        ].map((item, i) => (
          <article key={item.title}>
            <span className="small-label">0{i + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
        <TextLink to="/about">How the world was built</TextLink>
      </section>
    </div>
  );
}
