import React from "react"
import styled from 'styled-components'

const Div = styled.div`
width: 500px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  
  &:hover {
    background: beige;
    color: red;
  }
`;
const Img = styled.img`
width: 500px;
height: 500px
`;

function AdviceCard({brand}){
    return(
        <Div>
        <Img src={brand.item_url}/>
           <p> Price: $ {brand.price}</p>
           <p>Brand Type: {brand.type}</p> 
        </Div>
    )
}

export default AdviceCard;