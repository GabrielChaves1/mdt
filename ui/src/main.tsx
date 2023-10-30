import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './contexts/VisibilityContext';
import { GlobalStyles } from './styles/global';
import App from '.';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { ThemeManager, useThemeManager } from './contexts/ThemeContext';
import { StrictMode } from 'react';

export const queryClient = new QueryClient();

const Wrapper = () => {
    const { theme } = useThemeManager();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <QueryClientProvider client={queryClient}>
            <VisibilityProvider>
                <ThemeManager>
                    <Wrapper />
                </ThemeManager>
            </VisibilityProvider>
        </QueryClientProvider>
    </HashRouter>
);
