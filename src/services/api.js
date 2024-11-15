import axios from "axios";

export const getDataItems = async () => {
    const {data} = await axios.get('https://67359a305995834c8a9355cb.mockapi.io/products')

    return data
}