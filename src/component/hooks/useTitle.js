import { useEffect } from 'react';


export function useTitle(openFood, orders){
    console.log('(********** openfood', openFood)
  useEffect(()=>{
    if(openFood.name !== undefined) {
        document.title = openFood.name;
    } else {
        document.title = 'choose your meal'
    }
  });
}