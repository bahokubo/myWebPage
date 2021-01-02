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

export const Description = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 250px;
    height: 300px;
    border-radius: 50%;
  }
  p {
    font-family: Helvetica;
    color: #a8a8b3;
    width: 9em;
    text-align: center;
    font-size: 18px;
  }
`;

export const Footer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: initial;

  img {
    padding-top: 40px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
