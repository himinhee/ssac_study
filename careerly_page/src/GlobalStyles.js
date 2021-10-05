import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
    html {
        //1 rem=16px 
        /* font-size: 16px; - default font size*/
        //1 rem=10px
        font-size: 10px;
        font-family: 'Pretendard-Regular',sans-serif;;
        color: #333333;
        line-height: 1.5;
    }

    em{
        font-weight: bolder;
        color: orange;
    }

    p {
        color: #333;
    }
`;
export default GlobalStyles;
