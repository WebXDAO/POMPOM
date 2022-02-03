import Navbar from '../components/landing/Navbar'
import Footer from '../components/landing/Footer'

export default function LandingLayout({ children }) {
  return (
    <div className="bg-white">
      <Navbar></Navbar>

      <main>
          {children}
      </main>

     <Footer></Footer>
    </div>
  )
}
