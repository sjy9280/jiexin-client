/**
 * author: Joanna
 * email: sjy9280@163.com
 * date: 2023/11/23 15:40:40
 **/
import axios from "axios";
import {message as msgApi} from "antd";

const instance = axios.create({
    baseURL: 'http://localhost:3500',
    timeout: 10000,     //超时设置
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})


// 返回拦截器
instance.interceptors.response.use((res) => {
    const {status} = res
    if (status === 200) {
        const {data} = res
        const {statusCode, message, info} = data
        switch (statusCode) {
            case 200:
                msgApi.success(message);
                return info;
            case 500:
                msgApi.error(message);
                break;
        }
    }
}, (error) => {
    console.log('error')
    const {response} = error
    console.log(response)
})

export default instance


