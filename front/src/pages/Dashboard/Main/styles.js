import styled from 'styled-components';
import BackgroundImage from '../../../assets/home.png';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    background-image: url(${BackgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
`;

export const Content = styled.div`
    margin-left: 100px;
    margin-top: 50px;
    padding-right: 30px;
    width: 100%;

    h1 {
        color: #1f232b;
    }
`;

export const Widgets = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: 0 auto;
    padding-bottom: 20px;

    a {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border: 2px solid #407BFF;
        background: #407BFF;
        border-radius: 10px;
        transition: 0.3s;

        svg {
            height: 70px;
            width: 75px;
        }

        &:hover {
            margin-top: 5px;
            background: #407BFF;
            transition: 0.3s;
            color: #ffffff;
            box-shadow: 0 0 2px #111419;
        }
    }
`;