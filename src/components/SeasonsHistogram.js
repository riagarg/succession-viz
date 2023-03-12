import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryLine,
  VictoryLabel,
  VictoryHistogram,
  VictoryVoronoiContainer,
} from 'victory';
import styled from 'styled-components';


const data_roman = require('../data/season-one-roman.json');
const data_shiv = require('../data/season-one-shiv.json');
const data_ken = require('../data/season-one-ken.json');
const data_tom = require('../data/season-one-tom.json');
const data_connor = require('../data/season-one-connor.json');
const data_greg = require('../data/season-one-greg.json');


const Container = styled.div`
`
const getYear = percent =>
  Math.round(FIRST_YEAR + TOTAL_YEARS * (percent / 100));

const SEASONS = YEARS.map(year => yearToSeason(year));


const LIGHT_GREY = "hsl(355, 20%, 90%)";

const PRIMARY_COLOR = "hsl(355, 92%, 67%)";

const GradientSvg = styled.svg`
  position: fixed;
  opacity: 0;
`;

const Card = styled.div`
  background-color: #2b2a31;
  padding: 40px 36px 30px;
  border-radius: 5px;

  // when rendered in the gallery preview
  a & {
    padding: 24px 20px 10px;
  }
`;

const SliderContainer = styled.div`
  padding: 64px 25px 10px;

  // when rendered in the gallery preview
  a & {
    padding: 24px 36px 0px;
  }
`;

const yearToSeason = year => `${year}-${(year + 1 + "").slice(2, 4)}`;

const YEARS = Object.keys(data_roman).map(year => parseInt(year.win, 10));
const FIRST_YEAR = YEARS[0];
const LAST_YEAR = YEARS[YEARS.length - 1];
const TOTAL_YEARS = LAST_YEAR - FIRST_YEAR;

const getTooltipText = ({ datum }) => {
  const { binnedData, x0, x1 } = datum;

  const playerCount = binnedData.length;

  if (!playerCount) {
    return null;
  }

  const playerNames = binnedData
    .slice(0, 2)
    .map(({ player }) => {
      const [firstName, lastName] = player.split(" ");
      return lastName ? `${firstName.slice(0, 1)}. ${lastName}` : firstName;
    })
    .join(", ");

  const playerNamesList = `\n (${playerNames}${
    playerCount > 2 ? `, and ${playerCount - 2} more players` : ""
  })`;

  return `${playerCount} player${
    playerCount === 1 ? "" : "s"
  } averaged between ${x0}-${x1} 3PT attempts ${playerNamesList}`;
};

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

const YearSlider = ({ year, setYear }) => {
  const [value, setValue] = React.useState(0);

  return (
    <SliderContainer>
      <Slider
        onChange={newValue => {
          setValue(newValue);
          const calculatedYear = getYear(newValue);

          if (year !== calculatedYear) {
            setYear(calculatedYear);
          }
        }}
        color={PRIMARY_COLOR}
        value={value}
        maxValue={100}
        tooltipValues={SEASONS}
      />
    </SliderContainer>
  );
};
export default class SeasonsHistogram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: props.displayInfo,
      animate: props.animate,
      animating: false
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.animating && this.props !== prevProps) {
      this.setState({
        displayInfo: this.props.displayInfo,
        showRegression: this.props.showRegression,
        animating: true
      });
      setTimeout(() => this.setState({animating: false}), this.state.animate);
    }
  }

  getBakerDisplayInfo(baker, displayInfo) {
    return displayInfo[baker];
  }

  // getDataWithDisplayInfo(displayInfo) {
  //   return data.map((datum) => {
  //     return {
  //       ...datum,
  //       "risk": displayInfo[datum.baker] ? datum.risk : 0
  //     };
  //   });
  // }
  


  render() {
    const [year, setYear] = React.useState(FIRST_YEAR);

    return ( <Container>
    <GradientSvg>
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFE29F" />
          <stop offset="40%" stopColor="#FFA99F" />
          <stop offset="100%" stopColor={PRIMARY_COLOR} />
        </linearGradient>
      </defs>
    </GradientSvg>

    <Card>
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer
            labels={getTooltipText}
            voronoiDimension="x"
            labelComponent={
              <VictoryTooltip
                constrainToVisibleArea
                style={{
                  fill: LIGHT_GREY,
                  fontSize: 11
                }}
                flyoutStyle={{
                  fill: "#24232a",
                  stroke: PRIMARY_COLOR,
                  strokeWidth: 0.5
                }}
              />
            }
          />
        }
        height={280}
      >
        <VictoryLabel
          text={`3pt Attempts Per Game Averages (${yearToSeason(year)})`}
          x={225}
          y={18}
          textAnchor="middle"
          style={{ fill: LIGHT_GREY, fontSize: 16 }}
        />
        <VictoryAxis
          style={{
            ...sharedAxisStyles,
            grid: {
              fill: LIGHT_GREY,
              stroke: LIGHT_GREY,
              pointerEvents: "painted",
              strokeWidth: 0.5
            }
          }}
          label="# of players"
          dependentAxis
        />
        <VictoryAxis
          style={{
            ...sharedAxisStyles,
            axisLabel: { ...sharedAxisStyles.axisLabel, padding: 35 }
          }}
          label="3pt attempts per game"
        />
        <VictoryHistogram
          cornerRadius={2}
          domain={{ y: [0, 125] }}
          animate={{ duration: 300 }}
          data={season[year]}
          bins={bins={[0, 2, 4, 6,8,10,12,14,16]}}
          style={{
            data: {
              stroke: "transparent",
              fill: "url(#gradient1)",
              strokeWidth: 1,
            },
            labels: {
              fill: "red"
            }
          }}
          x="3pa"
        />
      </VictoryChart>

      <YearSlider year={year} setYear={setYear} />
    </Card>
  </Container>)
  }
}





