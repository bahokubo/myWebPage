import React from "react";
import { Link } from "react-router-dom";
import { Header, RepositoryInfo } from "./style";
import { FiChevronRight, FiChevronsLeft } from "react-icons/fi";
import icon from "../../assets/iconWebSite.jpg";

const Repository: React.FC = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <img src={icon} alt="icon" />
          <h3>Bárbara Casac</h3>
        </Link>
        <Link to="/">
          <FiChevronsLeft size={25} />
          Profile
        </Link>
      </Header>
      <RepositoryInfo>
        <a key="" href="issue.html_url">
          <div>
            <strong>issue.title</strong>
            <p>issue.user.login</p>
          </div>

          <FiChevronRight size="20px" />
        </a>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
