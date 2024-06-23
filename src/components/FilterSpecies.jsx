import "../styles/Filters.scss"
import PropTypes from "prop-types";

const FilterSpecies = (props) => {

  const handleChange = (ev) => {
      const value = ev.target.value;
      props.setValueSpecies(value);
  }

  return (
     <label className="select" htmlFor="species">Species: 
        <select className="select__box" name="species" id="species" value={props.valueSpecies} onChange={handleChange}>
          <option value="">all</option>
          <option value="Human">Human 🙋‍♀️</option>
          <option value="Alien">Alien 👽</option>
        </select>
      </label>
  )
}

FilterSpecies.propTypes = {
  valueSpecies: PropTypes.string,
  setValueSpecies: PropTypes.func,
};

export default FilterSpecies