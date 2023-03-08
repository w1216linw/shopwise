import React from "react";

interface IndicatorBtnProps {
  ids: number;
  selectedIdx: number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IndicatorButtons: React.FC<IndicatorBtnProps> = ({
  ids,
  selectedIdx,
  handleClick,
}) => {
  const btns: JSX.Element[] = [];

  for (let i = 1; i <= ids; i++) {
    btns.push(
      <button
        key={i}
        data-lable={i}
        aria-selected={selectedIdx === i ? true : false}
        onClick={(e) => handleClick(e)}
      ></button>
    );
  }

  return <>{btns}</>;
};

export default IndicatorButtons;
