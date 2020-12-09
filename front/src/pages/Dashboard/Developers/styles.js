import styled from 'styled-components';
import BackgroundImage from '../../../assets/background-geral.png';

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

export const ButtonAdd = styled.button`
    float: right;
    padding: 7px 15px 7px 15px;
    border-radius: 25px;
    background:  ${props => props.status === "success" ? "#3aa281" : "#407BFF"};
    border: ${props => props.status === "success" ? "2px solid #3aa281" : "2px solid #407BFF"};
    color: ${props => props.status === "success" ? "#FFFF" : "#1f232b"};
    font-size: 14px;
    font-weight: bold;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: ${props => props.status === "loading" ? "not-allowed" : "cursor-pointer"};
    opacity: ${props => props.status === "loading" ? 0.5 : 1};
    
    svg {
        margin-right: 5px;
    }

    &:hover {
        background: transparent;
        color: ${props => props.status === "success" ? "#FFFF" : "#407BFF"};
        transition: 0.3s;
    }
`;

export const Content = styled.div`
    margin-left: 100px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-right: 70px;
    padding-bottom: 20px;
    width: 100%;

    h1 {
        display: flex;
        width: 100%;
        color: #3e3d3d;
        border-bottom: 1px solid rgba(255,255,255,.3);
        padding-bottom: 10px;
        margin-bottom: 20px;
        justify-content: space-between;

        a {
            float: right;
            padding: 3px 10px 3px 10px;
            border-radius: 25px;
            background:  #407BFF;
            border: 2px solid #407BFF;
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;

            cursor: cursor-pointer;
            
            svg {
                margin-right: 5px;
            }

            &:hover {
                background: transparent;
                color: #407BFF;
                transition: 0.3s;
            }
        }
    }

    form {
        width: 100%;
        background: rgba(236, 236, 236,.8);
        padding: 10px;
        border-radius: 10px;

        label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            color: #407BFF;
        }

        input {
            width: 100%;
            background: transparent;
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            font-size: 16px;
            color: #515354;
            transition: 0.3s;
        }

        .multi-select {
            color: #515354;
            margin-bottom: 20px;
        }
    }

    span {
        width: 100%;
        text-align: center;
        border-top: 1px solid #e1e1e1;
        padding-top: 16px;

        a {
            font-size: 16px;
            transition: 0.3s;
            color: #3e3d3d;

            strong {
                color: #407BFF;
            }

            &:hover {
                opacity: .7;
                transition: 0.3s;
            }
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    box-shadow: 2px 2px 16px -9px black;

    thead tr td {
        background: #407bff;
        padding: 10px;
        color: #eeeeee;
        font-size: 15px;
        
        &:first-child {
            border-radius: 5px 0px 0px 0px;
        }

        &:last-child {
            border-radius: 0px 5px 0px 0px;
        }
    }

    tbody tr td {
        font-size: 15px;
        padding: 10px;
        padding-top: 7px;
        color: #3e3d3d;
        cursor: pointer;
        background-color: rgba(236,236,236,.7);
    }

    tbody tr:hover {
        td {
            background: rgba(236, 236, 236,.5);
        }
    }
`;

export const ButtonDelete = styled.button`
    float: right;
    padding: 7px 15px 7px 15px;
    border-radius: 25px;
    background:  #f4786e;
    border: 2px solid #f4786e;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: cursor-pointer;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
        margin-right: 5px;
    }

    &:hover {
        background: transparent;
        color: #f4786e;
        transition: 0.3s;
    }
`;

export const ButtonSave = styled.button`
    float: right;
    padding: 7px 15px 7px 15px;
    border-radius: 25px;
    background: #3aa281;
    border: 2px solid #3aa281;
    color: #ffffff;
    font-size: 14px;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-right: 5px;
    }

    &:hover {
        transition: 0.3s;
        background: transparent;
        color: #3aa281;
    }
`;

export const Pagination = styled.div`
    width: 100%;
    height: 30px;
    color: #407BFF;
    margin-top: 15px;

    ul {
        display: inline-flex;
        width: 100%;
        justify-content: center;

        li {
            padding: 5px;
            cursor: pointer;
            padding-right: 7px;
            padding-left: 7px;
            font-weight: bold;
            font-size: 16px;
            transition: 0.2s;

            svg {
                margin-left: 5px;
            }

            &:hover {
                opacity: .7;
                transition: 0.2s;
            }
        }

        .disabledPrevious {
            color: #407BFF;
            cursor: not-allowed;
            opacity: .4;

            &:hover {
               opacity: .4 !important;    
            }
        }
    }
`;

export const Totalizer = styled.span`
    margin-top: 5px;
    color: #c7c7c7;

    strong {
        font-size: 16px;
    }
`;


export const Search = styled.div`
    text-align: left;
    margin-bottom: 12px;
    box-shadow: 2px 2px 16px -9px black;

    input {
        width: 100%;
        background: #407bff;
        border: 2px solid #407bff;
        border-radius: 1px 10px 1px 10px;
        padding: 5px 10px 5px 10px;
        color: #FFFF;
        font-size: 16px;

        ::placeholder {
            color: #a9c3ff;
        }
    }

    button {
        float: right;
        margin-top: 7px;
        background: none;
        border: none;
        border-radius: 3px;
        color: #faa61a;
        font-size: 16px;
        font-weight: bold;
        justify-content: center;
        display: flex;
        align-items: center;

        svg {
            margin-left: 10px;
        }
    }
`;