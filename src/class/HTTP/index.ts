import { Result } from '@/types';
import * as hijack from './interceptors';

import axios from 'axios';
import type {
	AxiosInstance,
	AxiosPromise,
	AxiosRequestConfig
} from 'axios';

export default class HTTP {
	instance :AxiosInstance

	constructor(config :AxiosRequestConfig){
		this.instance = axios.create(config);
		this.instance.interceptors.request.use(
			hijack.reqHijackSuccess,
			hijack.reqHijackFailed
		);
		this.instance.interceptors.response.use(
			hijack.resHijackSuccess,
			hijack.resHijackFailed
		);
	}

	public get<T = any>
	(
		url :string,
		params? :any,
	) :AxiosPromise<Result<T>>
	{
		return this.instance({
			method: 'get',
			url,
			params
		});
	}

	public post<T = any>
	(
		url :string,
		data? :any,
	) :AxiosPromise<Result<T>>
	{
		return this.instance({
			method: 'post',
			url,
			data,
			headers: {
				'Content-Type':'application/x-www-form-urlencoded'
			}
		});
	}
}