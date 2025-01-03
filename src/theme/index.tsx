/* eslint-disable */
// @ts-nocheck
import { createTheme as createMuiTheme } from '@mui/material';
import { createLightPalette, createDarkPalette } from '@/src/theme/create-palette';
import { createComponents } from '@/src/theme/create-components';
import { createLightShadows, createDarkShadows } from '@/src/theme/create-shadows';
import { createTypography } from '@/src/theme/create-typography';


export function createTheme(mode: 'light' | 'dark' = 'light') {
  const palette = mode == 'light' ? createLightPalette() : createDarkPalette();
  const shadows = mode == 'light' ? createLightShadows() : createDarkShadows();
  const components = createComponents({ palette, shadows });
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440
      }
    },
    components,
    palette,
    shadows,
    shape: {
      borderRadius: 8
    },
    typography
  });
}
