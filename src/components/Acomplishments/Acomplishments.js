import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "../Technologies/TechnologiesStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section id="work_exp">
    <SectionDivider />
    <SectionTitle main>Work Experience</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Ikshvaku Solutions</ListTitle>
          <ListParagraph>Full Stack Developer, 2019 to Current</ListParagraph>
          <ListParagraph>✅ Handled frontend and backend.</ListParagraph>
          <ListParagraph>✅ Heading Project Delivery.</ListParagraph>
          <ListParagraph>✅ Technical Architecting.</ListParagraph>
          <ListParagraph>✅ Project Management.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Ajmera Developers, Rajhans Group.</ListTitle>
          <ListParagraph>Full Stack Developer.</ListParagraph>
          <ListParagraph>✅ Handled frontend and backend.</ListParagraph>
          <ListParagraph>✅ Project Management.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Acomplishments;
