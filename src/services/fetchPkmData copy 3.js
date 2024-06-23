

const fetchPkmData = (generation) => {
    return fetch("https://pokeapi.co/api/v2/generation/" + generation)
    .then((response) => response.json())
    .then((responseData) => {    
      
      const pkmArray = responseData.pokemon_species.map((pkm) => {
          const split = pkm.url.split("/");
          const pkmId = split[6];
          return {
            name: pkm.name,
            id: pkmId
          }
      });

      return Promise.all(pkmArray.map((pkm) => {
        return fetch("https://pokeapi.co/api/v2/pokemon/" + pkm.id)
        .then((response) => response.json())
        .then((data) => {
          return data
        })
      }));
     
  }).then((data) => console.log(data))
};

export default fetchPkmData