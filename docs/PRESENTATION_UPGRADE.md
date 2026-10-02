# Presentation upgrade

Working branch: `presentation/cinematic-oneirism`.
Base: `851347d57a4bcbc2b6cb0acdb694d4832e048998`.

## What changed

The homepage now establishes ONEIRISM immediately, with a large title, short premise and trailer action. Full-width environments alternate with quieter text and varied gameplay imagery. The original trailer is presented as a major reveal with native controls after play. Character descriptions are visible without hover. About presents genuine current-build imagery alongside existing technical and creative information. News and Community share the typography and restrained colour palette with distinct layouts.

The 2.8-second loading gate, delayed opening copy, global floating particles, glow effects, tilt cards and character-by-character blur effects were removed. Motion is limited to gentle environmental parallax and short reveals, with reduced-motion support. Runtime Tailwind CDN styling was replaced by a local stylesheet. Original source assets, content records, six routes and social destinations are retained. No historical screenshots, timelines or new development claims were invented.

## Changed files

- `App.tsx`: immediate rendering, preserved routes, page titles, route focus and reduced motion.
- `components/Navbar.tsx`, `components/Footer.tsx`, `components/ui/Button.tsx`: consistent navigation and controls; accessible mobile menu.
- `components/Presentation.tsx` and `components/Trailer.tsx` (new): shared scene/image components and accessible trailer playback.
- All six `pages/*.tsx`: new compositions and content hierarchy.
- `styles.css` (new): desktop/mobile art direction, focus styles, reduced-motion rules.
- `constants.ts`, `assets.d.ts`: responsive WebP mappings and types; existing content and social destinations retained.
- `assets/optimized/` (new): 24 derivatives from 12 genuine source images. Original media is unchanged.
- `scripts/optimize-images.py` (new): reproducible resizing/compression and image validation.
- `index.html`: local styling entry, existing fonts, description and theme metadata.
- `package.json`, `package-lock.json`: React development typings and type-check command; no new runtime dependencies.
- `vite.config.ts`: removes unused API-key injection; loopback development server default.
- `README.md` and this document: setup, asset guidance and review notes.
- Removed unused `components/AnimatedBackground.tsx`, `components/LoadingScreen.tsx`, `components/ui/CinematicText.tsx`.

## Validation

Production build, TypeScript and whitespace checks are run before branch publication. Every WebP derivative is opened and verified. The original MP4 is unchanged.

The prior implementation passed a temporary JSDOM interaction harness covering all routes, immediate title, trailer CTA/control activation, focus management, menu/Escape/scroll lock, character copy and social links. The restored source is rechecked before handoff. Mocked media checks do not prove browser video decoding.

Desktop/mobile visual review and actual playback need an accessible browser preview. See the final handoff for preview availability and any remaining limitations.

Neither `main` nor `backup-before-work-gpt` is a target for these changes. Merge requires owner approval.
