import Navbar from "../common/Navbar"

interface BaseLayoutProps {
  children: React.ReactNode
}

export default function BaseLayout ({ children }: BaseLayoutProps) {
  return (
    <main className="bg-gray-950 min-h-screen text-white flex flex-col">
      <Navbar />
      {children}
    </main>
  )
}