import styled from "styled-components";

export const StyleDashboardPage = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
gap: 35px;
color: #868E96;
align-items: center;


> header{
    width: 100%;
    padding: 10px 280px;
    margin: 25px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #868E96;
}
> header > h2{ 
    color: #FF577F
}

header > button{
    background-color: #212529;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
}

> section {
    width: 100%;
    padding: 10px 280px;
    margin: 25px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #868E96;
}

 section > h3 {
    color: #fff;
 }

 section > p {
    color: #868E96;
    font-size: 12px;
    font-weight: 600;
 }
`