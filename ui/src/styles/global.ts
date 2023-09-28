import { motion } from "framer-motion";
import { darken, lighten } from "polished";
import styled, { createGlobalStyle } from "styled-components";

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
        text-decoration: none;
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

    @media (min-width: 3840px) {
        html {
            font-size: 100% !important;
        }
    }

    @media (max-height: 1440px) and (min-width: 2560px) {
        html {
            font-size: 85% !important;
        }
    }

    @media (min-width: 2560px) and (min-height: 1080px) {
        html {
            font-size: 67% !important;
        }
    }

    @media (max-width: 1920px) {
        html {
            font-size: 62.5% !important;
        }
    }

    @media (max-width: 1660px) {
        html {
            font-size: 56% !important;
        }
    }

    @media (max-width: 1440px) {
        html {
            font-size: 53% !important;
        }
    }

    @media (max-width: 1368px) {
        html {
            font-size: 49% !important;
        }
    }

    @media (max-width: 1280px) {
        html {
            font-size: 45.7% !important;
        }
    }

    @media (max-width: 800px) {
        html {
            font-size: 29% !important;
        }
    }
`