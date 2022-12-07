import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython, DiDocker, DiJavascript } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

// Take new icons from react icons.

const Technologies = () =>  (
  <Section id = "tech">

    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Python <br/>
            Java <br/>
            JavaScript <br/>
            SQL <br/>
            HTML <br/>
            CSS <br/>
            C#  <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" /> 
        <ListContainer>
          <ListTitle>Machine Learning Stack</ListTitle>
          <ListParagraph>
          TensorFlow <br/> 
          PyTorch <br/> 
          SciPy <br/> 
          Scikit-Learn <br/> 
          NumPy <br/> 
          Pandas <br/> 
          Keras <br/> 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Development Frameworks</ListTitle>
          <ListParagraph>
          Flask <br/> 
          React.js <br/> 
          Node.js <br/> 
          Express.js <br/> 
          Bootstrap <br/> 
          Pytest <br/> 
          Selenium <br/> 
          Jest <br/> 
          Pymongo <br/> 
          mongomock. <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>Developer Tools</ListTitle>
          <ListParagraph>
          Docker <br/> 
          Kubernetes <br/> 
          AWS <br/> 
          IBM Cloud <br/> 
          MongoDB <br/> 
          RESTful API <br/> 
          Git <br/>
          Travis CI <br/> 
          Jenkins <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
