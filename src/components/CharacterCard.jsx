import { Link } from "react-router-dom"
import "../styles/CharacterCard.scss"
import PropTypes from "prop-types";

export const CharacterCard = ({chara}) => {

  return (
    <>
    <Link to={`/detail/${chara.id}`} className="link">
      <article className="card">
        <img src={chara.image} />
        <p className="card__name">{chara.name.replaceAll("-", " ")}</p>
      </article>
    </Link>

    </>
  )
}

CharacterCard.propTypes = {
  chara: PropTypes.object,
};

export default CharacterCard