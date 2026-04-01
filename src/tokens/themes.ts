export interface CarbonTheme {
  background: string;
  backgroundInverse: string;
  backgroundBrand: string;
  backgroundHover: string;
  backgroundActive: string;
  backgroundSelected: string;
  backgroundSelectedHover: string;

  layer01: string;
  layer02: string;
  layer03: string;
  layerHover01: string;
  layerHover02: string;
  layerHover03: string;
  layerActive01: string;
  layerActive02: string;
  layerActive03: string;
  layerSelected01: string;
  layerSelected02: string;
  layerSelected03: string;
  layerSelectedInverse: string;
  layerAccent01: string;
  layerAccent02: string;
  layerAccent03: string;

  field01: string;
  field02: string;
  field03: string;
  fieldHover01: string;
  fieldHover02: string;
  fieldHover03: string;

  borderSubtle00: string;
  borderSubtle01: string;
  borderSubtle02: string;
  borderSubtle03: string;
  borderStrong01: string;
  borderStrong02: string;
  borderStrong03: string;
  borderInverse: string;
  borderInteractive: string;
  borderDisabled: string;

  textPrimary: string;
  textSecondary: string;
  textPlaceholder: string;
  textHelper: string;
  textError: string;
  textInverse: string;
  textOnColor: string;
  textOnColorDisabled: string;
  textDisabled: string;

  linkPrimary: string;
  linkPrimaryHover: string;
  linkSecondary: string;
  linkInverse: string;
  linkVisited: string;

  iconPrimary: string;
  iconSecondary: string;
  iconInverse: string;
  iconOnColor: string;
  iconOnColorDisabled: string;
  iconDisabled: string;
  iconInteractive: string;

  supportError: string;
  supportSuccess: string;
  supportWarning: string;
  supportInfo: string;
  supportErrorInverse: string;
  supportSuccessInverse: string;
  supportWarningInverse: string;
  supportInfoInverse: string;

  focus: string;
  focusInset: string;
  focusInverse: string;

  interactive: string;
  highlight: string;
  toggleOff: string;
  overlay: string;

  skeletonBackground: string;
  skeletonElement: string;

  buttonPrimaryBackground: string;
  buttonPrimaryHover: string;
  buttonPrimaryActive: string;
  buttonSecondaryBackground: string;
  buttonSecondaryHover: string;
  buttonSecondaryActive: string;
  buttonTertiaryBackground: string;
  buttonTertiaryHover: string;
  buttonTertiaryActive: string;
  buttonDangerBackground: string;
  buttonDangerHover: string;
  buttonDangerActive: string;
  buttonDisabled: string;

  notificationInfoBackground: string;
  notificationInfoBorder: string;
  notificationSuccessBackground: string;
  notificationSuccessBorder: string;
  notificationWarningBackground: string;
  notificationWarningBorder: string;
  notificationErrorBackground: string;
  notificationErrorBorder: string;

  tagBackgroundGray: string;
  tagBackgroundCoolGray: string;
  tagBackgroundWarmGray: string;
  tagBackgroundRed: string;
  tagBackgroundMagenta: string;
  tagBackgroundPurple: string;
  tagBackgroundBlue: string;
  tagBackgroundCyan: string;
  tagBackgroundTeal: string;
  tagBackgroundGreen: string;
}

export const whiteTheme: CarbonTheme = {
  background: '#ffffff',
  backgroundInverse: '#393939',
  backgroundBrand: '#0f62fe',
  backgroundHover: 'rgba(141,141,141,0.12)',
  backgroundActive: 'rgba(141,141,141,0.5)',
  backgroundSelected: 'rgba(141,141,141,0.2)',
  backgroundSelectedHover: 'rgba(141,141,141,0.32)',

  layer01: '#f4f4f4',
  layer02: '#ffffff',
  layer03: '#f4f4f4',
  layerHover01: '#e8e8e8',
  layerHover02: '#e8e8e8',
  layerHover03: '#e8e8e8',
  layerActive01: '#c6c6c6',
  layerActive02: '#c6c6c6',
  layerActive03: '#c6c6c6',
  layerSelected01: '#e0e0e0',
  layerSelected02: '#e0e0e0',
  layerSelected03: '#e0e0e0',
  layerSelectedInverse: '#161616',
  layerAccent01: '#e0e0e0',
  layerAccent02: '#e0e0e0',
  layerAccent03: '#e0e0e0',

  field01: '#f4f4f4',
  field02: '#ffffff',
  field03: '#f4f4f4',
  fieldHover01: '#e8e8e8',
  fieldHover02: '#e8e8e8',
  fieldHover03: '#e8e8e8',

  borderSubtle00: '#e0e0e0',
  borderSubtle01: '#c6c6c6',
  borderSubtle02: '#e0e0e0',
  borderSubtle03: '#c6c6c6',
  borderStrong01: '#8d8d8d',
  borderStrong02: '#8d8d8d',
  borderStrong03: '#8d8d8d',
  borderInverse: '#161616',
  borderInteractive: '#0f62fe',
  borderDisabled: '#c6c6c6',

  textPrimary: '#161616',
  textSecondary: '#525252',
  textPlaceholder: 'rgba(22,22,22,0.4)',
  textHelper: '#6f6f6f',
  textError: '#da1e28',
  textInverse: '#ffffff',
  textOnColor: '#ffffff',
  textOnColorDisabled: '#8d8d8d',
  textDisabled: 'rgba(22,22,22,0.25)',

  linkPrimary: '#0f62fe',
  linkPrimaryHover: '#0043ce',
  linkSecondary: '#0043ce',
  linkInverse: '#78a9ff',
  linkVisited: '#8a3ffc',

  iconPrimary: '#161616',
  iconSecondary: '#525252',
  iconInverse: '#ffffff',
  iconOnColor: '#ffffff',
  iconOnColorDisabled: '#8d8d8d',
  iconDisabled: 'rgba(22,22,22,0.25)',
  iconInteractive: '#0f62fe',

  supportError: '#da1e28',
  supportSuccess: '#24a148',
  supportWarning: '#f1c21b',
  supportInfo: '#0043ce',
  supportErrorInverse: '#fa4d56',
  supportSuccessInverse: '#42be65',
  supportWarningInverse: '#f1c21b',
  supportInfoInverse: '#4589ff',

  focus: '#0f62fe',
  focusInset: '#ffffff',
  focusInverse: '#ffffff',

  interactive: '#0f62fe',
  highlight: '#d0e2ff',
  toggleOff: '#8d8d8d',
  overlay: 'rgba(0,0,0,0.5)',

  skeletonBackground: '#e8e8e8',
  skeletonElement: '#c6c6c6',

  buttonPrimaryBackground: '#0f62fe',
  buttonPrimaryHover: '#0050e6',
  buttonPrimaryActive: '#002d9c',
  buttonSecondaryBackground: '#393939',
  buttonSecondaryHover: '#474747',
  buttonSecondaryActive: '#6f6f6f',
  buttonTertiaryBackground: 'transparent',
  buttonTertiaryHover: '#0353e9',
  buttonTertiaryActive: '#002d9c',
  buttonDangerBackground: '#da1e28',
  buttonDangerHover: '#b81922',
  buttonDangerActive: '#750e13',
  buttonDisabled: '#c6c6c6',

  notificationInfoBackground: '#edf5ff',
  notificationInfoBorder: '#0043ce',
  notificationSuccessBackground: '#defbe6',
  notificationSuccessBorder: '#24a148',
  notificationWarningBackground: '#fcf4d6',
  notificationWarningBorder: '#f1c21b',
  notificationErrorBackground: '#fff1f1',
  notificationErrorBorder: '#da1e28',

  tagBackgroundGray: '#e0e0e0',
  tagBackgroundCoolGray: '#dde1e6',
  tagBackgroundWarmGray: '#e5e0df',
  tagBackgroundRed: '#ffd7d9',
  tagBackgroundMagenta: '#ffd6e8',
  tagBackgroundPurple: '#e8daff',
  tagBackgroundBlue: '#d0e2ff',
  tagBackgroundCyan: '#bae6ff',
  tagBackgroundTeal: '#9ef0f0',
  tagBackgroundGreen: '#a7f0ba',
};

export const g10Theme: CarbonTheme = {
  ...whiteTheme,
  background: '#f4f4f4',
  layer01: '#ffffff',
  layer02: '#f4f4f4',
  layer03: '#ffffff',
  field01: '#ffffff',
  field02: '#f4f4f4',
  field03: '#ffffff',
  layerHover01: '#e8e8e8',
  layerHover02: '#e8e8e8',
  layerHover03: '#e8e8e8',
};

export const g90Theme: CarbonTheme = {
  background: '#262626',
  backgroundInverse: '#f4f4f4',
  backgroundBrand: '#0f62fe',
  backgroundHover: 'rgba(141,141,141,0.16)',
  backgroundActive: 'rgba(141,141,141,0.4)',
  backgroundSelected: 'rgba(141,141,141,0.24)',
  backgroundSelectedHover: 'rgba(141,141,141,0.32)',

  layer01: '#393939',
  layer02: '#525252',
  layer03: '#6f6f6f',
  layerHover01: '#474747',
  layerHover02: '#636363',
  layerHover03: '#5e5e5e',
  layerActive01: '#6f6f6f',
  layerActive02: '#8d8d8d',
  layerActive03: '#8d8d8d',
  layerSelected01: '#525252',
  layerSelected02: '#6f6f6f',
  layerSelected03: '#525252',
  layerSelectedInverse: '#f4f4f4',
  layerAccent01: '#525252',
  layerAccent02: '#6f6f6f',
  layerAccent03: '#525252',

  field01: '#393939',
  field02: '#525252',
  field03: '#6f6f6f',
  fieldHover01: '#474747',
  fieldHover02: '#636363',
  fieldHover03: '#5e5e5e',

  borderSubtle00: '#525252',
  borderSubtle01: '#6f6f6f',
  borderSubtle02: '#525252',
  borderSubtle03: '#6f6f6f',
  borderStrong01: '#8d8d8d',
  borderStrong02: '#a8a8a8',
  borderStrong03: '#8d8d8d',
  borderInverse: '#f4f4f4',
  borderInteractive: '#4589ff',
  borderDisabled: '#525252',

  textPrimary: '#f4f4f4',
  textSecondary: '#c6c6c6',
  textPlaceholder: 'rgba(244,244,244,0.4)',
  textHelper: '#a8a8a8',
  textError: '#ff8389',
  textInverse: '#161616',
  textOnColor: '#ffffff',
  textOnColorDisabled: '#8d8d8d',
  textDisabled: 'rgba(244,244,244,0.25)',

  linkPrimary: '#78a9ff',
  linkPrimaryHover: '#a6c8ff',
  linkSecondary: '#a6c8ff',
  linkInverse: '#0f62fe',
  linkVisited: '#be95ff',

  iconPrimary: '#f4f4f4',
  iconSecondary: '#c6c6c6',
  iconInverse: '#161616',
  iconOnColor: '#ffffff',
  iconOnColorDisabled: '#8d8d8d',
  iconDisabled: 'rgba(244,244,244,0.25)',
  iconInteractive: '#ffffff',

  supportError: '#ff8389',
  supportSuccess: '#42be65',
  supportWarning: '#f1c21b',
  supportInfo: '#4589ff',
  supportErrorInverse: '#da1e28',
  supportSuccessInverse: '#24a148',
  supportWarningInverse: '#f1c21b',
  supportInfoInverse: '#0043ce',

  focus: '#ffffff',
  focusInset: '#161616',
  focusInverse: '#0f62fe',

  interactive: '#4589ff',
  highlight: '#002d9c',
  toggleOff: '#8d8d8d',
  overlay: 'rgba(0,0,0,0.65)',

  skeletonBackground: '#333333',
  skeletonElement: '#525252',

  buttonPrimaryBackground: '#0f62fe',
  buttonPrimaryHover: '#0050e6',
  buttonPrimaryActive: '#002d9c',
  buttonSecondaryBackground: '#6f6f6f',
  buttonSecondaryHover: '#5e5e5e',
  buttonSecondaryActive: '#393939',
  buttonTertiaryBackground: 'transparent',
  buttonTertiaryHover: '#f4f4f4',
  buttonTertiaryActive: '#c6c6c6',
  buttonDangerBackground: '#da1e28',
  buttonDangerHover: '#b81922',
  buttonDangerActive: '#750e13',
  buttonDisabled: '#525252',

  notificationInfoBackground: '#001d6c',
  notificationInfoBorder: '#4589ff',
  notificationSuccessBackground: '#022d0d',
  notificationSuccessBorder: '#42be65',
  notificationWarningBackground: '#302400',
  notificationWarningBorder: '#f1c21b',
  notificationErrorBackground: '#520408',
  notificationErrorBorder: '#ff8389',

  tagBackgroundGray: '#525252',
  tagBackgroundCoolGray: '#4d5358',
  tagBackgroundWarmGray: '#565151',
  tagBackgroundRed: '#750e13',
  tagBackgroundMagenta: '#740937',
  tagBackgroundPurple: '#491d8b',
  tagBackgroundBlue: '#002d9c',
  tagBackgroundCyan: '#003a6d',
  tagBackgroundTeal: '#004144',
  tagBackgroundGreen: '#044317',
};

export const g100Theme: CarbonTheme = {
  ...g90Theme,
  background: '#161616',
  layer01: '#262626',
  layer02: '#393939',
  layer03: '#525252',
  layerHover01: '#333333',
  layerHover02: '#474747',
  layerHover03: '#636363',
  layerActive01: '#525252',
  layerActive02: '#6f6f6f',
  layerActive03: '#8d8d8d',
  layerSelected01: '#393939',
  layerSelected02: '#525252',
  layerSelected03: '#6f6f6f',
  layerSelectedInverse: '#f4f4f4',
  layerAccent01: '#393939',
  layerAccent02: '#525252',
  layerAccent03: '#6f6f6f',
  field01: '#262626',
  field02: '#393939',
  field03: '#525252',
  fieldHover01: '#333333',
  fieldHover02: '#474747',
  fieldHover03: '#636363',
  borderSubtle00: '#393939',
  borderSubtle01: '#525252',
  borderSubtle02: '#393939',
  borderSubtle03: '#525252',
  borderStrong01: '#6f6f6f',
  borderStrong02: '#8d8d8d',
  borderStrong03: '#6f6f6f',
  borderDisabled: '#393939',
  skeletonBackground: '#292929',
  skeletonElement: '#393939',
};

export const themes = {
  white: whiteTheme,
  g10: g10Theme,
  g90: g90Theme,
  g100: g100Theme,
} as const;

export type ThemeName = keyof typeof themes;
