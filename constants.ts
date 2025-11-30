import { Layers, Gamepad2, Zap } from 'lucide-react';

// --- REAL ASSET IMPORTS ---
import heroImg from "./assets/images/Lava Arena.png";                     // NEW HERO
import spawnArenaImg from "./assets/images/Spawn-Area.png";
import chainBridgeImg from "./assets/images/Chain Bridge.png";            // NEW SLOT
import lightningTrapImg from "./assets/images/Lighting Axe from Above.png";

import gameplay1Img from "./assets/images/Bridge Jump.png";
import gameplay2Img from "./assets/images/Portal Room.png";

import news1Img from "./assets/images/HighresScreenshot00018.png";
import news2Img from "./assets/images/HighresScreenshot00020.png";
import news3Img from "./assets/images/HighresScreenshot00023.png";

import char1Img from "./assets/images/Protagonist.jpg";
import char2Img from "./assets/images/The Forger.png";
import char3Img from "./assets/images/Fireman.png";

import trailerVideo from "./assets/videos/Oneirism New Opening.mp4";

// ------------------------------

export const SOCIAL_LINKS = {
  discord: "https://discord.gg/FrZkraDw",
  twitter: "https://x.com/44_mugen22381"
};

// ------------------------------

export const IMAGES = {
  hero: heroImg,                         // LAVA ARENA IS NOW HERO BACKGROUND
  spawnArena: spawnArenaImg,
  verticalParkour: chainBridgeImg,       // PARKOUR REMOVED → CHAIN BRIDGE REPLACES IT
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
  trailer: trailerVideo
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Gameplay', path: '/gameplay' },
  { name: 'Characters', path: '/characters' },
  { name: 'News', path: '/news' },
  { name: 'About', path: '/about' },
  { name: 'Community', path: '/community' },
];

export const MOTTO_LINES = [
  "Then where are my dreams?",
  "Beyond where reality lies.",
  "Then where is my reality?",
  "Where dreams end."
];

// --- GAMEPLAY HIGHLIGHTS ---------------
export const GAMEPLAY_HIGHLIGHTS = [
  { 
    title: "Spawn & Obstacle Arena", 
    desc: "Navigating the initial lava-drenched obstacles.", 
    img: IMAGES.spawnArena
  },
  { 
    title: "Chain Bridge Crossing",          // UPDATED TITLE
    desc: "Crossing suspended ruins over a dream abyss.",
    img: IMAGES.verticalParkour              // Now CHAIN BRIDGE
  },
  { 
    title: "Lightning Axe Trap Event", 
    desc: "Timing-based survival sequences.", 
    img: IMAGES.lightningTrap
  },
];

// --- NEWS ITEMS -------------------------
export const NEWS_ITEMS = [
  {
    id: 1,
    title: "Site goes live! Welcome to Oneirism.",
    date: "Aug 2025",
    excerpt: "The official portal for the dreamscape is now online. Welcome to the initial build.",
    image: IMAGES.news1
  },
  {
    id: 2,
    title: "High-res screenshots uploaded",
    date: "July 2025",
    excerpt: "New visuals from the latest test build featuring the Chain Bridge Zone and Lava regions.",
    image: IMAGES.news2
  },
  {
    id: 3,
    title: "Lightning Axe sequence integrated",
    date: "June 2025",
    excerpt: "Successfully implemented the dynamic Lightning Axe trap event. Timing is everything.",
    image: IMAGES.news3
  }
];

// --- CHARACTERS -------------------------
export const CHARACTERS = [
  {
    name: "The Dreamer",
    role: "Protagonist",
    desc: "A vessel for the player's consciousness, navigating the burn-induced fever dream.",
    image: IMAGES.char1
  },
  {
    name: "The Forger",
    role: "Sentience",
    desc: "Something that reshapes the terrain around your movement.",
    image: IMAGES.char2
  },
  {
    name: "Fireman",
    role: "Manifestation",
    desc: "A flickering echo from the burn. You never see the same silhouette twice.",
    image: IMAGES.char3
  }
];

// --- PAGE TRANSITION VARIANTS ----------
export const PAGE_VARIANTS = {
  initial: { 
    opacity: 0, 
    filter: 'blur(12px)',
    scale: 0.98
  },
  animate: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
  exit: { 
    opacity: 0, 
    filter: 'blur(12px)',
    scale: 1.02,
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};
