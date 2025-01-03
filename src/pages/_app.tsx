import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@/src/contexts/ThemeContext';
import { Layout as DasboardLayout } from '@/src/layouts/dashboard/layout';

import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {

    return (
        <ThemeProvider>
            <CssBaseline />
            <DasboardLayout>
                <Component {...pageProps} />
            </DasboardLayout>
        </ThemeProvider>
    );
}
