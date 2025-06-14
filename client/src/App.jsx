import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
      <Route index element={<IndexPage></IndexPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Route>
      
    </Routes>
  )

}

export default App
