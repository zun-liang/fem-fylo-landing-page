import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --dark-blue1: hsl(217, 28%, 15%);
        --dark-blue2: hsl(218, 28%, 13%);
        --dark-blue3: hsl(216, 53%, 9%);
        --dark-blue4: hsl(219, 30%, 18%);
        --cyan: hsl(176, 68%, 64%);
        --blue: hsl(198, 60%, 50%);
        --light-red: hsl(0, 100%, 63%);
    }

    html {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        font-size: 14px;
        @media(min-width: 600px) {
            font-size: 16px;
        }
    }

    body {
        background-color: var(--dark-blue2);
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: white;
        line-height: 1.4;
        overflow-x: hidden;
    }
`

export default GlobalStyles