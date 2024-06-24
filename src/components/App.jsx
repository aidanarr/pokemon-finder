
import "../styles/App.scss"
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters.jsx"
import CharacterList from "./CharacterList.jsx"
import CharacterDetail from "./CharacterDetail.jsx"
import { useState, useEffect } from "react";
import fetchData from "../services/fetchData.js";
import fetchPkmData from "../services/fetchPkmData.js";
import fetchPkmDetail from "../services/fetchPkmDetail.js";
import NotFound from "./NotFound.jsx";
import FilterStatus from "./FilterStatus.jsx";
import FilterSpecies from "./FilterSpecies.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {


  const [charaList, setCharaList] = useState([]);
  const [noCharaMsg, setNoCharaMsg] = useState(null);
  const [valueInput, setValueInput] = useState("");
  const [valueType, setValueType] = useState("");
  const [generation, setGeneration] = useState(1);

  // POKEMON
  // pkm name and details url
  const [pkmList, setPkmList] = useState([]);

  useEffect(() => {
    fetchPkmData(generation).then((data) => setPkmList(data));
  }, [generation])


  // useEffect para sacar los datos del fetch y meterlos en la variable de estado al cargar la página
  useEffect(() => {
    fetchData().then((data) => setCharaList(data));
  }, []);

  // Variable que guarda el array aplicando los distintos filtros
  const filterPkm = pkmList.filter((pkm) => valueInput ? pkm.name.toLowerCase().includes(valueInput.toLowerCase()) : true).filter((pkm) => valueType ? pkm.types.includes(valueType) : true)
  
  const getPkmData = (parameter) => {
    // Buscamos el personaje que coincida dentro del array original para utilizarlo en el componente Detail
    const clickedPkm = pkmList.find((pkm) => pkm.id === parseInt(parameter));
    return clickedPkm
  }


  return (
    <>
    <Header />
    <main className="main">
      <Routes>
        <Route path="/" element={
          <>
            <form className="form">
              <Filters valueInput={valueInput} setValueInput={setValueInput} setNoCharaMsg={setNoCharaMsg} />
              <div className="form__select">
                <FilterStatus generation={generation} setGeneration={setGeneration} />
                <FilterSpecies pkmList={pkmList} valueType={valueType} setValueType={setValueType} />
              </div>
            </form>
            <CharacterList pkmList={filterPkm}/>
          </>
        }/>
        <Route path="/detail/:id" element={<CharacterDetail getPkmData={getPkmData} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Nos renderiza el texto de error en la búsqueda si el array del filtro está vacío */}
      {filterPkm.length === 0 ? <div className="no-chara"><p>{noCharaMsg}</p></div> : null}
    </main>
    <Footer />
    </>
  )
}

export default App
