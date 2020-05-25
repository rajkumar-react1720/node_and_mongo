import React from 'react';
import { FoodDialogContainer } from '../../src/component/FoodDialog';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { useQuantity } from '../../src/component/hooks/useQuantity';
import { useToppings } from '../../src/component/hooks/useToppings';



describe('Rendering App Component without crash', () => {
    let foodDialogContainer;
    foodDialogContainer = renderer.create( <FoodDialogContainer/>).toJSON()
    describe('RENDER FOOD CONTAINER', () => {
        // const quantity = useQuantity();
        // const toppings = useToppings();
        test('Render food container component and styles', () => {
            expect(foodDialogContainer).toMatchSnapshot();
        })
        
    })
})