import { Prices } from '@/types';

export const regionKeymap: { [key: string]: string } = {
    baekseok_eup: '백석읍',
    eunhyeon_myeon: '은현면',
    nam_myeon: '남면',
    gwangjeok_myeon: '광적면',
    jangheung_myeon: '장흥면',
    yangju1_dong: '양주1동',
    yangju2_dong: '양주2동',
    hoecheon1_dong: '회천1동',
    hoecheon2_dong: '회천2동',
    hoecheon3_dong: '회천3동',
    hoecheon4_dong: '회천4동'
};

export const keymap: { [key: string]: string } = {
    category: '구분',
    item: '품목',
    unit: '규격 및 단위',
    average_current: '평균(원)',
    average_previous: '전월평균(원)',
    rise_rate: '전월대비상승률(%)',
    ...regionKeymap
};

export const data: Prices[] = [
    {
        category: '외식비',
        item: '설렁탕',
        unit: '1그릇',
        average_current: 8167,
        average_previous: 8167,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 8000,
        jangheung_myeon: 10000,
        yangju1_dong: 8000,
        yangju2_dong: 7000,
        hoecheon2_dong: 8000,
        hoecheon4_dong: 8000
    },
    {
        category: '외식비',
        item: '냉면',
        unit: '물냉면, 1인분',
        average_current: 7455,
        average_previous: 6882,
        rise_rate: 8,
        // 여기서부터 지역
        baekseok_eup: 8000,
        eunhyeon_myeon: 6000,
        nam_myeon: 7000,
        gwangjeok_myeon: 8000,
        jangheung_myeon: 10000,
        yangju1_dong: 7000,
        yangju2_dong: 6000,
        hoecheon1_dong: 8000,
        hoecheon2_dong: 7000,
        hoecheon3_dong: 7000,
        hoecheon4_dong: 8000
    },
    {
        category: '외식비',
        item: '비빔밥',
        unit: '1그릇',
        average_current: 6350,
        average_previous: 5630,
        rise_rate: 13,
        // 여기서부터 지역
        baekseok_eup: 5000,
        eunhyeon_myeon: 5000,
        nam_myeon: 5000,
        gwangjeok_myeon: 6000,
        jangheung_myeon: 8000,
        yangju2_dong: 5500,
        hoecheon1_dong: 7000,
        hoecheon2_dong: 8000,
        hoecheon3_dong: 6000,
        hoecheon4_dong: 8000
    },
    {
        category: '외식비',
        item: '갈비탕',
        unit: '1그릇',
        average_current: 10182,
        average_previous: 10182,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 10000,
        eunhyeon_myeon: 9000,
        nam_myeon: 11000,
        gwangjeok_myeon: 10000,
        jangheung_myeon: 10000,
        yangju1_dong: 9000,
        yangju2_dong: 10000,
        hoecheon1_dong: 10000,
        hoecheon2_dong: 10000,
        hoecheon3_dong: 11000,
        hoecheon4_dong: 12000
    },
    {
        category: '외식비',
        item: '삼계탕',
        unit: '1그릇',
        average_current: 12909,
        average_previous: 12909,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 13000,
        eunhyeon_myeon: 13000,
        nam_myeon: 13000,
        gwangjeok_myeon: 13000,
        jangheung_myeon: 14000,
        yangju1_dong: 12000,
        yangju2_dong: 12000,
        hoecheon1_dong: 13000,
        hoecheon2_dong: 10000,
        hoecheon3_dong: 14000,
        hoecheon4_dong: 15000
    },
    {
        category: '외식비',
        item: '김치찌개백반',
        unit: '1인분',
        average_current: 6727,
        average_previous: 6727,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 6000,
        eunhyeon_myeon: 6000,
        nam_myeon: 7000,
        gwangjeok_myeon: 7000,
        jangheung_myeon: 8000,
        yangju1_dong: 6000,
        yangju2_dong: 8000,
        hoecheon1_dong: 6000,
        hoecheon2_dong: 7000,
        hoecheon3_dong: 6000,
        hoecheon4_dong: 7000
    },
    {
        category: '외식비',
        item: '된장찌개백반',
        unit: '1인분',
        average_current: 6091,
        average_previous: 6091,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 5000,
        eunhyeon_myeon: 5000,
        nam_myeon: 7000,
        gwangjeok_myeon: 6000,
        jangheung_myeon: 8000,
        yangju1_dong: 6000,
        yangju2_dong: 7000,
        hoecheon1_dong: 6000,
        hoecheon2_dong: 6000,
        hoecheon3_dong: 6000,
        hoecheon4_dong: 5000
    },
    {
        category: '외식비',
        item: '불고기',
        unit: '쇠고기 200g정도',
        average_current: 12848,
        average_previous: 12848,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 13000,
        eunhyeon_myeon: 15000,
        nam_myeon: 9333,
        gwangjeok_myeon: 10000,
        jangheung_myeon: 14000,
        yangju1_dong: 12000,
        yangju2_dong: 13000,
        hoecheon1_dong: 10000,
        hoecheon2_dong: 9000,
        hoecheon3_dong: 24000,
        hoecheon4_dong: 12000
    },
    {
        category: '외식비',
        item: '등심(외식)',
        unit: '쇠고기 200g정도',
        average_current: 31273,
        average_previous: 31273,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 36000,
        eunhyeon_myeon: 30000,
        nam_myeon: 30000,
        gwangjeok_myeon: 36000,
        jangheung_myeon: 38000,
        yangju1_dong: 35000,
        yangju2_dong: 29000,
        hoecheon1_dong: 30000,
        hoecheon2_dong: 22000,
        hoecheon3_dong: 33000,
        hoecheon4_dong: 25000
    },
    {
        category: '외식비',
        item: '돼지갈비(외식)',
        unit: '돼지갈비 200g정도',
        average_current: 12582,
        average_previous: 12582,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 15000,
        eunhyeon_myeon: 12000,
        nam_myeon: 10000,
        gwangjeok_myeon: 14000,
        jangheung_myeon: 12000,
        yangju1_dong: 13000,
        yangju2_dong: 12000,
        hoecheon1_dong: 12000,
        hoecheon2_dong: 14400,
        hoecheon3_dong: 12000,
        hoecheon4_dong: 12000
    },
    {
        category: '외식비',
        item: '삼겹살(외식)',
        unit: '돼지삼겹살 200g정도',
        average_current: 13182,
        average_previous: 13182,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 15000,
        eunhyeon_myeon: 12000,
        nam_myeon: 12000,
        gwangjeok_myeon: 14000,
        jangheung_myeon: 16000,
        yangju1_dong: 13000,
        yangju2_dong: 12000,
        hoecheon1_dong: 13000,
        hoecheon2_dong: 13000,
        hoecheon3_dong: 12000,
        hoecheon4_dong: 13000
    },
    {
        category: '외식비',
        item: '자장면',
        unit: '중화요리점 1인분',
        average_current: 5000,
        average_previous: 5000,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 5000,
        eunhyeon_myeon: 5000,
        nam_myeon: 5000,
        gwangjeok_myeon: 5000,
        jangheung_myeon: 6000,
        yangju1_dong: 5000,
        yangju2_dong: 5000,
        hoecheon1_dong: 4000,
        hoecheon2_dong: 5000,
        hoecheon3_dong: 5500,
        hoecheon4_dong: 4500
    },
    {
        category: '외식비',
        item: '짬뽕',
        unit: '중화요리점 1인분',
        average_current: 6409,
        average_previous: 6409,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 6000,
        eunhyeon_myeon: 6000,
        nam_myeon: 6000,
        gwangjeok_myeon: 6000,
        jangheung_myeon: 8000,
        yangju1_dong: 7000,
        yangju2_dong: 6000,
        hoecheon1_dong: 6500,
        hoecheon2_dong: 7000,
        hoecheon3_dong: 6000,
        hoecheon4_dong: 6000
    },
    {
        category: '외식비',
        item: '탕수육',
        unit: '일반탕수육(보통)',
        average_current: 17909,
        average_previous: 17909,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 18000,
        eunhyeon_myeon: 17000,
        nam_myeon: 17000,
        gwangjeok_myeon: 18000,
        jangheung_myeon: 21000,
        yangju1_dong: 20000,
        yangju2_dong: 17000,
        hoecheon1_dong: 15000,
        hoecheon2_dong: 22000,
        hoecheon3_dong: 15000,
        hoecheon4_dong: 17000
    },
    {
        category: '외식비',
        item: '돈가스',
        unit: '일반돈가스 1인분',
        average_current: 7556,
        average_previous: 7556,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 8000,
        eunhyeon_myeon: 7000,
        nam_myeon: 8000,
        jangheung_myeon: 8000,
        yangju2_dong: 8000,
        hoecheon1_dong: 8000,
        hoecheon2_dong: 7000,
        hoecheon3_dong: 6000,
        hoecheon4_dong: 8000
    },
    {
        category: '외식비',
        item: '생선초밥',
        unit: '1인분, 활어기준',
        average_current: 14200,
        average_previous: 14200,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 15000,
        yangju2_dong: 16000,
        hoecheon2_dong: 12000,
        hoecheon3_dong: 13000,
        hoecheon4_dong: 15000
    },
    {
        category: '외식비',
        item: '튀김닭',
        unit: '튀김통닭',
        average_current: 15800,
        average_previous: 15800,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 16000,
        eunhyeon_myeon: 15000,
        nam_myeon: 18000,
        gwangjeok_myeon: 16000,
        jangheung_myeon: 19000,
        yangju2_dong: 16000,
        hoecheon1_dong: 15000,
        hoecheon2_dong: 10000,
        hoecheon3_dong: 17000,
        hoecheon4_dong: 16000
    },
    {
        category: '외식비',
        item: '햄버거',
        unit: '기본형(야채,고기)',
        average_current: 3686,
        average_previous: 3686,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 4500,
        gwangjeok_myeon: 4500,
        jangheung_myeon: 2900,
        yangju2_dong: 3900,
        hoecheon2_dong: 2700,
        hoecheon3_dong: 3400,
        hoecheon4_dong: 3900
    },
    {
        category: '외식비',
        item: '피자',
        unit: '기본형(콤비네이션)',
        average_current: 15289,
        average_previous: 15067,
        rise_rate: 1,
        // 여기서부터 지역
        baekseok_eup: 14900,
        nam_myeon: 13000,
        gwangjeok_myeon: 14900,
        jangheung_myeon: 17000,
        yangju2_dong: 19900,
        hoecheon1_dong: 13000,
        hoecheon2_dong: 14000,
        hoecheon3_dong: 15900,
        hoecheon4_dong: 15000
    },
    {
        category: '외식비',
        item: '칼국수',
        unit: '1그릇',
        average_current: 7150,
        average_previous: 7150,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 8000,
        eunhyeon_myeon: 6000,
        nam_myeon: 5000,
        gwangjeok_myeon: 8000,
        jangheung_myeon: 8000,
        yangju2_dong: 7000,
        hoecheon1_dong: 8000,
        hoecheon2_dong: 7000,
        hoecheon3_dong: 6500,
        hoecheon4_dong: 8000
    },
    {
        category: '외식비',
        item: '라면(외식)',
        unit: '일반보통라면 1그릇',
        average_current: 3200,
        average_previous: 3200,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 3500,
        eunhyeon_myeon: 3000,
        nam_myeon: 3000,
        gwangjeok_myeon: 2500,
        jangheung_myeon: 3500,
        yangju2_dong: 3000,
        hoecheon1_dong: 3000,
        hoecheon2_dong: 4000,
        hoecheon3_dong: 3000,
        hoecheon4_dong: 3500
    },
    {
        category: '외식비',
        item: '김밥',
        unit: '일반김밥 1인분',
        average_current: 2350,
        average_previous: 2350,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 2500,
        eunhyeon_myeon: 1500,
        nam_myeon: 2500,
        gwangjeok_myeon: 3000,
        jangheung_myeon: 2500,
        yangju2_dong: 2000,
        hoecheon1_dong: 2500,
        hoecheon2_dong: 2500,
        hoecheon3_dong: 2500,
        hoecheon4_dong: 2000
    },
    {
        category: '외식비',
        item: '커피(외식)',
        unit: '일반원두커피',
        average_current: 3173,
        average_previous: 3173,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 3500,
        eunhyeon_myeon: 2000,
        nam_myeon: 3000,
        gwangjeok_myeon: 3800,
        jangheung_myeon: 3800,
        yangju1_dong: 2900,
        yangju2_dong: 3500,
        hoecheon1_dong: 3000,
        hoecheon2_dong: 3200,
        hoecheon3_dong: 3000,
        hoecheon4_dong: 3200
    },
    {
        category: '외식비',
        item: '국산차(외식)',
        unit: '녹차(티백 또는 잎녹차)',
        average_current: 3300,
        average_previous: 3300,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 4000,
        eunhyeon_myeon: 2000,
        nam_myeon: 3000,
        gwangjeok_myeon: 4000,
        jangheung_myeon: 3800,
        yangju2_dong: 4000,
        hoecheon1_dong: 3000,
        hoecheon2_dong: 3200,
        hoecheon3_dong: 3000,
        hoecheon4_dong: 3000
    },
    {
        category: '외식비',
        item: '생맥주',
        unit: '500cc 1잔',
        average_current: 3450,
        average_previous: 3450,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 4000,
        eunhyeon_myeon: 3000,
        nam_myeon: 3000,
        gwangjeok_myeon: 4000,
        jangheung_myeon: 4000,
        yangju2_dong: 4000,
        hoecheon1_dong: 3500,
        hoecheon2_dong: 3000,
        hoecheon3_dong: 3000,
        hoecheon4_dong: 3000
    },
    {
        category: '서비스',
        item: '세탁료',
        unit: '신사복 상하 드라이크리닝(다림질포함)',
        average_current: 6818,
        average_previous: 6818,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 6000,
        eunhyeon_myeon: 8000,
        nam_myeon: 9000,
        gwangjeok_myeon: 6000,
        jangheung_myeon: 7000,
        yangju1_dong: 6000,
        yangju2_dong: 7000,
        hoecheon1_dong: 6000,
        hoecheon2_dong: 6000,
        hoecheon3_dong: 8000,
        hoecheon4_dong: 6000
    },
    {
        category: '서비스',
        item: '의복수선료',
        unit: '신사복 하의길이 수선(바지밑단줄임)',
        average_current: 3727,
        average_previous: 3727,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 4000,
        eunhyeon_myeon: 3000,
        nam_myeon: 5000,
        gwangjeok_myeon: 3000,
        jangheung_myeon: 4000,
        yangju1_dong: 3000,
        yangju2_dong: 4000,
        hoecheon1_dong: 4000,
        hoecheon2_dong: 3000,
        hoecheon3_dong: 4000,
        hoecheon4_dong: 4000
    },
    {
        category: '서비스',
        item: '공동주택관리비1',
        unit: '아파트, 개별부과금 제외한 전금액 1)고층 약82.65㎡ 기준',
        average_current: 82384,
        average_previous: 81890,
        rise_rate: 1,
        // 여기서부터 지역
        baekseok_eup: 82490,
        gwangjeok_myeon: 80000,
        jangheung_myeon: 90000,
        yangju2_dong: 100000,
        hoecheon1_dong: 86175,
        hoecheon2_dong: 66748,
        hoecheon3_dong: 68440,
        hoecheon4_dong: 85218
    },
    {
        category: '서비스',
        item: '공동주택관리비2',
        unit: '아파트, 개별부과금 제외한 전금액 2)고층 약105.79㎡ 기준',
        average_current: 99621,
        average_previous: 98829,
        rise_rate: 1,
        // 여기서부터 지역
        baekseok_eup: 124700,
        gwangjeok_myeon: 100000,
        jangheung_myeon: 100000,
        yangju2_dong: 120000,
        hoecheon1_dong: 71080,
        hoecheon2_dong: 94734,
        hoecheon3_dong: 81390,
        hoecheon4_dong: 105065
    },
    {
        category: '서비스',
        item: '택배이용료',
        unit: '크기:중형(가로+세로+높이=140cm), 무게:20㎏이하,타지역(특수지역 제외)',
        average_current: 5700,
        average_previous: 5700,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 5000,
        eunhyeon_myeon: 6000,
        nam_myeon: 6000,
        gwangjeok_myeon: 6000,
        jangheung_myeon: 7000,
        yangju2_dong: 5000,
        hoecheon1_dong: 4000,
        hoecheon2_dong: 8000,
        hoecheon3_dong: 6000,
        hoecheon4_dong: 4000
    },
    {
        category: '서비스',
        item: '수영장이용료',
        unit: '성인 일반1회 입장료(실내수영장)',
        average_current: 4440,
        average_previous: 4440,
        rise_rate: 0,
        // 여기서부터 지역
        eunhyeon_myeon: 4000,
        gwangjeok_myeon: 5000,
        yangju2_dong: 4400,
        hoecheon3_dong: 4400,
        hoecheon4_dong: 4400
    },
    {
        category: '서비스',
        item: '볼링장이용료',
        unit: '일반인, 평일, 1게임, 오후기준(신발대여료 제외)',
        average_current: 3650,
        average_previous: 3650,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 3700,
        yangju2_dong: 4500,
        hoecheon3_dong: 3400,
        hoecheon4_dong: 3000
    },
    {
        category: '서비스',
        item: '골프연습장이용료',
        unit: '초급반(남자)회원, 월기준',
        average_current: 127500,
        average_previous: 127500,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 150000,
        eunhyeon_myeon: 60000,
        gwangjeok_myeon: 110000,
        yangju2_dong: 150000,
        hoecheon1_dong: 150000,
        hoecheon2_dong: 150000,
        hoecheon3_dong: 100000,
        hoecheon4_dong: 150000
    },
    {
        category: '서비스',
        item: '당구장이용료',
        unit: '일반인, 저녁시간, 1시간기준',
        average_current: 9400,
        average_previous: 9400,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 10000,
        eunhyeon_myeon: 9000,
        nam_myeon: 9000,
        gwangjeok_myeon: 10000,
        jangheung_myeon: 9000,
        yangju2_dong: 12000,
        hoecheon1_dong: 9000,
        hoecheon2_dong: 8000,
        hoecheon3_dong: 9000,
        hoecheon4_dong: 9000
    },
    {
        category: '서비스',
        item: '노래방이용료',
        unit: '성인, 저녁시간대 일반실',
        average_current: 19091,
        average_previous: 19091,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 20000,
        eunhyeon_myeon: 15000,
        nam_myeon: 15000,
        gwangjeok_myeon: 20000,
        jangheung_myeon: 20000,
        yangju1_dong: 20000,
        yangju2_dong: 20000,
        hoecheon1_dong: 25000,
        hoecheon2_dong: 20000,
        hoecheon3_dong: 15000,
        hoecheon4_dong: 20000
    },
    {
        category: '서비스',
        item: 'PC방이용료',
        unit: '기본 1시간',
        average_current: 1411,
        average_previous: 1411,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 2000,
        nam_myeon: 1500,
        gwangjeok_myeon: 2000,
        jangheung_myeon: 1500,
        yangju2_dong: 1300,
        hoecheon1_dong: 1200,
        hoecheon2_dong: 1200,
        hoecheon3_dong: 1000,
        hoecheon4_dong: 1000
    },
    {
        category: '서비스',
        item: '영화관람료',
        unit: '상영시간 100분 정도, 주중',
        average_current: 9000,
        average_previous: 9000,
        rise_rate: 0,
        // 여기서부터 지역
        yangju2_dong: 9000,
        hoecheon4_dong: 9000
    },
    {
        category: '서비스',
        item: '사진촬영료',
        unit: '반명함칼라 3×4(10장기준)',
        average_current: 13333,
        average_previous: 12333,
        rise_rate: 8,
        // 여기서부터 지역
        baekseok_eup: 13000,
        nam_myeon: 15000,
        gwangjeok_myeon: 13000,
        jangheung_myeon: 15000,
        yangju2_dong: 20000,
        hoecheon1_dong: 10000,
        hoecheon2_dong: 10000,
        hoecheon3_dong: 14000,
        hoecheon4_dong: 10000
    },
    {
        category: '서비스',
        item: '사진인화료',
        unit: '디지털사진인화비',
        average_current: 381,
        average_previous: 381,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 350,
        nam_myeon: 300,
        gwangjeok_myeon: 400,
        yangju2_dong: 500,
        hoecheon1_dong: 400,
        hoecheon2_dong: 300,
        hoecheon3_dong: 400,
        hoecheon4_dong: 400
    },
    {
        category: '서비스',
        item: '숙박료(호텔)',
        unit: '평일,스탠다드,부가세 및 봉사료포함',
        average_current: 56667,
        average_previous: 56667,
        rise_rate: 0,
        // 여기서부터 지역
        jangheung_myeon: 50000,
        yangju2_dong: 60000,
        hoecheon3_dong: 60000
    },
    {
        category: '서비스',
        item: '숙박료(여관)',
        unit: '독방, 1실 욕실 포함',
        average_current: 35714,
        average_previous: 35714,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 50000,
        eunhyeon_myeon: 30000,
        nam_myeon: 30000,
        jangheung_myeon: 30000,
        hoecheon1_dong: 40000,
        hoecheon2_dong: 30000,
        hoecheon4_dong: 40000
    },
    {
        category: '서비스',
        item: '콘도미니엄이용료',
        unit: '평일, 82㎡ 정도',
        average_current: 200000,
        average_previous: 200000,
        rise_rate: 0,
        // 여기서부터 지역
        jangheung_myeon: 200000
    },
    {
        category: '서비스',
        item: '이용료',
        unit: '성인',
        average_current: 11455,
        average_previous: 11455,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 12000,
        eunhyeon_myeon: 10000,
        nam_myeon: 10000,
        gwangjeok_myeon: 12000,
        jangheung_myeon: 12000,
        yangju1_dong: 12000,
        yangju2_dong: 12000,
        hoecheon1_dong: 10000,
        hoecheon2_dong: 12000,
        hoecheon3_dong: 12000,
        hoecheon4_dong: 12000
    },
    {
        category: '서비스',
        item: '미용료',
        unit: '성인여자(파마)',
        average_current: 33182,
        average_previous: 33182,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 30000,
        eunhyeon_myeon: 30000,
        nam_myeon: 30000,
        gwangjeok_myeon: 35000,
        jangheung_myeon: 30000,
        yangju1_dong: 40000,
        yangju2_dong: 50000,
        hoecheon1_dong: 30000,
        hoecheon2_dong: 30000,
        hoecheon3_dong: 30000,
        hoecheon4_dong: 30000
    },
    {
        category: '서비스',
        item: '목욕료',
        unit: '성인일반대중탕',
        average_current: 7000,
        average_previous: 7000,
        rise_rate: 0,
        // 여기서부터 지역
        baekseok_eup: 6000,
        yangju2_dong: 8000,
        hoecheon2_dong: 7000,
        hoecheon3_dong: 7000,
        hoecheon4_dong: 7000
    },
    {
        category: '서비스',
        item: '찜질방이용료',
        unit: '성인, 찜질복대여료 포함',
        average_current: 9200,
        average_previous: 9200,
        rise_rate: 0,
        // 여기서부터 지역
        eunhyeon_myeon: 4000,
        jangheung_myeon: 12000,
        yangju2_dong: 9000,
        hoecheon3_dong: 9000,
        hoecheon4_dong: 12000
    }
];

//

export const regionKeys = Object.keys(regionKeymap);
export const regions = Object.values(regionKeymap);
export const items = data.map(({ item }) => item);
