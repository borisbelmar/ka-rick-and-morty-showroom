import { useRef } from 'react'

interface SearchBarProps {
  onQueryChange: (query: string) => void
}

export default function SearchBar({
  onQueryChange
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const searchTimeout = useRef<number>()

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => {
      onQueryChange(event.target.value)
    }, 500)
  }
  
  return (
    <div className="flex items-center justify-center mb-4">
      <input
        ref={inputRef}
        className="border border-gray-600 bg-gray-900 rounded-lg px-4 py-2 w-full"
        placeholder="Buscar..."
        type="text"
        onChange={handleInputChange}
      />
    </div>
  )
}