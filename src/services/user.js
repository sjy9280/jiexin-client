import request from './httpClient'

export const register = async (user) => {
    return await request.post('/user/register', user)

}

export const login = async (user) => {
    return await request.post('/user/login', user)
}