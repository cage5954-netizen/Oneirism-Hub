
import { Layers, Gamepad2, Zap } from 'lucide-react';

// --- CONFIGURATION ---
// Change this to the path where your images are stored.
// If using your live site: "https://cage5954-netizen.github.io/oneirism-website/assets"
// If using local files: "/assets"
const ASSETS_BASE_URL = "assets"; // Using local assets folder structure as requested

export const SOCIAL_LINKS = {
  discord: "https://discord.gg/FrZkraDw",
  twitter: "https://x.com/44_mugen22381"
};

// MAP YOUR EXACT FILENAMES HERE
export const IMAGES = {
  hero: `${ASSETS_BASE_URL}/images/Final Summit.png`, 
  spawnArena: `${ASSETS_BASE_URL}/images/spawn-area.png`, 
  verticalParkour: `${ASSETS_BASE_URL}/images/Parkour Pillars.png`,
  lightningTrap: `${ASSETS_BASE_URL}/images/Lighting Axe from Above.png`,
  // Using placeholders or reusing images if specific gameplay feature shots weren't provided in the last snippet
  gameplay1: `${ASSETS_BASE_URL}/images/blue_cubes.jpg`, 
  gameplay2: `${ASSETS_BASE_URL}/images/red_shards.jpg`, 
  char1: `${ASSETS_BASE_URL}/character_dreamer.jpg`, 
  char2: `${ASSETS_BASE_URL}/character_guardian.jpg`, 
  char3: `${ASSETS_BASE_URL}/character_void.jpg`, 
  news1: `${ASSETS_BASE_URL}/news_august.jpg`, 
  news2: `${ASSETS_BASE_URL}/news_july.jpg`, 
  news3: `${ASSETS_BASE_URL}/news_june.jpg`, 
};

export const VIDEOS = {
  trailer: `${ASSETS_BASE_URL}/videos/oneirism-new-opening.mp4`
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

export const GAMEPLAY_HIGHLIGHTS = [
  { 
    title: "Spawn & Obstacle Arena", 
    desc: "Navigating the initial lava-drenched obstacles.", 
    img: IMAGES.spawnArena 
  },
  { 
    title: "Vertical Parkour Zone", 
    desc: "Ascending the shattered fragments of reality.", 
    img: IMAGES.verticalParkour 
  },
  { 
    title: "Lightning Axe Trap Event", 
    desc: "Timing-based survival sequences.", 
    img: IMAGES.lightningTrap 
  },
];

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
    excerpt: "New visuals from the latest test build featuring the Vertical Parkour Zone and Lava regions.",
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

export const CHARACTERS = [
  {
    name: "The Dreamer",
    role: "Protagonist",
    desc: "A vessel for the player's consciousness, navigating the burn-induced fever dream.",
    image: IMAGES.char1
  },
  {
    name: "The Guardian",
    role: "Obstacle",
    desc: "Manifestations of the subconscious trying to wake you up—or keep you asleep forever.",
    image: IMAGES.char2
  },
  {
    name: "The Void",
    role: "Environment",
    desc: "The ever-consuming darkness that eats the edges of the map if you linger too long.",
    image: IMAGES.char3
  }
];

// Animation Variants for Page Transitions
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
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // Custom ease-out cubic
    } 
  },
  exit: { 
    opacity: 0, 
    filter: 'blur(12px)',
    scale: 1.02,
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] 
    } 
  }
};