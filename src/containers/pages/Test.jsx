import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #292929;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;

  .target,
  .cursor {
    width: 1px;
    height: 1px;
    border: solid 10px #fff;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .cursor {
    border-radius: 100%;
  }
  .target {
    width: 200px;
    height: 200px;
    border: solid 1px #d8c434;
    &.expanded {
      background-color: rgba(216, 196, 52, 0.4);
    }
  }
`;

const Test = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mouseControlArea, setMouseControlArea] = useState(false);

  const cursorPositionRef = useRef({ left: 0, top: 0 });
  const targetPositionRef = useRef({ left: 0, top: 0 });

  const triggerDistance = 130;

  const calcDistance = () => {
    const distance = {
      x: targetPositionRef.current.left - cursorPositionRef.current.left,
      y: targetPositionRef.current.top - cursorPositionRef.current.top,
    };
    const angle = Math.atan2(distance.x, distance.y);
    const hypotenuse = Math.sqrt(
      distance.x * distance.x + distance.y * distance.y
    );

    return {
      angle,
      hypotenuse,
    };
  };

  // target
  const targetHandler = (e) => {
    const position = e.target.getBoundingClientRect();

    targetPositionRef.current = {
      left: position.left + position.width / 2,
      top: position.top + position.height / 2,
    };
  };

  useEffect(() => {
    if (mouseControlArea) {
      const { angle, hypotenuse } = calcDistance();
      setCursorPosition({
        left:
          targetPositionRef.current.left - (Math.sin(angle) * hypotenuse) / 5,
        top: targetPositionRef.current.top - (Math.cos(angle) * hypotenuse) / 5,
      });
      console.log(cursorPositionRef.current);
    } else {
      setCursorPosition({
        left: cursorPositionRef.current.left,
        top: cursorPositionRef.current.top,
      });
      console.log('cursorPosition');
    }
  }, [mouseControlArea]);

  // cursor
  const cursorHandler = (e) => {
    cursorPositionRef.current = {
      left: e.clientX,
      top: e.clientY,
    };

    // distance
    const { hypotenuse } = calcDistance();
    const isMouseControlArea = hypotenuse < triggerDistance;
    setMouseControlArea(isMouseControlArea);
  };

  useEffect(() => {
    const cursorHandlerEvent = (e) => {
      cursorHandler(e);
    };

    document.addEventListener('mousemove', cursorHandlerEvent);
    return () => {
      document.removeEventListener('mousemove', cursorHandlerEvent);
    };
  }, []);

  return (
    <Wrap>
      <div
        className="cursor"
        onMouseMove={cursorHandler}
        style={{
          left: `${cursorPosition.left}px`,
          top: `${cursorPosition.top}px`,
        }}
      ></div>
      <div
        className={mouseControlArea ? 'target expanded' : 'target'}
        onMouseOver={targetHandler}
      ></div>
    </Wrap>
  );
};

export default Test;
