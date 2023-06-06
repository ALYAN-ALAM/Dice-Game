import Score from "./Score"
import DiceSelector from "./DiceSelector"
import styled from "styled-components"
import DiceRole from "./DiceRole"
import { useState } from "react"
import {Button,OutlineButton} from "../styled/Button"
import ShowRules from "./ShowRules"


const Gamestart = ({SetStartGame}) => {
    //updateScore
  const [score,setscore] = useState(0)
  const [diceChange,setdiceChange] = useState(1)
  const [numberSelected,setnumberSelected] = useState();
  const [Error,setError] = useState()
  const [showRules,setShowRules] = useState(false)

  //Dice Selector:

  const diceSelector =(value) =>{
    setnumberSelected((prev)=> (value))
  }
  // Dicerole:
  const randomNumber = (min,max) =>{
      return Math.floor(Math.random() * (max-min) ) + min ;
     
  }

  const diceRoll = () =>{
    if (!numberSelected) {
      setError("You have not selected any number")
      return
    };
    
    const rndNum = randomNumber(1,7)
     
    setdiceChange((prev) => rndNum )
    console.log(numberSelected)
    console.log(rndNum)
    if( numberSelected === rndNum) {
      setscore((prev) => prev+2) ;
    
    } 
    else{
  
      setscore((prev) => prev-2);
    }
    setnumberSelected(undefined)

  }

  const resetScore = ()  =>{
    setscore(0)
  }
  


  return (
    <MainContainear>
      <div className="nav-section">
        <Score updatedScore={score}/>
        <DiceSelector setError={setError} Error={Error} numberSelected = {numberSelected} diceSelector = {diceSelector} />
      </div>
      <DiceRole diceRoll={diceRoll}  diceChange={diceChange} />
      <div className="bottom_section">

        <OutlineButton 
          onClick={resetScore}
        >Reset Score</OutlineButton>
        <OutlineButton onClick={()=>SetStartGame((prev)=> !prev)}>Exit Game</OutlineButton>
        <Button 
          onClick={() => setShowRules((prev) => !prev)}
        >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {
      showRules && <ShowRules/>
      }
      
    </MainContainear>
  )
}

export default Gamestart

const MainContainear = styled.div`
.nav-section{
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
  max-height: 120px;
}
.bottom_section{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

`;
