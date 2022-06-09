import axios from 'axios'

// const API_URL = 'https://connexionelearn.free.beeceptor.com'
const API_URL = 'http://127.0.0.1:8000'

class AuthService{
    login(username,password){
        return axios
            .post(API_URL + '/api/login', {
                Username: username,
                password: password
            })
            // .then(response => {
            //     if(response.data.token) {
            //         localStorage.setItem('user', JSON.stringify(response.data))
            //     }
            //     return response.data
            // })
    }

    loginprof(username,password){
        return axios
            .post(API_URL + '/api/loginprof', {
                Username: username,
                password: password
            })
            // .then(response => {
            //     if(response.data.token) {
            //         localStorage.setItem('user', JSON.stringify(response.data))
            //     }
            //     return response.data
            // })
    }

    logout(){
        localStorage.removeItem('token')
        return axios.post(API_URL + '/api/logout')
    }

    logoutprof(){
        localStorage.removeItem('token2')
        return axios.post(API_URL + '/api/logoutprof')
    }

    register(first,last,mail,user,pass1) {
        return axios.post(API_URL + '/api/User', {
            Firstname:first,
            Lastname:last,
            Username: user,
            email: mail,
            password: pass1,
        })
    }
    
    update(first,last,mail,user,pass1) {
        return axios.post(API_URL + '/api/update', {
            Firstname:first,
            Lastname:last,
            Username: user,
            email: mail,
            password: pass1,
        })
    }
    
}

export default new AuthService()