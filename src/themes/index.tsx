import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles';
import { useMemo } from 'react';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
import merge from 'lodash.merge';
import { customShadows } from './custom-shadow';
import CssBaseline from '@mui/material/CssBaseline';
import { componentsOverrides } from './overrides';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      customShadows: customShadows('light'),
      typography,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const memoizedValue = useMemo(() => merge(baseOption), [baseOption]);
  const theme = createTheme(memoizedValue as ThemeOptions);
  theme.components = componentsOverrides(theme);
  const themeWithLocale = useMemo(() => createTheme(theme), [theme]);
  return (
    <MuiThemeProvider theme={themeWithLocale}>
      <CssBaseline/>
      {children}
    </MuiThemeProvider>
  );
}
