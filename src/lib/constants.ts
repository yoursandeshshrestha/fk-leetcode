// Theme Colors
export const COLORS = {
  primary: '#fe5303',
  background: '#0d0d14',
  textPrimary: 'white',
  textSecondary: 'white/60',
  textTertiary: 'white/70',
  border: 'white/10',
  borderLight: 'white/8',
} as const;

// Layout
export const LAYOUT = {
  maxWidth: '1280px',
  padding: {
    section: 'pb-20',
    container: 'px-10',
    card: 'p-12',
  },
  gridExtend: '-mx-6',
} as const;

// Difficulty Colors
export const DIFFICULTY_COLORS = {
  medium: 'text-yellow-500',
  hard: 'text-red-500',
  easy: 'text-green-500',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/@neetcode',
  linkedin: 'https://linkedin.com/company/neetcode',
  twitter: 'https://twitter.com/neetcode1',
  discord: 'https://discord.gg/neetcode',
} as const;

// Company Logos
export const COMPANY_LOGOS = {
  google: '/hero/google.svg',
  meta: '/hero/meta.svg',
  openai: '/hero/openai.svg',
  leetcode: '/hero/leetcode.svg',
  claude: '/hero/claude.svg',
  deepmind: '/hero/deepmind.svg',
  gemini: '/hero/gemini.svg',
  microsoft: '/hero/microsoft.svg',
  antigravity: '/hero/antigravity.svg',
  nanobanana: '/hero/nanobanana.svg',
  amazon: '/hero/amazon.svg',
  capitalOne: '/hero/Capital-One.svg',
} as const;
