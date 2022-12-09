import styled from "styled-components";

export const StyleRegisterPage = styled.div`
margin: 20px;
margin-top: 60px;
height: 100vh;
display: flex;
flex-direction: column;
gap: 35px;
color: #868E96;
justify-content: center;
align-items: center;

> div {
    width: 30%;
    display: flex;
    justify-content: space-between;
    max-width: 350px;
    min-width: 300px;
    align-items: center;
}

div > h2{ 
    color: #FF577F
}

div > a{
text-decoration: none;
background-color: #212529;
color: #F8F9FA;
padding: 8px;
border-radius: 4px;
}
`