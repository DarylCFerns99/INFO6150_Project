import * as actions from "./actionTypes"

// Sample redux action functionality
// export const handleAddCurrrentWeatherData = (payload) => ({
//     type: actions.ADD_CURRENT_WEATHER_DATA,
//     payload
// })

// Without payload
export const handleAddCurrrentWeatherData = () => ({
    type: actions.ADD_CURRENT_WEATHER_DATA
})

// export const handleSelectAllRestaurants = (restaurants) => ({
//     type: actions.ADD_ALL_RESTAURANTS,
//     payload : restaurants
// })

export const handleSelectRestaurant = (restaurant) => ({
    type: actions.SELECT_RESTAUARANT,
    payload : restaurant
})

export const handleAddMenuItem = (payload) => ({
    type: actions.ADD_MENU_ITEM,
    payload
})

export const handleLogout = () => ({
    type: actions.LOGOUT
})

export const handleGetOrderDetails = (payload) =>({
    type: actions.GET_ORDER_DETAILS,
    payload
})

export const handleGetReviews = (payload) =>({
    type: actions.GET_REVIEWS,
    payload
})

export const handleDelRestoCart = (payload) => ({
    type: actions.DEL_RESTO_CART,
    payload
})