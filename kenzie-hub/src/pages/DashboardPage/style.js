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
    margin-top: 20px;
    margin-bottom: -12px;
    display: flex;
    justify-content: space-between;
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

> section:first-of-type {
    width: 100%;
    padding: 65px 280px;
    display: flex;
    justify-content: space-between;
    border-top: 0.2px solid #868E96;
    border-bottom: 0.2px solid #868E96;
}

 section:first-of-type > h3 {
    color: #fff;
 }

 section:first-of-type > p {
    color: #868E96;
    font-size: 12px;
    font-weight: 600;
 }
`