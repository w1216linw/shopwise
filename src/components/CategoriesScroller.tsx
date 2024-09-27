import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../features/productApi/apiSlice";
import Scroller from "./base/Scroller";
import Status from "./status/status";

interface CategoriesScrollerProps {
  selected?: string;
}

const CategoriesScroller: React.FC<CategoriesScrollerProps> = ({
  selected,
}) => {
  const navigate = useNavigate();
  const { data, isFetching, isSuccess } = useGetCategoriesQuery(null);

  let body;
  console.log(data);
  if (isFetching) {
    return <Status status="loader" />;
  } else if (isSuccess && data.length > 1) {
    body = data.map((item: { name: string }, idx: number) => (
      <div
        className={`category ${selected === item.name ? "selected" : ""}`}
        onClick={() => {
          navigate(`/category/${item.name}`);
        }}
        key={idx}
      >
        {item.name}
      </div>
    ));
  } else {
    return <div>There is some wrong, try again later.</div>;
  }

  return <Scroller>{body}</Scroller>;
};

export default CategoriesScroller;
