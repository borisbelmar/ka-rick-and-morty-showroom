import { Character } from "../../../../types/Character";
import Loading from "../../../common/Loading";
import CharactersEmpty from "./CharactersEmpty";
import CharactersError from "./CharactersError";
import CharactersGrid from "./CharactersGrid";

interface CharactersStateProps {
  loading: boolean
  error: Error | null
  characters: Character[]
  onCharacterClick: (character: Character) => void
}

export default function CharactersState ({
  loading,
  error,
  characters,
  onCharacterClick
}: CharactersStateProps) {
  if (loading && !characters.length) {
    return <Loading />
  }

  if (error) {
    return <CharactersError error={error} />
  }

  if (!characters.length) {
    return <CharactersEmpty />
  }

  return (
    <CharactersGrid
      characters={characters}
      onItemClick={onCharacterClick}
    />
  )
}