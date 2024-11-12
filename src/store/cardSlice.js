import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import bag from '../assets/bag.png';
import crocBag from '../assets/crocBag.png';
import nikeAir from '../assets/nikeAir.png';
import nikeAir270 from '../assets/nikeAir270.png';
import nikeForce from '../assets/nikeAirForce.png';
import nikeMax from '../assets/NikeAirMax.png';
import nikeRunner from '../assets/nikeRunner.png';
import whiteBag from '../assets/whiteBag.png';

const initialState = [{
    id: nanoid(),
    img: nikeAir270,
    title: 'Nike Air Max 270 React',
    price: 299.43
}, 
{
    id: nanoid(),
    img: bag,
    title: 'Leather bag burgundy',
    price: 199.30
},
{
    id: nanoid(),
    img: whiteBag,
    title: 'Purse beige',
    price: 79.49
},
{
    id: nanoid(),
    img: nikeAir,
    title: 'Nike Air Max 30',
    price: 450.30
},
{
    id: nanoid(),
    img: nikeAir270,
    title: 'Nike Air More Up',
    price: 200.99
},
{
    id: nanoid(),
    img: nikeRunner,
    title: 'Nike Air Runner',
    price: 109.99
},
{
    id: nanoid(),
    img: nikeMax,
    title: 'Nike Monarch',
    price: 50
},
{
    id: nanoid(),
    img: nikeForce,
    title: 'Nike Air Force',
    price: 189
},
{
    id: nanoid(),
    img: crocBag,
    title: 'Crocodile bag',
    price: 999.99
}]

const cardSlice = createSlice({
    name: "cards",
    initialState,
})

export default cardSlice.reducer;