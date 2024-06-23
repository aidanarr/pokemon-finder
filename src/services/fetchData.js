
// Función fetch

const fetchData = () => {
    return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((responseData) => {    
      // Map para rellenar un objeto con los datos que queremos sacar de cada elemento del array  
      const dataArray = responseData.results.map((chara) => {
        return {
          id: chara.id,
          episodes: chara.episode.length,
          name: chara.name,
          status: chara.status,
          species: chara.species,
          origin:chara.origin.name,
          image: chara.image
        };
      });
      return dataArray
    });
};

export default fetchData