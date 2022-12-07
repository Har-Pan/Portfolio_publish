import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Harshit
        Pandey
      </SectionTitle>
      <SectionText>
      Software Developer Intern@ IBM Data and AI. Currently, Working under IBM’s Hyper Blue AI Incubator as a Backend Developer. <br/> 
      </SectionText>
      <Button onClick = {() => window.location = "https://drive.google.com/file/d/1oiUUaZJbnLBlJ-iv9Iz7QIpaGLpJtpmB/view?usp=sharing"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;