import "../styles/Filters.scss"
import PropTypes from "prop-types";

const FilterType = (props) => {

  const handleChange = (ev) => {
      const value = ev.target.value;
      props.setValueType(value);
  }

 // get all pkm types from current list
  const allTypes = props.pkmList === "error" ? false : props.pkmList.map((pkm) => {
    return pkm.types
  });
  const allTypesString = allTypes.toString().split(",");
 // remove duplicates
  const typesArray = allTypesString.filter((type, index) => { return allTypesString.indexOf(type) === index});

  return (
     <label className="select type" htmlFor="species">type: 
        <select className="select__box" name="species" id="species" value={props.valueType} onChange={handleChange}>
          <option value="">all</option>
          {typesArray.map((type, i) => {
            return <option key={i} value={type}>{type}</option>
            })}
        </select>
      </label>
  )
}

FilterType.propTypes = {
  valueType: PropTypes.string,
  setValueType: PropTypes.func,
  pkmList: PropTypes.array,
};

export default FilterType