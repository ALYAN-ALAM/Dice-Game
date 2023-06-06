import  styled  from "styled-components"

export const Button = styled.button`
    background-color:black;
    color:white;
    width:120px;
    padding: 10px 18px 10px 18px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button) `
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
        background-color:black;
        color:white;
        border: 1px solid transparent;
    }

`;