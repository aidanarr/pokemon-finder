

const fetchPkmData = (generation) => {
    return fetch("https://pokeapi.co/api/v2/generation/" + generation)
    .then((response) => response.json())
    .then((responseData) => {    
      
      const pkmArray = responseData.pokemon_species.map((pkm) => {
          return {
            name: pkm.name,
            url: pkm.url
          }
      });

    return pkmArray
  });
};

export default fetchPkmData