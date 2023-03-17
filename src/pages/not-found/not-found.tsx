import { Link } from "react-router-dom";
import './not-found.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 Not Found !!.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NotFound;