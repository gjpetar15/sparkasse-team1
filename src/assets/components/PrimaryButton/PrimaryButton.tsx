import './PrimaryButton.css'; // Import the CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap imported

const PrimaryButton = () => {
  return (
    <a href="#" className="btn btn-dark ps-4 pe-4 me-5 d-flex align-items-center relative btn-style-primary">
      Најава
      <img 
        src="/src/assets/Images/Arrow_right.svg" 
        alt="Arrow" 
        className="ms-2 transition-all duration-200 hover:scale-x-125" // Add Tailwind classes for transition and scaling
      />
    </a>
  );
};

export default PrimaryButton;
