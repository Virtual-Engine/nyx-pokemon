// PokeAPI.js
const axios = require('axios');

class PokeAPI {
    constructor() {
        this.baseURL = 'https://pokeapi.co/api/v2/pokemon';
    }

    async getPokemon(pokemonName) {
        try {
            const response = await axios.get(`${this.baseURL}/${pokemonName.toLowerCase()}`);
            return this.formatPokemonData(response.data);
        } catch (error) {
            if (error.response) {
                throw new Error(`Failed to fetch Pokémon data: ${error.response.status} - ${error.response.data.message}`);
            } else if (error.request) {
                throw new Error(`No response received: ${error.request}`);
            } else {
                throw new Error(`Error in request setup: ${error.message}`);
            }
        }
    }

    formatPokemonData(data) {
        return {
            name: data.name,
            id: data.id,
            height: data.height,
            weight: data.weight,
            types: data.types.map(typeInfo => typeInfo.type.name),
            stats: data.stats.map(statInfo => ({
                name: statInfo.stat.name,
                value: statInfo.base_stat
            })),
            abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name)
        };
    }
}

module.exports = PokeAPI;
