import { getErrorMessage } from '../../Common/common'
import restaurantAxios from '../../service/restaurantService'

export const addMenuItem = (data) => {
    return new Promise(async (resolve, reject) => {
        await restaurantAxios.post("/addMenuItem", data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(getErrorMessage(err))
            })
    })
}

export const getOrders = (data={}) => {
    return new Promise(async(resolve, reject) => {
        await restaurantAxios.post("/getOrders", data)
        .then(res => {
            resolve(res.data.data)
        })
        .catch(err => {
            reject(getErrorMessage(err))
        })
})
}

export const getReviews = (data={}) => {
    return new Promise(async(resolve, reject) => {
        await restaurantAxios.post("/getReviews", data)
        .then(res => {
            resolve(res.data.data)
        })
        .catch(err => {
            reject(getErrorMessage(err))
        })
})
}