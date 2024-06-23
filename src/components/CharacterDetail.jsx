import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import "../styles/CharacterDetail.scss"
import PropTypes from "prop-types";

export const CharacterDetail = ({getCharaData}) => {

  // Con useParams averiguamos el name del personaje de la ruta dinámica
  const {id} = useParams();

  // Guardamos los datos del personaje en una variable usando la función getCharaData
  const data = getCharaData(id);

  return (
    <>
      {data ?  <><div className="detail">
        <article className="detail__card">
          <img src={data.image} />
          <div className="detail__card--info">
            <p className="card-name">{data.name}</p>
            <p>Status: {data.status}</p>
            <p>Species: {data.species}</p>
            <p>Origin: {data.origin}</p>
            <p>Episodes: {data.episodes}</p>
          </div>
        </article>
        </div>
        <Link className="return" to="/">
          <div className="return__box">
            <p className="return__box--text">← Back</p>
          </div>
        </Link></> : <NotFound />}
    </>
    
  )
}

CharacterDetail.propTypes = {
  getCharaData: PropTypes.func,
};

export default CharacterDetail