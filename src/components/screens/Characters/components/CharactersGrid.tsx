import { Character } from "../../../../types/Character"
import CharacterCard from "./CharacterCard"

interface CharactersGridProps {
  characters: Character[]
  onItemClick: (character: Character) => void
}

export default function CharactersGrid ({ characters, onItemClick }: CharactersGridProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map(character => (
        <CharacterCard
          onClick={() => onItemClick(character)}
          key={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
    </ul>
  )
}