import useCharacters from './hooks/useCharacters'
import ContentSection from '../../layouts/ContentSection'
import { Character } from '../../../types/Character'
import CharactersState from './components/CharactersWithState';
import SearchBar from './components/SearchBar';

interface CharactersProps {
  onSelectCharacter: (character: Character) => void;
}

export default function Characters ({ onSelectCharacter }: CharactersProps) {
  const {
    loading,
    error,
    characters,
    hasNext,
    handleNextPage,
    hasPrev,
    handlePrevPage,
    setQuery
  } = useCharacters()

  return (
    <ContentSection title="Personajes">
      <SearchBar onQueryChange={setQuery} />
      <CharactersState
        loading={loading}
        error={error}
        characters={characters}
        onCharacterClick={onSelectCharacter}
      />
      <div className="flex flex-col-reverse md:flex-row justify-between gap-4 mt-8">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors w-full block disabled:opacity-10"
          disabled={loading || !hasPrev}
          onClick={handlePrevPage}
        >
          Página anterior
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors w-full block disabled:opacity-10"
          disabled={loading || !hasNext}
          onClick={handleNextPage}
        >
          Página siguiente
        </button>
      </div>
    </ContentSection>
  )
}