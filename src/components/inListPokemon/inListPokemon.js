
export default function InListPokemon({pokemon}){
    return (
        <div className="inlist-container">
            <p className="inlist-id">{pokemon.id}</p>
            <img className="inlist-img" src={process.env.PUBLIC_URL+"/img/pokemon-mini/"+pokemon.id+".webp"} alt={pokemon.nom}/>
            <h5 className="inlist-name">{pokemon.nom}</h5>
            <div className="inlist-type">
                {pokemon.type.map((t)=>{
                    return <div className={t}><p>{t}</p></div>
                })}
            </div>
        </div>
    )
}