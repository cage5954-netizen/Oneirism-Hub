import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import { IMAGES, VIDEOS } from "../constants";
import { Eyebrow, SceneImage } from "./Presentation";
export default function Trailer() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false),
    [error, setError] = useState("");
  const play = async () => {
    if (!video.current) return;
    setError("");
    setStarted(true);
    try {
      await video.current.play();
      video.current.focus();
    } catch {
      setError(
        "Playback could not start. Use the video controls to try again.",
      );
    }
  };
  return (
    <section
      id="trailer-section"
      className="trailer"
      aria-labelledby="trailer-title"
      tabIndex={-1}
    >
      <div className="trailer-heading wrap">
        <Eyebrow>01 / Opening scene</Eyebrow>
        <h2 id="trailer-title">Enter the dream.</h2>
        <span className="small-label">Oneirism / Trailer</span>
      </div>
      <div className="trailer-stage">
        <video
          ref={video}
          controls={started}
          preload="none"
          playsInline
          src={VIDEOS.trailer}
          poster={IMAGES.hero}
          aria-label="Oneirism trailer"
          tabIndex={started ? 0 : -1}
          onError={() =>
            setError(
              "The trailer could not load. Please try opening the video directly.",
            )
          }
        />
        {!started && (
          <button
            className="trailer-cover"
            onClick={play}
            aria-label="Play Oneirism trailer"
          >
            <SceneImage src={IMAGES.hero} alt="" />
            <span className="trailer-cover-shade" />
            <span className="play-label">
              <span className="play-ring">
                <Play size={28} fill="currentColor" aria-hidden="true" />
              </span>
              <span>Watch the trailer</span>
            </span>
            <span className="trailer-caption">Nothing can be explained.</span>
          </button>
        )}
      </div>
      {error && (
        <p className="video-error wrap" role="status">
          {error} <a href={VIDEOS.trailer}>Open trailer</a>
        </p>
      )}
    </section>
  );
}
