import React from "react";
import AdviceCard from "./AdviceCard"
import Questionnaire from "./Questionnaire";

function Home({brands, questions}){
  
    return(
        <div>
        
           {questions.map((question)=> (<Questionnaire key={question.id} question={question}/>))}
           {brands.map((brand)=> (<AdviceCard key={brand.id} brand={brand}/>))}
      
        </div>
    )
}
export default Home;