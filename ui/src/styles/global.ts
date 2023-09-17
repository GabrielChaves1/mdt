import { darken, lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        user-select: none;
        font-family: 'Outfit';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        overflow: hidden;
    }

    body {
        width: 100vw;
        height: 100vh;
        /* background-image: url("https://cdn.discordapp.com/attachments/1040406525589590088/1122946486964064266/Rectangle_1.png");
        background-size: 100% 100%; */
        display: grid;
        place-items: center;
    }

    img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }

    button {
        cursor: pointer;
    }

    
    input, textarea {
    outline: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }

    ::-webkit-scrollbar {
        width: .5rem;
    }

        /* Track */
    ::-webkit-scrollbar-track {
        background: ${props => darken(.02, props.theme.bg.primary)};
        border-radius: .5rem;
    }

        /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.primary};
        border-radius: .5rem;
    }

        /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => lighten(.03, props.theme.colors.primary)};
    }
`