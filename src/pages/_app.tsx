import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global'
import type { AppProps } from 'next/app'
import { darkTheme } from '@/src/styles/themes/dark';
import AppTemplate from '../components/AppTemplate';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </ThemeProvider>
  );
}
