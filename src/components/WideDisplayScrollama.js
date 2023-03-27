import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import TextSection from './TextSection.js';
import IndividualsDisplay from './IndividualsDisplay.js';


const Main = styled.div`
  padding: 0 2vw 0 2vw;
  font-family: Helvetica;
`
const Graphic = styled.div`
  flex-basis: 55%;
  position: sticky;
  width: 100%;
  padding: 0vh 5vw 0 5vw;
  top: 1rem;
  align-self: flex-start;
  z-index: -1;
`
const Scroller = styled.div`
  flex-basis: 50%;
  z-index: 1;
  justify-content: center;
`
const Content = styled.div`
  margin: 80rem auto 80rem auto;
  z-index: 3
  min-height: 50vh;
  width: 50%;
  background-color: white;
  padding: 1vh 0 1vh 5vw;
  &:last-child {
    background-color: rgba(0,0,0,0);
    margin-bottom: 200px;
    padding: 10vh important!;
  }
`

const WhiteOut = styled.span`
    color:  rgba(0,0,0,0);
    background-color: rgba(0,0,0,0);
`



const contentMap = {
  1: <TextSection 

    description={
      <div>
        <p>
        Lets look at the characters together<span>&#8212;</span>all of their wins and losses. Its easy to note that <b>Roman</b> is the only one whose <b>wins out number his losses</b>, making him the easiest choice to bet on.        
        </p>

      </div>
    } 
  />,
  2: <TextSection 
    description={
      <div>
        <p>
            Before starting work on this visualization, I honestly thought that <b>Tom</b> would win.         </p>
        <p>
        During the third season finale, Tom and Greg seem to be on top. Tom sides with Logan at a critical moment ,when all the kids
         choose not to. Siding with Logan so far has been the move<span>&#8212;</span>he doesn’t lose. 
         But despite this, Tom has so few wins. The show rarely, if ever depicts him successful at work.
        Other than promotions Shiv gets him, we only see him flailing in testimonies and stressed about jail. 
        Along with that, his personal life with Shiv is clearly a disaster.
        </p>
        <p>
        </p>
      </div>
    } 
  />,
  3: <TextSection 
    description={
      <div>
        <p>
        Ken is far past redemption, but Shiv maybe can still turn around<span>&#8212;</span>the deal she make with Sandy and Stuey did show she might have competence, but overall its just not enough. 

        </p>
      </div>
    } 
  />,
  4: <TextSection 
  description={
    <div>
      <p>
        What shocked me while collecting this data is how few wins there were from actual successes in the business. 
        Either their Jessie Armstrong thinks their personal lives make for better TV or all of them are pretty incompotent. 
      </p>
      <p>
        Either way, I'd just like to know if Tom has made any contribution to the business over the last three seasons...
      </p>
    </div>
  } 
/>,
  5: <TextSection 
  description={
    <div>
      <p>
        And their personal lives are not hopeful either:
      </p>
    </div>
  } 
/>,
  6: <WhiteOut>
      Ken is far past redemption, but Shiv maybe can still turn around<span>&#8212;</span>the deal she make with Sandy and Stuey did show she might have competence, but overall its just not enough. 

    </WhiteOut>
}

const WideDisplayScrollama = ({title, description} ) => {
  const [data, setData] = useState(0);
  const [steps, setStep] = useState(Object.keys(contentMap))
  const [progress, setProgress] = useState(0)

  const onStepEnter = ({ element, data }) => {
    setData(data );
  };

  const onStepExit = ({ element }) => {
    element.style.backgroundColor = '#fff';
  };
  const onStepProgress = ({ element, progress }) => {
    // Commented out because it stalls animation
    // this.setState({ progress });
  }


  const getContent = (value) => {
    return contentMap[value] || contentMap[1];
  }

    return (
      <Main>
        <Graphic>
          <IndividualsDisplay step={data}/>
        </Graphic>
        <Scroller>
          <Scrollama
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            progress
            onStepProgress={onStepProgress}
            offset={0.33}
          >
            {steps.map(value => (
              <Step data={value} key={value}>
                <Content>
                  {getContent(value)}
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>

      </Main>
    );
  }
  export default WideDisplayScrollama;
