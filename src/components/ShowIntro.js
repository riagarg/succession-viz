import React from 'react';
import styled from 'styled-components';
import SlideCard from './SlideCard';
import IntroGif from '../assets/matsson.gif';
import WinQuote from '../assets/win-quote.png';
import GregQuote from '../assets/greg-so-it-is.gif';

const Risky = styled.span`
	background-color: #656054;
	color: white;
`
const Safe = styled.span`
	background-color: #D6CCBF;
	color: black;
`
const Good = styled.span`
	background-color: #769A47;
	color: white;
`
const Bad = styled.span`
	background-color: #C56854;
	color: white;
`
const Okay = styled.span`
	background-color: #C3AD5E;
	color: white;
`

const showStructure = (
  <div>
    <p> 
    Succession is an HBO drama about a family that owns a giant American media 
    conglomerate called Waystar Royco. The show’s central conflict hinges on 
    Logan’s decision on who will succeed him as the next CEO. 
    </p>
    <p> 
    The obvious contenders are his children Shiv, Roman, and Ken, but 
    there are a few other options Logan considers over the course of the show as well. 
    </p>
  </div>
);
const episodeStructure = (
  <div>
    <p> 
    Watching Succession often feels like watching  game of chess. 
    Each character has these complex plays with each action being a move -- putting them 
    a little closer or a little further from the top job. 
    </p>
    <p> 
    So we made it to the final season - it premieres in a few days. And Jesse Armstrong promises to <a target="_blank" href="https://www.newyorker.com/culture/the-new-yorker-interview/the-end-of-succession-is-near"> name a successor</a>.
     So I thought it would be fun to figure out the <b>score</b> and see if we can predict who is going to take the throne. 
    </p>
  </div>
);
const dataCollection = (
  <div>
    <p> 
    The characters collect these wins and losses bases on opportunities given to them in the company or personal wins that 
    contribute to their personal brand image. They are positioning themselves by gathering data points so they 
    can justify why they are the best contender for the top job.
    </p>
    <p> 
    I watched all three season and noted any time a character experienced a win or loss. Things I looked for included:
   </p>
    <ul> 
        <li><b>Something that positively or negatively affected their personal brand or personal life</b></li>
        <li> <b>Opportunities within the company</b></li>
        <li><b>Pleasing Logan</b></li>
        <li><b>Display of business acumen (it's a double win if Logan shows he's proud)</b> </li>
    </ul>
  </div>
);

 const ShowIntro = () => {
  return(
      <SlideCard 
        title={["SHOW STRUCTURE","SETTLING THE SCORE","DATA COLLECTION"]} 
        description={[showStructure, episodeStructure, dataCollection]} 
        images={[IntroGif, WinQuote, GregQuote]}
      />
      );
    }
export default ShowIntro;