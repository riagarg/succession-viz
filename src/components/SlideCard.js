import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import TextSection from './TextSection.js';

const Main = styled.div`
  padding: 0 2vw 0 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-evenly;
  background-color: #DED5CD;
  align-items: flex-start;

`
const Graphic = styled.div`
  flex-basis: 65%;
  position: sticky;
  width: 100%;
  padding: 2rem;
  top: 1rem;
  align-self: flex-start;
`
const Scroller = styled.div`
  flex-basis: 40%;
  background-color: #DED5CD;

`
const Content = styled.div`
  margin: 0 auto 2rem auto;
  padding: 15vh 0 5vh 5vw;  
  background-color: #DED5CD;

  &:last-child {
    margin-bottom: 0;
  }
`
const ImageWrapper = styled.div`
  height: ${props => `${props.minHeight + 150}px`};
  width: ${props => `${props.minWidth}px`};
`
const Image = styled.img`
  position: absolute;
  opacity: ${props => props.display ? `1` : `0`};
  transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  width: 50vw;
  margin-left: -5vw;
  top: 25%;
`

const imageMap = {
    1: "",
    2: "",
    3: ""
};



const ContentScrollama = ({title, description, images} ) => {

        
        const [data, setData] = useState(1);
        const [steps, setStep] = useState(Object.keys(imageMap))
        const [progress, setProgress] = useState(0)
        Object.keys(imageMap).map(key => {
            imageMap[key] = images[key-1]
          });
          
        
        const onStepEnter = ({ element, data }) => {
            setData(data );
          };
        
        const onStepExit = ({ element }) => {
            element.style.backgroundColor = '#DED5CD';
          };
        
        const onStepProgress = ({ element, progress }) => {
 
          }
        

     
        return(
        <Main id="content">
        <Scroller>
          <Scrollama
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            progress
            onStepProgress={onStepProgress}
            offset={0.33}
          >
            {steps.map(value => (
              <Step data={value} key={value} style={'{backgroundColor: #DED5CD}'}>
                <Content>
                  <TextSection 
                    title={title[value-1]} 
                    description={description[value-1]}
                  />
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>
        <Graphic>
          <ImageWrapper minHeight={300} minWidth={400}>
            {Object.keys(imageMap).map((key => {
              return (<Image src={imageMap[key]} display={key == data} />);
            }))}
          </ImageWrapper>
        </Graphic>
      </Main>
    );
  }
export default ContentScrollama;
