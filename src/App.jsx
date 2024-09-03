import React from 'react'
import Home from './Pages/Home'
import "./styles/qr.css"
import "./styles/guide.css"
import "./styles/footer.css"
import "./App.css"
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
    </Router>
    </>
  )
}

export default App
