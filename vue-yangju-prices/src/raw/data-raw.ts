/* 
    경기도 양주시 물가동향(개인서비스요금) - 공공데이터포털
    https://www.data.go.kr/data/15067423/fileData.do
*/
const prices = [
    {
        구분: '외식비',
        품목: '설렁탕',
        '규격 및 단위': '1그릇',
        '평균(원)': 8167,
        '전월평균(원)': 8167,
        '전월대비상승률(%)': 0,
        백석읍: 8000,
        은현면: '',
        남면: '',
        광적면: '',
        장흥면: 10000,
        양주1동: 8000,
        양주2동: 7000,
        회천1동: '',
        회천2동: 8000,
        회천3동: '',
        회천4동: 8000
    },
    {
        구분: '외식비',
        품목: '냉면',
        '규격 및 단위': '물냉면, 1인분',
        '평균(원)': 7455,
        '전월평균(원)': 6882,
        '전월대비상승률(%)': 8,
        백석읍: 8000,
        은현면: 6000,
        남면: 7000,
        광적면: 8000,
        장흥면: 10000,
        양주1동: 7000,
        양주2동: 6000,
        회천1동: 8000,
        회천2동: 7000,
        회천3동: 7000,
        회천4동: 8000
    },
    {
        구분: '외식비',
        품목: '비빔밥',
        '규격 및 단위': '1그릇',
        '평균(원)': 6350,
        '전월평균(원)': 5630,
        '전월대비상승률(%)': 13,
        백석읍: 5000,
        은현면: 5000,
        남면: 5000,
        광적면: 6000,
        장흥면: 8000,
        양주1동: '',
        양주2동: 5500,
        회천1동: 7000,
        회천2동: 8000,
        회천3동: 6000,
        회천4동: 8000
    },
    {
        구분: '외식비',
        품목: '갈비탕',
        '규격 및 단위': '1그릇',
        '평균(원)': 10182,
        '전월평균(원)': 10182,
        '전월대비상승률(%)': 0,
        백석읍: 10000,
        은현면: 9000,
        남면: 11000,
        광적면: 10000,
        장흥면: 10000,
        양주1동: 9000,
        양주2동: 10000,
        회천1동: 10000,
        회천2동: 10000,
        회천3동: 11000,
        회천4동: 12000
    },
    {
        구분: '외식비',
        품목: '삼계탕',
        '규격 및 단위': '1그릇',
        '평균(원)': 12909,
        '전월평균(원)': 12909,
        '전월대비상승률(%)': 0,
        백석읍: 13000,
        은현면: 13000,
        남면: 13000,
        광적면: 13000,
        장흥면: 14000,
        양주1동: 12000,
        양주2동: 12000,
        회천1동: 13000,
        회천2동: 10000,
        회천3동: 14000,
        회천4동: 15000
    },
    {
        구분: '외식비',
        품목: '김치찌개백반',
        '규격 및 단위': '1인분',
        '평균(원)': 6727,
        '전월평균(원)': 6727,
        '전월대비상승률(%)': 0,
        백석읍: 6000,
        은현면: 6000,
        남면: 7000,
        광적면: 7000,
        장흥면: 8000,
        양주1동: 6000,
        양주2동: 8000,
        회천1동: 6000,
        회천2동: 7000,
        회천3동: 6000,
        회천4동: 7000
    },
    {
        구분: '외식비',
        품목: '된장찌개백반',
        '규격 및 단위': '1인분',
        '평균(원)': 6091,
        '전월평균(원)': 6091,
        '전월대비상승률(%)': 0,
        백석읍: 5000,
        은현면: 5000,
        남면: 7000,
        광적면: 6000,
        장흥면: 8000,
        양주1동: 6000,
        양주2동: 7000,
        회천1동: 6000,
        회천2동: 6000,
        회천3동: 6000,
        회천4동: 5000
    },
    {
        구분: '외식비',
        품목: '불고기',
        '규격 및 단위': '쇠고기 200g정도',
        '평균(원)': 12848,
        '전월평균(원)': 12848,
        '전월대비상승률(%)': 0,
        백석읍: 13000,
        은현면: 15000,
        남면: 9333,
        광적면: 10000,
        장흥면: 14000,
        양주1동: 12000,
        양주2동: 13000,
        회천1동: 10000,
        회천2동: 9000,
        회천3동: 24000,
        회천4동: 12000
    },
    {
        구분: '외식비',
        품목: '등심(외식)',
        '규격 및 단위': '쇠고기 200g정도',
        '평균(원)': 31273,
        '전월평균(원)': 31273,
        '전월대비상승률(%)': 0,
        백석읍: 36000,
        은현면: 30000,
        남면: 30000,
        광적면: 36000,
        장흥면: 38000,
        양주1동: 35000,
        양주2동: 29000,
        회천1동: 30000,
        회천2동: 22000,
        회천3동: 33000,
        회천4동: 25000
    },
    {
        구분: '외식비',
        품목: '돼지갈비(외식)',
        '규격 및 단위': '돼지갈비 200g정도',
        '평균(원)': 12582,
        '전월평균(원)': 12582,
        '전월대비상승률(%)': 0,
        백석읍: 15000,
        은현면: 12000,
        남면: 10000,
        광적면: 14000,
        장흥면: 12000,
        양주1동: 13000,
        양주2동: 12000,
        회천1동: 12000,
        회천2동: 14400,
        회천3동: 12000,
        회천4동: 12000
    },
    {
        구분: '외식비',
        품목: '삼겹살(외식)',
        '규격 및 단위': '돼지삼겹살 200g정도',
        '평균(원)': 13182,
        '전월평균(원)': 13182,
        '전월대비상승률(%)': 0,
        백석읍: 15000,
        은현면: 12000,
        남면: 12000,
        광적면: 14000,
        장흥면: 16000,
        양주1동: 13000,
        양주2동: 12000,
        회천1동: 13000,
        회천2동: 13000,
        회천3동: 12000,
        회천4동: 13000
    },
    {
        구분: '외식비',
        품목: '자장면',
        '규격 및 단위': '중화요리점 1인분',
        '평균(원)': 5000,
        '전월평균(원)': 5000,
        '전월대비상승률(%)': 0,
        백석읍: 5000,
        은현면: 5000,
        남면: 5000,
        광적면: 5000,
        장흥면: 6000,
        양주1동: 5000,
        양주2동: 5000,
        회천1동: 4000,
        회천2동: 5000,
        회천3동: 5500,
        회천4동: 4500
    },
    {
        구분: '외식비',
        품목: '짬뽕',
        '규격 및 단위': '중화요리점 1인분',
        '평균(원)': 6409,
        '전월평균(원)': 6409,
        '전월대비상승률(%)': 0,
        백석읍: 6000,
        은현면: 6000,
        남면: 6000,
        광적면: 6000,
        장흥면: 8000,
        양주1동: 7000,
        양주2동: 6000,
        회천1동: 6500,
        회천2동: 7000,
        회천3동: 6000,
        회천4동: 6000
    },
    {
        구분: '외식비',
        품목: '탕수육',
        '규격 및 단위': '일반탕수육(보통)',
        '평균(원)': 17909,
        '전월평균(원)': 17909,
        '전월대비상승률(%)': 0,
        백석읍: 18000,
        은현면: 17000,
        남면: 17000,
        광적면: 18000,
        장흥면: 21000,
        양주1동: 20000,
        양주2동: 17000,
        회천1동: 15000,
        회천2동: 22000,
        회천3동: 15000,
        회천4동: 17000
    },
    {
        구분: '외식비',
        품목: '돈가스',
        '규격 및 단위': '일반돈가스 1인분',
        '평균(원)': 7556,
        '전월평균(원)': 7556,
        '전월대비상승률(%)': 0,
        백석읍: 8000,
        은현면: 7000,
        남면: 8000,
        광적면: '',
        장흥면: 8000,
        양주1동: '',
        양주2동: 8000,
        회천1동: 8000,
        회천2동: 7000,
        회천3동: 6000,
        회천4동: 8000
    },
    {
        구분: '외식비',
        품목: '생선초밥',
        '규격 및 단위': '1인분, 활어기준',
        '평균(원)': 14200,
        '전월평균(원)': 14200,
        '전월대비상승률(%)': 0,
        백석읍: 15000,
        은현면: '',
        남면: '',
        광적면: '',
        장흥면: '',
        양주1동: '',
        양주2동: 16000,
        회천1동: '',
        회천2동: 12000,
        회천3동: 13000,
        회천4동: 15000
    },
    {
        구분: '외식비',
        품목: '튀김닭',
        '규격 및 단위': '튀김통닭',
        '평균(원)': 15800,
        '전월평균(원)': 15800,
        '전월대비상승률(%)': 0,
        백석읍: 16000,
        은현면: 15000,
        남면: 18000,
        광적면: 16000,
        장흥면: 19000,
        양주1동: '',
        양주2동: 16000,
        회천1동: 15000,
        회천2동: 10000,
        회천3동: 17000,
        회천4동: 16000
    },
    {
        구분: '외식비',
        품목: '햄버거',
        '규격 및 단위': '기본형(야채,고기)',
        '평균(원)': 3686,
        '전월평균(원)': 3686,
        '전월대비상승률(%)': 0,
        백석읍: 4500,
        은현면: '',
        남면: '',
        광적면: 4500,
        장흥면: 2900,
        양주1동: '',
        양주2동: 3900,
        회천1동: '',
        회천2동: 2700,
        회천3동: 3400,
        회천4동: 3900
    },
    {
        구분: '외식비',
        품목: '피자',
        '규격 및 단위': '기본형(콤비네이션)',
        '평균(원)': 15289,
        '전월평균(원)': 15067,
        '전월대비상승률(%)': 1,
        백석읍: 14900,
        은현면: '',
        남면: 13000,
        광적면: 14900,
        장흥면: 17000,
        양주1동: '',
        양주2동: 19900,
        회천1동: 13000,
        회천2동: 14000,
        회천3동: 15900,
        회천4동: 15000
    },
    {
        구분: '외식비',
        품목: '칼국수',
        '규격 및 단위': '1그릇',
        '평균(원)': 7150,
        '전월평균(원)': 7150,
        '전월대비상승률(%)': 0,
        백석읍: 8000,
        은현면: 6000,
        남면: 5000,
        광적면: 8000,
        장흥면: 8000,
        양주1동: '',
        양주2동: 7000,
        회천1동: 8000,
        회천2동: 7000,
        회천3동: 6500,
        회천4동: 8000
    },
    {
        구분: '외식비',
        품목: '라면(외식)',
        '규격 및 단위': '일반보통라면 1그릇',
        '평균(원)': 3200,
        '전월평균(원)': 3200,
        '전월대비상승률(%)': 0,
        백석읍: 3500,
        은현면: 3000,
        남면: 3000,
        광적면: 2500,
        장흥면: 3500,
        양주1동: '',
        양주2동: 3000,
        회천1동: 3000,
        회천2동: 4000,
        회천3동: 3000,
        회천4동: 3500
    },
    {
        구분: '외식비',
        품목: '김밥',
        '규격 및 단위': '일반김밥 1인분',
        '평균(원)': 2350,
        '전월평균(원)': 2350,
        '전월대비상승률(%)': 0,
        백석읍: 2500,
        은현면: 1500,
        남면: 2500,
        광적면: 3000,
        장흥면: 2500,
        양주1동: '',
        양주2동: 2000,
        회천1동: 2500,
        회천2동: 2500,
        회천3동: 2500,
        회천4동: 2000
    },
    {
        구분: '외식비',
        품목: '커피(외식)',
        '규격 및 단위': '일반원두커피',
        '평균(원)': 3173,
        '전월평균(원)': 3173,
        '전월대비상승률(%)': 0,
        백석읍: 3500,
        은현면: 2000,
        남면: 3000,
        광적면: 3800,
        장흥면: 3800,
        양주1동: 2900,
        양주2동: 3500,
        회천1동: 3000,
        회천2동: 3200,
        회천3동: 3000,
        회천4동: 3200
    },
    {
        구분: '외식비',
        품목: '국산차(외식)',
        '규격 및 단위': '녹차(티백 또는 잎녹차)',
        '평균(원)': 3300,
        '전월평균(원)': 3300,
        '전월대비상승률(%)': 0,
        백석읍: 4000,
        은현면: 2000,
        남면: 3000,
        광적면: 4000,
        장흥면: 3800,
        양주1동: '',
        양주2동: 4000,
        회천1동: 3000,
        회천2동: 3200,
        회천3동: 3000,
        회천4동: 3000
    },
    {
        구분: '외식비',
        품목: '생맥주',
        '규격 및 단위': '500cc 1잔',
        '평균(원)': 3450,
        '전월평균(원)': 3450,
        '전월대비상승률(%)': 0,
        백석읍: 4000,
        은현면: 3000,
        남면: 3000,
        광적면: 4000,
        장흥면: 4000,
        양주1동: '',
        양주2동: 4000,
        회천1동: 3500,
        회천2동: 3000,
        회천3동: 3000,
        회천4동: 3000
    },
    {
        구분: '서비스',
        품목: '세탁료',
        '규격 및 단위': '신사복 상하 드라이크리닝(다림질포함)',
        '평균(원)': 6818,
        '전월평균(원)': 6818,
        '전월대비상승률(%)': 0,
        백석읍: 6000,
        은현면: 8000,
        남면: 9000,
        광적면: 6000,
        장흥면: 7000,
        양주1동: 6000,
        양주2동: 7000,
        회천1동: 6000,
        회천2동: 6000,
        회천3동: 8000,
        회천4동: 6000
    },
    {
        구분: '서비스',
        품목: '의복수선료',
        '규격 및 단위': '신사복 하의길이 수선(바지밑단줄임)',
        '평균(원)': 3727,
        '전월평균(원)': 3727,
        '전월대비상승률(%)': 0,
        백석읍: 4000,
        은현면: 3000,
        남면: 5000,
        광적면: 3000,
        장흥면: 4000,
        양주1동: 3000,
        양주2동: 4000,
        회천1동: 4000,
        회천2동: 3000,
        회천3동: 4000,
        회천4동: 4000
    },
    {
        구분: '서비스',
        품목: '공동주택관리비',
        '규격 및 단위': '아파트, 개별부과금 제외한 전금액 1)고층 약82.65㎡ 기준',
        '평균(원)': 82384,
        '전월평균(원)': 81890,
        '전월대비상승률(%)': 1,
        백석읍: 82490,
        은현면: '',
        남면: '',
        광적면: 80000,
        장흥면: 90000,
        양주1동: '',
        양주2동: 100000,
        회천1동: 86175,
        회천2동: 66748,
        회천3동: 68440,
        회천4동: 85218
    },
    {
        구분: '서비스',
        품목: '공동주택관리비',
        '규격 및 단위': '아파트, 개별부과금 제외한 전금액 2)고층 약105.79㎡ 기준',
        '평균(원)': 99621,
        '전월평균(원)': 98829,
        '전월대비상승률(%)': 1,
        백석읍: 124700,
        은현면: '',
        남면: '',
        광적면: 100000,
        장흥면: 100000,
        양주1동: '',
        양주2동: 120000,
        회천1동: 71080,
        회천2동: 94734,
        회천3동: 81390,
        회천4동: 105065
    },
    {
        구분: '서비스',
        품목: '택배이용료',
        '규격 및 단위': '크기:중형(가로+세로+높이=140cm), 무게:20㎏이하,타지역(특수지역 제외)',
        '평균(원)': 5700,
        '전월평균(원)': 5700,
        '전월대비상승률(%)': 0,
        백석읍: 5000,
        은현면: 6000,
        남면: 6000,
        광적면: 6000,
        장흥면: 7000,
        양주1동: '',
        양주2동: 5000,
        회천1동: 4000,
        회천2동: 8000,
        회천3동: 6000,
        회천4동: 4000
    },
    {
        구분: '서비스',
        품목: '수영장이용료',
        '규격 및 단위': '성인 일반1회 입장료(실내수영장)',
        '평균(원)': 4440,
        '전월평균(원)': 4440,
        '전월대비상승률(%)': 0,
        백석읍: '',
        은현면: 4000,
        남면: '',
        광적면: 5000,
        장흥면: '',
        양주1동: '',
        양주2동: 4400,
        회천1동: '',
        회천2동: '',
        회천3동: 4400,
        회천4동: 4400
    },
    {
        구분: '서비스',
        품목: '볼링장이용료',
        '규격 및 단위': '일반인, 평일, 1게임, 오후기준(신발대여료 제외)',
        '평균(원)': 3650,
        '전월평균(원)': 3650,
        '전월대비상승률(%)': 0,
        백석읍: 3700,
        은현면: '',
        남면: '',
        광적면: '',
        장흥면: '',
        양주1동: '',
        양주2동: 4500,
        회천1동: '',
        회천2동: '',
        회천3동: 3400,
        회천4동: 3000
    },
    {
        구분: '서비스',
        품목: '골프연습장이용료',
        '규격 및 단위': '초급반(남자)회원, 월기준',
        '평균(원)': 127500,
        '전월평균(원)': 127500,
        '전월대비상승률(%)': 0,
        백석읍: 150000,
        은현면: 60000,
        남면: '',
        광적면: 110000,
        장흥면: '',
        양주1동: '',
        양주2동: 150000,
        회천1동: 150000,
        회천2동: 150000,
        회천3동: 100000,
        회천4동: 150000
    },
    {
        구분: '서비스',
        품목: '당구장이용료',
        '규격 및 단위': '일반인, 저녁시간, 1시간기준',
        '평균(원)': 9400,
        '전월평균(원)': 9400,
        '전월대비상승률(%)': 0,
        백석읍: 10000,
        은현면: 9000,
        남면: 9000,
        광적면: 10000,
        장흥면: 9000,
        양주1동: '',
        양주2동: 12000,
        회천1동: 9000,
        회천2동: 8000,
        회천3동: 9000,
        회천4동: 9000
    },
    {
        구분: '서비스',
        품목: '노래방이용료',
        '규격 및 단위': '성인, 저녁시간대 일반실',
        '평균(원)': 19091,
        '전월평균(원)': 19091,
        '전월대비상승률(%)': 0,
        백석읍: 20000,
        은현면: 15000,
        남면: 15000,
        광적면: 20000,
        장흥면: 20000,
        양주1동: 20000,
        양주2동: 20000,
        회천1동: 25000,
        회천2동: 20000,
        회천3동: 15000,
        회천4동: 20000
    },
    {
        구분: '서비스',
        품목: 'PC방이용료',
        '규격 및 단위': '기본 1시간',
        '평균(원)': 1411,
        '전월평균(원)': 1411,
        '전월대비상승률(%)': 0,
        백석읍: 2000,
        은현면: '',
        남면: 1500,
        광적면: 2000,
        장흥면: 1500,
        양주1동: '',
        양주2동: 1300,
        회천1동: 1200,
        회천2동: 1200,
        회천3동: 1000,
        회천4동: 1000
    },
    {
        구분: '서비스',
        품목: '영화관람료',
        '규격 및 단위': '상영시간 100분 정도, 주중',
        '평균(원)': 9000,
        '전월평균(원)': 9000,
        '전월대비상승률(%)': 0,
        백석읍: '',
        은현면: '',
        남면: '',
        광적면: '',
        장흥면: '',
        양주1동: '',
        양주2동: 9000,
        회천1동: '',
        회천2동: '',
        회천3동: '',
        회천4동: 9000
    },
    {
        구분: '서비스',
        품목: '사진촬영료',
        '규격 및 단위': '반명함칼라 3×4(10장기준)',
        '평균(원)': 13333,
        '전월평균(원)': 12333,
        '전월대비상승률(%)': 8,
        백석읍: 13000,
        은현면: '',
        남면: 15000,
        광적면: 13000,
        장흥면: 15000,
        양주1동: '',
        양주2동: 20000,
        회천1동: 10000,
        회천2동: 10000,
        회천3동: 14000,
        회천4동: 10000
    },
    {
        구분: '서비스',
        품목: '사진인화료',
        '규격 및 단위': '디지털사진인화비',
        '평균(원)': 381,
        '전월평균(원)': 381,
        '전월대비상승률(%)': 0,
        백석읍: 350,
        은현면: '',
        남면: 300,
        광적면: 400,
        장흥면: '',
        양주1동: '',
        양주2동: 500,
        회천1동: 400,
        회천2동: 300,
        회천3동: 400,
        회천4동: 400
    },
    {
        구분: '서비스',
        품목: '숙박료(호텔)',
        '규격 및 단위': '평일,스탠다드,부가세 및 봉사료포함',
        '평균(원)': 56667,
        '전월평균(원)': 56667,
        '전월대비상승률(%)': 0,
        백석읍: '',
        은현면: '',
        남면: '',
        광적면: '',
        장흥면: 50000,
        양주1동: '',
        양주2동: 60000,
        회천1동: '',
        회천2동: '',
        회천3동: 60000,
        회천4동: ''
    },
    {
        구분: '서비스',
        품목: '숙박료(여관)',
        '규격 및 단위': '독방, 1실 욕실 포함',
        '평균(원)': 35714,
        '전월평균(원)': 35714,
        '전월대비상승률(%)': 0,
        백석읍: 50000,
        은현면: 30000,
        남면: 30000,
        광적면: '',
        장흥면: 30000,
        양주1동: '',
        양주2동: '',
        회천1동: 40000,
        회천2동: 30000,
        회천3동: '',
        회천4동: 40000
    },
    {
        구분: '서비스',
        품목: '콘도미니엄이용료',
        '규격 및 단위': '평일, 82㎡ 정도',
        '평균(원)': 200000,
        '전월평균(원)': 200000,
        '전월대비상승률(%)': 0,
        백석읍: '',
        은현면: '',
        남면: '',
        광적면: '',
        장흥면: 200000,
        양주1동: '',
        양주2동: '',
        회천1동: '',
        회천2동: '',
        회천3동: '',
        회천4동: ''
    },
    {
        구분: '서비스',
        품목: '이용료',
        '규격 및 단위': '성인',
        '평균(원)': 11455,
        '전월평균(원)': 11455,
        '전월대비상승률(%)': 0,
        백석읍: 12000,
        은현면: 10000,
        남면: 10000,
        광적면: 12000,
        장흥면: 12000,
        양주1동: 12000,
        양주2동: 12000,
        회천1동: 10000,
        회천2동: 12000,
        회천3동: 12000,
        회천4동: 12000
    },
    {
        구분: '서비스',
        품목: '미용료',
        '규격 및 단위': '성인여자(파마)',
        '평균(원)': 33182,
        '전월평균(원)': 33182,
        '전월대비상승률(%)': 0,
        백석읍: 30000,
        은현면: 30000,
        남면: 30000,
        광적면: 35000,
        장흥면: 30000,
        양주1동: 40000,
        양주2동: 50000,
        회천1동: 30000,
        회천2동: 30000,
        회천3동: 30000,
        회천4동: 30000
    },
    {
        구분: '서비스',
        품목: '목욕료',
        '규격 및 단위': '성인일반대중탕',
        '평균(원)': 7000,
        '전월평균(원)': 7000,
        '전월대비상승률(%)': 0,
        백석읍: 6000,
        은현면: '',
        남면: '',
        광적면: '',
        장흥면: '',
        양주1동: '',
        양주2동: 8000,
        회천1동: '',
        회천2동: 7000,
        회천3동: 7000,
        회천4동: 7000
    },
    {
        구분: '서비스',
        품목: '찜질방이용료',
        '규격 및 단위': '성인, 찜질복대여료 포함',
        '평균(원)': 9200,
        '전월평균(원)': 9200,
        '전월대비상승률(%)': 0,
        백석읍: '',
        은현면: 4000,
        남면: '',
        광적면: '',
        장흥면: 12000,
        양주1동: '',
        양주2동: 9000,
        회천1동: '',
        회천2동: '',
        회천3동: 9000,
        회천4동: 12000
    },
    {
        구분: '서비스',
        품목: '운동경기관람료',
        '규격 및 단위': '경기장입장료(성인 일반석)',
        '평균(원)': '',
        '전월평균(원)': '',
        '전월대비상승률(%)': '',
        백석읍: '',
        은현면: '',
        남면: '',
        광적면: '',
        장흥면: '',
        양주1동: '',
        양주2동: '',
        회천1동: '',
        회천2동: '',
        회천3동: '',
        회천4동: ''
    }
];
