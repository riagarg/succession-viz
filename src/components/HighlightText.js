import React, { Component } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`

`

const Container = styled.div`
    width: 100% ;
    height: 150px;
    background-color: #2C3246;    
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 5px lightgray;
    filter: blur(.5px);


  `
const Text = styled.span`
    color: white;
    font-weight: 400;
    font-size: 36px;

`


const HighlightText = ({text} ) => {

		return (
            <SectionWrapper>
            <Container>
            <Text>
                {text}
            </Text>
            </Container>
            </SectionWrapper>
		);
}
export default HighlightText