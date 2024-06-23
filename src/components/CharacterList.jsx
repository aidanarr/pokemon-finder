import CharacterCard from "./CharacterCard"
import "../styles/CharacterList.scss"
import PropTypes from "prop-types";

export const CharacterList = (props) => {

  // Ordenamos el array alfabeticamente

  props.filterCharas.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    // Map que renderiza el componente CharacterCard con cada elemento del array de personajes

  return (
    <section className="list-box">
      {props.filterCharas.map((chara) => <CharacterCard key={chara.id} chara={chara} />)}
    </section>
  )
}

CharacterList.propTypes = {
  filterCharas: PropTypes.array,
};

export default CharacterList