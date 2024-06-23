import "../styles/Filters.scss"
import PropTypes from "prop-types";

const FilterStatus = (props) => {

    const handleChange = (ev) => {
        const value = ev.target.value;
        props.setValueStatus(value);
    }

  return (
     <label className="select" htmlFor="status">Status: 
        <select className="select__box" name="status" id="status" value={props.valueStatus} onChange={handleChange}>
          <option value="">all</option>
          <option value="Alive">Alive 🕊️</option>
          <option value="Dead">Dead 💀</option>
          <option value="unknown">Unknown ❓</option>
        </select>
      </label>
  )
}

FilterStatus.propTypes = {
  valueStatus: PropTypes.string,
  setValueStatus: PropTypes.func,
};

export default FilterStatus