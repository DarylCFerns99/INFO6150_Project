import { getErrorMessage } from "../../Common/common"
import userAxios from "../../service/userService"

export const handleRegister = (data) => {
    return new Promise(async (resolve, reject) => {
        await userAxios.post("/createUser", data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(getErrorMessage(err))
            })
    })
}