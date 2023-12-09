import { getErrorMessage } from "../../Common/common"
import userAxios from "../../service/userService"

export const handleRegister = (data) => {
    return new Promise(async (resolve, reject) => {
        let tempData = {...data};
        if(!data.isUser){
            tempData['restaurant_id'] = "ChIJNa46L4x544kRdP4vvfKzGUM";
        }
        await userAxios.post("/createUser", tempData)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(getErrorMessage(err))
            })
    })
}