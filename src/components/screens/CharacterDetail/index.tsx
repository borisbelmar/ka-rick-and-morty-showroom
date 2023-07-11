import type { Character } from "../../../types/Character" 
import ContentSection from "../../layouts/ContentSection"

interface CharacterDetailProps {
  character: Character
  onBackClick: () => void
}

export default function CharacterDetail ({ character, onBackClick }: CharacterDetailProps) {
  return (
    <ContentSection title={character.name}>
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full md:w-1/2"
          src={character.image}
          alt={character.name}
        />
        <div className="p-4 md:w-1/2">
          <h3 className="font-bold text-lg">Información</h3>
          <p className="text-gray-400">Especie: {character.species}</p>
        </div>
      </div>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors mt-8"
        onClick={onBackClick}
      >
        Volver
      </button>
    </ContentSection>
  )
}