import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "2016-2020", text: 'B.E. in Computer Science, VIT Vellore, India'},
  { number: "2021-2023", text: 'M.Sc. in Computing Science, University of Alberta, Edmonton', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
