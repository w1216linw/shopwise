import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../features/productApi/apiSlice";

const ItemDetail = () => {
  const { id } = useParams();
  const { data, isFetching, isSuccess } = useGetProductQuery(id?.slice(1));

  let body;
  if (isFetching) {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  } else if (isSuccess) {
    body = <div>{data.title}</div>;
  }

  return <div>{body}</div>;
};

export default ItemDetail;
