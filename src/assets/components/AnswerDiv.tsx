import React from 'react';

interface AnswerDivProps {
  src: string;
  className?: string;
}

const AnswerDiv: React.FC<AnswerDivProps> = (props) => {
return (
    <div className={`w-full flex justify-between my-10 border-gray-950 mx-20 rounded ${props.className || ''}`}>
               <div className='flex justify-center items-center'><img src={props.src} alt="" className="ml-2 h-10 w-auto" />
               <p className=' ml-2 text-white'>Точен одговор! Продолжи со исто темпо!</p></div>
          
        
        <button  className='text-white py-4 px-2 mr-2 my-5 rounded' style={{border: '1px solid white'}}>Продолжи</button>
 
    </div>
);
}

export default AnswerDiv;


