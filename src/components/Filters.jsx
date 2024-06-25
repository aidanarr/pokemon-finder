import "../styles/Filters.scss"
import PropTypes from "prop-types";

export const Filters = (props) => {

  const handleChange = (ev) => {
    const value = ev.target.value;

    // set message if there's no pkm
    props.setNoCharaMsg(`Huh, there's no Pokémon called ` + value + `.`);
    
    props.setValueInput(value);
  }

  // avoid reload with enter
  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  }

  return (
      <input className="input" type="text" id="name" onChange={handleChange} onKeyDown={handleKeyDown} value={props.valueInput} placeholder="Search here" />   
  )
}

Filters.propTypes = {
  setNoCharaMsg: PropTypes.func,
  setValueInput: PropTypes.func,
  valueInput: PropTypes.string,
};

export default Filters