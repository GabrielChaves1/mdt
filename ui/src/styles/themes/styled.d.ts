import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        bg: {
            primary: string,
            button: {
                primary: string
            }
        },

        border: {
            primary: string
        },
    
        text: {
            title: string,
            primary: string
        }
    }
}