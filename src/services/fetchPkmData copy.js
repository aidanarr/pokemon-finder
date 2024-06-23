

const fetchPkmData = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((responseData) => {    

      const pkmArray = responseData.results.map((pkm) => {
          return {
            name: pkm.name,
            url: pkm.url
          }
      });
    
      const fetchInfo = {
          next: responseData.next,
          previous: responseData.previous,
        }

      const dataArray = [pkmArray, fetchInfo]
    
    return dataArray
  });
};

export default fetchPkmData