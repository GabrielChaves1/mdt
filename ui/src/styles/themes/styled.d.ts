import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        bg: {
            primary: string,
        },

        border: {
            primary: string
        },
    
        text: {
            title: string,
            subtitle: string,
        },

        colors: {
            primary: string,
            icon: string,
            ripple: string
        }
    }
}