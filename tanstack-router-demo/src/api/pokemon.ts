type PokemonDetails = {
    id: number
    name: string
    description: string
}

export async function getPokemon(id: number): Promise<PokemonDetails> {
    const response = await fetch(`http://localhost:3001/pokemon/${id}`)
    return await response.json()

}