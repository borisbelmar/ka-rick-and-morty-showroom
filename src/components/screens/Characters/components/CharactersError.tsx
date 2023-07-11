interface CharactersErrorProps {
  error: Error
}

export default function CharactersError ({ error }: CharactersErrorProps) {
  return (
    <div className="mx-auto max-w-screen-lg p-4 w-full">
      <h2 className="text-2xl">Ups! Ha habido un error</h2>
      <p className="text-red-500">Error: {error.message}</p>
    </div>
  )
}