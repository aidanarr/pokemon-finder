
import "../styles/NotFound.scss"
import notFoundImg from "../images/not-found.png"

const Error = () => {

    const handleClick = () => {
        window.location.reload();
    }

  return (
    <div className="notfound">
      <p>Oops, this page could not load.</p>
      <img src={notFoundImg} />
          <p onClick={handleClick} className="notfound__return">Try again</p>
    </div>
  )
}

export default Error