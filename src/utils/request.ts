import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Result } from "@/api/interface"

const axiosInstance = axios.create({
    baseURL: '/apis',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
});

// 请求拦截
axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = 'Bearer Token';
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// 响应拦截
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const { data } = response;

        if (data.code && data.data !== 0) {
            return Promise.reject(data)
        }

        return data
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)


class APIClient {

    get<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'GET' });
    }

    post<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'POST' });
    }

    put<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'PUT' });
    }

    delete<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.request({ ...config, method: 'DELETE' });
    }

    request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            axiosInstance.request<any, AxiosResponse<Result>>(config)
                .then((res: AxiosResponse<Result>) => {
                    resolve(res as unknown as Promise<T>)
                })
                .catch((error: Error | AxiosError) => {
                    reject(error)
                })
        })
    }

}

export default new APIClient()