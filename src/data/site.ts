export const site = {
  name: 'PlayMAKER',
  url: 'https://playmaker-apps.github.io/',
  orgUrl: 'https://github.com/PlayMAKER-apps',
  tagline: 'Every sport. Every level. Your way.',
  description: 'An open-source ecosystem of customizable web, video, and data tools for sports teams of every size.',
  alternateTagline: 'Bringing Tech to Every Team.'
} as const;

export type ProductStatus = 'In development' | 'Alpha' | 'Released';

export type ProductVersion = {
  version: string;
  channel: string;
  availability: string;
  downloadUrl: string | null;
  releaseUrl: string | null;
  changes: string[];
};

export type Product = {
  name: string;
  slug: string;
  index: string;
  eyebrow: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusDetail: string;
  image: string;
  accent: string;
  features: string[];
  repoUrl: string | null;
  docsUrl: string | null;
  releaseUrl: string | null;
  versions: ProductVersion[];
};

export const products: Product[] = [
  {
    name: 'WebMAKER', slug: 'webmaker', index: '01', eyebrow: 'Your digital home',
    tagline: 'Build and manage your club website.',
    description: 'A customizable static club site with three themes, sample data, GitHub Pages publishing and a Windows desktop Studio. Version 0.1.1 includes an English guide, demo site, and Studio.',
    status: 'Alpha', statusDetail: '0.1.1 English release',
    image: '/images/webmaker.webp', accent: 'lime',
    features: ['Static club site with Bold, Classic and Dynamic themes', 'Desktop Studio for local editing and Git publishing', 'News, matches, rosters and statistics', 'Basketball and football profiles with shared data paths'],
    repoUrl: 'https://github.com/PlayMAKER-apps/webmaker', docsUrl: 'https://github.com/PlayMAKER-apps/webmaker#user-guide', releaseUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/tag/v0.1.1',
    versions: [{
      version: '0.1.1', channel: 'English release',
      availability: 'Source code and Windows installer available; the installer is unsigned.',
      downloadUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/download/v0.1.1/WebMAKER.Studio_0.1.1_x64-setup.exe', releaseUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/tag/v0.1.1',
      changes: ['English repository guide and tutorial diagrams.', 'English sample website routes and content, with redirects from earlier routes.', 'English Studio interface and publishing messages.']
    }, {
      version: '0.1.0', channel: 'First public release',
      availability: 'Source code and Windows installer available; the installer is unsigned.',
      downloadUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/download/v0.1.0/WebMAKER.Studio_0.1.0_x64-setup.exe', releaseUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/tag/v0.1.0',
      changes: ['Independent static site with three layouts and a synthetic club starter.', 'Studio can open club projects, change the theme and prepare guarded Git publishing.', 'Versioned club configuration and sport profiles with TagMAKER-compatible roster paths.']
    }]
  },
  {
    name: 'TagMAKER', slug: 'tagmaker', index: '02', eyebrow: 'The moments that matter',
    tagline: 'Tag every moment of the game.',
    description: 'An offline desktop app for manually tagging basketball and football video. The 0.1 alpha source includes configurable profiles, match clock and score tools, a versioned JSON export, and WebMAKER roster and statistics exchange.',
    status: 'Alpha', statusDetail: '0.1 source alpha · Windows installer pending',
    image: '/images/tagmaker.webp', accent: 'cyan',
    features: ['Manual tagging for basketball and football', 'Score, game clock and video timestamps', 'WebMAKER roster import and statistics export', 'Versioned 0.1 JSON interchange'],
    repoUrl: 'https://github.com/PlayMAKER-apps/tagmaker',
    docsUrl: 'https://github.com/PlayMAKER-apps/tagmaker#complete-tutorial',
    releaseUrl: null,
    versions: [{
      version: '0.1.0', channel: 'Alpha source', availability: 'Source code available; Windows installer in preparation',
      downloadUrl: null, releaseUrl: null,
      changes: ['Offline basketball and football video tagging with sequential clips and configurable sport profiles.', 'SQLite projects with autosave, match clock and score corrections, and JSON 0.1 export.', 'WebMAKER roster import and per-game player-statistics CSV export.']
    }]
  },
  {
    name: 'VideoMAKER', slug: 'videomaker', index: '03', eyebrow: 'From match to moment',
    tagline: 'Turn game footage into highlights.',
    description: 'A planned offline-first editing flow for full-game footage, guided highlights, dynamic overlays and horizontal or vertical clips. Importing TagMAKER data is on the roadmap.',
    status: 'In development', statusDetail: 'Early development · no public release',
    image: '/images/videomaker.webp', accent: 'orange',
    features: ['Guided full-game editing', 'Dynamic overlays', 'Horizontal and vertical clips', 'Planned TagMAKER data import'],
    repoUrl: 'https://github.com/PlayMAKER-apps/videomaker', docsUrl: null, releaseUrl: null,
    versions: []
  }
];

export const roadmap = [
  { index: '01', title: 'Nerone pilot + WebMAKER Studio', detail: 'Pilot work and desktop publishing prototype.' },
  { index: '02', title: 'WebMAKER 0.1 public release', detail: 'Three reusable layouts, public club starter and Windows Studio installer.' },
  { index: '03', title: 'TagMAKER alpha → MVP', detail: 'Source alpha published; Windows installer and full-match validation remain.' },
  { index: '04', title: 'Data interoperability', detail: 'Build on the 0.1 TagMAKER contract and complete VideoMAKER import.' },
  { index: '05', title: 'VideoMAKER MVP', detail: 'Guided editing and offline export.' },
  { index: '06', title: 'Mobile apps', detail: 'Bring useful PlayMAKER workflows to phones and tablets.' },
  { index: '07', title: 'Optional AI assistance', detail: 'Explore automated tagging and editing while keeping manual workflows available.' }
];

export const showcase = {
  name: 'Nerone Basket Anzio',
  status: 'WebMAKER pilot · beta testing',
  siteUrl: 'https://nerone-basket.github.io/' as string | null,
  codeUrl: 'https://github.com/nerone-basket/nerone-basket.github.io',
  attribution: 'Pilot identified in the PlayMAKER organization profile. Club images and screenshots are not reproduced here.'
};
