import axios from 'axios'

let host = `${process.env.REACT_APP_API_URL || ""}user`
const userAxios = axios.create({baseURL:host});

// Add a request interceptor
userAxios.interceptors.request.use(
    async config => {
        config.headers['Access-Control-Allow-Origin'] = "*";
        if(config.headers['Content-Type'] !== 'multipart/form-data')
            config.headers['Content-Type'] = 'application/json'
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

export default userAxios;