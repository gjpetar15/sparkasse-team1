import { useState } from "react";
import CustomButtons from "./CustomButtons";


type FormData = {
  userName: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  birthDate: string;
  phoneNumber: string;
  password: string;
  interests: string[];
  studyTime: string;
};

const MultiStepRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    lastName: "",
    email: "",
    gender: "",
    city: "",
    birthDate: "",
    phoneNumber: "",
    password: "",
    interests: [],
    studyTime: "",
  });

  const onButtonClick = (e: any) => {
    e.preventDefault();
    setStep((prevState) => prevState + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (step === 1) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-600">
        <div className="bg-transparent p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="flex justify-center mb-4">
            <img src="src/assets/images/LOGO.png" alt="Logo" className="w-24 h-24" />
          </div>
          <h1 className="text-center mb-6 text-lg text-white font-bold">Учи денес, добивај утре!</h1>
          <p className="text-center mb-6 text-lg text-white">Продолжи да вајбаш!</p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={handleChange}
                value={formData.userName}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <CustomButtons
                name="foo"
                type="submit"
                onButtonClick={onButtonClick}
                className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-600">
        <div className="bg-transparent p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="flex justify-center mb-4">
            <img src="src/assets/images/LOGO.png" alt="Logo" className="w-24 h-24" />
          </div>
          <h1 className="text-center mb-6 text-lg text-white font-bold">Учи денес, добивај утре!</h1>
          <p className="text-center mb-6 text-lg text-white">Продолжи да вајбаш!</p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="gender"
                placeholder="Пол"
                onChange={handleChange}
                value={formData.gender}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                name="city"
                placeholder="Град"
                onChange={handleChange}
                value={formData.city}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="date"
                name="birthDate"
                placeholder="Датум на раѓање"
                onChange={handleChange}
                value={formData.birthDate}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Телефонски број"
                onChange={handleChange}
                value={formData.phoneNumber}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="password"
                name="password"
                placeholder="Лозинка"
                onChange={handleChange}
                value={formData.password}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Повтори лозинка"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <CustomButtons
                name="foo"
                type="button"
                onButtonClick={onButtonClick}
                className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (step === 3) {
    const { userName } = formData;
    return (
      <div className="flex justify-center items-center h-screen bg-blue-600">
        <div className="bg-transparent p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="flex justify-center mb-4">
            <img src="src/assets/images/LOGO.png" alt="Logo" className="w-24 h-24" />
          </div>
          <h1 className="text-center mb-6 text-lg text-white font-bold">Добредојде, {userName}!</h1>
          <p className="text-center mb-6 text-lg text-white">Продолжи и избери финансиски теми за кои сакаш да дознаеш повеќе!</p>
          <CustomButtons
            name="foo"
            type="button"
            onButtonClick={onButtonClick}
            className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          />
        </div>
      </div>
    );
  }

  if (step === 4) {
    if (step === 4) {
        // Assuming these are the interest topics that a user can choose from
        const interestOptions = [
            "Бизнис",
            "Финансии",
            "Буџетирање",
            "Претприемништво",
            "Инвестирање",
            "Штедење",
            "Продажба",
        ];
    
        const handleInterestClick = (interest: string) => {
            setFormData((prevFormData) => {
                const currentInterests = prevFormData.interests;
                // If interest is already selected, remove it, otherwise add it
                const newInterests = currentInterests.includes(interest)
                    ? currentInterests.filter((i) => i !== interest)
                    : [...currentInterests, interest];
                return {
                    ...prevFormData,
                    interests: newInterests,
                };
            });
        };
    
        return (
            <div className="flex justify-center items-center h-screen bg-blue-600">
                <div className="bg-transparent p-8 rounded-lg shadow-md max-w-md w-full">
                    <div className="flex justify-center mb-4">
                        <img src="src/assets/images/LOGO.png" alt="Logo" className="w-24 h-24" />
                    </div>
                    <h1 className="text-center mb-6 text-lg text-white font-bold">
                        Одбери 3 теми на кои имаш најмногу интерес:
                    </h1>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {interestOptions.map((interest) => (
                            <button
                                key={interest}
                                onClick={() => handleInterestClick(interest)}
                                className={`px-4 py-2 rounded-lg border ${
                                    formData.interests.includes(interest) ? "bg-orange-500 text-white" : "bg-white text-orange-500"
                                }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                    <CustomButtons
                        name="foo"
                        type="button"
                        onButtonClick={onButtonClick}
                        className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                    />
                </div>
            </div>
        );
    }
    
  }

  if (step === 5)
  {

    if (step === 5) {
        // Define the study time options available
        const studyTimeOptions = [
            "10-20 минути",
            "30 минути",
            "45 минути",
            "1 час"
        ];
    
        const handleStudyTimeChange = (selectedTime: string) => {
            setFormData((prevFormData) => ({
                ...prevFormData,
                studyTime: selectedTime,
            }));
        };
    
        return (
            <div className="flex justify-center items-center h-screen bg-blue-600">
                <div className="bg-transparent p-8 rounded-lg shadow-md max-w-md w-full">
                    <div className="flex justify-center mb-4">
                        <img src="src/assets/images/LOGO.png" alt="Logo" className="w-24 h-24" />
                    </div>
                    <h1 className="text-center mb-6 text-lg text-white font-bold">
                        И последно, колку време планираш да посветиш на учење?
                    </h1>
                    <div className="grid grid-cols-1 gap-4 mb-6">
                        {studyTimeOptions.map((option) => (
                            <label
                                key={option}
                                className={`flex items-center space-x-3 cursor-pointer p-2 rounded-lg border ${
                                    formData.studyTime === option ? "bg-orange-500 text-white" : "bg-white text-orange-500"
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="studyTime"
                                    value={option}
                                    checked={formData.studyTime === option}
                                    onChange={() => handleStudyTimeChange(option)}
                                    className="form-radio text-orange-500"
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                    <CustomButtons
                        name="foo"
                        type="button"
                        onButtonClick={onButtonClick}
                        className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                    />
                </div>
            </div>
        );
    }
  }

  if (step === 6) {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-600">
            <div className="bg-transparent p-8 rounded-lg shadow-md max-w-md w-full">
                <div className="flex justify-center mb-4">
                    <img src="src/assets/images/LOGO.png" alt="Logo" className="w-24 h-24" />
                </div>
                <h1 className="text-center mb-6 text-lg text-white font-bold">
                    Сега е време да го освоиш светот!
                </h1>
                <CustomButtons
                    name="foo"
                    type="button"
                    onButtonClick={() => alert("Redirecting to profile...")} // Placeholder action for redirection
                    className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                  
                />
            </div>
        </div>
    );
}



  };

export default MultiStepRegistration;