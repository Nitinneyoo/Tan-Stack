type PokemonDetails = {
    id: number
    name: string
    description: string
}

export async function getPokemon(id: number): Promise<PokemonDetails> {
    const response = await fetch(`http://localhost:3001/pokemon/${id}`)
    return await response.json()

}

type Pokemon = {
    id: string;
    name: string;
};

export async function getPokemonList(): Promise<Pokemon[]> {
    const response = await fetch('http://localhost:3001/pokemon');
    const data = await response.json();

    return data.results.map((r: { name: string; url: string }) => {
        const id = r.url.split('/').slice(-2, -1)[0];
        return {
            id: id,
            name: r.name,
        };
    });
}
