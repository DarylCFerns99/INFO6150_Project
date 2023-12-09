import { MDBSpinner } from "mdb-react-ui-kit";
const crypto = require('crypto-js')

export const formatMenuItems = (menuItem) => {
    let result = Object.groupBy(menuItem, ({ category }) => category);
    // console.log("formated menu",result);
    return result;
}
export const encryptData = (data)=> crypto.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET_KEY).toString()
export const decryptData = (data)=> {
    if(data !== ""){
        return JSON.parse(crypto.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY).toString(crypto.enc.Utf8))
    }else{
        return ""
    }
}
export const getFromLocalStorage = (field)=>{
    let value = localStorage.getItem(field)
    
    if(value === undefined || value === null){
        return ""
    }
    return decryptData(value)
}
export const setLocalStorage = (field, value)=>{
    if(value === undefined || value === null){
        return ""
    }
    localStorage.setItem(field, encryptData(value))
    return true
}
export const setSessionStorage = (field, value) => {
    if(value === undefined || value === null){
        return ""
    }
    sessionStorage.setItem(field, encryptData(value))
    return true
}
export const getFromSessionStorage = (field) => {
    let value = sessionStorage.getItem(field)
    if(value === undefined || value === null){
        return ""
    }
    return decryptData(value)
}
export const capitalizeFirstLetter = (str) => str.split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()).join(' ')
export const xorValidation = (ele1, ele2) => (ele1 ? 1 : 0) ^ (ele2 ? 1 : 0)
export const checkObjectEvery = (obj, value) => obj.every(ele => ele === value)
export const checkObjectSome = (obj, value) => obj.some(ele => ele === value)
export const checkIfLoading = (loading, message="Undefined", size="sm") => {
    if (loading) {
        return (
            <MDBSpinner role='status' size={size}>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        )
    }
    return message
}
export const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
export const getErrorMessage = (err) => {
    return err?.response?.data ? err.response.data : err
}
