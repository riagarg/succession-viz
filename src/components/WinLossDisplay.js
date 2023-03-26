import styled from 'styled-components';
import Wins from './Wins'
import Losses from './Losses'
import {
    VictoryLegend,
} from 'victory';


const GraphContainer = styled.div`
        width: 50%;
  `
const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 50vh
`
const color_map = {
    "tom": "#586580",
    "greg": "#2C3246",
    "connor": "#414C3B",
    "shiv": "#FDF5E6",
    "roman": "#DED5CD",
    "ken": "#A19491"
}
const SectionTitle = styled.h2`
	font-weight: 400;
	text-align: Left;
    padding-left 4rem;
`
const Frame= styled.div`
    background: rgba(113, 4, 4, 0.3);
    padding: 7rem 0 ;
    box-shadow: 0 0 20px 10px rgba(113, 4, 4, 0.3);


`


const WinLossDisplay = () => {


    return (
        <Frame>
            <SectionTitle>
                Wins and Losses through the seasons by character...
            </SectionTitle>
            <Container>
                <GraphContainer>
                    <Wins />
                </GraphContainer>
                <GraphContainer>
                    <Losses />
                </GraphContainer>
            </Container>
            {/* <LegendContainer><Legend>
                <VictoryLegend x={100} y={0}
                    centerTitle
                    orientation="horizontal"
                    itemsPerRow={3}
                    style={{ title: { fontSize: 8 } }}
                    colorScale={[color_map["roman"], color_map["shiv"], color_map["ken"], color_map["tom"], color_map["connor"], color_map["greg"]]}
                    data={[
                        { name: "Roman" }, { name: "Shiv" }, { name: "Ken" }, { name: "Tom" }, { name: "Connor" }, { name: "Greg" }
                    ]}
                />
            </Legend></LegendContainer> */}
        </Frame>
    );
}
export default WinLossDisplay;