import styled from "styled-components";

export const StyleFormLogin = styled.form`
background-color: #212529;
padding: 42px 22px;
display: flex;
flex-direction: column;
gap: 15px;
color: #868E96;
align-items: center;
width: 30%;
max-width: 350px;
min-width: 300px;
border-radius: 4px;

> h3 {
    color: #F8F9FA;
}
> p {
margin: 10px;
font-size: 12px;
font-weight: 600;
}

> a{
display: flex;
text-decoration: none;
background-color: #868E96;
width: 100%; 
color: #F8F9FA;
padding: 8px;
border-radius: 4px;
justify-content: center;
}

`