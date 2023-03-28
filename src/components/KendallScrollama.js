import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import TextSection from './TextSection.js';
import KendallIndividualLine from './KendallIndividualLine.js';


const Main = styled.div`
  padding: 0 2vw 0 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
  background-color: #DED5CD;
  box-shadow: 0 0 5px 10px  #DED5CD;
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
  margin: 3rem auto 5rem auto;
  z-index: 3
  min-height: 50vh;
  padding: 5vh 0 10vh 5vw;
  &:last-child {
    margin-bottom: 0;
  }
`



const contentMap = {
  1: <TextSection 
    title={"KENDALL"} 
    description={
      <div>
        <p>
        When the show starts, Ken is the obvious choice for CEO. 
        And for a brief time while is father is in the hospital, 
        Ken gets the job. 
        </p>
        <p>
        Through the show we continue to see him have real business acumen; however, he 
        lacks the killer instinct Logan says is necessary <span>&#8212;</span> as Rhea puts it, <i>“He has all 
        the shots, but he doesn't know when to play them”</i>
        </p>
      </div>
    } 
  />,
  2: <TextSection 
    description={
      <div>
        <p>
        But as the show goes on we see him fail over and over again. 
        His eagerness for the job leads to <b>failed coups and proxy wars</b>.  
        </p>

      </div>
    } 
  />,
  3: <TextSection 
    description={
      <div>
        <p>
        Even his attempt to publicly cancel and take legal action against 
        his father for the cruise scandal fails spectacularly.  
        </p>
        <p>
        Of course,that leads to one of my favorite episodes “Too Much Birthday” where we see Kendall 
         breakdown at the realization of his loneliness and his pathetic behavior.
        </p>
      </div>
    } 
  />
}

const KendallScrollama = ({title, description} ) => {
  const [data, setData] = useState(0);
  const [steps, setStep] = useState(Object.keys(contentMap))
  const [progress, setProgress] = useState(0)

  const onStepEnter = ({ element, data }) => {
    setData(data );
  };

  const onStepExit = ({ element }) => {
  };    // element.style.backgroundColor = '#DED5CD';

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
          <KendallIndividualLine showloss={data > 1} showlabel={data>1} step={data}/>
        </Graphic>
      </Main>
    );
  }
  export default KendallScrollama;
