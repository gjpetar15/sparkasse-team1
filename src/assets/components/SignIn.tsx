import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Using Fetch API to connect to backend
      const response = await fetch("https://api.example.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success: ", data);
      // You can handle successful sign-in here, like saving a token or redirecting
    } catch (error) {
      console.error("Error signing in: ", error);
      setErrorMessage("Invalid email or password");
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
        <h1 className="text-center mb-6 text-lg text-white font-bold">
          Учи денес, добивај утре!
        </h1>
        <p className="text-center mb-6 text-lg text-white">
          Продолжи да вајбаш!
        </p>
        {errorMessage && (
          <p className="text-center mb-4 text-red-500">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="text"
              placeholder="Мејл Адреса"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Лозинка"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Најави се
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="mb-2 text-white">или</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/assets/images/logos_facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/images/flat-color-icons_google.png"
                alt="Google"
              />
            </a>
          </div>
          <p className="mt-4 text-white">
            Доколку си нов корисник,{" "}
            <Link to="/register" className="text-[#F97316]">
              регистрирај се.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
