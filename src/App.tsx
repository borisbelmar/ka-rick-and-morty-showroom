import Characters from "./components/Characters"
import ContentSection from "./components/ContentSection"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="bg-gray-950 min-h-screen text-white flex flex-col">
      <Navbar />
      <ContentSection title="Characters">
        <Characters />
      </ContentSection>
    </main>
  )
}

export default App
