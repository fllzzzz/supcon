import type {
	InternalAxiosRequestConfig,
	AxiosResponse
} from 'axios';

export const reqHijackSuccess = (config :InternalAxiosRequestConfig<any>) 
:InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
	return config;
};

export const reqHijackFailed = (error :any) 
:void => {
	console.log('requestFailed', error);
};

export const resHijackSuccess = (response :AxiosResponse<any>) 
:AxiosResponse<any> | Promise<AxiosResponse<any>> => {
	return response;
};

export const resHijackFailed = (error :any) 
:void => {
	console.log('responseFailed', error);
};