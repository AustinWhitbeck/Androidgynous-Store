import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#6FA3DE',
      main: '#1A304F',
      dark: '#0C1220',
      contrastText: '#DBD8F3',
    },
    secondary: {
      light: '#D5D0DF',
      main: '#9B93AC',
      dark: '#2E273C',
    },
    text: {
      primary: '#0F0F11',
      secondary: '#FFFFFF',
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;