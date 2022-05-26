import React, { useEffect, useRef } from 'react';
import useChart from 'hooks/useChart';
import styled from 'styled-components';
import { HorizonRankBarChart } from 'components/charts';

const Styles = {
  Main: styled.main`
    display: grid;
    grid-template-columns: minmax(auto, 880px) minmax(auto, 824px);
    grid-template-rows: 400px 600px 358px;
    grid-row-gap: 40px;
    grid-column-gap: 80px;
    padding: 36px;
    background-color: #212121;

    & > div {
      border: 1px solid #bcf3f7;
      border-radius: 10px;
      overflow: hidden;
    }

    .categoryRank-wrap {
      /* width: 100%; */
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .timer-wrap {
      /* width: 100%; */
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    .categoryDetail-wrap {
      /* width: 100%; */
      grid-column: 1 / 2;
      grid-row: 2 / 4;
    }
    .categorySeasonDetail-wrap {
      /* width: 100%; */
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    .categorySeason-wrap {
      /* width: 100%; */
      grid-column: 2 / 3;
      grid-row: 3 / 4;
    }

    .chart-wrap {
    }
  `,
};

const data = [
  {
    labels: 'test',
    value: 53,
    color: 'linear-gradient(180deg,#68F6FF 0%, #bcf3f7 100%)',
  },
  {
    labels: 'test2',
    value: 52,
    color: 'linear-gradient(180deg,#68FFAD 0%, #fcaeb7 100%)',
  },
  {
    labels: 'test3',
    value: 10,
    color: 'linear-gradient(180deg,#FF687A 0%, #f5cfad 100%)',
  },
  {
    labels: 'test4',
    value: 100,
    color: 'linear-gradient(180deg,#FFB068 0%, #f8d0aa 100%)',
  },
  {
    labels: 'test5',
    value: 24,
    color: 'linear-gradient(180deg,#acc2f8 0%, #d7e0f7 100%)',
  },
];
const config = {
  data: data,
  style: {
    padding: '16px 36px',
    backgroundColor: '#363636',
    color: '#ffffff',
  },
  options: {
    limit: 5,
  },
};

export default function Main() {
  useEffect(() => {}, []);

  return (
    <Styles.Main>
      <div className="categoryRank-wrap chart-wrap">
        <HorizonRankBarChart config={config} />
      </div>
      <div className="timer-wrap"></div>
      <div className="categoryDetail-wrap"></div>
      <div className="categorySeasonDetail-wrap"></div>
      <div className="categorySeason-wrap chart-wrap"></div>
    </Styles.Main>
  );
}
