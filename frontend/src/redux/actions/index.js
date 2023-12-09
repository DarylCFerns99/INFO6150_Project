import * as actions from "./actionTypes"

export const handleAddUserData = (payload) => ({
    type: actions.ADD_USER_DATA,
    payload
})

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