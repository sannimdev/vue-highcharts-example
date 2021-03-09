import { SeodaemunHousing } from '@/types';
import { data } from './data';

// axios lib 흉내...
const axios = {
    async get(data: any) {
        await setTimeout(() => console.log('axios 라이브러리 호출됨...'), 0);
        return data;
    }
};

export const getData = async (): Promise<SeodaemunHousing[]> => {
    return axios.get(data);
};
