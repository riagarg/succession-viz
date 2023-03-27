import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import TitleCard from './assets/Title_Card.png'
import IntroMethodology from './components/ShowIntro'
import HighlightText from './components/HighlightText'
import {GlobalStyles, CustomVictoryTheme} from './components/GlobalStyles.js';
import RomanScrollama from './components/RomanScrollama.js'
import KendallScrollama from './components/KendallScrollama.js'
import WideDisplayScrollama from './components/WideDisplayScrollama';
import FinalThoughts from './components/FinalThoughts';
import WinLossDisplay from './components/WinLossDisplay';
import ToggleDisplay from './components/ToggleDisplay';
import IndividualsDisplay from './components/IndividualsDisplay'
import Footer from './components/Footer'

const Title = styled.div`
  width: 100vw
  display: 'flex';
`
const Image = styled.img`
  width: 100%
  
`
function App() {
  return (
    <div className="App" >
      <GlobalStyles/>
      <Title style={{backgroundColor:'#DED5CD' }}>
        <Image src={TitleCard} />
      </Title>
      <IntroMethodology /> 
      <div style={{height:'20vh', backgroundColor:'#DED5CD' }}/>
      <HighlightText text={`Lets get into the data and see how our favorite Roy children have been doing ...`}/>
      <WinLossDisplay/>
      <KendallScrollama/>
      <div style={{height:'10vh', backgroundColor:'#DED5CD'}}/>
      <RomanScrollama/>
      <div style={{height:'20vh', backgroundColor:'#DED5CD', boxShadow: '0 0 20px 20px #DED5CD'}}/>
      <WideDisplayScrollama/>
      <FinalThoughts/>
      <ToggleDisplay/>
      <IndividualsDisplay/>
      <Footer/>
    </div>
  );
}

export default App;
