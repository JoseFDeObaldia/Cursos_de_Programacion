import Link from "next/link";

const Label = ({pokemon}) => {
    const id = pokemon.url.split('/').filter(x => x).pop();
    return (
        <li>Conoce a: <Link href={`/pokemonAPI/${id}`}>{pokemon.name}</Link></li>
    );
}

const Pokemones = ({ pokemones }) => {
    return(
        <div>
            <h1>Pokemones</h1>
            <ul>
                {pokemones.map(pokemon => <Label pokemon={pokemon} key={pokemon.name}/>)}
            </ul>
        </div>
    );
}
export default Pokemones;

export const getStaticProps = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    
    return({
        props: { pokemones: data.results }
    });
}