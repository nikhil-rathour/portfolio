import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import StarsCanvas from './components/StarsCanvas' // Adjust the import path as needed

function Layout() {
  return (
    <>
   <div className="stars-background">
  <StarsCanvas />
</div>

<div className="content-wrapper">
  <Header />
  <main className="content-section">
    <Outlet />
  </main>
  <Footer />
</div></>
  )
}

export default Layout