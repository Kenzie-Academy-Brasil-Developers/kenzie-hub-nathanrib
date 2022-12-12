import styled from "styled-components";

export const StyleTechsSection = styled.section`
display: flex;
flex-direction: column;
width: 100%;
padding: 10px 280px;
gap: 28px;
color: #868E96;
align-items: center;
border-radius: 4px;

>div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
> p{
   color: #F8F9FA;
   font-weight: 600;
}
> button{
    background-color: #212529;
    color: #F8F9FA;
    font-size: 16px;
    font-weight: 600;
    padding: 6px 11px;
    border-radius: 4px;

}
}

> ul  {
    background-color:  #212529;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    padding: 15px;
    border-radius: 4px;
} 
`