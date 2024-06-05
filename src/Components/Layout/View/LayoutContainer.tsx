export default function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-screen min-h-screen p-5 duration-300 transition-all">
      {children}
    </div>
  )
}
