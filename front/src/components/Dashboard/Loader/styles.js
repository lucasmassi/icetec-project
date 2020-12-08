import styled from 'styled-components';

export const Load = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 auto;

    &:after {
        content: " ";
        display: block;
        width: 55px;
        height: 55px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #faa61a;
        border-color: #faa61a transparent #faa61a transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`;