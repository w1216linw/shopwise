import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>page not found</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
