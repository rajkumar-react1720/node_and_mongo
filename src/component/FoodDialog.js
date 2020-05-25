import React from 'react';
import styled from 'styled-components';
import { FoodLabelComponent } from './FoodGridComponent';
import { pizzaRed } from '../styles/colors';
import { TitleStyle } from '../styles/title';
import { formatPrice } from '../shared/constants';
import { QuantityInputComponent } from './QuantityInputComponent';
import { useQuantity } from './hooks/useQuantity';
import { useToppings } from './hooks/useToppings';
import { ToppingsComponent } from './ToppingsComponent';


const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index:5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%
    width: 100%
    top: 0px;
    background-color: black;
    opacity:0.7;
    z-index:4;
`;
const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }) => `background-image: url(${img});`};
    background-position: center;
    background-size: cover;

`;

const DialogBannerName = styled(FoodLabelComponent)`
    top: 100px;
    font-size: 30px;
    padding: 5px, 40px;
`;

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
    padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
    height: 60px;
    box-shadow: 0px -2px 20px 0px grey;
    display: flex;
    justify-content: center;
`;

export const DialogButton = styled(TitleStyle)`
    margin: 10px;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${pizzaRed};
`;
const pricePerTopping = 0.5;

export function getPrice(order) {
    return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
}
export function hasToppings(food) {
    return food.section === 'Pizza';
}

export function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings)

    function closeDialog() {
        setOpenFood();
    }

    // if (!openFood) return null;
    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings
    }
    function addToOrder() {
        setOrders([...orders, order]);
        closeDialog();
    }

    console.log('openFood *********', getPrice(order));
    return (
        openFood ? (
            <>
                <Dialog>
                    <DialogBanner img={openFood.img}>
                        <DialogBannerName>{openFood.name}</DialogBannerName>
                    </DialogBanner>
                    <DialogContent>
                        <QuantityInputComponent quantity={quantity} />
                        {hasToppings(openFood) ?<>
                            <h3>Would you like to have toppings</h3>
                            <ToppingsComponent {...toppings}/>
                            </> : null
                        }
                    </DialogContent>
                    <DialogFooter>
                        <DialogButton onClick={addToOrder}>Add to order: {formatPrice(getPrice(order))}</DialogButton>
                    </DialogFooter>
                </Dialog>
                <DialogShadow onClick={closeDialog} />
            </>) : null
    )
}

export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />
}