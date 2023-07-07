import CharacterCard from './components/CharacterCard'
import Loading from '../Loading'
import useCharacters from './hooks/useCharacters'

export default function Characters () {
  const { loading, error, characters } = useCharacters()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="mx-auto max-w-screen-lg p-4 w-full">
        <h2 className="text-2xl">Ups! Ha habido un error</h2>
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    )
  }

  if (!characters.length) {
    return (
      <div className="mx-auto max-w-screen-lg p-4 w-full">
        <h2 className="text-2xl">No hay personajes</h2>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          species={character.species}
        />
      ))}
    </ul>
  )
}