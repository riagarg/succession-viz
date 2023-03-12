import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryLine
} from 'victory';
import styled from 'styled-components';


const data_roman = require('../data/season-one-roman.json');
const data_shiv = require('../data/season-one-shiv.json');
const data_ken = require('../data/season-one-ken.json');
const data_tom = require('../data/season-one-tom.json');
const data_connor = require('../data/season-one-connor.json');
const data_greg = require('../data/season-one-greg.json');


const Container = styled.div`
    padding: 400px;
`

export default class SuccessionWins extends React.Component {
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
    return (
      <Container>
        <VictoryChart
          title= {"Roman Season 1 Wins"}
          theme={VictoryTheme.material}
          domainPadding={1}
        >
          <VictoryAxis
            label="Episode"
            tickFormat={(x) => (`${x}`)}
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
            label= "Win Count"
            dependentAxis
            domain={[0, 10]}
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
              data={data_ken}
              x= "episode"
              y="win"
              scale={{x: "episode", y: "win"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: "#A19491" },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              data={data_roman}
              x= "episode"
              y="win"
              scale={{x: "episode", y: "win"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: "#DED5CD" },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              data={data_shiv}
              x= "episode"
              y="win"
              scale={{x: "episode", y: "win"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: "#FDF5E6" },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              data={data_tom}
              x= "episode"
              y="win"
              scale={{x: "episode", y: "win"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: "#586580" },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              data={data_greg}
              x= "episode"
              y="win"
              scale={{x: "episode", y: "win"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: "#2C3246" },
                parent: { border: "1px solid #ccc" }
              }}
            />
            <VictoryLine
              data={data_connor}
              x= "episode"
              y="win"
              scale={{x: "episode", y: "win"}}
              standalone={false}
              domain= {{y :[0,10]}}
              interpolation="natural"
              style={{
                data: { stroke: "#414C3B" },
                parent: { border: "1px solid #ccc" }
              }}
            />
            {/* <VictoryLine
              data={data}
              x= "episode"
              y="loss"
              scale={{x: "episode", y: "loss"}}
              standalone={false}
              domain= {{y :[0,8]}}
              interpolation="natural"
              style={{
                data: { stroke: "red" },
                parent: { border: "1px solid #ccc" }
              }}
            /> */}
        </VictoryChart>
        </Container>
    )
  }
}