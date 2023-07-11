import { useEffect, useState } from 'react'
import useFetchCharacters from './useFetchCharacters'


export default function useCharacters () {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const {
    characters,
    loading,
    error,
    hasNext,
    hasPrev,
    fetchCharacters
  } = useFetchCharacters()

  const handleNextPage = () => {
    setPage(prev => {
      fetchCharacters(prev + 1, query)
      return prev + 1
    })
  }

  const handlePrevPage = () => {
    setPage(prev => {
      fetchCharacters(prev - 1, query)
      return prev - 1
    })
  }

  useEffect(() => {
    fetchCharacters(1, query)
    setPage(1)
  }, [fetchCharacters, query])

  return {
    characters,
    loading,
    error,
    handleNextPage,
    handlePrevPage,
    page,
    hasNext,
    hasPrev,
    query,
    setQuery
  }
}
