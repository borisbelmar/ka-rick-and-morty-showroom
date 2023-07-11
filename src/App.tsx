import { useState } from "react"
import BaseLayout from "./components/layouts/BaseLayout"
import Characters from "./components/screens/Characters"
import { Character } from "./types/Character"
import CharacterDetail from "./components/screens/CharacterDetail"

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

  const handleBack = () => {
    setSelectedCharacter(null)
  }

  return (
    <BaseLayout>
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} onBackClick={handleBack} />
      ) : (
        <Characters onSelectCharacter={setSelectedCharacter} />
      )}
    </BaseLayout>
  )
}

export default App
