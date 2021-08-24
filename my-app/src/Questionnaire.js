import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components'
import Button from "react-bootstrap/Button"

const StyledButton = styled(Button)`
 padding: 8px 16px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #6772e5;
  border: 1px solid #ffc0cb;
  &:hover {
    background-color: red;
  }
`;
const H3 = styled.div`
text-align: left;
`
function Questionnaire({question}){
    return (
        <div>
           <H3>{question.question}</H3>
           <StyledButton>{question.answer1}</StyledButton>
           <StyledButton>{question.answer2}</StyledButton>
           <StyledButton>{question.answer3}</StyledButton>
           <StyledButton>{question.answer4}</StyledButton>
        </div>
    )
}
export default Questionnaire;