import "../styles/Filters.scss"
import PropTypes from "prop-types";

const FilterGen = (props) => {

    const handleChange = (ev) => {
        const value = ev.target.value;
        props.setGeneration(parseInt(value));
    }

  return (
     <label className="select gen" htmlFor="status">gen: 
        <select className="select__box" name="status" id="status" value={props.generation} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </label>
  )
}

FilterGen.propTypes = {
  generation: PropTypes.number,
  setGeneration: PropTypes.func,
};

export default FilterGen