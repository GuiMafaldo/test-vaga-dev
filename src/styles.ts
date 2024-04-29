import { createGlobalStyle } from "styled-components";
export const colors = {
    HeaderBackground: '#0f52ba',
    letterColor: '#fff',
    backgroundColor: '#f9f9f9',
    titleLetters: '#2c2c2c',
    backgroundPrice: '#373737'
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '767px',
    mobile: '375px'
}
export const GloblaCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    
    .container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        @media (max-width: ${breakpoints.desktop}) {
            max-width: 100%;
        }

        @media (max-width: ${breakpoints.tablet}) {
            
            .footerPage{
                margin-top: 40px;
            }
        }
    }
    
    body {
        background-color: #f9f9f9;
    }

    .footerPage {
        background-color: #f9f9f9;
        margin: 0 auto;
        margin-top: 172px;
        width: 1440px;
        height: 34px;
        top: 990px;
        text-align: center;
        font-family: Montserrat;

`

