import axios from 'axios';
import Cookies from 'js-cookie';


const CustomAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: true
});

// Interceptor to handle 401 Unauthorized responses
CustomAxios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            Cookies.remove('userToken');
            console.error('Session expired or unauthorized. Redirecting to login.');
            localStorage.removeItem('userToken');
            window.location = '/login';
        }
        return Promise.reject(error);
    }
);

export default CustomAxios;
