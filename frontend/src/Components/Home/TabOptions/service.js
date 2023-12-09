import restaurantAxios from "../../../service/restaurantService"

export const createComment = (data) =>{
    return new Promise( async (resolve, reject) => {
        await restaurantAxios.post("/createReview", data)
        .then(res => {
            resolve(res.data.data)
        }).catch (err => {
            reject(err)})
    })
}