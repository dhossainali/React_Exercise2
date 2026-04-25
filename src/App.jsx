import Container from "./Container"
import { Counter } from "./Counter"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"


function App() {
  
  function onLogin(data) {
    console.log(data)
  }
  return (
    <Container>
      <InteractiveWelcome/>
      <Login onLogin={onLogin}/>
      <Counter initialValue={0} countNumber={2}/>
    </Container>
  )
}

export default App
