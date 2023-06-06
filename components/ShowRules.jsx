import  styled  from "styled-components";

const ShowRules = () => {
  return (
    <Rules>
      <h2>How to play dice game</h2>
      <div>
        <li>Select any number</li>
        <li>Click on dice image</li>
      <li>After click on  dice  if selected number is equal to dice number you will get 2 points </li>
      <li>If you get wrong guess then  2 points will be dedcuted </li>
      </div>
    </Rules>
  )
}

export default ShowRules


const Rules = styled.div`
    margin: 10px auto 5px;
    border-radius: 10px;
    padding: 10px 20px;
    background: #FBF1F1;
    max-width: 700px;
    
    div{
        margin-top: 15px;
    }

`;