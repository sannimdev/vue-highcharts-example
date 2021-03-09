export interface SeodaemunHousing {
    [key: string]: number | undefined;
    year: number;
    total: number;
    owning?: number;
    charter?: number;
    monthly?: number;
    free?: number;
    unsecuredMonthly?: number;
    collectivelyMonthly?: number;
}

//

export interface ChartOptions {
    chart?: {
        // 기본적인 차트에 관한 설정 부분
        renderTo?: string;
        type?: string; // 차트 모양
        plotBackgroundColor?: null | string;
        plotBorderWidth?: number;
        plotShadow?: boolean;
    };
    credits?: boolean;
    accessibility?: {
        point?: {
            valueSuffix?: '%';
        };
    };
    exporting?: {
        enabled: boolean; // context 메뉴 보일지 말지
        fallbackToExportServer: boolean; // 클라이언트 단에 그려진 차트를 다운로드하고자 한다면 이를 false로 바꾸어야 한다.
    };
    title?: {
        // 제목 설정하기
        text?: string | null;
    };
    xAxis?: Axis;
    yAxis?: Axis;
    /*
     📊 이 부분이 어떻게 들어왔느냐에 따라 그래프의 모양이 달라진다.
     실제로 받아 온 수치를 Series의 형식에 맞게 변환하여 이곳에 설정하면 된다.
     Series의 타입은 아래의 코드 참조하기
  */
    series?: Series[] | PieSeries[];
    /*
      💬 차트의 범례 설정
  */
    legend?: {
        align?: string; // 수평 정렬 방식
        verticalAlign?: string; // 수직 정렬 방식
        itemDistance?: number; // 범례 안에서 항목 간의 거리
    };
    plotOptions?: {
        series?: {
            // 차트에 그리는 선의 굵기
            lineWidth?: number;
            marker?: {
                // 마커 활성화 여부 (점이 찍히는 곳)
                enabled?: boolean;
            };
        };
        pie?: {
            dataLabels?: {
                enabled?: boolean;
                inside?: boolean;
                distance?: string | number;
                x?: number;
                y?: number;
                z?: number;
                align?: string;
                style?: {
                    [property: string]: string;
                };
            };
            size?: string;
            showInLegend?: boolean;
        };
    };
    tooltip?: {
        // 말풍선 사용 설정
        useHTML?: boolean; // 말풍선 커스터마이징 시 html 사용할 것인가?
        formatter?: () => string; // 말풍선 양식 작성하기 (string형식이며 안에서 html을 작성할 수 있다.)
        shared?: boolean; // 통합하여 1개로만 보이게 할지(true) 항목별로 보일지(false)?
        pointFormat?: string;
    };
}

/*
   꺾은선 그래프를 예로 들면 그릴 하나의 `선`을 떠올리면 된다. 이하 데이터 요소라고 칭한다.
   📈 이 선의 개수만큼 chartOptions.series의 배열에 다음의 Series 객체가 담긴다고 생각하면 된다.
   즉, 데이터 요소는 Series의 형식을 따르며 배열 안에 다음의 형식으로 포함된다.
*/
export interface Series {
    name?: string; // 해당 데이터 요소의 이름
    data: number[]; // 데이터 요소의 값을 배열로 담는다
    color?: string; // 데이터 요소를 표현할 색상 지정하기
}

export interface PieSeries {
    type: 'pie';
    name?: string;
    innerSize?: string;
    data: PieData[];
}

export type PieData =
    | [string, number]
    | {
          name: string;
          color?: string;
          x?: number;
          y?: number;
          z?: number;
          dataLabels?: {
              enabled?: boolean;
              style?: {
                  [key: string]: string | number | undefined;
                  textAlign?: string;
                  color?: string;
                  fontSize?: string;
              };
              formatter: () => void;
          };
      };

export interface Axis {
    // x축, y축 등에 관한 정보 설정하기
    type?: string;
    categories: string[] | Date[]; // 와 같은 자료 구조
    tickColor?: string; // 중간 구분선
    tickInterval?: number; // 구분선을 그릴 간격 지정하기
    max: number; //축의 최댓값 지정
    labels?: {
        // 각 축별로 formatter를 사용할 수 있다.
        formatter?: () => string;
        format?: string; // `{value} 원` 등으로 활용할 수 있다
    };
    gridLineWidth?: number; // 축을 기준으로 선을 그릴 때의 굵기 (0이면 안 보인다)
    gridLineColor?: string; // 축 선 색상 지정하기
}
