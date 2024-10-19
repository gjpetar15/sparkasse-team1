import CustomButtons from "./CustomButtons";
import { useState } from "react";
import AnswerDiv from "./AnswerDiv";

export const Quiz = () => {

    const [step, setStep] = useState(0);



  if (step === 0) {  
return (
    <div className="flex flex-col items-center justify-center">
        <img className="my-10" src="src/assets/images/LOGO.png" alt="" />
        <h1 className="my-10 font-bold text-xl">Tи честитаме што стигна до овој важен момент!</h1>
        <p className="max-w-2xl my-5">Ова е последниот чекор пред да го потврдиш своето знаење.
            Одговори на 10-те прашања за да го завршиш курсот – со најмалку 7 точни одговори ќе добиеш сертификат,
            а ако точно одговориш на сите, те очекува сертификат со посебна ознака. Веруваме во тебе, дај сè од себе
            и покажи го твојот успех!</p>
        <CustomButtons
            name="Кон тестот"
            type="button"
            onButtonClick={() => setStep(step + 1)}
            className=" bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 px-10 " />
    </div>
)
}

if (step === 1) {
    
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-10 font-bold text-xl">Како е најдобро да се следат трошоците?</h2>
        <div className="flex flex-col w-full max-w-2xl">
          <button
            className="bg-transparent text-black py-2 my-2 rounded-lg hover:bg-gray-300 transition duration-300 px-10 border border-gray-300"
            onClick={() => {
              setStep(step + 1);
              setIsButtonDisabled(true);
            }}
            disabled={isButtonDisabled}
          >
            Не треба да се следат.
          </button>
          <button
            className="bg-transparent text-black py-2 my-2 rounded-lg hover:bg-gray-300 transition duration-300 px-10 border border-gray-300"
            onClick={() => {
              setStep(step + 1);
              setIsButtonDisabled(true);
            }}
            disabled={isButtonDisabled}
          >
            Преку пишување во тетратка.
          </button>
          <button
            className="bg-transparent text-black py-2 my-2 rounded-lg hover:bg-gray-300 transition duration-300 px-10 border border-gray-300"
            onClick={() => {
              setStep(step + 1);
              setIsButtonDisabled(true);
            }}
            disabled={isButtonDisabled}
          >
            Преку пишување во тетратка, ексел-табели или апликации за следење на буџетот.
          </button>
        </div>
        <AnswerDiv src="src/assets/images/correct.png" className="bg-red-600" />
      </div>
    );
  }
}

export default Quiz;
