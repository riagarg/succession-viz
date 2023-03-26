import styled from "styled-components";
import SeasonsHistogram from "./SeasonsHistogram"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import React, { useState, useEffect } from 'react';

const GraphContainer = styled.div`
        width: 33%;
  `
const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 50vh

`
const Container = styled.div`
    padding: 5rem 0;
`

const IndividualsDisplay = () => {
    const [data, setData] = useState('1');
    const toggleOptions = [
        { name: 'Histogram', value: '1' },
        { name: 'Line', value: '2' },
    ];


    return (
        <Container>
            {/* <ButtonGroup className="mb-2">
                {toggleOptions.map((toggleOptions, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`${idx}`}
                        type="toggleOptions"
                        variant="secondary"
                        name="toggleOptions"
                        value={toggleOptions.value}
                        checked={data === toggleOptions.value}
                        onChange={(e) => setData(e.currentTarget.value)}
                    >
                        {toggleOptions.name}
                    </ToggleButton>
                ))}
            </ButtonGroup> */}
            <Row>
                <GraphContainer>
                    <SeasonsHistogram character={"Roman"} />
                </GraphContainer>
                <GraphContainer>
                    <SeasonsHistogram character={"Shiv"} />
                </GraphContainer>
                <GraphContainer>
                    <SeasonsHistogram character={"Ken"} />
                </GraphContainer>
            </Row>
            <Row>
                <GraphContainer>
                    <SeasonsHistogram character={"Greg"} />
                </GraphContainer>
                <GraphContainer>
                    <SeasonsHistogram character={"Tom"} />
                </GraphContainer>
                <GraphContainer>
                    <SeasonsHistogram character={"Connor"} />
                </GraphContainer>
            </Row>
        </Container>
    );
}
export default IndividualsDisplay;