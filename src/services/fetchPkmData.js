

const fetchPkmData = (generation) => {
    return fetch("https://pokeapi.co/api/v2/generation/" + generation)
    .then((response) => response.json())
    .then((responseData) => {    
      //gets list of pokemon by genration
      const pkmArray = responseData.pokemon_species.map((pkm) => {
        //the sixth element in that url is the pkm id
          const split = pkm.url.split("/");
          const pkmId = split[6];
          return {
            name: pkm.name,
            id: pkmId
          }
      });
      // fetch pkm details using pkm id, use map to get an array of all pkm
      return Promise.all(pkmArray.map((pkm) => {
        return fetch("https://pokeapi.co/api/v2/pokemon/" + pkm.id)
        .then((response) => response.json())
        .then((data) => {
          return data
        })
      }));
     
  }).then((data) =>  {    
    // another map to clean the fetched info
    const pkmArrayClean = data.map((data) => {
      const types = data.types.map((info) => {
        return info.type.name
      });
    
    const abilities = data.abilities.map((info) => {
      return info.ability.name
    });

    const stats = data.stats.map((info) => {
      return {
        stat: info.stat.name,
        base_stat: info.base_stat
      }
    });

    // final object
    const pkmInfo = {
      id: data.id,
      name: data.name,
      abilities: abilities,
      image: data.sprites.front_default,
      imgShiny: data.sprites.front_shiny,
      types: types,
      weight: data.weight / 10,
      stats: stats,
      pokedex: data.order
    }

    return pkmInfo
    })
    
    
    return pkmArrayClean

  }).catch(err => {console.error('Request failed', err)})
};

export default fetchPkmData