import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h3>404 - Page Not Found</h3>
      <h4>Sorry, the page you are looking for does not exist.</h4>
      <Link to="/" className="link">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
