import { useState } from 'react';


export function useToppings(defaultToppings){
    const [toppings, setToppings] = useState(defaultToppings || getdefaultToppings());
   
    function checkTopping(index){
        const newTopping = [...toppings];
        newTopping[index].checked = !newTopping[index].checked;
        setToppings(newTopping)
    }

    return {
        checkTopping,
        toppings
    }
}
 const toppingsList = [
    'Extra Cheese',
    'Pepporoni',
    'Sausage',
    'Onions',
    'Peppers',
    'Pineapple',
    'Ham',
    'Spinach',
    'Artichokes',
    'Mushrooms',
    'Anchovies'
 ];


function getdefaultToppings() {
    return toppingsList.map(topping =>({
        name: topping,
        checked: false
    }));
};