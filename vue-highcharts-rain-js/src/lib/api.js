import rainData from './rainData';

export const regions = {
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
    checkedList;
    constructor() {
        const regionArr = this.getRegions();
        this.checkedList = regionArr.map(region => ({
            id: region,
            name: regions[region],
            checked: false
        }));
    }
    getRegions() {
        return Reflect.ownKeys(regions);
    }
    getRegionsName() {
        return this.getRegions().map(region => regions[region]);
    }
    getCheckedList() {
        return this.checkedList.concat();
    }
}

const axios = {
    // 연습용 더미 라이브러리
    async get(arg) {
        await setTimeout(
            () => console.log('axios 흉내내기.. 진짜 데이터를 받아오고 있습니다.', arg),
            0
        );
        return arg;
    }
};

export const getRainData = () => {
    return axios.get(rainData);
};
