interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentSection ({ title, children }: ContentSectionProps) {
  return (
    <div className="mx-auto max-w-screen-lg p-4 w-full">
      <h2 className="text-2xl">{title}</h2>
      <section className="mt-4">
        {children}
      </section>
    </div>
  )
}