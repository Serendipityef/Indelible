import axios from '../utils/http'
import {
    baseUrl,
    login,
    selectTbItemAllByPage,
    selectCategory,
    insertTbItem,
    deleteItemById,
    preUpdateItem,
    updateTbItem,
    selectItemParamAll,
    deleteItemParamById
} 
from './base'

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
    },
    //添加商品
    getInsertTbItem(url){
        return axios.get(baseUrl+insertTbItem,{
            params:{
                ...url
            }
        })
    },
    getDeleteItemById(id){
        return axios.get(baseUrl+deleteItemById,{
            params:{id}
        })
    },
    //预更新
    getPreUpdateItem(id){
        return axios.get(baseUrl+preUpdateItem,{
            params:{id}
        })
    },
    //更新
    getUpdateTbItem(params){
        return axios.get(baseUrl+updateTbItem,{
            params
        })
    },
    //规格参数
    getSelectItemParamAll(params){
        return axios.get(baseUrl+selectItemParamAll,{params})
    },
    //删除规格参数
    getDeleteItemParamById(params){
        return axios.get(baseUrl+deleteItemParamById,{params})
    }
}

export default api
