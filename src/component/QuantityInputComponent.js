import React from 'react';
import styled from 'styled-components';
import { TitleStyle } from '../styles/title';
import { pizzaRed } from '../styles/colors';


const QuantityINputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(TitleStyle)`
  display: flex;
  height: 24px;

`;

const IncrementButton = styled(TitleStyle)`
width: 23px;
color: ${pizzaRed};
font-size: 20px;
text-align: center;
cursor: pointer;
padding: -12px;
line-height: 23px;
margin: 0px 10px;
border: 1px solid ${pizzaRed};
${({disabled})=> disabled && `opacity: 0.5; pointer-events: none;`}
&:hover {
    background-color: #ffe3e3;
} 
`;
export function QuantityInputComponent({ quantity }) {
    return (
        <IncrementContainer>
            <div>Quantity</div>
            <IncrementButton onClick={()=>{quantity.setValue(quantity.value -1) }}disabled={quantity.value === 1 }> - </IncrementButton>
            <QuantityINputStyled {...quantity} />
            <IncrementButton onClick={()=>{quantity.setValue(quantity.value +1) }}> + </IncrementButton>
        </IncrementContainer>
    )
}