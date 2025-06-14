
import IndexPage from './pages/IndexPage'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route index element={<IndexPage></IndexPage>}></Route>
    </Routes>
  )

}

export default App
