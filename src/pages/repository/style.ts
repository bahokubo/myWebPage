import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  a {
    font-family: Helvetica;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    transition: color 0.2s;

    &:hover {
      color: #a8a8b3;
    }

    img {
      width: 85px;
      height: 75px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  font-family: Helvetica;

  h3 {
    color: #000;
  }

  a {
    background: #fff;
    border-radius: 5px;
    border: 1px solid #1c1c1c;
    width: 80%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #1c1c1c;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
    ul {
      list-style: none;
      display: flex;
      padding-left: 0;

      li {
        & + li {
          margin-left: 30px;
        }
        strong {
          display: block;
          font-size: 20px;
          color: #3d3d4d;
        }

        span {
          display: block;
          margin-top: 4px;
          color: #6c6c80;
        }
      }
    }
  }
`;
