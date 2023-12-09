import restaurantAxios from "../../../service/restaurantService"

export const editComment = (data) => {
    return new Promise(async (resolve, reject) => {
        await restaurantAxios.post("/editReview", data)
        .then(res => resolve(res.data.data))
        .catch(err => reject(err));
    })
}