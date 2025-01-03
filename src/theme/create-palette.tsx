import { common } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, indigo, info, neutral, success, warning } from '@/src/theme/colors';

export function createLightPalette() {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12)
    },
    background: {
      default: neutral[50],
      paper: common.white
    },
    divider: '#F2F4F7',
    error,
    info,
    mode: 'light',
    neutral,
    primary: indigo,
    success,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38)
    },
    warning
  };
}

export function createDarkPalette() {
  return {
    action: {
      active: neutral[500],
      disabled: alpha('#FFF', 0.38),
      disabledBackground: alpha(neutral[50], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12)
    },
    divider: neutral[500],
    error,
    info,
    mode: 'dark',
    neutral,
    primary: indigo,
    success,
    background: {
      default: neutral[900],
      paper: neutral[800]
    },
    text: {
      primary: '#FFFFFF',
      secondary: neutral[300],
      disabled: alpha(neutral[100], 0.38)
    },
    warning
  };
}
