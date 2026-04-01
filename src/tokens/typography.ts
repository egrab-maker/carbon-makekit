export const fontFamilies = {
  sans: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif",
  serif: "'IBM Plex Serif', 'Georgia', Times, serif",
  mono: "'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",
  sansCondensed: "'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif",
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  semibold: 600,
} as const;

export const typeScale = [
  12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 54, 60, 68, 76, 84, 92, 102,
  112, 122, 132, 144, 156,
] as const;

export interface TypeStyle {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
  fontFamily?: string;
}

export const typeStyles = {
  label01: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.33333, letterSpacing: '0.32px' },
  label02: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.28572, letterSpacing: '0.16px' },
  helperText01: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.33333, letterSpacing: '0.32px' },
  helperText02: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.28572, letterSpacing: '0.16px' },
  bodyCompact01: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.28572, letterSpacing: '0.16px' },
  bodyCompact02: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.375, letterSpacing: '0px' },
  body01: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.42857, letterSpacing: '0.16px' },
  body02: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0px' },
  code01: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.33333, letterSpacing: '0.32px', fontFamily: fontFamilies.mono },
  code02: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.42857, letterSpacing: '0.32px', fontFamily: fontFamilies.mono },
  headingCompact01: { fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.28572, letterSpacing: '0.16px' },
  headingCompact02: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.375, letterSpacing: '0px' },
  heading03: { fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.4, letterSpacing: '0px' },
  heading04: { fontSize: '1.75rem', fontWeight: 400, lineHeight: 1.28572, letterSpacing: '0px' },
  heading05: { fontSize: '2rem', fontWeight: 400, lineHeight: 1.25, letterSpacing: '0px' },
  heading06: { fontSize: '2.625rem', fontWeight: 300, lineHeight: 1.199, letterSpacing: '0px' },
  heading07: { fontSize: '3.375rem', fontWeight: 300, lineHeight: 1.199, letterSpacing: '0px' },
} as const satisfies Record<string, TypeStyle>;
