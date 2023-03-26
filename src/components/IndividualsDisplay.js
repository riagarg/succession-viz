import styled from "styled-components";
import IndividualLine from "./IndividualLine"

const GraphContainer = styled.div`
        width: 33%;
  `
const GraphContainerHighlight = styled.div`
        width: 33%;
        background-color: rgba(88, 101, 128, 0.1);
        box-shadow: 0 0 5px 10px rgba(88, 101, 128, 0.1);
  `
const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 50vh

`
const Container = styled.div`
    padding-right: 4%
`

const IndividualsDisplay = ({step}) => {

    
    return(
        <Container>
        <Row>
            {step==1 ?
            <GraphContainerHighlight>
                <IndividualLine character={"Roman"}  step={step}/>
            </GraphContainerHighlight> :
            <GraphContainer>
                 <IndividualLine character={"Roman"}  step={step}/>
            </GraphContainer>
             }
            <GraphContainer>
                <IndividualLine character={"Shiv"}  step={step}/>
            </GraphContainer>
            <GraphContainer>
                <IndividualLine character={"Ken"} step={step}/>
            </GraphContainer> 
        </Row>
         <Row>
            <GraphContainer>
                <IndividualLine character={"Greg"}  step={step}/>
            </GraphContainer>
            {step==2 ?
            <GraphContainerHighlight>
                <IndividualLine character={"Tom"}  step={step}/>
            </GraphContainerHighlight> :
            <GraphContainer>
                 <IndividualLine character={"Tom"}  step={step}/>
            </GraphContainer>
             }
            <GraphContainer>
                <IndividualLine character={"Connor"} step={step}/>
            </GraphContainer>
        </Row>
        </Container>
        );
      }
export default IndividualsDisplay;