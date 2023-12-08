const menuItem = [
    {category:"chinese" ,id: 1, title:"soup", price: "5", description: "item desc", image: "img url" },
    {category:"indian" ,id: 2, title:"butter chicken", price: "7", description: "item desc", image: "img url" },
    {category:"chinese" ,id: 3, title:"fried rice", price: "6", description: "item desc", image: "img url" },
    {category:"italian" ,id: 4, title:"spaghetti noodles", price: "8", description: "item desc", image: "img url" },
]

const formatMenuItems = (menuItem) => {
    let result = Object.groupBy(menuItem, ({ category }) => category);
    return result;
}

export const fetchMenu = (resto_id = 1) => {
    return new Promise( async (resolve, reject) => {
        resolve({ resto_id: formatMenuItems(menuItem)});
    })
};