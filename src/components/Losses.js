import React from 'react';
import { 
  VictoryTooltip, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryLine
} from 'victory';
import styled from 'styled-components';


const color_map = {
  "tom": "#586580", 
  "greg": "#2C3246",
  "connor": "#414C3B",
  "shiv":"#FDF5E6",
  "roman": "#DED5CD",
  "ken": "#A19491"
}

const Losses = () => {


  let data_roman = require('../data/roman.json');
  let data_shiv = require('../data/shiv.json');
  let data_ken = require('../data/ken.json');
  let data_tom = require('../data/tom.json');
  let data_connor = require('../data/connor.json');
  let data_greg = require('../data/greg.json');

    return (
      <>
        <VictoryChart
          title= {" Season 1 Losses"}
          domainPadding={1}
          containerComponent={
            <VictoryVoronoiContainer
            labels={({ datum }) => `${datum.character}`}
            labelComponent={
                <VictoryTooltip dy={-7} constrainToVisibleArea />
              }
            />
          }
        >
        
          <VictoryAxis
            label="Episode"
            tickFormat={(x) => (`${data_roman[x]["episode"]}`)}
            style={{
              axisLabel: {
                fontSize: 15,
                padding: 35
              },
              tickLabels: {
                angle: 270,
                fontSize: 8,
                padding: 0,
                textAnchor: "end"
              }
            }}
          />
          <VictoryAxis
            label= "Loss Count"
            dependentAxis
            domain={[0, 60]}
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
            <VictoryLine
              labelComponent={<VictoryTooltip/>}
              data={data_ken}
              
              y="loss"
              scale={{ y: "loss"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke:  color_map["ken"]},
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              labelComponent={<VictoryTooltip/>}
              data={data_roman}
              
              y="loss"
              scale={{ y: "loss"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: color_map["roman"] },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              labelComponent={<VictoryTooltip/>}
              data={data_shiv}
              
              y="loss"
              scale={{ y: "loss"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: color_map["shiv"] },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              labelComponent={<VictoryTooltip/>}
              data={data_tom}
              
              y="loss"
              scale={{ y: "loss"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: color_map["tom"] },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              labelComponent={<VictoryTooltip/>}
              data={data_greg}
              
              y="loss"
              scale={{ y: "loss"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: color_map["greg"] },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              data={data_connor}
              
              y="loss"
              scale={{ y: "loss"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: color_map["connor"] },
                parent: { border: "1px solid #ccc" }
              }}
            />
        </VictoryChart>
        </>
    );
}
  export default Losses;
// }