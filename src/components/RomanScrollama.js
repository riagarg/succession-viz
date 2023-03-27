import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import TextSection from './TextSection.js';
import RomanIndividualLine from './RomanIndividualLine.js';

const Main = styled.div`
  padding: 0 2vw 0 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
  background-color: #DED5CD;
  box-shadow: 0 0 20px 20px #DED5CD;

`
const Graphic = styled.div`
  flex-basis: 55%;
  position: sticky;
  width: 100%;
  padding: 10vh 5vw 0 5vw;
  top: 1rem;
  align-self: flex-start;
`
const Scroller = styled.div`
  flex-basis: 50%;
`
const Content = styled.div`
margin: 8rem auto 5rem auto;
z-index: 3
  min-height: 50vh;
  padding: 5vh 0 10vh 5vw;
  &:last-child {
    margin-bottom: 0;
  }
`



const contentMap = {
  1: <TextSection 
    title={"ROMAN"} 
    description={
      <div>
        <p>
        Roman has had an interesting trajectory, he is promoted to COO early 
        first season but is viewed as the screw up of the kids. 
        </p>

      </div>
    } 
  />,
  2: <TextSection 
    description={
      <div>
        <p>
          Out of all the kids, and whether or not it be for uncouth reasons, Roman listens to higher ups. He follows Gerri's advice 
          to go to management training and ends up doing really well. Over the three seasons, he gains exposure to the business.
        </p>
        <p>
          More than that, he proves his killer instincts through picking Menken and closing deals with Mattson. 
        </p>
      </div>
    } 
  />,
  3: <TextSection 
    description={
      <div>
        <p>
        But even his father thinks he’s kinda a “sicko”, which seems to be his big problem<span>&#8212;</span>he has a brand issue. 
        </p>
      </div>
    } 
  />,
  4: <TextSection 
  description={
    <div>
      <p>
        Use the <b>episode slider</b> to the right to compare Romans wins and losses through the three seasons
      </p>
    </div>
  } 
/>
}

const RomanScrollama = ({title, description} ) => {
  const [data, setData] = useState(0);
  const [steps, setStep] = useState(Object.keys(contentMap))
  const [progress, setProgress] = useState(0)

  const onStepEnter = ({ element, data }) => {
    setData(data );
  };

  const onStepExit = ({ element }) => {
    // element.style.backgroundColor = '#FFF';
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
        <Graphic>
          <RomanIndividualLine showloss={data > 2} showlabel={data>1} showLine={data<4} showHistogram={data>3}/>
        </Graphic>
      </Main>
    );
  }
  export default RomanScrollama;
