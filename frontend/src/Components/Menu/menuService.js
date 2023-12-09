import restaurantAxios from '../../service/restaurantService'

const formatMenuItems = (menuItem) => {
    let result = Object.groupBy(menuItem, ({ category }) => category);
    return result;
}

export const fetchMenu = (restaurant_id = undefined) => {
    return new Promise( async (resolve, reject) => {
        await restaurantAxios.post("/getMenu", {restaurant_id})
        .then(res => {
            resolve({ resto_id: formatMenuItems(res?.data?.data) })
        }).catch (err => {
            reject(err)})
    })
};