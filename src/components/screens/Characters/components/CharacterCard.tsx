interface CharacterCardProps {
  name: string
  species: string
  image: string
  onClick: () => void
}

export default function CharacterCard ({
  name,
  species,
  image,
  onClick
}: CharacterCardProps) {
  return (
    <li
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-full h-64 object-cover object-center"
        src={image}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-400">{species}</p>
      </div>
    </li>
  )
}