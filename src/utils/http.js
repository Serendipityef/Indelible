<<<<<<< HEAD
import axios from 'axios'
import qs from 'querystring'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // console.log(config)
    //如果是post请求 配置请求头，并处理数据格式
    if(config.method.toLowerCase() == 'post'){
        config.headers={
            "content-type":"application/x-www-form-urlencoded"
        }
        if(config.data && typeof config.data == 'object'){
            config.data = qs.stringify(config.data)
            return config
        }
    }
    return config
    }  
);

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // console.log(response);
    //如果数据请求成功 直接返回data数据 不包含response这一层了
    if(response.status == 200){
        return response.data
    }else{
        return response
    }
});

=======
import axios from 'axios'
import qs from 'querystring'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // console.log(config)
    //如果是post请求 配置请求头，并处理数据格式
    if(config.method.toLowerCase() == 'post'){
        config.headers={
            "content-type":"application/x-www-form-urlencoded"
        }
        if(config.data && typeof config.data == 'object'){
            config.data = qs.stringify(config.data)
            return config
        }
    }
    return config
    }  
);

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // console.log(response);
    //如果数据请求成功 直接返回data数据 不包含response这一层了
    if(response.status == 200){
        return response.data
    }else{
        return response
    }
});

>>>>>>> 87822c509980302f81671397ac6e0c6d4685f535
export default axios;