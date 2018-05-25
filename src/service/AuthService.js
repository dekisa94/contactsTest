import axios from 'axios'
export default class AuthService
{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }
    login(email, password){
        return axios.post('login', {
            email, password
        }).then(response => {
            window.localStorage.setItem('loginToken', response.data.token)
            this.setAxiosDefaultAuthorizationHeader();
        })
    }
    setAxiosDefaultAuthorizationHeader(){
        const TOKEN = `Bearer ${window.localStorage.getItem('loginToken')}`
        axios.defaults.headers.common['Authorization'] = TOKEN
    }
    isAuthenticated(){
        return !!window.localStorage.getItem('loginToken')
    }
    logout(){
        return window.localStorage.removeItem('loginToken')
        delete axios.defaults.headers.common['Authorization']
    }
}
export const authService = new AuthService()