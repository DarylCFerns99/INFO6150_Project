import * as actions from "./actionTypes"

export const handleAddUserData = (payload) => ({
    type: actions.ADD_USER_DATA,
    payload
})

export const handleLogout = () => ({
    type: actions.LOGOUT
})

export const handleSelectRestaurant = (restaurant) => ({
    type: actions.SELECT_RESTAUARANT,
    payload : restaurant
})