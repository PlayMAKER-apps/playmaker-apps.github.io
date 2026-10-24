export const site = {
  name: 'PlayMAKER',
  url: 'https://playmaker-apps.github.io/',
  orgUrl: 'https://github.com/PlayMAKER-apps',
  tagline: 'Every sport. Every level. Your way.',
  description: 'An open-source ecosystem of customizable web, video, and data tools for sports teams of every size.',
  alternateTagline: 'Bringing Tech to Every Team.'
} as const;

export type ProductStatus = 'In development' | 'Alpha' | 'Released';

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
};

export const products: Product[] = [
  {
    name: 'WebMAKER', slug: 'webmaker', index: '01', eyebrow: 'Your digital home',
    tagline: 'Build and manage your club website.',
    description: 'A customizable static site for club stories, fixtures, results and statistics, with a desktop publishing studio. A Nerone Basket Anzio pilot is in beta testing; a standalone release is not available yet.',
    status: 'In development', statusDetail: 'Pilot beta testing · standalone release pending',
    image: '/images/webmaker.webp', accent: 'lime',
    features: ['Static, customizable club site', 'Three complete themes in the roadmap', 'Desktop Studio for content publishing', 'News, matches, statistics and social graphics'],
    repoUrl: 'https://github.com/mich1803/nerone-basket-anzio', docsUrl: null, releaseUrl: null
  },
  {
    name: 'TagMAKER', slug: 'tagmaker', index: '02', eyebrow: 'The moments that matter',
    tagline: 'Tag every moment of the game.',
    description: 'A lightweight workflow for manually annotating match video with scores, timestamps and configurable sport profiles. Reusable data export is part of the planned MVP.',
    status: 'In development', statusDetail: 'Early development · no public release',
    image: '/images/tagmaker.webp', accent: 'cyan',
    features: ['Manual video event tagging', 'Score and timestamp capture', 'Configurable sport profiles', 'Reusable event data export'],
    repoUrl: null, docsUrl: null, releaseUrl: null
  },
  {
    name: 'VideoMAKER', slug: 'videomaker', index: '03', eyebrow: 'From match to moment',
    tagline: 'Turn game footage into highlights.',
    description: 'A planned offline-first editing flow for full-game footage, guided highlights, dynamic overlays and horizontal or vertical clips. Importing TagMAKER data is on the roadmap.',
    status: 'In development', statusDetail: 'Early development · no public release',
    image: '/images/videomaker.webp', accent: 'orange',
    features: ['Guided full-game editing', 'Dynamic overlays', 'Horizontal and vertical clips', 'Planned TagMAKER data import'],
    repoUrl: null, docsUrl: null, releaseUrl: null
  }
];

export const roadmap = [
  { index: '01', title: 'Nerone pilot + WebMAKER Studio', detail: 'Pilot work and desktop publishing prototype.' },
  { index: '02', title: 'Three WebMAKER themes', detail: 'Reusable layouts for different clubs and sports.' },
  { index: '03', title: 'TagMAKER MVP', detail: 'Manual event capture and reusable exports.' },
  { index: '04', title: 'Data interoperability', detail: 'Documented paths between tools as formats mature.' },
  { index: '05', title: 'VideoMAKER MVP', detail: 'Guided editing and offline export.' }
];

export const showcase = {
  name: 'Nerone Basket Anzio',
  status: 'WebMAKER pilot · beta testing',
  siteUrl: null as string | null,
  codeUrl: 'https://github.com/mich1803/nerone-basket-anzio',
  attribution: 'Pilot identified in the PlayMAKER organization profile. Club images and screenshots are not reproduced here.'
};
