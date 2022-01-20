import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <main className="bg-black">
        <Nav />
        <section className="container mx-auto min-h-screen">
          {children}
        </section>
        <Footer />
      </main>
    </>
  )
}