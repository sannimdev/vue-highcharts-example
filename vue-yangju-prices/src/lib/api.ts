import { data } from './data';
import { Prices } from '@/types';

// axios 라이브러리 흉내내기
const axios = {
    async get(data: any) {
        await setTimeout(() => data, 100);
        return data;
    }
};

export const getData = (): Promise<Prices[]> => {
    return axios.get(data);
};
