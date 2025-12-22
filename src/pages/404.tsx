import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="p-24 font-sans text-[#232129]">
      <h1 className="mt-0 mb-16 max-w-xs text-4xl font-bold">Page not found</h1>
      <p className="mb-12">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className="text-[#8A6534] p-1 bg-[#FFF4DB] text-xl rounded">src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/" className="text-blue-600 underline">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
