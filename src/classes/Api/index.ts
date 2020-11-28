import {FetchWrapper} from 'fw-fetch-wrapper';
import {API_URL} from 'static';
import {IBaseConfig} from 'models/interfaces';

const headers = new Headers();

headers.append('Content-Type', 'application/json');

const baseConfig: IBaseConfig = {
  baseURL: API_URL,
  headers,
}

const Api: FetchWrapper = new FetchWrapper(baseConfig);

export default Api;
