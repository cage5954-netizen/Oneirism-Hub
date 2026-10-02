import heroImg from "./assets/optimized/lava-arena-1920.webp";
import spawnArenaImg from "./assets/optimized/spawn-area-1920.webp";
import chainBridgeImg from "./assets/optimized/chain-bridge-1920.webp";
import lightningTrapImg from "./assets/optimized/lightning-axe-1920.webp";

import gameplay1Img from "./assets/optimized/bridge-jump-1920.webp";
import gameplay2Img from "./assets/optimized/portal-room-1920.webp";

import news1Img from "./assets/optimized/news-01-1920.webp";
import news2Img from "./assets/optimized/news-02-1920.webp";
import news3Img from "./assets/optimized/news-03-1920.webp";

import char1Img from "./assets/optimized/observer-1920.webp";
import char2Img from "./assets/optimized/node-1920.webp";
import char3Img from "./assets/optimized/fireman-1920.webp";

import trailerVideo from "./assets/videos/Oneirism_Trailer.mp4";

export const SOCIAL_LINKS = {
  discord: "https://discord.gg/jYUhHHEPVT",
  twitter: "https://x.com/44_mugen22381",
};

export const IMAGES = {
  hero: heroImg, // LAVA ARENA IS NOW HERO BACKGROUND
  spawnArena: spawnArenaImg,
  verticalParkour: chainBridgeImg, // PARKOUR REMOVED → CHAIN BRIDGE REPLACES IT
  lightningTrap: lightningTrapImg,
  gameplay1: gameplay1Img,
  gameplay2: gameplay2Img,
  char1: char1Img,
  char2: char2Img,
  char3: char3Img,
  news1: news1Img,
  news2: news2Img,
  news3: news3Img,
};

export const VIDEOS = {
  trailer: trailerVideo,
};

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Gameplay", path: "/gameplay" },
  { name: "Characters", path: "/characters" },
  { name: "News", path: "/news" },
  { name: "About", path: "/about" },
  { name: "Community", path: "/community" },
];

export const MOTTO_LINES = [
  "Dreams resist clear beginnings and endings",
  "Nothing can be explained",
  "Memory fills in the gaps",
  "Meaning settles later",
];

export const GAMEPLAY_HIGHLIGHTS = [
  {
    title: "Spawn & Obstacle Arena",
    desc: "Navigating the initial lava-drenched obstacles.",
    img: IMAGES.spawnArena,
  },
  {
    title: "Chain Bridge Crossing", // UPDATED TITLE
    desc: "Crossing suspended ruins over a dream abyss.",
    img: IMAGES.verticalParkour, // Now CHAIN BRIDGE
  },
  {
    title: "Lightning Axe Trap Event",
    desc: "Timing-based survival sequences.",
    img: IMAGES.lightningTrap,
  },
];

export const NEWS_ITEMS = [
  {
    id: 1,
    title: "Site goes live!",
    date: "Aug 2025",
    excerpt: "Welcome to the initial build.",
    image: IMAGES.news1,
  },
  {
    id: 2,
    title: "High-res screenshots uploaded",
    date: "July 2025",
    excerpt:
      "New visuals from the latest test build featuring the chain bridge zone and lava regions.",
    image: IMAGES.news2,
  },
  {
    id: 3,
    title: "Lightning Axe sequence integrated",
    date: "June 2025",
    excerpt: "Implemented the dynamic Lightning Axe Trap event.",
    image: IMAGES.news3,
  },
];

export const CHARACTERS = [
  {
    name: "Observer",
    role: "Protagonist",
    desc: "The point of view through which the world is experienced.",
    image: IMAGES.char1,
  },
  {
    name: "Node",
    role: "Attunement",
    desc: "A responsive point of continuity that registers progress and allows return.",
    image: IMAGES.char2,
  },
  {
    name: "Fireman",
    role: "Manifestation",
    desc: "A flickering echo from the burn.",
    image: IMAGES.char3,
  },
];

import small0 from "./assets/optimized/lava-arena-800.webp";
import small1 from "./assets/optimized/spawn-area-800.webp";
import small2 from "./assets/optimized/chain-bridge-800.webp";
import small3 from "./assets/optimized/lightning-axe-800.webp";
import small4 from "./assets/optimized/bridge-jump-800.webp";
import small5 from "./assets/optimized/portal-room-800.webp";
import small6 from "./assets/optimized/news-01-800.webp";
import small7 from "./assets/optimized/news-02-800.webp";
import small8 from "./assets/optimized/news-03-800.webp";
import small9 from "./assets/optimized/observer-800.webp";
import small10 from "./assets/optimized/node-800.webp";
import small11 from "./assets/optimized/fireman-800.webp";
export const IMAGE_SMALL: Record<string, string> = {
  [IMAGES.hero]: small0,
  [IMAGES.spawnArena]: small1,
  [IMAGES.verticalParkour]: small2,
  [IMAGES.lightningTrap]: small3,
  [IMAGES.gameplay1]: small4,
  [IMAGES.gameplay2]: small5,
  [IMAGES.news1]: small6,
  [IMAGES.news2]: small7,
  [IMAGES.news3]: small8,
  [IMAGES.char1]: small9,
  [IMAGES.char2]: small10,
  [IMAGES.char3]: small11,
};
