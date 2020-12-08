import styled from 'styled-components';

export const Container = styled.div`
    min-width: 88px;
    min-height: 100vh;
    height: auto;
    background: #1787c8;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 9px -4px;

    svg {
        color: #ffffff;
    }
    
    div {
        display: flex;
        text-align: center;
        padding-top: 20px;
        margin-top: 10px;

        img {
            display: flex;
            margin-left: 16px;
        }

        svg {
            margin-left: 12px;
        }
    }

    span {
        bottom: 0;
        display: block;
        position: fixed;
        margin-bottom: 15px;
        margin-left: 34px;

        a {
            display: flex;
        }

        img {
            border-radius: 50%;
        }
        div {
            display: block;
            width: 100%;
        }

        input[type=checkbox] {
            height: 0;
            width: 0;
            visibility: hidden;
        }

        label {
            cursor: pointer;
            text-indent: -9999px;
            width: 36px;
            height: 20px;
            background: #ffffff;
            float: right;
            border-radius: 100px;
            margin-top: -10px;
            position: relative;
        }

        label::after {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            width: 14px;
            height: 14px;
            background-color: #c1c1c1;
            border-radius: 90px;
            transition: 0.3s;
        }

        input:checked + label {
            background-color: #FFF;
        }

        input:checked + label::after {
            left: calc(100% - 5px);
            transform: translateX(-100%);
        }

        input:active:after {
            width: 45px;
        }

        button {
            background: transparent;
            border: 0;
            font: 16px 'Baloo 2', cursive;   
            color: #ffffff;
            font-weight: bold;
        }

        button:hover {
            transition: 0.2s;
            color: #ffffff;
            opacity: .8;
        }
    }

    ul {
        display: inline-grid;
        width: 100%;
        padding-left: 11px;
        padding-right: 11px;

        li {
            height: 50px;
            text-align: center;
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 20px;
            a {
                align-items: center;
                display: flex;
                font-weight: bold;
                width: 100%;
                text-align: center;
                justify-content: center;
            }

            &:hover {
                background: #ffffff;
                border-radius: 8px;
                box-shadow: 0 0 10px #ffffff;
                svg {
                    color: #1787c8;
                }
                
                &::after {
                    content: attr(title);
                    min-width: 135px;
                    border-radius: 0px 10px 10px 0px;
                    background-color: #1787c8;
                    box-shadow: 0 0 10px #ffffff;
                    padding: 3px;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: bold;
                    left: 89px;
                    z-index: 1;
                    position: absolute;
                }
            }
        }
    }
`;
