# Oneirism

React / Vite presentation of the Oneirism Unreal Engine 5 project. All six existing hash routes are preserved.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

No API key is required. The website displays local project content and media.

## Content and presentation

`constants.ts` holds navigation, social URLs, characters, news, gameplay highlights and media mappings. `styles.css` defines the shared black/orange art direction and responsive/reduced-motion rules. Cinzel and Inter are retained with serif/sans-serif fallbacks.

`components/Presentation.tsx` provides responsive images, restrained one-time reveals and environmental scenes. `components/Trailer.tsx` uses the original MP4 with native controls after a user starts playback. The video is not preloaded.

`pages/About.tsx` presents the current build using facts from the previous About page. A future Development / Evolution section can follow `#behind-the-build` when genuine historical material is available. Existing screenshots must not be described as early-development images.

## Images

Original image, video and audio files remain unchanged. The website serves 800px/1920px WebP derivatives, with responsive selection and lazy loading below the opening image. The character portrait keeps its natural proportions.

To regenerate derivatives, install Pillow and run `python scripts/optimize-images.py`. This resizes/compresses genuine source images; it does not generate or reconstruct material.

## Branch review

Work belongs on `presentation/cinematic-oneirism`. Merge only with owner approval. `backup-before-work-gpt` is frozen and must not be modified, renamed, merged into or deleted.

See `docs/PRESENTATION_UPGRADE.md` for the change list and validation notes.
