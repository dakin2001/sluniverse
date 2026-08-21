/* Central registry of wiki categories.
   To add a category later:
   1. Create content/xxx.js following the others (window.WIKI.xxx = [...])
   2. Add <script src="content/xxx.js"> in both index.html AND editeur.html
   3. Add an entry below */
const CATEGORIES = [
  {
    id: 'personnages',
    fallbackLabel: 'Spirits',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>`,
  },
  {
    id: 'monstres',
    fallbackLabel: 'Beast',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
  {
    id: 'objets',
    fallbackLabel: 'Bag',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 7.3 12 12l-8.5-4.7M12 12v9.5M12 12 3.5 7.3v9.4L12 21.5l8.5-4.8V7.3L12 12Z"/></svg>`,
  },
  {
    id: 'guides',
    fallbackLabel: 'Guides',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>`,
  },
  {
    id: 'zones',
    fallbackLabel: 'Zones',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  },
  {
    id: 'trials',
    fallbackLabel: 'Trial',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12M6 22h12M6 2c0 5 6 6 6 10s-6 5-6 10M18 2c0 5-6 6-6 10s6 5 6 10"/></svg>`,
  },
];

function categoryLabel(cat){
  return cat.fallbackLabel;
}
