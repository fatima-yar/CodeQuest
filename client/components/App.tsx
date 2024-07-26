import Header from './Header'

import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default App
