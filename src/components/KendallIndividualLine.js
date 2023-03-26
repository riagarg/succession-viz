import React from 'react';
import {
  VictoryLabel,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLegend,
  VictoryLine,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryTooltip
} from 'victory';
import styled from 'styled-components';
import KenImg from '../assets/ken.png'


const ImgContainer = styled.div`
  width: 100%;
  height: 10%;
  margin-top: -200px;
  display:flex;
  justify-content: flex-end;
  padding-right: 15%
  positon:absolute;
  z-index: 1;

`
const Image = styled.img`
  max-width:20%;
  max-height:20%;
`
const VictoryChartContainer = styled.div`
  z-index: -1
`
const graph_colors = {
  "win": "#4B7D44",
  "loss": '#951212'
}
const KendallIndividualLine = ({ showloss, showlabel, step }) => {

  const data_map = {
    "Tom": require('../data/tom.json'),
    "Greg": require('../data/greg.json'),
    "Connor": require('../data/connor.json'),
    "Shiv": require('../data/shiv.json'),
    "Roman": require('../data/roman.json'),
    "Ken": require('../data/ken.json')
  }
  const character = "Ken"
  const data = data_map[character]
  return (
    <>
      <VictoryChartContainer>
      <VictoryChart
        domainPadding={1}
        containerComponent={
          <VictoryVoronoiContainer
          labels={({ datum }) => "win" in datum ? `ep: ${datum.episode}, win: ${datum.win}, loss: ${datum.loss}` : null }
          style={{
            fontSize: 6
        }}
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
          colorScale={[ graph_colors["win"], graph_colors["loss"]]}
          data={[
            { name: "Wins" }, { name: "Losses" }
          ]}
        />

        <VictoryLine
          data={data}
          y="win"
          scale={{ y: "win" }}
          standalone={false}
          domain={{ y: [0, 65] }}
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
            domain={{ y: [0, 65] }}
            interpolation="natural"
            style={{
              data: { stroke:  graph_colors["loss"]},
              parent: { border: "1px solid #ccc" }
            }}
            animate={{
              onEnter: { duration: 500 },
              onExit: { duration: 500 }
            }}
          />
        }
        {showlabel &&
        <VictoryScatter
          data={[{ x: step==2? 5: 26, y: data[step==2? 5: 26]['loss'] }]}
          animate={{
            onEnter: { duration: 1000 },
            onExit: { duration: 1000 }
          }}          
          labels={() => step==2? ["Kendall misses vote", "of no confidence", "due to traffic"]:["Kendall's Birthday Party"] }
          labelComponent={
            <VictoryLabel
              backgroundStyle={{ fill: "pink" }}
              backgroundPadding={3}
              style={{
                fontSize: 8
            }}
            />
          }
        />
        }
      </VictoryChart>
      </VictoryChartContainer>
      <ImgContainer>
        <Image src={KenImg}/>
      </ImgContainer>
    </>
  );
}
export default KendallIndividualLine;
