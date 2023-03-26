import React, { Component } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 2%;

`
const SectionTitle = styled.h2`
	font-weight: 400;
	text-align: left;
	padding-bottom: 12px;
`
const SectionDescription = styled.div`
	width: 100%;
	font-size: 1.2rem;
	text-align: left;
`
const StyleBar = styled.div`
  width: 50px;
  height: 7px;
  background-color: #710404;    

  `

const TextSection = ({title, description} ) => {

		return (
			<SectionWrapper>
        {title && 
				<SectionTitle>
          {title}
        </SectionTitle>}
		<StyleBar/>
        <SectionDescription>
        {description}
        </SectionDescription>
			</SectionWrapper>
		);
}
export default TextSection