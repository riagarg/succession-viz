import React, { useState } from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryLine,
  VictoryLabel,
  VictoryHistogram,
  VictoryVoronoiContainer,
} from 'victory';
import styled from 'styled-components';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


const Container = styled.div`
`


const LIGHT_GREY = "hsl(355, 20%, 90%)";

const PRIMARY_COLOR = "hsl(355, 92%, 67%)";


const SliderContainer = styled.div`
  padding: 0rem 5rem 0rem;

  // when rendered in the gallery preview
  a & {
    padding: 24px 36px 0px;
  }
`;

const sharedAxisStyles = {
  axis: {
    stroke: "transparent"
  },
  tickLabels: {
    fill: LIGHT_GREY,
    fontSize: 14
  },
  axisLabel: {
    fill: LIGHT_GREY,
    padding: 36,
    fontSize: 15,
    fontStyle: "italic"
  }
};
const graph_colors = {
  "win": "#4B7D44",
  "loss": '#951212'
}
const EpisodeSlider = ({ episode, setEpisode }) => {

  const [value, setValue] = React.useState(0);

  return (
    <SliderContainer>
      <Slider
        onChange={newValue => {
          setValue(newValue);
          if (episode !== newValue) {
            setEpisode(newValue);
          }
        }}
        color={PRIMARY_COLOR}
        value={value}
        min={0}
        max={9}
        tooltipValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      />
    </SliderContainer>
  );
};
const SeasonsHistogram = ({ character }) => {
  const [displayEpisode, setDisplayEpisode] = useState(1);

  const data_map = {
    "s1": {
      "Tom": require('../data/season-one-greg.json'),
      "Greg": require('../data/season-one-greg.json'),
      "Connor": require('../data/season-one-connor.json'),
      "Shiv": require('../data/season-one-shiv.json'),
      "Roman": require('../data/season-one-roman.json'),
      "Ken": require('../data/season-one-ken.json')
    },
    "s2": {
      "Tom": require('../data/season-two-greg.json'),
      "Greg": require('../data/season-two-greg.json'),
      "Connor": require('../data/season-two-connor.json'),
      "Shiv": require('../data/season-two-shiv.json'),
      "Roman": require('../data/season-two-roman.json'),
      "Ken": require('../data/season-two-ken.json')
    },
    "s3": {
      "Tom": require('../data/season-three-greg.json'),
      "Greg": require('../data/season-three-greg.json'),
      "Connor": require('../data/season-three-connor.json'),
      "Shiv": require('../data/season-three-shiv.json'),
      "Roman": require('../data/season-three-roman.json'),
      "Ken": require('../data/season-three-ken.json')
    },
  }

  return (<> <Container>
    <VictoryChart>
    <VictoryLabel text={character}
                x={200} y={30}
                textAnchor="middle"
            />
                
         
          <VictoryAxis
            label= "Win/Loss Count"
            dependentAxis
            domain={[0, character=='Ken' ? 30: 14 ]}
            tickFormat={(t)=> t}
            style= {{
              axisLabel: {
                fontSize: 15,
                padding : 35
              },
              tickLabels: {
                fontSize: 8
              }
            }}
          />

      <VictoryAxis
        independentAxis
      />
      <VictoryGroup offset={30}
      >
        <VictoryBar
          color={graph_colors["win"]}
          cornerRadius={2}
          data={[{ x: "season 1", y: data_map["s1"][character][displayEpisode].win }, { x: "season 2", y: data_map["s2"][character][displayEpisode].win }, { x: "season 3", y: data_map["s3"][character][displayEpisode].win }]}
        />
        <VictoryBar
          color={graph_colors["loss"]}
          cornerRadius={2}
          data={[{ x: "season 1", y: data_map["s1"][character][displayEpisode].loss }, { x: "season 2", y: data_map["s2"][character][displayEpisode].loss }, { x: "season 3", y: data_map["s3"][character][displayEpisode].loss }]}
        />
      </VictoryGroup>
    </VictoryChart>
    <SliderContainer>
      <Slider
        onChange={setDisplayEpisode}
        color={PRIMARY_COLOR}
        value={displayEpisode}
        min={0}
        max={9}
        tooltipValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      />
    </SliderContainer>

  </Container>
  </>
  )
}
export default SeasonsHistogram;






