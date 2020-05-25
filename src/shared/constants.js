export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
const constants = {
    //fetchUserDetailsUri: 'http://localhost:7000/getDetails',
    //fetchUserDetailsUri: 'https://api.github.com/search/users?q=8989',
    fetchUserDetailsUri: 'http://localhost:7000/getUserDetails',
    fetchProductList: 'http://localhost:7000/getProductList',

    foodData: [
        {
            name: 'Cheese Pizza',
            img: '/img/cheese.jpg',
            section: 'Pizza',
            price: 1
        },
        {
            name: 'Pepperoni Pizza',
            img: '/img/pepperoni-pizza.jpg',
            section: 'Pizza',
            price: 1.5
        },
        {
            name: 'Veggi Pizza',
            img: '/img/veggi-pizza.jpg',
            section: 'Pizza',
            price: 1
        },
        {
            name: 'Chicken Burger',
            img: '/img/burger.jpg',
            section: 'Sandwich',
            price: 4
        },
        {
            name: 'Fries',
            img: '/img/fries.jpg',
            section: 'Sides',
            price: 2
        },
    ]


    // testResponse:[
    //     {
    //         sku: '423424243432',
    //         imageUrl: iPhoneXr_Red,
    //         brand: 'Apple',
    //         price: '$41.66/mo',
    //         model: 'iPhone® XR',
    //         contract: 'For 24 months, 0% APR',
    //         retailPrice: '$999.99'

    //     },
    //     {
    //         sku: '736927374749',
    //         imageUrl:lg_v50_black,
    //         brand: 'LG',
    //         price: '$35.66/mo',
    //         model: 'V50 ThinQ™ 5G',
    //         promotions: 'Buy one, get a Galaxy S10e on us. Or, get $750 off another w/Unlimited & new line',
    //         contract: 'For 24 months, 0% APR',
    //         retailPrice: '$700.99'
    //     },


    //     {
    //         sku: '987348348278',
    //         imageUrl: lg_black_alpha,
    //         brand: 'LG',
    //         price: '$41.66/mo',
    //         model: 'Alpha',
    //         contract: 'For 24 months, 0% APR',
    //         retailPrice: '$600.99'
    //     },
    //     {
    //         sku: '987430924774',
    //         imageUrl: Motorola_Moto_G,
    //         brand: 'Motorola',
    //         price: '$41.66/mo',
    //         model: 'Moto-G7',
    //         contract: 'For 24 months, 0% APR',
    //         retailPrice: '$800.99'
    //     },
    //     {
    //         sku: '656548733987',
    //         imageUrl: red_hydrogen_black,
    //         brand: 'RED',
    //         price: '$41.66/mo',
    //         model: 'Hydrogen One',
    //         contract: 'For 24 months, 0% APR',
    //         retailPrice: ''
    //     },
    //     {
    //         sku: '316464864846',
    //         imageUrl: SamsungGalaxy_S10PLUS_Blue,
    //         brand: 'Samsung',
    //         price: '$41.66/mo',
    //         model: 'Galaxy S10 5G',
    //         contract: 'For 24 months, 0% APR',
    //         retailPrice: '$850.99'
    //     }
    // ],
}

export const foods = constants.foodData.reduce((res, food) => {
    if(!res[food.section]){
       res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {})
export default constants;