import React from "react";
import { CHARACTERS } from "../constants";
import {
  Eyebrow,
  PageHeading,
  Reveal,
  SceneImage,
  TextLink,
} from "../components/Presentation";
export default function Characters() {
  return (
    <div className="characters-page">
      <PageHeading
        label="Presences / Characters"
        title={
          <>
            Faces of
            <br />
            <em>the world.</em>
          </>
        }
      >
        A set of recurring characters.
      </PageHeading>
      <div className="character-chapters">
        {CHARACTERS.map((character, i) => (
          <section
            key={character.name}
            className={`character-chapter character-${i}`}
            aria-labelledby={`character-title-${i}`}
          >
            <div className="character-art">
              <SceneImage
                src={character.image}
                alt={character.name}
                priority={i === 0}
                sizes={i === 0 ? "(max-width: 700px) 75vw, 32vw" : "100vw"}
              />
            </div>
            <Reveal className="character-copy">
              <Eyebrow>
                0{i + 1} / {character.role}
              </Eyebrow>
              <h2 id={`character-title-${i}`}>{character.name}</h2>
              <p>{character.desc}</p>
            </Reveal>
            <span className="character-index" aria-hidden="true">
              0{i + 1}
            </span>
          </section>
        ))}
      </div>
      <div className="page-next wrap">
        <p>Things connect over time.</p>
        <TextLink to="/about">Read the story</TextLink>
      </div>
    </div>
  );
}
