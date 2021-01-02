import React from "react";
import { Description, Header, Footer } from "./style";
import { FiChevronRight } from "react-icons/fi";
import profile from "../../assets/profile.jpg";
import icon from "../../assets/iconWebSite.jpg";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";

const Profile: React.FC = () => {
  return (
    <>
      <Header>
        <a href="/">
          <img src={icon} alt="icon" />
          <h3>Bárbara Casac</h3>
        </a>
        <a href="/repository">
          Projects
          <FiChevronRight size={25} />
        </a>
      </Header>

      <Description>
        <img src={profile} alt="profile" />
        <p>
          Hey! Eu sou a Bárbara, curiosa e sempre pronta a aprender algo novo.
          Amo a área de tecnologia, pois ajudo as pessoas de alguma forma com o
          meu código.
        </p>
      </Description>

      <Footer>
        <a href="https://www.linkedin.com/in/barbaracasac/">
          <img src={linkedin} alt="linkedin-icon" />
        </a>
        <a href="https://www.facebook.com/barbara.soares.94695">
          <img src={facebook} alt="facebook-icon" />
        </a>
      </Footer>
    </>
  );
};

export default Profile;
