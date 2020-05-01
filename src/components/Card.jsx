import React from "react";
import { useSpring, animated } from "react-spring";
import "./Card.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card({ image }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 40 }
  }));
  return (
    <animated.img
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      src={image.webformatURL}
      alt=""
    />
  );
}

export default Card;
