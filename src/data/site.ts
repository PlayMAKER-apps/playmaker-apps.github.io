export const site = {
  name: 'PlayMAKER',
  url: 'https://playmaker-apps.github.io/',
  orgUrl: 'https://github.com/PlayMAKER-apps',
  tagline: 'Every sport. Every level. Your way.',
  description: 'An open-source ecosystem of customizable web, graphics, video, and data tools for sports teams of every size.',
  alternateTagline: 'Bringing Tech to Every Team.'
} as const;

export type ProductStatus = 'In development' | 'Alpha' | 'Released';
export type ProductAccent = 'webmaker' | 'tagmaker' | 'postmaker' | 'videomaker';

export type ProductVersion = {
  version: string;
  channel: string;
  availability: string;
  downloadUrl: string | null;
  msiUrl?: string | null;
  checksumUrl?: string | null;
  checksum?: string | null;
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
  accent: ProductAccent;
  features: string[];
  repoUrl: string | null;
  docsUrl: string | null;
  releaseUrl: string | null;
  webAppUrl?: string | null;
  versions: ProductVersion[];
};

export const products: Product[] = [
  {
    name: 'WebMAKER', slug: 'webmaker', index: '01', eyebrow: 'Your digital home',
    tagline: 'Build and manage your club website.',
    description: 'A customizable static club site with three themes, shared sports data and a Windows Studio that can create, clone, edit and publish a club through GitHub Pages.',
    status: 'Released', statusDetail: '0.2.0 stable · Windows x64',
    image: '/images/webmaker.webp', accent: 'webmaker',
    features: ['Guided Create Club workflow with no manual source clone', 'Basketball or football with Bold, Classic and Dynamic themes', 'Optional public GitHub repository and Pages setup', 'Clone a remote club or open an existing local project'],
    repoUrl: 'https://github.com/PlayMAKER-apps/webmaker', docsUrl: 'https://github.com/PlayMAKER-apps/webmaker#user-guide', releaseUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/tag/v0.2.0',
    versions: [{
      version: '0.2.0', channel: 'Stable release',
      availability: 'Windows x64 EXE and MSI are public. The installers are unsigned; Git for Windows with Git Credential Manager is required for GitHub operations.',
      downloadUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/download/v0.2.0/WebMAKER.Studio_0.2.0_x64-setup.exe',
      msiUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/download/v0.2.0/WebMAKER.Studio_0.2.0_x64_en-US.msi',
      releaseUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/tag/v0.2.0',
      changes: ['Create a clean club project from the bundled starter and choose the sport, theme, first season and destination.', 'Optionally create a public GitHub repository, push main and enable the included GitHub Pages workflow through Git Credential Manager.', 'Clone an existing WebMAKER repository or open a project that is already on the computer, with overwrite protection for destination folders.']
    }, {
      version: '0.1.1', channel: 'English prerelease',
      availability: 'Source code and Windows installer available; the installer is unsigned.',
      downloadUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/download/v0.1.1/WebMAKER.Studio_0.1.1_x64-setup.exe', releaseUrl: 'https://github.com/PlayMAKER-apps/webmaker/releases/tag/v0.1.1',
      changes: ['English repository guide and tutorial diagrams.', 'English sample website routes and content, with redirects from earlier routes.', 'English Studio interface and publishing messages.']
    }, {
      version: '0.1.0', channel: 'First public prerelease',
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
    image: '/images/tagmaker.webp', accent: 'tagmaker',
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
    name: 'PostMAKER', slug: 'postmaker', index: '03', eyebrow: 'Create the matchday story',
    tagline: 'Create matchday graphics for your club.',
    description: 'An offline-first graphics editor for match announcements, results, stories and social posts. The PWA and Windows desktop app share the same editor, templates, project format and rendering core.',
    status: 'Released', statusDetail: '0.3.0 · PWA and Windows x64',
    image: '/images/postmaker.png', accent: 'postmaker',
    features: ['Post, story and square PNG exports', 'Reusable Brand Kit, templates, presets and GLASS layers', 'Public WebMAKER data import with local project storage', 'Offline-first PWA and Windows desktop app with no account required'],
    repoUrl: 'https://github.com/PlayMAKER-apps/postmaker',
    docsUrl: 'https://github.com/PlayMAKER-apps/postmaker/blob/main/docs/user-guide.md',
    releaseUrl: 'https://github.com/PlayMAKER-apps/postmaker/releases/tag/v0.3.0',
    webAppUrl: 'https://playmaker-apps.github.io/postmaker/',
    versions: [{
      version: '0.3.0', channel: 'Stable release',
      availability: 'The PWA and unsigned Windows x64 EXE and MSI are public. Desktop automatic updates are disabled.',
      downloadUrl: 'https://github.com/PlayMAKER-apps/postmaker/releases/download/v0.3.0/PostMAKER_0.3.0_x64-setup.exe',
      msiUrl: 'https://github.com/PlayMAKER-apps/postmaker/releases/download/v0.3.0/PostMAKER_0.3.0_x64_en-US.msi',
      checksumUrl: 'https://github.com/PlayMAKER-apps/postmaker/releases/download/v0.3.0/SHA256SUMS.txt',
      checksum: 'EXE 0448e0c8bfe105e35b49f3802560ef0b5c3087f0cea93cb8694bb0b5100e2173 · MSI da54c8e1d0f7c6631162f59387ee3b7bf73e8fff82bd1057e12548912d82951e',
      releaseUrl: 'https://github.com/PlayMAKER-apps/postmaker/releases/tag/v0.3.0',
      changes: ['Windows desktop application using the same React and TypeScript editor as the PWA.', 'Native file dialogs, explicit JSON project files, portable JSON and ZIP backups, and PNG export.', 'Shared Brand Kit, presets, templates, GLASS layers and validated public WebMAKER data import.']
    }]
  },
  {
    name: 'VideoMAKER', slug: 'videomaker', index: '04', eyebrow: 'From match to moment',
    tagline: 'Turn game footage into highlights.',
    description: 'A planned offline-first editing flow for full-game footage, guided highlights, dynamic overlays and horizontal or vertical clips. Importing TagMAKER data is on the roadmap.',
    status: 'In development', statusDetail: 'Early development · no public release',
    image: '/images/videomaker.webp', accent: 'videomaker',
    features: ['Guided full-game editing', 'Dynamic overlays', 'Horizontal and vertical clips', 'Planned TagMAKER data import'],
    repoUrl: 'https://github.com/PlayMAKER-apps/videomaker', docsUrl: null, releaseUrl: null,
    versions: []
  }
];

export const roadmap = [
  { index: '01', title: 'Nerone pilot + WebMAKER Studio', detail: 'Pilot work and desktop publishing prototype.' },
  { index: '02', title: 'WebMAKER 0.2 Create Club release', detail: 'Guided club creation, GitHub repository setup, cloning and Pages publishing.' },
  { index: '03', title: 'TagMAKER alpha → MVP', detail: 'Source alpha published; Windows installer and full-match validation remain.' },
  { index: '04', title: 'PostMAKER 0.3 PWA + desktop', detail: 'Offline-first match graphics on the web and Windows using one shared editor.' },
  { index: '05', title: 'Data interoperability', detail: 'Build on public club data and the TagMAKER contract, then complete VideoMAKER import.' },
  { index: '06', title: 'VideoMAKER MVP', detail: 'Guided editing and offline export.' },
  { index: '07', title: 'Mobile apps', detail: 'Bring useful PlayMAKER workflows to phones and tablets.' },
  { index: '08', title: 'Optional AI assistance', detail: 'Explore automated tagging, editing and graphics while keeping manual workflows available.' }
];

export const showcase = {
  name: 'Nerone Basket Anzio',
  status: 'WebMAKER pilot · beta testing',
  siteUrl: 'https://nerone-basket.github.io/' as string | null,
  codeUrl: 'https://github.com/nerone-basket/nerone-basket.github.io',
  attribution: 'Pilot identified in the PlayMAKER organization profile. Club images and screenshots are not reproduced here.'
};
