import { useParams } from 'react-router-dom'
import Layout from '../layouts/layouts';



// export default function Project(){
//     var projects = [
//     {nom:'Estudia', id:'1',descr:'plateforme de vie scolaire',img:{logo}},
//     {nom:'MaBoutique', id:'2',descr:'Boutique en ligne',img:{logo2}},
//     ]
//     console.log(projects);
//     const {id} = useParams()
//     const p = projects[id];
//     return <Project nom={p.nom} link={p.id} descr={p.descr} img={p.img}></Project>
// }  

export default function PokemonUnit(){
    const {id} = useParams();

    return <Layout></Layout>
}