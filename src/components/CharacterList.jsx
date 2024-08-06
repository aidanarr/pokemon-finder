import CharacterCard from "./CharacterCard"
import "../styles/CharacterList.scss"
import PropTypes from "prop-types";

export const CharacterList = ({ pkmList, loader }) => {

  //remove undefined elements
  const pkmListCopy = pkmList.filter((element) => element !== undefined);

  pkmListCopy.push()

  // sort by id (descending)
  pkmListCopy.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

  return (
    <>
      <div className="loader-box">
        <div className={`loader-list ${!loader ? "hidden" : ""}`}></div>
      </div>
      <section className="list-box">
        {pkmListCopy.map((chara) => <CharacterCard key={chara.id} chara={chara} />)}
      </section>
    </>
  )
}

CharacterList.propTypes = {
  pkmList: PropTypes.array,
  loader: PropTypes.bool
};

export default CharacterList