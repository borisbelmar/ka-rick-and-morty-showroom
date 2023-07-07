interface CharacterCardProps {
  name: string;
  species: string;
}

export default function CharacterCard ({
  name,
  species
}: CharacterCardProps) {
  return (
    <li className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl">{name}</h3>
        <p className="text-gray-400">{species}</p>
      </div>
    </li>
  )
}