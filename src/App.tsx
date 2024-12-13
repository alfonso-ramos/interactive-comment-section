import CurrentUserComments from './components/CurrentUserComments'
import data from '../data.json'

function App() {

  return (
    <>
      <CurrentUserComments 
        image={data.currentUser.image.webp || data.currentUser.image.png}
        username={data.currentUser.username}
        />
    </>
  )
}

export default App
