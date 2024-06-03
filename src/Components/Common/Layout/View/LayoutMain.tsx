import React from 'react'

function LayoutMain({ children }: { children: React.ReactNode }) {
  return <main className="h-full overflow-auto max-h-[calc(100vh-10.313rem)]">{children}</main>
}

export default LayoutMain
