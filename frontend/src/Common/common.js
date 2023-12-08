export const getFromLocalStorage = (key) => localStorage.getItem(key) || "";
export const setLocalStorage = (key, value) => localStorage.setItem(key, value);
export const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/;
export const capitalizeFirstLetter = (str) => str.split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()).join(' ')

export const formatMenuItems = (menuItem) => {
    let result = Object.groupBy(menuItem, ({ category }) => category);
    // console.log("formated menu",result);
    return result;
}