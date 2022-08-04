import Image from 'next/image';
import Link from 'next/link';

const Pokemon= ( {data} ) => {
    return(
        <>
            <h1>{data.name}, numero #{data.id}</h1>
            <Image src={data.sprites.front_default} width={100} height={100}/>
            <Link href="/pokemonAPI/">Volver al Inicio</Link>
        </>
    );
}
export default Pokemon;

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json();

    return ({props: { data }});
}

export const getStaticPaths = async () => {
    const paths = [
        { params: { id: '1' }},
        { params: { id: '2' }},
    ]

    return {
        paths,
        fallback: 'blocking',
    }
}

/*export const getServerSideProps = async ({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json();

    return ({props: { data }});
}*/