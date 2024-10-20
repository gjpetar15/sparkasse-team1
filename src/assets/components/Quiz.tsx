import { useState, useEffect } from "react";
import CustomButtons from "./CustomButtons";
import AnswerDiv from "./AnswerDiv";

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswerDiv, setShowAnswerDiv] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // List of questions with answers and correct answer index
  const questions = [
    {
      question: "Како е најдобро да се следат трошоците?",
      answers: [
        "Не треба да се следат.",
        "Преку пишување во тетратка.",
        "Преку пишување во тетратка, ексел-табели или апликации за следење на буџетот.",
      ],
      correctAnswer: 2,
    },
    {
      question: "Што е „штеден фонд за итни ситуации“?",
      answers: [
        "Фонд за купување луксузни предмети.",
        "Фонд за покривање на непредвидени трошоци, како медицински трошоци.",
        "Сметка за секојдневни трошоци.",
      ],
      correctAnswer: 1,
    },
    {
      question: "Зошто е важно да се одржува добра кредитна историја?",
      answers: [
        "За да се има повеќе долгови.",
        "За да се добијат подобри услови при земање кредити или хипотеки.",
        "За да се избегнат трошоци за кредитни картички.",
      ],
      correctAnswer: 1,
    },
    {
      question: "Кој е најдобриот начин да се избегнат импулсивни купувања?",
      answers: [
        "Со создавање на список пред да се оди во продавница.",
        "Со купување што повеќе кога има попусти.",
        "Со игнорирање на сите рекламни понуди.",
      ],
      correctAnswer: 0,
    },
    {
      question: "Како е најдобро да се инвестираат парите?",
      answers: [
        "Инвестирање во една акција која е многу популарна.",
        "Диверзифицирање на инвестициите во различни фондови, акции и недвижности.",
        "Задржување на сите пари на тековна сметка.",
      ],
      correctAnswer: 1,
    },
    {
      question: "Кој е најдобриот начин да се намалат долговите?",
      answers: [
        "Со плаќање на минималната сума секој месец.",
        "Со избегнување на повеќе кредити и фокусирање на еден по еден долг.",
        "Со земање на нови кредити за покривање на старите.",
      ],
      correctAnswer: 1,
    },
    {
      question: "Што значи терминот „животен стандард“?",
      answers: [
        "Трошоци за живот кои ги споредуваш со трошоците на другите.",
        "Мерка на минималните трошоци потребни за одржување на одреден начин на живот.",
        "Вкупната сума на пари која треба да се потроши месечно.",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Кој е најбезбеден начин да се чува финансиските податоци онлајн?",
      answers: [
        "Со чување на лозинките во нотес на мобилниот телефон.",
        "Со користење на двостепена автентикација и силни лозинки.",
        "Со испраќање на лозинките по е-пошта за секој случај.",
      ],
      correctAnswer: 1,
    },
    {
      question: "Што е инвестиционен фонд?",
      answers: [
        "Организација која собира пари од многу инвеститори за да купи акции и обврзници.",
        "Фонд кој служи само за купување недвижности.",
        "Фонд кој инвестира само во една компанија.",
      ],
      correctAnswer: 0,
    },
    {
      question: "Зошто е важно да се постават финансиски цели?",
      answers: [
        "За да можеш да трошиш повеќе пари во иднина.",
        "За да се создаде план и да се мотивира заштедата и инвестирањето.",
        "За да се избегне стресот поврзан со парите.",
      ],
      correctAnswer: 1,
    },
  ];

  const handleAnswer = (correct: boolean, answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setIsCorrect(correct);
    setIsButtonDisabled(true);
    setShowAnswerDiv(true);

    // Automatically proceed to the next question after 2 seconds
    setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    setIsButtonDisabled(false);
    setSelectedAnswer(null);
    setShowAnswerDiv(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Custom Stepper */}
      <div className="w-full max-w-4xl flex justify-center my-6">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`flex-1 text-center px-2 py-2 border-b-4 ${
              step - 1 === index
                ? "border-blue-500"
                : step - 1 > index
                ? "border-green-500"
                : "border-gray-300"
            } ${step - 1 >= index ? "text-blue-500" : "text-gray-500"}`}
          >
            {step - 1 > index ? "✔️" : index + 1}
          </div>
        ))}
      </div>

      {/* Introduction */}
      {step === 0 && (
        <div className="flex flex-col items-center justify-center">
          <img className="my-10" src="src/assets/images/LOGO.png" alt="Logo" />
          <h1 className="my-10 font-bold text-xl">
            Tи честитаме што стигна до овој важен момент!
          </h1>
          <p className="max-w-2xl my-5">
            Ова е последниот чекор пред да го потврдиш своето знаење. Одговори
            на 10-те прашања за да го завршиш курсот – со најмалку 7 точни
            одговори ќе добиеш сертификат, а ако точно одговориш на сите, те
            очекува сертификат со посебна ознака. Веруваме во тебе, дај сè од
            себе и покажи го твојот успех!
          </p>
          <CustomButtons
            name="Кон тестот"
            type="button"
            onButtonClick={() => setStep(step + 1)}
            className="bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 px-10"
          />
        </div>
      )}

      {/* Question Steps */}
      {step >= 1 && step <= questions.length && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-10 font-bold text-xl">
            {questions[step - 1].question}
          </h2>
          <div className="flex flex-col w-full max-w-2xl">
            {questions[step - 1].answers.map((answer, index) => (
              <button
                key={index}
                className={`py-2 my-2 rounded-lg transition duration-300 px-10 border ${
                  selectedAnswer === index
                    ? index === questions[step - 1].correctAnswer
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-300 hover:bg-gray-300"
                }`}
                onClick={() =>
                  handleAnswer(
                    index === questions[step - 1].correctAnswer,
                    index
                  )
                }
                disabled={isButtonDisabled}
              >
                {answer}
              </button>
            ))}
          </div>
          {showAnswerDiv && (
            <div className="mt-5 flex justify-center gap-5">
              <AnswerDiv
                src={
                  isCorrect
                    ? "src/assets/images/correct.png"
                    : "src/assets/images/incorrect.png"
                }
                className={isCorrect ? "bg-green-600" : "bg-red-600"}
              />
            </div>
          )}
        </div>
      )}

      {/* Final Completion Step */}
      {step > questions.length && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="my-10 font-bold text-xl">
            Честитки, го заврши тестот!
          </h2>
          <p className="max-w-2xl my-5">
            Со одговарање на сите прашања, ти си подготвен/а за следниот чекор.
            Погледни го сертификатот и сподели го својот успех!
          </p>
          <CustomButtons
            name="Погледни го сертификатот"
            type="button"
            onButtonClick={() =>
              alert("Сертификатот ќе биде достапен наскоро!")
            }
            className="bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 px-10 py-10"
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;

