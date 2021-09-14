import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video,input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }


    :root {
        --color-primary: #4794FF;
        --color-primary-two: #0067CB;
        --color-secondary: #F7C53B;
        --color-secondary-two: #C09500;
        --color-title: #111111;
        --color-text: #666665;
        --color-text-two: #e5e5e5;
        --color-placeholder: #94969E;
        --color-error: #DF1545;
        --color-success: #25D970;
        --color-base-default: #f4f4f9;
        --font-text-primary: "Nunito", sans-serif;
        --font-text-secondary: "Raleway", sans-serif;
        --border-radius: 8px;
    }
`;
