
const fetchPkmDetail = (id) => {

  return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
  .then((response) => response.json())
  .then((data) => {    

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

    const pkmInfo = {
      id: data.id,
      name: data.name,
      abilities: abilities,
      img: data.sprites.front_default,
      imgShiny: data.sprites.front_shiny,
      types: types,
      weight: data.weight / 10,
      stats: stats
    }

    return pkmInfo

  })
  .catch(err => {console.error('Request failed', err)})
};

export default fetchPkmDetail