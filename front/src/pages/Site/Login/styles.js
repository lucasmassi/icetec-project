import styled from 'styled-components';

export const Container = styled.div`  
    padding: 30px;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 0 auto;

    div {
        text-align: center;
        h4 {
            color: #c1c1c1;
            font-size: 12px;
        }
    }

    form {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 30%;
        text-align: left;
        left: 50vh;
        top: 20vh;
        margin: 0 auto;
        height: 100%;
        justify-content: center;

        span {
            justify-content: center;
            background: #e74c3c;
            color: #FFF;
            text-align: center;
            padding: 5px;
            border-radius: 3px;
            margin-top: 5px;
            margin-bottom: 10px;
            font-weight: bold;
            display: flex;
        }
        
        h1 {
            text-align: center;
            a {
                font-size: 40px;
            }
        }

        h3 {
            display: flex;
            color: #ffff;
            font-size: 24px;
            text-align: center;
            flex-direction: column;
            align-items: center;

            img {
                width: 100px;
                height: 100px;
                margin-bottom: 20px;
            }
        }


        h4 {
            text-align: center;
            margin-bottom: 30px;
        }


        p {
            font-size: 15px;
            margin-top: 12px;
            color: #FFF;
            a {
                font-weight: bold;
                font-size: 17px;
            }
        }

        @media (min-width: 700px) {
            min-width: 470px;
        }

        @media (max-width: 823px) {
            min-width: 316px;
            border-radius: 10px;
            width: 100%;
        }

        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 16px;
            color: #ffff;
        }

        input, select {
            width: 100%;
            background: transparent;
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            font-size: 16px;
            color: #515354;
            transition: 0.3s;

            ::placeholder {
                color: #4d5569;
            }
        }

        input:focus {
            transition: 0.3s;
            color: #515354;
            border-color: #4d5569;
        }

        select:focus {
            transition: 0.2s;
            border-color: #faa630;
            background: #faa630;
            color: #1f232b;
        }

        a {
            color: #c1c1c1;
            font-size: 18px;
            margin-bottom: 10px;
            font-weight: bold;

            &:hover {
                opacity: .8;
            }
        }

        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 20px;

            a {
                background: #1f232b;
                color: #FFF;
                padding: 16px;
                border-radius: 4px;
                font-size: 15px;
            }
        }
    }
`;

export const Message = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: right;
    margin: 0 auto;

    h3 {
        color: #ffff;
        font-size: 40px;
        font-weight: bold;
    }

    @media (max-width: 823px) {
        display: none;
    }
`;

export const Background = styled.div`
    width: 100%;
    min-height: 80vh;

    @media (max-width: 823px) {
        background: #FFF;
        background-image: none;
        background-size: cover;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: center;

    select {
        width: 80%;
    }
`;

export const Group = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    small {
        color: #c1c1c1;
        margin: 0 auto;
        text-align: center;
        align-items: center;
        display: flex;
        margin-right: 5px;
        font-weight: bold;
    }

    div {
        width: 100%;

        &:nth-child(1) {
            margin-right: 8px;
        }
        input { 
            width: 100%;
        }
    }

`;

export const ButtonLogin = styled.button.attrs(props => ({
    disabled: props.loading ? true : false,
}))`
    display: block;
    background: #1787c8;
    color: #ffff;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    transition: background-color 0.2s;
    margin-top: 15px;

    &:hover {
        background-color: rgba(44, 115, 180, .9) ;  
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const ImageContainer = styled.div`
    border-right: 1px solid #e0e0e0;
    padding-right: 30px;
`; 