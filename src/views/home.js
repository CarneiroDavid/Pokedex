import InListPokemon from "../components/inListPokemon/inListPokemon";
import Layout from "../layouts/layouts"
import Pokemons from "../pokemon.json"


function Home() {
	console.log(Pokemons);
    return(
		<Layout>
			{Pokemons.map((p)=>{
				return (<InListPokemon pokemon={p}></InListPokemon>)
			})}
		</Layout>
    )
}

export default Home