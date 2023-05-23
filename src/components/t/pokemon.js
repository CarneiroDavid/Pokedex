import { Link } from "react-router-dom"

const Pokemon = ({ img, nom, type, descr,id }) => {
	return (
		<div className='projet-container'>
			<h3 className='projet-title'>{nom}</h3>
			<p className='projet-descr'>{descr}</p>
			<p>{type}</p>
			<img className='projet-img' src={img} alt={nom} />
            <br></br>
			<Link className='projet-link' to={'/project/'+id} >
				GO
			</Link>
		</div>
	)
}

export default Pokemon
