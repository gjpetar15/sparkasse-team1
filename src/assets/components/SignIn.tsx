import { Link } from 'react-router-dom';

const SignIn = () => {
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
                    <label htmlFor="email"></label>
                    <input
                        name='email'
                        onChange={(e) => console.log("property: ", e.target.name, "value: ", e.target.value)}
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => console.log("property: ", e.target.name, "value: ", e.target.value)}
                        placeholder="lozinka"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Продолжи
                </button>
            </form>
            <div className="text-center mt-4">
                <p className=" mb-2 text-white">или</p>
                <div className="flex justify-center gap-4">
                                     
                <Link to="https://www.facebook.com">
    <img src="src/assets/images/logos_facebook.png" alt="Facebook" />
</Link>
<Link to="https://www.google.com">
    <img src="src/assets/images/flat-color-icons_google.png" alt="Google" />
</Link>

                   
                </div>
            </div>
        </div>
    </div>
);

};

export default SignIn;

