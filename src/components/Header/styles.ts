import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 101px;
    margin: 0 auto;
    background-color: ${colors.HeaderBackground};


    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        width: 251px;
        height: 328px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        width: 375px;
        height: 48px;
    }
`

export const PageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
        width: 375px;
        height: 48px;
    }
`
export const FirstDivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    @media (max-width: ${breakpoints.tablet}) {
        margin-left: 20px;
        margin-top: -4px;
    }

    p {
        color: ${colors.letterColor};
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 300;
        line-height: 19px;
        paragraph: 10px;
        margin-left: 10px;
        margin-top: 8px;

        @media (max-width: ${breakpoints.mobile}){
            font-size: 16px;
        }
    }

`
export const TitlePage = styled.h1`
    font-family: Montserrat;
    font-weigth: 600;
    font-size: 40px;
    line-height: 19px;
    paragraph: 10px;
    color: ${colors.letterColor};
    margin: 28px 0 29px 65px;


    @media (max-width: ${breakpoints.tablet}) {
        font-size: 32px;
        margin: 0 auto;
    }
`
export const SecondaryDivHeader = styled.div`
    display: flex;
    background-color: ${colors.letterColor};
    border-radius: 8px;
    width: 90px;
    height: 40px;
    margin-right: 88px;
    margin-top: 16px;

    a {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #000;
        display: flex;
        align-items: center;
        text-decoration: none;
        



        > img {
            width: 19px;
            height: 18px;
            margin-left: 20px;
            margin-right: 14px;
        }
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: 52px;
        height: 26px;
        margin-right: 26px;
        margin-top: 0;


        a {
            font-size: 12px;
            line-height: 14px;

            img{
                width: 10px;
                margin-left: 14px;
                margin-right: 8px;
            }
        }
    }
`