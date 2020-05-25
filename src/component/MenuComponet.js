import React from 'react';
import styled from 'styled-components';
import { foods, formatPrice } from '../shared/constants';
import { FoodGridComponent, FoodComponent, FoodLabelComponent } from './FoodGridComponent';

const MenuStyles = styled.div`
    margin 5px 400px 50px 20px;
    height: 200px;
`;

export default function MenuComponent({ setOpenFood }) {
    return (
        <MenuStyles>
            {Object.entries(foods).map(([sectionName, foods]) => (
                <>
                    <h1>{sectionName}</h1>
                    <FoodGridComponent>
                        {foods.map(food => (
                            <FoodComponent img={food.img} onClick={() => {
                                setOpenFood(food)
                            }}>
                                <FoodLabelComponent>
                                    <div> {food.name}</div>
                                    <div> {formatPrice(food.price)}</div>
                                </FoodLabelComponent>
                            </FoodComponent>
                        ))}
                    </FoodGridComponent>
                </>
            ))}
        </MenuStyles>
    )
}