import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
`;

export const ButtonAdd = styled.button`
    float: right;
    padding: 7px 15px 7px 15px;
    border-radius: 25px;
    background:  ${props => props.status === "success" ? "#3aa281" : "#1787c8"};
    border: ${props => props.status === "success" ? "2px solid #3aa281" : "2px solid #1787c8"};
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
        color: ${props => props.status === "success" ? "#FFFF" : "#1787c8"};
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
            background:  #1787c8;
            border: 2px solid #1787c8;
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
                color: #1787c8;
                transition: 0.3s;
            }
        }
    }

    form {
        width: 100%;

        label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            color: #1787c8;
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
                color: #1787c8;
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

    thead tr td {
        background: #bdbdbd;
        padding: 10px;
        color: #1f232b;
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
    }

    tbody tr:hover {
        td {
            background: #ececec;
        }
    }
`;

export const ButtonDelete = styled.button`
    float: right;
    padding: 7px 15px 7px 15px;
    border-radius: 25px;
    background:  #f4786e;
    border: 2px solid #f4786e;
    color: #1f232b;
    font-size: 14px;
    font-weight: bold;
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
    color: #1f232b;
    font-size: 14px;
    font-weight: bold;
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
    color: #1787c8;
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
            color: #1787c8;
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