import axios from 'axios'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AccountPage from './pages/Account'
import {Routes,Route} from 'react-router-dom'
import { UserContextProvider } from './UserContext'
function App() {
  //define a base uri
  axios.defaults.baseURL= "http://127.0.0.1:4000"
  axios.defaults.withCredentials = true

  return (

    <UserContextProvider>

      <Routes>
        <Route path='/' element={<Layout></Layout>}>
        <Route index element={<IndexPage></IndexPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/account' element={<AccountPage></AccountPage>}></Route>
        </Route>
        
      </Routes>
    </UserContextProvider>
   

  )

}

export default App
