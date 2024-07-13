import { createFileRoute } from '@tanstack/react-router'
import { getPokemon } from '../../api/pokemon'

export const Route = createFileRoute('/pokemon/$id')({
  component: Pokemon,
  loader: async ({ params }) => await getPokemon((parseInt(params.id) || 10))

})

function Pokemon() {
  const { id } = Route.useParams()
  const pokemon = Route.useLoaderData()
  console.log(pokemon)

  return (
    <div>
      <h1>
        {id} :

        {pokemon.name}</h1>
      <dl>
        <dt>description</dt>
        <dd>{pokemon.description}</dd>

      </dl>
    </div>
  )

}