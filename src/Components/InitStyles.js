import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
const InitStyles = createGlobalStyle`
    ${reset};
    a {
        color:inherit;
        text-decoration:initial;
    }
    button {
        color:inherit;
        border: initial;
        background-color: initial;
        padding:0;
        margin:0;
    }
    input {
        opacity: 0.5;
        color:inherit;
        border: initial;
        background-color: inherit;
        &:focus {
            outline: none;
        }
    }
    * {
        box-sizing: border-box;
        overflow: hidden;
    }
    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    svg {
        width: 20px;
        padding: 0;
        margin: 0;
    }
`;
export default InitStyles;
