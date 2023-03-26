import React from 'react';
import { 
  VictoryLabel, 
  VictoryChart, 
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLegend,
  VictoryLine
} from 'victory';


const graph_colors = {
    "win": "#4B7D44",
    "loss": '#951212'
  }



const IndividualLine = ({character}) => {

    const data_map = {
        "Tom": require('../data/tom.json'), 
        "Greg": require('../data/greg.json'),
        "Connor": require('../data/connor.json'),
        "Shiv": require('../data/shiv.json'),
        "Roman": require('../data/roman.json'),
        "Ken": require('../data/ken.json')
    }
    const data = data_map[character]
    return (
      <>
        <VictoryChart
          title= {" Season 1 Wins"}
          domainPadding={1}
          containerComponent={
            <VictoryVoronoiContainer
            labels={({ datum }) => ` ${datum.episode}`}
            labelComponent={
                <VictoryTooltip dy={-7} constrainToVisibleArea />
              }
            />
          }
        >
           <VictoryLabel text={character}
                x={200} y={30}
                textAnchor="middle"
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
            label= "Win/Loss Count"
            dependentAxis
            domain={[0, 12]}
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
            <VictoryLegend x={60} y={70}
              centerTitle
              orientation="horizontal"
              gutter={20}
              itemsPerRow={3}
              style={{ border: { stroke: "white" }, title: {fontSize: 10 } }}
              colorScale={[graph_colors["win"], graph_colors["loss"]]}
              data={[
                { name: "Wins" }, { name: "Losses" }
              ]}
            />

            <VictoryLine
              data={data}
              y="win"
              scale={{y: "win"}}
              standalone={false}
              domain= {{y :[0,60]}}
              interpolation="natural"
              style={{
                data: { stroke:  graph_colors["win"]},
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              data={data}
              y="loss"
              scale={{ y: "loss"}}
              standalone={false}
              domain= {{y :[0,65]}}
              interpolation="natural"
              style={{
                data: { stroke: graph_colors["loss"] },
                parent: { border: "1px solid #ccc" }
              }}
            />

        </VictoryChart>
        </>
    );
}
  export default IndividualLine;
