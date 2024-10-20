import { useState } from "react";
import CustomButtons from "./CustomButtons";
import { API_URL } from "../../constants";

const MultiStepRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<{
    userName: string;
    lastName: string;
    email: string;
    gender: string;
    city: string;
    birthDate: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    interests: string[];
    studyTime: string;
  }>({
    userName: "",
    lastName: "",
    email: "",
    gender: "",
    city: "",
    birthDate: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    interests: [],
    studyTime: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const checkEmailInDb = async () => {
    const response = await fetch(`${API_URL}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"
      },
      body: JSON.stringify({
        name: formData.userName,
        surname: formData.lastName,
        email: formData.email
      }),
    });
    return response
  };

  const handleNextClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Step: ", step);
    if (await validateStep()) {
      console.log(formData)
      setErrorMessage("");
      setStep((prevState) => prevState + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFinalSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Move to step 6 instead of showing an alert only
    setStep((prevState) => prevState + 1);
  };

  const registerUser = async () => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "ngrok-skip-browser-warning": "true"
        },
        body: JSON.stringify({
          name: formData.userName,
          surname: formData.lastName,
          email: formData.email,
          gender: formData.gender,
          birth_date: formData.birthDate,
          phone: formData.phoneNumber,
          password: formData.password
        }),
      });

      console.log(response)
      return response;
    }
    catch (error) {
      console.error("Error registering user: ", error);
      setErrorMessage("Error registering user");
      return null;
    }
  };

  const validateStep = async () => {
    switch (step) {
      case 1:
        const response = await checkEmailInDb();
        if (response.status === 409) {
          setErrorMessage("Email already exists.");
          return false;
        }
        if (!formData.userName || !formData.lastName || !formData.email) {
          setErrorMessage("All fields are required.");
          return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          setErrorMessage("Please enter a valid email address.");
          return false;
        }
        break;
      case 2:
        if (
          !formData.gender ||
          !formData.city ||
          !formData.birthDate ||
          !formData.phoneNumber ||
          !formData.password ||
          !formData.confirmPassword
        ) {
          setErrorMessage("All fields are required.");
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setErrorMessage("Passwords do not match.");
          return false;
        }
        break;
      case 5:
        const res = await registerUser();
        console.log(res);
        if (!res) {
          setErrorMessage("Error registering user");
          return false;
        }
      default:
        break;
    }
    return true;
  };

  const progressPercentage = (step / 6) * 100;

  const handleInterestClick = (interest: string) => {
    setFormData((prevFormData) => {
      const currentInterests = prevFormData.interests;
      const newInterests = currentInterests.includes(interest)
        ? currentInterests.filter((i) => i !== interest)
        : [...currentInterests, interest];
      return {
        ...prevFormData,
        interests: newInterests,
      };
    });
  };

  const handleStudyTimeChange = (selectedTime: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      studyTime: selectedTime,
    }));
  };

  // Function to get the button text based on the current step
  const getButtonText = () => {
    switch (step) {
      case 1:
      case 2:
      case 3:
      case 4:
        return "Продолжи";
      case 5:
        return "Најави се";
      case 6:
        return "Продолжи кон својот профил";
      default:
        return "Продолжи";
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-600">
      <div className="bg-transparent p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/images/LOGO.png"
            alt="Logo"
            className="w-24 h-24"
          />
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2 mb-6">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="bg-[#F97316] h-full rounded-full transition-all duration-300"
          ></div>
        </div>
        {errorMessage && (
          <div className="bg-red-500 text-white p-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}
        {step === 1 && (
          <form>
            <h1 className="text-center mb-6 text-lg text-white font-bold">
              Учи денес, добивај утре!
            </h1>
            <p className="text-center mb-6 text-lg text-white">
              Започни да вајбаш!
            </p>
            <input
              type="text"
              name="userName"
              placeholder="Име"
              onChange={handleChange}
              value={formData.userName}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Презиме"
              onChange={handleChange}
              value={formData.lastName}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Mаил Адреса"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <CustomButtons
              name={getButtonText()}
              type="submit"
              onButtonClick={handleNextClick}
              className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            />
          </form>
        )}
        {step === 2 && (
          <form>
            <h1 className="text-center mb-6 text-lg text-white font-bold">
              Ти остана уште малку!
            </h1>
            <p className="text-center mb-6 text-lg text-white">
              Продолжи да вајбаш!
            </p>
            <input
              type="text"
              name="gender"
              placeholder="Пол"
              onChange={handleChange}
              value={formData.gender}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Град"
              onChange={handleChange}
              value={formData.city}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="date"
              name="birthDate"
              onChange={handleChange}
              value={formData.birthDate}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Телефонски број"
              onChange={handleChange}
              value={formData.phoneNumber}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Лозинка"
              onChange={handleChange}
              value={formData.password}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Повтори лозинка"
              onChange={handleChange}
              value={formData.confirmPassword}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg"
              required
            />
            <CustomButtons
              name={getButtonText()}
              type="submit"
              onButtonClick={handleNextClick}
              className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            />
          </form>
        )}
        {step === 3 && (
          <div>
            <h1 className="text-center mb-6 text-lg text-white font-bold">
              Добредојде, {formData.userName}!
            </h1>
            <p className="text-center mb-6 text-lg text-white">
              Продолжи и избери финансиски теми за кои сакаш да дознаеш повеќе!
            </p>
            <CustomButtons
              name={getButtonText()}
              type="button"
              onButtonClick={handleNextClick}
              className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            />
          </div>
        )}
        {step === 4 && (
          <div>
            <h1 className="text-center mb-6 text-lg text-white font-bold">
              Одбери 3 теми на кои имаш најмногу интерес:
            </h1>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                "Бизнис",
                "Финансии",
                "Буџетирање",
                "Штедење",
                "Претприемништво",
                "Инвестирање",
              ].map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestClick(interest)}
                  className={`px-4 py-2 rounded-lg border ${
                    formData.interests.includes(interest)
                      ? "bg-orange-500 text-white"
                      : "bg-white text-orange-500"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <CustomButtons
              name={getButtonText()}
              type="button"
              onButtonClick={handleNextClick}
              className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            />
          </div>
        )}
        {step === 5 && (
          <div>
            <h1 className="text-center mb-6 text-lg text-white font-bold">
              И последно, колку време планираш да посветиш на учење?
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {["10-20 минути", "30 минути", "45 минути", "1 час"].map(
                (time) => (
                  <label
                    key={time}
                    className="flex items-center space-x-2 cursor-pointer p-2 text-white"
                  >
                    <input
                      type="radio"
                      name="studyTime"
                      value={time}
                      checked={formData.studyTime === time}
                      onChange={() => handleStudyTimeChange(time)}
                      className="form-radio text-white"
                    />
                    <span
                      className={`text-white ${
                        formData.studyTime === time ? "font-bold" : ""
                      }`}
                    >
                      {time}
                    </span>
                  </label>
                )
              )}
            </div>
            <CustomButtons
              name={getButtonText()}
              type="button"
              onButtonClick={handleNextClick}
              className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            />
          </div>
        )}

        {step === 6 && (
          <div>
            <h1 className="text-center mb-6 text-lg text-white font-bold">
              Сега е време да го освоиш светот!
            </h1>
            <CustomButtons
              name={getButtonText()}
              type="button"
              onButtonClick={() => alert("Redirecting to profile...")}
              className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepRegistration;
