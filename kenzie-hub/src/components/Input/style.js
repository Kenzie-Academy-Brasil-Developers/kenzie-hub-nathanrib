import styled from "styled-components";

export const StyleFieldset = styled.fieldset`
border: none;
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;


> input {
    width: 100%;
    padding: 8px;
    border: 1.5px solid #fff;
    background-color: #343B41;
    color: #fff;
    border-radius: 4px;
}
`