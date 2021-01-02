import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, RepositoryInfo } from "./style";
import { FiChevronRight, FiChevronsLeft, FiStar } from "react-icons/fi";
import icon from "../../assets/iconWebSite.jpg";
import api from "../../services/api";

interface Repository {
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get(`/users/bahcasac/repos`).then((response) => {
      setRepositories(response.data);
    });
  }, []);

  console.log();
  return (
    <>
      <Header>
        <Link to="/">
          <h3>Bárbara Casac</h3>
          <img src={icon} alt="icon" />
        </Link>
        <Link to="/">
          <FiChevronsLeft size={25} />
          Profile
        </Link>
      </Header>
      <RepositoryInfo>
        <h2>My Projects</h2>
        {repositories.map((repository) => (
          <a key="" href={repository.html_url}>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
              <ul>
                <li>
                  <strong>{repository.stargazers_count}</strong>
                  <span>Stars</span>
                </li>
                <li>
                  <strong>{repository.forks_count}</strong>
                  <span>Forks</span>
                </li>
                <li>
                  <strong>{repository.open_issues_count}</strong>
                  <span>Issues</span>
                </li>
              </ul>
            </div>

            <FiChevronRight size="20px" />
          </a>
        ))}
      </RepositoryInfo>
    </>
  );
};

export default Repository;
