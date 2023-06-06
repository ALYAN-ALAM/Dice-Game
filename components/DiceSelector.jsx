import React, { useState } from 'react'
import styled from "styled-components"
const DiceSelector = ({setError,Error,numberSelected,diceSelector}) => {
  

  const diceArray = [1,2,3,4,5,6] ;
 const numberSelectHandler = (currElem) => {
  diceSelector(currElem)
  setError("")
 }

  return (

    <>
    <GameNav>
      <p className='error'>{Error}</p>
      <div className="flex">
      {
        
        diceArray.map((currElem,index)=>(
          <Box 
          isSelected={numberSelected===currElem}
          onClick={()=>numberSelectHandler(currElem)}
          key={index}
          
          >{currElem}</Box>

        ))
      }
      
      
      </div>
      <p>Select Number</p>
      </GameNav>
    </>
  )
}

export default DiceSelector

const Box = styled.div`
  width: 60px;
  height: 60px;
  color: black;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props)=>(props.isSelected ? "black":"white")};
  color: ${(props)=>(!props.isSelected ? "black":"white")}
`;
const GameNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error{
    color: red;
  }
 .flex{
  display: flex;
  flex-direction: row;
  gap: 20px;
 }
 p {
  font-size: 20px;
  font-weight: 700;
 }
`;