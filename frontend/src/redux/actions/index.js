import * as actions from "./actionTypes"

// Sample redux action functionality
export const handleAddMenuData = (payload) => ({
    type: actions.ADD_MENU_DATA,
    payload
})

export const handleAddItemToCart = (payload) => ({
    type: actions.ADD_ITEM_CART,
    payload
})

export const handleDelItemFromCart = (payload) => ({
    type: actions.DEl_ITEM_CART,
    payload
})

export const handleRemoveCartItem = (payload) => ({
    type: actions.REMOVE_ITEM_CART,
    payload
})
