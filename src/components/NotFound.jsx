import { Link } from "react-router-dom"
import "../styles/NotFound.scss"
import notFoundImg from "../images/not-found.png"

const NotFound = () => {
  return (
    <div className="notfound">
      <p>Page not found</p>
      <img src={notFoundImg} />
      <Link to="/">
          <p className="notfound__return">← Return</p>
      </Link>
    </div>
  )
}

export default NotFound