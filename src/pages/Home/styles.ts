import styled from "styled-components";
import { breakpoints, colors } from "../../styles";


export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

`
export const ContainerItems = styled.div`
    max-width: 938px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    margin-top: 116px;

    @media (max-width: ${breakpoints.desktop}) {
        max-width: 100%;
        display: flex;
        justify-content: center;
    }

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%;
    }
    @media (max-width: ${breakpoints.mobile}) {
        display: flex;
        justify-content: center;
    }
`
export const ListGroupProducts = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    text-align: center;
    padding-bottom: 172px;
    width: 100%;
    overflow-x: 100vh;
    scrool: on;
    

    li {
        background-color: ${colors.backgroundColor};
        margin-rigth: 42px;
        width: 218px;
        height: 285px;
        border: none;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        box-shadow: 0 0px 1px;

        > img {
            width: 111px;
            height: 138px;
            top: 18;
            left: 53px;
            margin-top: 18px;
            margin-bottom: 14px;
        }


        > p {
            margin-left: 12px;
            margin-bottom: 10px;
            font-family: Montserrat;
            font-size: 10px;
            font-weight: 300;
            line-height: 12px;
            text-align: left;
            color: ${colors.titleLetters};
        }
        
    }

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr;
        gap: 70px;
        margin-left: 80px;
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        width: 251px;
        height: 328px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: 80%;
        margin: 0 62px 0 70px;
    }
`
export const ButtonClickHere = styled.button`
    background-color: ${colors.HeaderBackground};
    width: 218px;
    height: 31px;
    border: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: ${colors.letterColor};
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    paragraph: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;


    > img {
        margin-right: 14px;
    }
`
export const TitleAndPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    h3 {
        font-family: Montserrat;
        font-size: 15px;
        font-weight: 400;
        line-height: 19px;
        paragraph: 1px;
        color: ${colors.titleLetters};
        margin-top: 14px;
        margin-bottom: 2px;
        margin-left: 2px;
    }

    > span {
        background-color: ${colors.backgroundPrice};
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 600;
        line-height: 13px;
        paragraph: 1px;
        color: ${colors.letterColor};
        width: 130px;
        height: 26px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px;
        margin-bottom: 10px;
        padding: 6px;
    }
`
export const FooterPage = styled.div`
    display: flex;
    justify-content: center;
    bottom: 0;
    align-items: center;
    text-align: center;
    background-color: #e9e9e9;
    height: 60px;
    width: 100%;
    margin: 0 auto;
    position: fixed;


    p {
        color: #000;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
    }

`