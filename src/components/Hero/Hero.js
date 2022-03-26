import Link from "next/link";
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        FullStack Developer.
      </SectionTitle>
      <SectionText>
        Learning by building projects, and making awesome apps.
      </SectionText>
      <Link href="#about">
        <Button >Lean More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
