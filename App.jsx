import { useState } from "react"
import Gameplay from "./components/Gameplay"
import Gamestart from "./components/Gamestart"


 

  


const App = () => {
  const [startSame,SetStartGame] = useState(false);
  const toggleStartGame = () => {
    SetStartGame((prev) => !prev) 
    
    
  }


  return (
    <div>
     {
      startSame? <Gamestart SetStartGame={SetStartGame}/> :  <Gameplay toggle={toggleStartGame} />
     }
     
      
      
      
    </div>
  )
}

export default App
