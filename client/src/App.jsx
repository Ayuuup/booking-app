
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route index element={<IndexPage></IndexPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  )

}

export default App
