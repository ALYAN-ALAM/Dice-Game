import { useState } from "react"
import  styled  from "styled-components"

const DiceRole = ({diceRoll,diceChange}) => {
   
  return (
    <DiceContainer>
    <div className="roll_dice" onClick={diceRoll}>
      <img src={`/images/dice_${diceChange}.png`} alt="" />
    </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default DiceRole

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    .roll_dice{
        img{
            width: 150px;
            height: 150px;
        }
        cursor: pointer;
    }
    p{
        font-size:18px;
        font-weight: 500;
    }

`;