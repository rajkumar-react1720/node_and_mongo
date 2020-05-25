import React from 'react';
import styled from 'styled-components';
import { DialogContent, DialogFooter, DialogButton } from './FoodDialog';
import { formatPrice } from '../shared/constants';
import { getPrice } from './FoodDialog'

const OrderStyles = styled.div`
    position: fixed;
    right: 0px;
    top: 63px; 
    width: 340px;
    height: 93%;
    background-color: white;
    z-index: 10;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
    adding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;
const DetailItem = styled.div`
    color: gray;
    font-size: 10px;
`;
export function Order({ orders }) {
    console.log('Orders *********', orders);

    const subTotal = orders.reduce((total, order) => {
        return total + getPrice(order)
    }, 0)

    const tax = subTotal * 0.07;
    const total = subTotal + tax;
    return (
        <OrderStyles>
            {orders.length === 0 ?
                <OrderContent>Your Order's looks pretty empty </OrderContent> :
                <OrderContent>
                    <OrderContainer>Your Orders: </OrderContainer>
                    {orders.map(order => (
                        <OrderContainer>
                            <OrderItem>
                                <div>{order.quantity}</div>
                                <div>{order.name}</div>
                                <div></div>
                                <div>{formatPrice(getPrice(order))}</div>
                            </OrderItem>
                            <DetailItem>
                                {order.toppings
                                    .filter(t=>t.checked)
                                    .map(topping => topping.name)
                                    .join(', ')}
                            </DetailItem>
                        </OrderContainer>
                    ))}
                     <OrderContainer>
                        <OrderItem>
                            <div/>
                            <div>Sub -Total</div>
                            <div>{formatPrice(subTotal)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div/>
                            <div>Tax</div>
                            <div>{formatPrice(tax)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div/>
                            <div>Total</div>
                            <div>{formatPrice(total)}</div>
                        </OrderItem>
                     </OrderContainer>
                </OrderContent>
            }
            <DialogFooter>
                <DialogButton>Checkout</DialogButton>
            </DialogFooter>
        </OrderStyles>
    )
}