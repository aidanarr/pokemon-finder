import CharacterCard from "./CharacterCard"
import "../styles/CharacterList.scss"
import PropTypes from "prop-types";

export const CharacterList = ({ pkmList }) => {

  // sort by id (descending)

  pkmList.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

    // map to render a card with each pokemon of the array

  return (
    <section className="list-box">
      {pkmList.map((chara) => <CharacterCard key={chara.id} chara={chara} />)}
    </section>
  )
}

CharacterList.propTypes = {
  pkmList: PropTypes.array,
};

export default CharacterList