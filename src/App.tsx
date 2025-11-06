import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Portfolio from './PortfolioPage'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
