import api from '@/services/api'

export default {
    register (credentials) {
        return api().post('register', credentials)
    }
}

//creating a ui to use for authentication service

//function to access the above export
// authenticationService.register ({
//     email: 'tester@gmail.com',
//     password: '12345'
// })