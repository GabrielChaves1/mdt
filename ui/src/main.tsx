import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './contexts/VisibilityContext';
import { GlobalStyles } from './styles/global';
import App from '.';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import { ThemeManager } from './contexts/ThemeContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>
            <QueryClientProvider client={queryClient}>
                <VisibilityProvider>
                    <ThemeProvider theme={light}>
                        <ThemeManager>
                            <GlobalStyles />
                            <App />
                        </ThemeManager>
                    </ThemeProvider>
                </VisibilityProvider>
            </QueryClientProvider>
        </HashRouter>
    </React.StrictMode>
);
