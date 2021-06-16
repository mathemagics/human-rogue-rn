import { hexToRgba } from '/util';

export const color = {
  // Colors related to brand identity, used throughout the app.
  brandPrimary: '#584DFF',
  brandSecondary: '#FEDFB2',

  // Colors used for text & icon content.
  textPrimary: '#FFFFFF',
  textSecondary: '#F6F1EA',

  // Colors used as screen backgrounds.
  backgroundPrimary: '#1D1D1D',
  backgroundSecondary: '#2A2A2A',
  backgroundLight: '#2E2E2E',
  backgroundOverlay: hexToRgba('#2A2A2A', 0.5),

  // Colors used broadly for many UI elements
  // (eg. in borders, card backgrounds, etc).
  objectPrimary: '#37364D',
  objectSecondary: '#717094',
  objectSubtle: '#c5c4e0',

  // Colors used to indicate a status change in the UI
  // (eg. in form validation, errors, etc.)
  statusNegative: '#b03',
  statusPositive: '#0a6',
  statusWarning: '#c90',

  transparent: 'transparent',
} as const;
