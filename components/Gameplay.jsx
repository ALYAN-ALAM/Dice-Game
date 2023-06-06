import styled from "styled-components"
import {Button} from "../styled/Button.js"

const Gameplay = ({toggle}) => {
   

  return (
    
      <GameplayContainer>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className="main-content">

            <h1>
                Dice Game
            </h1>
            
            <Button
            onClick={toggle}
            >Play Game</Button>
        </div>
      </GameplayContainer>
    
  )
}

export default Gameplay

const GameplayContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 42px;
    font-weight: 700;
    .main-content{
        display: flex;
        flex-direction: column;
        gap: 2px;
        align-items: end;
        h1{
            margin: 0;
        }
    }
    
   
`;

