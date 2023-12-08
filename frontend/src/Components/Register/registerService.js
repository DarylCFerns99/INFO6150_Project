import userAxios from "../../service/userService"

export const handleRegister = (data) => {
    return new Promise(async (resolve, reject) => {
        await userAxios.post("/createUser", data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err?.response?.data ? err.response.data : err)
            })
    })
}