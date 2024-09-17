import "./Header.css";
import RESUME from "../../assets/subhransu-resume.pdf";
import ME from "../../assets/devimg.png";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="header-content">
          <h5>Hello I'm</h5>
          <h1>Subhransu Sekhar Rath</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <div className="social">
            <a href="https://github.com/Subhransu38" target="_blank">
              <BsGithub />
            </a>
            <a href="https://wa.me/917894655185" target="_blank">
              <IoLogoWhatsapp />
            </a>
            <a href="tel:+917894655185" target="_blank">
              <IoCallSharp />
            </a>
            <a href="mailto:ssrath38@gmail.com" target="_blank">
              <SiGmail />
            </a>
          </div>
          <div className="about-btn">
            <a href={RESUME} className="btn" download>
              Resume
            </a>
            <a
              href="https://drive.google.com/drive/folders/1ibl4-ltv3HptsV3MUk29zUVEbNkbIyUZ?usp=drive_link"
              className="btn btn-primary"
              target="_blank"
            >
              Certificate
            </a>
          </div>
        </div>

        <div className="header-container-image">
          <div className="header-image">
            <img src={ME} alt="Subhransu" />
          </div>
        </div>
      </div>

      <div className="down-arrow-container">
        <a className="down-arrow-btn" href="#about">
          <BsArrowDownCircleFill />
        </a>
      </div>
    </header>
  );
};

export default Header;
