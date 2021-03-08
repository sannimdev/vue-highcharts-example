import { RainDatum, CheckedItem } from '@/types';
import rainData from './rainData';

export type Region = { [regionName: string]: string };
export const regions: Region = {
    hadong: '하동읍',
    hwagae: '화개면',
    akyang: '악양',
    jeokryang: '적량면',
    hoengcheon: '횡천면',
    gojeon: '고전면',
    geumnam: '금남면',
    geumseong: '금성면',
    jingyo: '진교면',
    yangbo: '양보면',
    bukcheon: '북천면',
    cheongam: '청암면',
    okjong: '옥종면'
};

export class HadongParser {
    checkedList: CheckedItem[];
    constructor() {
        const regionArr: string[] = this.getRegions();
        this.checkedList = regionArr.map(
            (region: string): CheckedItem => ({
                id: region,
                name: regions[region],
                checked: false
            })
        );
    }
    getRegions(): string[] {
        return Reflect.ownKeys(regions) as string[];
    }
    getRegionsName(): string[] {
        return this.getRegions().map((region: string) => regions[region]);
    }
    getCheckedList(): CheckedItem[] {
        return this.checkedList.concat();
    }
}

const axios = {
    // 연습용 더미 라이브러리
    async get(arg: any) {
        await setTimeout(() => console.log('axios 흉내내기.. 진짜 데이터를 받아오고 있습니다.', arg), 0);
        return arg;
    }
};

export const getRainData = (): Promise<RainDatum[]> => {
    return axios.get(rainData);
};
