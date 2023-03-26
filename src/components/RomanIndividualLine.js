import React from 'react';
import {
  VictoryLabel,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLegend,

  VictoryLine,
  VictoryScatter
} from 'victory';
import styled from 'styled-components';
import RomanImg from '../assets/roman.png'
import SeasonsHistogram from './SeasonsHistogram';


const ImgContainer = styled.div`
  width: 100%;
  height: 10%;
  margin-top: -200px;
  display:flex;
  justify-content: flex-end;
  padding-right: 15%
  z-index: 1;

`
const Image = styled.img`
  max-width:20%;
  max-height:20%;
`
const VictoryChartContainer = styled.div`
  z-index: 2
`
const RomanIndividualLine = ({ showloss, showlabel, showLine, showHistogram }) => {

  const data_map = {
    "Tom": require('../data/tom.json'),
    "Greg": require('../data/greg.json'),
    "Connor": require('../data/connor.json'),
    "Shiv": require('../data/shiv.json'),
    "Roman": require('../data/roman.json'),
    "Ken": require('../data/ken.json')
  }
  const graph_colors = {
    "win": "#4B7D44",
    "loss": '#951212'
  }
  const character = "Roman"
  const data = data_map[character]
  return (
    <>
    {showLine &&
    <>
      <VictoryChartContainer>
        <VictoryChart
          // theme={VictoryTheme.material}
          domainPadding={1}
          style={{ labels: { fontSize: 6 }}}
          voronoiDimension="x"
          containerComponent={
            <VictoryVoronoiContainer
            labels={({ datum }) => "win" in datum ? `ep: ${datum.episode}, win: ${datum.win}, loss: ${datum.loss}` : null }
            
            labelComponent={
                <VictoryTooltip dy={-7}  />
              }
            />
          }
        >
          
          <VictoryLabel text={character}
            x={250} y={30}
            textAnchor="middle"
            style={{
              fontSize: 24
            }}
          />

          <VictoryAxis
            label="Episode"
            tickCount={15}
            tickFormat={(x) => (`${data[x]["episode"]}`)}
            style={{
              axisLabel: {
                fontSize: 15,
                padding: 35
              },
              tickLabels: {
                angle: 90,
                fontSize: 5,
                padding: 10,
                textAnchor: "end"
              }
            }}
          />
          <VictoryAxis
            label="Win/Loss Count"
            dependentAxis
            domain={[0, 12]}
            tickFormat={(t) => t}
            style={{
              axisLabel: {
                fontSize: 15,
                padding: 35
              },
              tickLabels: {
                fontSize: 8
              }
            }}
          />
          <VictoryLegend x={60} y={70}
            centerTitle
            orientation="horizontal"
            gutter={20}
            itemsPerRow={3}
            style={{  title: { fontSize: 10 } }}
            colorScale={[graph_colors["win"], graph_colors["loss"]]}
            data={[
              { name: "Wins" }, { name: "Losses" }
            ]}
          />

          <VictoryLine
            data={data}
            y="win"
            scale={{ y: "win" }}
            standalone={false}
            domain={{ y: [0, 30] }}
            interpolation="natural"
            style={{
              data: { stroke: graph_colors["win"] },
              parent: { border: "1px solid #ccc" }
            }}
          />
          {showloss &&
            <VictoryLine
              data={data}
              y="loss"
              scale={{ y: "loss" }}
              standalone={false}
              domain={{ y: [0, 30] }}
              interpolation="natural"
              style={{
                data: { stroke: graph_colors["loss"] },
                parent: { border: "1px solid #ccc" }
              }}
              animate={{
                onEnter: { duration: 1000 },
                onExit: { duration: 1000 }
              }}
            />
          }
          {showlabel &&
            <VictoryScatter
              data={[{ x: 25, y: data[25]['win'] }]}
              animate={{
                onEnter: { duration: 1000 },
                onExit: { duration: 1000 }
              }}
              labels={() => ["Convinces Logan", "to pick Menken"]}
              labelComponent={<VictoryLabel
                backgroundStyle={{ fill: "#88bf97" }}
                backgroundPadding={3}
                style={{
                  fontSize: 8
                }} />
              } />

          }
          {showlabel &&
            <VictoryScatter
              data={[{ x: 13, y: data[13]['win'] }]}
              labels={() => ["Wins management", "training competition"]}
              labelComponent={<VictoryLabel
                backgroundStyle={{ fill: "#88bf97" }}
                backgroundPadding={3}
                style={{
                  fontSize: 8
                }} />} />
          }
          {showlabel &&
            <VictoryScatter
              data={[{ x: 27, y: data[27]['win'] }]}
              labels={() => ["Makes deal", "with Mattson"]}
              labelComponent={<VictoryLabel
                backgroundStyle={{ fill: "#88bf97" }}
                backgroundPadding={3}
                style={{
                  fontSize: 8
                }} />} />}

        </VictoryChart>
      </VictoryChartContainer>
      <ImgContainer>
        <Image src={RomanImg} />
      </ImgContainer>
    </>}
   {showHistogram &&
   <SeasonsHistogram character={"Roman"}/>}
    </>
  );
}
export default RomanIndividualLine;
