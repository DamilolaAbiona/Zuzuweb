import React from 'react';
import '../styles/LearnMoreBtn.css';
import  play from "../Assets/Images/Play button.png"

const LearnMoreBtn = ({btn_text}) => {

  return (
    <div className='LearnMoreBtn_container'>
      <p className='LearnMoreBtn_containerp'>{btn_text}</p>


      
    </div>
    
  )
}

export default LearnMoreBtn