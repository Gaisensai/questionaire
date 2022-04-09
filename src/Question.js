import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const Question = ({id, info, title}) => {
 const [moreInfo, setMoreInfo]= useState(false);


    return (
        <section className='question'>
        <header>
            <h4>{title}</h4>
                <button className='btn' onClick={() => { setMoreInfo(!moreInfo) }}>
                    {moreInfo?<AiOutlineMinus />:<AiOutlinePlus />}
                </button>
        </header>
            <p>{moreInfo?info:''}</p>
            
               
                
        
        </section>
    )
};

export default Question;