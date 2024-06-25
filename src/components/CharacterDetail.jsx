import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import "../styles/CharacterDetail.scss"
import PropTypes from "prop-types";
import NotFound from "./NotFound";

export const CharacterDetail = ({getPkmData, loader}) => {

  // Find pkm id with useParams
  const {id} = useParams();

  // save pkm data
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

  const renderNotFound = () => {
    if (loader) {
      return <div className="loader-box detail-page">
       <div className="loader-list"></div>
      </div>
    } else {
      return <NotFound />
    }
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
        </> : renderNotFound() }
    </>
    
  )
}

CharacterDetail.propTypes = {
  getPkmData: PropTypes.func,
  loader: PropTypes.bool,
};

export default CharacterDetail
