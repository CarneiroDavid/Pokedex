import { useParams } from 'react-router-dom'
import Layout from '../layouts/layouts';
import InfoPokemon from '../pokemon.json';

export default function PokemonUnit() {
    const { id } = useParams();
    const found = InfoPokemon.filter(element => element.id == id);
    console.log(found);
    return (
        <div>
            <h1 className="text-center mb-4 mt-4">Fiche Pokémon</h1>
                <div className={"card flex-row type" + found[0].type[0]}>
                    <img className="card-img-left example-card-img-responsive mt-4" src={process.env.PUBLIC_URL + '../img/grande/' + id + '.webp'} />

                    <div className="card-body">
                        <h4 className="card-title h5 h4-sm">
                            Nom : {found[0].nom}
                        </h4>
                        <p className="card-text">PV de base : {found[0].pv}</p>
                        <p className="card-text">ATK de base : {found[0].stats["attaque"]}</p>
                        <p className="card-text">DEF de base : {found[0].stats["defense"]}</p>
                        <p className="card-text">ATK_SPE de base : {found[0].stats["att_spe"]}</p>
                        <p className="card-text">DEF_SPE de base : {found[0].stats["def_spe"]}</p>
                        <p className="card-text">Vitesse : {found[0].vitesse}</p>    
                        <p className="card-text">Type : {found[0].type + ''}</p>
                        
                    </div>
                </div>
        </div>

    )
}