import styled from "styled-components";
import { Breakpoint, Col, Title } from "../../styles/styles.styled";

export const Header = styled(Col)`
    height: 30vh;
    color: var(--color-white);
    font-family: var(--header-font);
    background-color: var(--color-dark);
    @media(min-width:${Breakpoint.md}){
        height: 30vh;
        }
    & > div > div {
        width: 90%;
        margin: 0 auto;
    }
    & > div:nth-child(1){
        background-color: var(--color-dark);
        justify-content: flex-start;
        height: 40%;
        & > h1{
            position: relative;
            width: 90%;
            top: 0.85rem;
            color: var(--color-white-contrast);
            margin: 0 auto;
        }
    }
    & > div:nth-child(2){
        height: 60%;
        width: 100%;
        & > h1{
        justify-content: center;
        width: fit-content;
        }
    }
`;

export const NavCnt = styled(Col)`
    height: 15%;
    background-color: var(--color-white);
    color:var(--color-dark);
    font-family: var(--calendar-font);
    & > div > button{
        width: calc(100% / 3);
    }
`;


export const MainMobile = styled(Col)`
    height: 60vh;
    justify-content: flex-start;
    background-color: var(--color-white);
    color:var(--color-dark);
    font-family: var(--header-font);
    @media(min-width:${Breakpoint.md}){
        display: none;
    }
`;

export const MainDesktop = styled.section`  
    display: none;
    @media(min-width:${Breakpoint.md}){
        display: grid;
        border: 4px solid red;
        height: 100%;
        width: 100%;
    }
    
`;
export const ProfileFeedTitle = styled(Title)`
    font-size: medium;
    justify-content: center;
    padding: 1rem 0;
`;