import axios from '../utils/http'
import {baseUrl,login} from './base'

const api = {
    postLogin(params){
        return axios.post(baseUrl+login,params)
    }
}

export default api
