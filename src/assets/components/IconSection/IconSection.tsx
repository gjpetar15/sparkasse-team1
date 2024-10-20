import informirajIcon from '/src/assets/Images/Informiraj-se-icon.svg'; // Update the path as necessary
import zapochniIcon from '/src/assets/Images/Zapochni-da-uchish-icon.svg'; // Update the path as necessary
import besplatniSertifikatiIcon from '/src/assets/Images/Besplatni-sertifikati-icon.svg'; // Update the path as necessary
import bedzoviIcon from '/src/assets/Images/Bedzovi-icon.svg'; // Update the path as necessary
import Icon from '../Icon/Icon';

const IconsSection = () => {
  return (
    <section>
      <div style={{ backgroundColor: '#FF6130' }} className="w-full py-12">
        <div className="container mx-auto max-w-[80vw]">
          <div className="flex flex-wrap justify-center">
            {/* First Icon Card */}
            <Icon 
              src={informirajIcon} 
              alt="Informiraj se" 
              text="Информирај се." 
            />
            {/* Second Icon Card */}
            <Icon 
              src={zapochniIcon} 
              alt="Започни да учиш" 
              text="Започни да учиш." 
            />
            {/* Third Icon Card */}
            <Icon 
              src={besplatniSertifikatiIcon} 
              alt="Добивај бесплатни сертификати" 
              text="Добивај бесплатни сертификати." 
            />
            {/* Fourth Icon Card */}
            <Icon 
              src={bedzoviIcon} 
              alt="Добивај беџови" 
              text="Добивај беџови." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconsSection;
