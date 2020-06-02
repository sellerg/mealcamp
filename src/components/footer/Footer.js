import React from "react";
import styled from "styled-components";
import facebookIcon from "./../../Assets/facebook.png";
import githubIcon from "./../../Assets/github-logo.png";
import linkedinIcon from "./../../Assets/linkedin.png";

export default function Footer() {
  return (
    <Div>
      <Iconwrap>
        <a
          href="https://www.facebook.com/greg.seller.1/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Img src={facebookIcon} alt="facebook" />
        </a>
        <a
          href="www.linkedin.com/in/greg-seller-7173431ab"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Img src={linkedinIcon} alt="github" />
        </a>
        <a
          href="https://github.com/sellerg/todo-list"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Img src={githubIcon} alt="linkedin" />
        </a>
      </Iconwrap>
    </Div>
  );
}

const Div = styled.footer`
  width: 100%;
  height: 6rem;
  background-color: #2d3436;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
`;

const Iconwrap = styled.div``;

const Img = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  margin: 1rem;
`;
