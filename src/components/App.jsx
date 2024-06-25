
import "../styles/App.scss"
import { Route, Routes } from "react-router-dom";
import Filters from "./Filters.jsx"
import CharacterList from "./CharacterList.jsx"
import CharacterDetail from "./CharacterDetail.jsx"
import { useState, useEffect } from "react";
import fetchPkmData from "../services/fetchPkmData.js";
import NotFound from "./NotFound.jsx";
import FilterGen from "./FilterGen.jsx";
import FilterType from "./FilterType.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {


  const [loader, setLoader] = useState(true);
  const [noCharaMsg, setNoCharaMsg] = useState(null);
  const [valueInput, setValueInput] = useState("");
  const [valueType, setValueType] = useState("");
  const [generation, setGeneration] = useState(1);

  // POKEMON
  // pkm name and details url
  const [pkmList, setPkmList] = useState([]);

  useEffect(() => {
    const localGen = localStorage.getItem("gen");
    localGen ? setGeneration(localGen) : false;
    fetchPkmData(localGen ? localGen : generation).then(!loader ? setLoader(true) : false).then((data) => {
      setLoader(false);
      setPkmList(data)});
  }, [generation])

  // Array using pkmList applying filters
  const filterPkm = pkmList.filter((pkm) => valueInput ? pkm.name.toLowerCase().includes(valueInput.toLowerCase()) : true).filter((pkm) => valueType ? pkm.types.includes(valueType) : true)
  
  const getPkmData = (parameter) => {
    // Get pkm that matches with pkmList to use in Detail component
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
                <FilterGen generation={generation} setGeneration={setGeneration} />
                <FilterType pkmList={pkmList} valueType={valueType} setValueType={setValueType} />
              </div>
            </form>
            <CharacterList loader={loader} pkmList={filterPkm}/>
          </>
        }/>
        <Route path="/detail/:id" element={<CharacterDetail loader={loader} getPkmData={getPkmData} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Render error text */}
      {filterPkm.length === 0 ? <div className="no-chara"><p>{noCharaMsg}</p></div> : null}
    </main>
    <Footer />
    </>
  )
}

export default App
