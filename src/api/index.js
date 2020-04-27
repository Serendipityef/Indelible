import axios from '../utils/http'
import {baseUrl,login,selectTbItemAllByPage,selectCategory} from './base'

const api = {
    //登录
    postLogin(params){
        return axios.post(baseUrl+login,params)
    },
    //product页面列表数据
    productList(page){
        return axios.get(baseUrl+selectTbItemAllByPage,{
            params:{
                page
            }
        })
    },
    //类目选择
    getSelectCategory(id){
        return axios.get(baseUrl+selectCategory,{
            params:{
                id
            }
        })
    }
}

export default api
