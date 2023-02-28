import React from "react";
import { DiDjango, DiDocker, DiFirebase, DiGit, DiJavascript, DiPython, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the software development
      world. From Back-end to Design to Server Management to Cloud ☁.
    </SectionText>
    <List>
      <ListItem>
        <DiDjango size="5rem" />
        <ListContainer>
          <ListTitle>Django</ListTitle>
          <ListParagraph>
            Experience of 4 years.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Experience of 3 years.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="5rem" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience of 4 years.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="5rem" />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            Experience of 4 years.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="5rem" />
        <ListContainer>
          <ListTitle>Docker</ListTitle>
          <ListParagraph>
            Experience of 1 years.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="5rem" />
        <ListContainer>
          <ListTitle>CI / CD</ListTitle>
          <ListParagraph>
            Experience of 1 year.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
