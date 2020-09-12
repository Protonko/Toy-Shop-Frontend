import {FetchWrapper} from 'fw-fetch-wrapper';
import {API_URL} from '../static';
import {IBaseConfig} from '../interfaces';

const headers = new Headers();

headers.append('Content-Type', 'application/json');

const baseConfig: IBaseConfig = {
  baseURL: API_URL,
  headers,
}

export const Api: FetchWrapper = new FetchWrapper(baseConfig);
