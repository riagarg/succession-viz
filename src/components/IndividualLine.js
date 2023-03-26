import React from 'react';
import { 
  VictoryLabel, 
  VictoryChart, 
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLegend,
  VictoryLine,
  VictoryScatter
} from 'victory';


const graph_colors = {
    "win": "#4B7D44",
    "loss": '#951212'
  }
const win_label = "#88bf97"



const IndividualLine = ({character, step}) => {

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



            {/* SCATTER PLOT FOR SCROLL */}

          {step==4 && character == "Connor" &&
              <VictoryScatter
                data={[{ x: 25, y: data[25]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Family doesn't pick", "for presidential bid"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
              }
              {step==4 && character == "Roman" &&
              <VictoryScatter
                data={[{ x: 24, y: data[24]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Call with president", "goes poorly"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
              }
              {step==4 && character == "Tom" &&
              <VictoryScatter
                data={[{ x: 14, y: data[14]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Pierce's don't trust", "him with ATN"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
              }
               {step==4 && character == "Tom" &&
              <VictoryScatter
                data={[{ x: 3, y: data[3]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Inherits Cruise Scandal"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
              }
              {step==4 && character == "Shiv" &&
              <VictoryScatter
                data={[{ x: 16, y: data[16]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Rhea plays Shiv", "with fake job op"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
              }
              {step==4 && character == "Greg" &&
              <VictoryScatter
                data={[{ x: 18, y: data[18]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Realizes he sacrified", "$250mil and might go to jail"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
              }
              {step==4 && character == "Ken" &&
              <VictoryScatter
                data={[{ x: 11, y: data[11]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Ken must fire everyone at Vaulter"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
            }

            {/* SCATTER PLOT FOR SCROLL */}

             {/* SCATTER PLOT FOR PERSONAL LIFE */}
             {step==5 && character == "Tom" &&
              <VictoryScatter
                data={[{ x: 27, y: data[27]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Shiv tells Tom", "she doesn't love him"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
            }
              {step==5 && character == "Ken" &&
              <VictoryScatter
                data={[{ x: 24, y: data[24]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Kills his kid's rabbit"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink" }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
            }
             {step==5 && character == "Connor" &&
              <VictoryScatter
                data={[{ x: 28, y: data[28]['win'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Willa accepts proposal"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: win_label  }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
            }
             {step==5 && character == "Roman" &&
              <VictoryScatter
                data={[{ x: 27, y: data[27]['loss'] }]}
                animate={{
                  onEnter: { duration: 1000 },
                  onExit: { duration: 1000 }
                }}          
                labels={() => ["Gerri scandal"] }
                labelComponent={
                  <VictoryLabel
                    backgroundStyle={{ fill: "pink"  }}
                    backgroundPadding={3}
                    style={{
                      fontSize: 10
                  }}
                  />
                }
              />
            }


        </VictoryChart>
        </>
    );
}
  export default IndividualLine;
