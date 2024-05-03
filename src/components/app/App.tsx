import { ListOfUsers } from '../ListOfUsers/ListOfUsers'
import { CreateNewUser } from '../CreateNewUser/CreateNewUser'
import { Toaster } from 'sonner'
import './App.css'

function App() {
  return (
    <>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </>
  )
}

export default App
