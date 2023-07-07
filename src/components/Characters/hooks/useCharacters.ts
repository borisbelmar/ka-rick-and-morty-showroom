import axios, { type AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import type { Character } from '../../../types/Character'

export default function useCharacters () {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AxiosError | null>(null)

  useEffect(() => {
    setLoading(true)
    axios.get<{ results: Character[] }>('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
      .catch((err: AxiosError) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { characters, loading, error }
}
