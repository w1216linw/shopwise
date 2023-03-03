import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface RateStar {
  rate: number;
}

const RateStar: React.FC<RateStar> = ({ rate }) => {
  const filledStar = Math.floor(rate);
  const halfStar = Math.round(rate - Math.floor(rate));

  const stars: JSX.Element[] = [];

  for (let i = 0; i < filledStar; i++) {
    stars.push(<BsStarFill key={i} />);
  }
  if (halfStar > 0) {
    stars.push(<BsStarHalf key={stars.length} />);
  }
  for (let i = stars.length; i < 5; i++) {
    stars.push(<BsStar key={i} />);
  }

  return <div className="flex-group">{stars.map((s) => s)}</div>;
};

export default RateStar;
