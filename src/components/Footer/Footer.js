import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          Call:
        </LinkColumn>
        <LinkItem href="tel:+919284270056">+919284270056</LinkItem>
      </LinkList>
      <LinkList>
        <LinkColumn>
          Email:
        </LinkColumn>
        <LinkItem href="mailto:vickyspatel@gmail.com">vickyspatel@gmail.com</LinkItem>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning by creating!</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/Vr3n/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://gitlab.com/Vr3n/">
          <AiFillGitlab size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/virenpatel99/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
