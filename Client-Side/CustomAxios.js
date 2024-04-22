import axios from "axios";

const customAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

customAxios.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

customAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) =>{
        try {
            const { status} = error;
            if (status === 401) {
                sessionStorage.removeItem('token');
            }
        }catch (err){
            console.log(err);
        }
        throw error
    }
);
export default customAxios;