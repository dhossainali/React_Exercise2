import { Counter } from "./Counter"
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
      <Counter initialValue={0} countNumber={2}/>
    </>
  )
}

export default App
