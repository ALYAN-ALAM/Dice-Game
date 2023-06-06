import styled from "styled-components"


const Score = ({updatedScore}) => {
  return (
    <Scorediv>
      <h1 >{updatedScore}</h1>
      <p>Total Score</p>
    </Scorediv>
  )
}

export default Score

const Scorediv = styled.div `
    
    
    max-width: 135px;
    
    text-align: center;
    
    h1{
        font-size: 100px;


        line-height: 80px;

    }
    p{
        font-weight: 500;
        font-size: 24px;
    }

`;