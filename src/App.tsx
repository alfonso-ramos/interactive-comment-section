import CurrentUserComments from './components/CurrentUserComments'
import data from '../data.json'

function App() {

  const {currentUser, comments} = data

  return (
    <>
      <CurrentUserComments 
        currentUser={currentUser}
        comments={comments}
      />
    </>
  )
}

export default App
