import { SeodaemunHousing } from '@/types';

export const region = '서대문구';
export const unit = '가구';

export const keyLabel: { [key: string]: string } = {
    year: '연도',
    total: '전체',
    owning: '자가',
    charter: '전세',
    monthly: '보증부월세',
    free: '무상',
    unsecuredMonthly: '무보증월세',
    collectivelyMonthly: '사글세' // 한꺼번에 일정 단위를 지급하고 매월 공제하는 방식
};

export const data: SeodaemunHousing[] = [
    // {} 원소 한 개당 하나의 원형 차트가 나온다
    // 👻 기존 프로젝트에서 진행한 막대그래프, 꺾은선그래프와 차이가 있다는 점에 유의한다.
    {
        year: 1985,
        total: 96835,
        owning: 42194,
        charter: 34607,
        monthly: 17311,
        free: 2723
    },
    {
        year: 1990,
        total: 103042,
        owning: 40635,
        charter: 42057,
        monthly: 9218,
        free: 2343,
        unsecuredMonthly: 8789
    },
    {
        year: 1995,
        total: 104453,
        owning: 43907,
        charter: 48110,
        monthly: 9071,
        free: 1777,
        unsecuredMonthly: 702,
        collectivelyMonthly: 886
    },
    {
        year: 2000,
        total: 110057,
        owning: 47251,
        charter: 46863,
        monthly: 12141,
        free: 1712,
        unsecuredMonthly: 1366,
        collectivelyMonthly: 724
    },
    {
        year: 2005,
        total: 117866,
        owning: 52775,
        charter: 40210,
        monthly: 19737,
        free: 2318,
        unsecuredMonthly: 2145,
        collectivelyMonthly: 681
    },
    {
        year: 2010,
        total: 112701,
        owning: 48184,
        charter: 36620,
        monthly: 22988,
        free: 1754,
        unsecuredMonthly: 2329,
        collectivelyMonthly: 826
    }
];
