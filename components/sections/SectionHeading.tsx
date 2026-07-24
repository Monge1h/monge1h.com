export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-white">{children}</h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-kiwi" />
    </div>
  )
}
