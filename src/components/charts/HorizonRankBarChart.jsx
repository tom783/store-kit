import React, { useLayoutEffect, useEffect, memo, useRef } from 'react';
import styled from 'styled-components';

const Styles = {
  HorizonRankBarChart: styled.div`
    width: 100%;
    height: 100%;

    .data-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 50px;

      .label {
        width: 40px;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
      }
      .data-bar-wrap {
        flex: 1;
        height: 100%;
        margin-left: 22px;

        .bar {
          transition: all 0.2s ease;
          width: 0;
          height: 100%;
          border-radius: 10px;

          &:hover {
            opacity: 0.5;
          }
        }
      }
    }

    .data-row + .data-row {
      margin-top: 30px;
    }
  `,
};

export default memo(function HorizonRankBarChart({ config }) {
  const barRef = useRef([]);
  const labelRef = useRef([]);
  const intervalRef = useRef();

  const sortData = (data) => {
    data.sort((a, b) => {
      if (a.value < b.value) return 1;
      if (a.value > b.value) return -1;
      return 0;
    });

    return data;
  };

  useLayoutEffect(() => {
    sortData(config.data);

    labelRef.current.forEach((ref, idx) => {
      ref.innerText = `${config.data[idx].labels}`;
    });

    intervalRef.current = setTimeout(() => {
      barRef.current.forEach((ref, idx) => {
        ref.style.width = `${config.data[idx].value}%`;
        ref.style.background = `${config.data[idx].color}`;
      });
    }, 500);

    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [config]);

  return (
    <Styles.HorizonRankBarChart style={config.style}>
      {config.data.map((item, idx) => {
        if (idx > config.options.limit - 1) return;

        return (
          <div className="data-row" key={item.labels}>
            <span
              className="label"
              ref={(ele) => (labelRef.current[idx] = ele)}
            ></span>
            <div className="data-bar-wrap">
              <div
                className="bar"
                ref={(ele) => (barRef.current[idx] = ele)}
              ></div>
            </div>
          </div>
        );
      })}
    </Styles.HorizonRankBarChart>
  );
});
