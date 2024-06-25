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

  const renderStatName = (data) => {
    const statList = data.map((stat, i) => {
      return <p key={i}>{stat.stat}:</p>
    })

    return statList
  }

  const renderStatValue = (data) => {
    const statList = data.map((stat, i) => {
      return <p key={i}>{stat.base_stat}</p>
    })

    return statList
  }


  return (
    <>
    {data ?  <>
        <div className="detail">
          <article className="detail__card">
            <p className="card-name">{data.name}</p>
            <p className="card-pokedex">Pokédex entry #{data.pokedex}</p>
            <div className="detail__card--sprites">
              <div>
                <img src={data.image} />
                <p>Normal</p>
              </div>
              <div>
                <img src={data.imgShiny} />
                <p>Shiny</p>
              </div>
            </div>

            <div className="detail__card--info">
              <div className="info-name">
                <p>Type(s):</p>
                <p>Abilities:</p>
                <p>Weight:</p>
              </div>

              <div className="info-values">
                <p>{data.types[0]}{data.types[1] ? ", " + data.types[1] : false}</p>
                <p>{data.abilities[0]}
                  {data.abilities[1] ? ", " + data.abilities[1] : false}
                  {data.abilities[2] ? ", " + data.abilities[2] : false}</p>
                <p>{data.weight} kg</p>
              </div>
            </div>  
            <div className="stats">
                <p className="stats__title">Base stats:</p>
                <div>{renderStatName(data.stats)}</div>
                <div>{renderStatValue(data.stats)}</div>
            </div>
          </article>
          </div>
          <Link className="return" to="/">
            <div className="return__box">
              <p className="return__box--text">← Back</p>
            </div>
          </Link>
        </> : <><div className="loader-box detail-page">
            <div className="loader-list"></div>
          </div></>}
    </>
    
  )
}

CharacterDetail.propTypes = {
  getPkmData: PropTypes.func,
};

export default CharacterDetail

/*  */