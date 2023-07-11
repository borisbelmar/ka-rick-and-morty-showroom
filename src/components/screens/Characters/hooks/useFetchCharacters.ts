import { useCallback, useState } from "react"
import { Character } from "../../../../types/Character"
import axios, { AxiosError } from "axios"

interface RequestPayload {
  results: Character[]
  info: {
    next: string | null
    prev: string | null
  }
}


export default function useFetchCharacters() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AxiosError | null>(null)
  const [hasNext, setHasNext] = useState(true)
  const [hasPrev, setHasPrev] = useState(false)

  const fetchCharacters = useCallback((page: number, query: string) => {
    setLoading(true)
    setError(null)
    axios.get<RequestPayload>(`https://rickandmortyapi.com/api/character?page=${page}&name=${query}`)
      .then(res => {
        setHasNext(!!res.data.info.next)
        setHasPrev(!!res.data.info.prev)
        setCharacters(res.data.results)
      })
      .catch((err: AxiosError) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return {
    characters,
    loading,
    error,
    fetchCharacters,
    hasNext,
    hasPrev
  }
}