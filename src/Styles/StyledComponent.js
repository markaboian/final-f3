import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 90vh;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;

    ${({container}) => container === "login-form" && css`
        justify-content: center;
        align-items: center;
    `}

    ${({container}) => container === "contact-form" && css`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70vh;
    `}

`

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 7.5px;
    outline: none;
    border: 2px solid grey;
    border-radius: 10px;
`

export const Button = styled.button`
    margin-top: 15px;
    background-color: blue;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    border-radius: 4px;
    border: 1px solid blue;
    cursor: pointer;
`