import restaurantAxios from "../../service/restaurantService"
import { getErrorMessage } from '../../Common/common'

export const createOrder = (data={}) => {
    return new Promise(async(resolve, reject) => {
        await restaurantAxios.post("/createOrder", data)
        .then(res => {
            resolve(res.data.data)
        })
        .catch(err => {
            reject(getErrorMessage(err))
        })
})
}