import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"


function App() {
  
  function onLogin(data) {
    console.log(data)
  }
  return (
    <>
      <InteractiveWelcome/>
      <Login onLogin={onLogin}/>
    </>
  )
}

export default App
