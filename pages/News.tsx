import React from "react";
import { NEWS_ITEMS } from "../constants";
import {
  Eyebrow,
  PageHeading,
  Reveal,
  SceneImage,
} from "../components/Presentation";
export default function News() {
  return (
    <div className="news-page">
      <PageHeading
        label="Project archive / News"
        title={
          <>
            Transmissions<span className="accent">.</span>
          </>
        }
      />
      <div className="news-archive wrap">
        {NEWS_ITEMS.map((item, i) => (
          <Reveal key={item.id}>
            <article className={`news-entry ${i === 0 ? "news-lead" : ""}`}>
              <div className="news-image">
                <SceneImage
                  src={item.image}
                  alt={item.title}
                  priority={i === 0}
                  sizes={i === 0 ? "100vw" : "(max-width: 700px) 100vw, 55vw"}
                />
              </div>
              <div className="news-copy">
                <Eyebrow>{item.date}</Eyebrow>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
