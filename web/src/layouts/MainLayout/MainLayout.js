import Footer from 'src/components/Footer/Footer'
import Nav from 'src/components/Nav/Nav'

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="wrapper">
        <header>
          <Nav />
        </header>
        <main className="container mx-auto px-8">{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
