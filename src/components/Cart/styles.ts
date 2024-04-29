import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const ContainerSidebar = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
`
export const TitleAndClose = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;

    .closeIcon {
        width: 30px;
        margin-top: -30px;
        cursor: pointer;
    }

    h2 {
        font-family: Montserrat;
        font-size: 27px;
        font-weight: 700;
        line-height: 32.91px;
        text-align: left;
        margin-left: 20px;
        color: ${colors.letterColor}

    }
`
export const ContainerCart = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    @media(max-width: ${breakpoints.mobile}) {
        width: 90%;
        margin: 0 auto;
        top: 0;
        right: -40px;
    }
    
    &.is-open {
        display: flex;
    }
`
export const CardsItems = styled.div`
    margin-top: -30px;
`
export const SideBar= styled.aside`
    background-color: ${colors.HeaderBackground};
    z-index:1;
    padding: 40px 16px 0 16px;
    max-width: 430px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        font-size: 12px;
        font-weight: 700;
        font-family: Montserrat;
        margin-right: -40px;
    }

    & .finalPrice {
        font-family: Montserrat;
        font-size: 28px;
        font-weight: 700;
        line-height: 15px;
        text-align: left;
        margin-top: -50px;
        margin-bottom: 40px;
        color: ${colors.letterColor};
}

& .calculatedValue {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        color: ${colors.letterColor};
        margin-top: -90px;
        margin-right: 100px;
        font-family: Montserrat;
        font-size: 28px;
        font-weight: 700;
        line-height: 15px;
        text-align: left;

    }
    h3 {
        margin-left: 30px;
    }
}
`
export const CloseCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 385px;
    padding: 30px;
    background-color: ${colors.letterColor};
    border-radius: 10px;
    margin-bottom: 60px;
    cursor: pointer;

    @media(max-width: ${breakpoints.mobile}) {
        width: 100%;
    }

    & .photo-apple {
        width: 46px;
        margin-left: -10px;
        margin-right: -140px;
        cursor: pointer;
    }

    & .iconClose {
        width: 20px;
        margin-right: -30px;
        margin-top: -86px;
        cursor: pointer;
    }
    

    h4 {
        color: ${colors.titleLetters};
        font-family: Montserrat;
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
        text-align: left;
        margin: 0 auto;
        margin-left: 80px;
    }

    & .priceSpan {
        margin: 0 auto;
        margin-right: -14px;
        font-size: 14px;


        @media(max-width: ${breakpoints.mobile}) {
            margin: 0 auto;
            margin-right: -24px;
            margin-left: 10px;
            margin-top: -2px;
            font-size: 12px;
            
        }
    }

`
export const CountDiv = styled.div`
    max-width: 400px;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    margin-left: 70px;
    gap: 2px;

    @media(max-width: ${breakpoints.mobile}) {
        margin-top: 10px;
    }
    
    

    & .countAdd{
        border: none;
        border: 1px solid #e3e3e3;
        border-radius: 2px;
        padding: 2px;
        height: 20px;
        width: 20px;
        margin: 0;
        border-radius: 5px;
        cursor: pointer;   
        
        @media(max-width: ${breakpoints.mobile}) {
            margin-top: 2px;
        }
    }
`
export const ButtonFinalizar = styled.button`
    width: 430px;
    background-color: #000;
    color: ${colors.letterColor};
    height: 70px;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    border: none;
    margin-left: -16px;
    cursor: pointer;

    @media(max-width: ${breakpoints.mobile}) {
        width: 390px;
    }
`
export const RenderValueTotal = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 0 auto;

    @media(max-width: ${breakpoints.mobile}) {
        width: 90%;
        margin-bottom: -80px;
    }


    p {
        color: ${colors.letterColor};
        font-family: Montserrat;
        font-weight: 700;
        font-size: 28px;
        line-height: 19px;
        paragraph: 1px;
    }

    span {
        color: ${colors.letterColor};
        font-family: Montserrat;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        paragraph: 1px;
        margin-right: 20px;
    }
`