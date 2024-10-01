# nyx-logger

- https://www.npmjs.com/nyx-pokemon

# Installation
To install Nyx Pokemon, use npm (Node Package Manager). Run the following command in your terminal:

Copy the code
npm install nyx-pokemon
How to use
Here's how to use Nyx Pokemon in your project:

```js
const PokeAPI = require('nyx-pokemon');

const pokeApi = new PokeAPI();

const pokemonName = 'pikachu';

pokeApi.getPokemon(pokemonName)
    .then(pokemon => {
        console.log(`Nom: ${pokemon.name}`);
        console.log(`ID: ${pokemon.id}`);
        console.log(`Taille: ${pokemon.height}`);
        console.log(`Poids: ${pokemon.weight}`);
        console.log(`Types: ${pokemon.types.join(', ')}`);
        console.log(`Statistiques:`);
        pokemon.stats.forEach(stat => {
            console.log(` - ${stat.name}: ${stat.value}`);
        });
        console.log(`Capacités: ${pokemon.abilities.join(', ')}`);
    })
    .catch(error => {
        console.error(error.message);
    });
```
# Contributions
Contributions are welcome! If you'd like to improve the module, don't hesitate to submit a pull request.

License
This project is licensed under the MIT license. See the LICENSE file for more information.
