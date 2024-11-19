import axios from "axios";

axios.defaults.baseURL = 'https://67359a305995834c8a9355cb.mockapi.io'

export const getDataItems = async () => {
    const {data} = await axios.get('/products')

    return data
}

export const getDataReviewsItems = async () => {
    const {data} = await axios.get('/reviews')

    return data;
}

export const postReviewItem = async (review) => {
    await axios.post('/reviews', review)
}


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const api = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://67359a305995834c8a9355cb.mockapi.io',
//   }),
//   reducerPath: 'api',
//     endpoints: (build) => ({
//         getDataItems: build.query({
//             query: () => '/products'
//         }),
//         getDataReviewsItems: build.query({
//             query: () => '/reviews'
//         })
//     })
// })

// export const { useGetDataItemsQuery, useGetDataReviewsItemsQuery } = api