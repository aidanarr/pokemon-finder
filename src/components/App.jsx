import "../styles/App.scss"
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters.jsx"
import CharacterList from "./CharacterList.jsx"
import CharacterDetail from "./CharacterDetail.jsx"
import { useState, useEffect } from "react";
import fetchData from "../services/fetchData.js";
import NotFound from "./NotFound.jsx";
import FilterStatus from "./FilterStatus.jsx";
import FilterSpecies from "./FilterSpecies.jsx";
import Header from "./Header.jsx";

function App() {

  // Variables de estado
  const [charaList, setCharaList] = useState([]);
  const [noCharaMsg, setNoCharaMsg] = useState(null);
  const [valueInput, setValueInput] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const [valueSpecies, setValueSpecies] = useState("");

  // useEffect para sacar los datos del fetch y meterlos en la variable de estado al cargar la página
  useEffect(() => {
    fetchData().then((data) => setCharaList(data));
  }, []);


  // Variable que guarda el array aplicando los distintos filtros
  const filterCharas = charaList.filter((chara) => valueInput ? chara.name.toLowerCase().includes(valueInput.toLowerCase()) : true).filter((chara) => valueStatus ? valueStatus === chara.status : true).filter((chara) => valueSpecies ? valueSpecies === chara.species : true)

  
  const getCharaData = (parameter) => {
    // Buscamos el personaje que coincida dentro del array original para utilizarlo en el componente Detail
    const clickedChara = charaList.find((chara) => chara.id === parseInt(parameter));
    return clickedChara
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
                <FilterStatus valueStatus={valueStatus} setValueStatus={setValueStatus} />
                <FilterSpecies valueSpecies={valueSpecies} setValueSpecies={setValueSpecies} />
              </div>
            </form>
            <CharacterList filterCharas={filterCharas}/>
          </>
        }/>
        <Route path="/detail/:id" element={<CharacterDetail getCharaData={getCharaData} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Nos renderiza el texto de error en la búsqueda si el array del filtro está vacío */}
      {filterCharas.length === 0 ? <div className="no-chara"><p>{noCharaMsg}</p></div> : null}
    </main>
    </>
  )
}

export default App
