import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../features/productApi/apiSlice";
import Scroller from "./Scroller";

interface CategoriesScrollerProps {
  selected?: string;
}

const CategoriesScroller: React.FC<CategoriesScrollerProps> = ({
  selected,
}) => {
  const navigate = useNavigate();
  const { data, isFetching, isSuccess } = useGetCategoriesQuery(null);

  let body;
  if (isFetching) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  } else if (isSuccess) {
    body = data.map((cate: string) => (
      <div
        className={`category ${selected === cate ? "selected" : ""}`}
        onClick={() => {
          navigate(`/category/${cate}`);
        }}
        key={cate}
      >
        {cate}
      </div>
    ));
  }

  return <Scroller>{body}</Scroller>;
};

export default CategoriesScroller;
