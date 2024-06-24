import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import "../styles/CharacterDetail.scss"
import PropTypes from "prop-types";

export const CharacterDetail = ({getPkmData}) => {

  // Con useParams averiguamos el name del personaje de la ruta dinámica
  const {id} = useParams();

  // Guardamos los datos del personaje en una variable usando la función getPkmData
  const data = getPkmData(id);

  const renderStats = (data) => {
    const statList = data.map((stat, i) => {
      return <p key={i}>{stat.stat}: {stat.base_stat}</p>
    })

    return statList
  }

  return (
    <>
      {data ?  <><div className="detail">
        <article className="detail__card">
          <div>
            <img src={data.image} />
            <p>Normal</p>
          </div>
          <div>
            <img src={data.imgShiny} />
            <p>Shiny</p>
          </div>
          <div className="detail__card--info">
            <p className="card-name">{data.name}</p>
            <p>Pokédex entry: {data.pokedex}</p>
            <p>Type(s): {data.types[0]}{data.types[1] ? ", " + data.types[1] : false}</p>
            <p>Abilities: {data.abilities[0]}
              {data.abilities[1] ? ", " + data.abilities[1] : false}
              {data.abilities[2] ? ", " + data.abilities[2] : false}</p>
            <p>Weight: {data.weight} kg</p>
            <div>
              <p>Base stats: </p>
              <div>{renderStats(data.stats)}</div>
            </div>
            
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
  getPkmData: PropTypes.func,
};

export default CharacterDetail