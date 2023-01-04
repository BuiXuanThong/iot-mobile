import { StyleSheet, Switch, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';

import {
  LineChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

import { infoClient } from "../utils/grpc";
import { Data } from "../lib/info/info_pb";


const screenWidth = Dimensions.get("window").width;

// number setting
const ledOnNum = 5;
const ledOffNum = 4;
const pumpOnNum = 7;
const pumpOffNum = 6;

// feed setting
const LED_FEED = "led-2";
const PUMP_FEED = "pump-2";
const LIGHT_FEED = "light";
const GRHUMI_FEED = "grhumi-2";


export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const [isLedOn, setIsLedOn] = useState(false);
  const [isPumpOn, setIsPumpOn] = useState(false);
  const [lightList, setLightList] = useState<Data.AsObject[]>();
  const [grHumiList, setGrHumiList] = useState<Data.AsObject[]>();

  useEffect(() => {
    setInterval(() => {
      // fetch data from server
      infoClient.listData(LIGHT_FEED).then((data) => {
        setLightList(data.response?.listDataList);
      });

      infoClient.listData(GRHUMI_FEED).then((data) => {
        setGrHumiList(data.response?.listDataList);
      });

      // fetch status
      infoClient.listData(LED_FEED).then((data) => {
        setIsLedOn(Number(data.response?.listDataList[0].value) == ledOnNum);
      });

      infoClient.listData(PUMP_FEED).then((data) => {
        setIsPumpOn(Number(data.response?.listDataList[0].value) == pumpOnNum);
      });
    }, 3000); // delay 5s
  }, []);

  const ledChange = (value: boolean) => {
    if(value) {
      infoClient.CreateData(LED_FEED, ledOnNum);
    } else {
      infoClient.CreateData(LED_FEED, ledOffNum);
    }
    setIsLedOn(value);
  }

  const pumpChange = (value: boolean) => {
    if(value) {
      infoClient.CreateData(PUMP_FEED, pumpOnNum);
    } else {
      infoClient.CreateData(PUMP_FEED, pumpOffNum);
    }
    setIsPumpOn(value);
  }

  const getValue = (type: string) : number[] => {
    let tempList : Data.AsObject[] | undefined;
    if(type == 'light') {
      tempList = lightList?.slice();
    } else tempList = grHumiList?.slice();

    let values : number[] = [0];
    let first = true;
    tempList?.reverse().map((item : any) => {
      if(first) {
        values.pop();
        first = false;
      }
      values.push(item.value);
    });
    
    return values;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.widgets}>
            <Text style={styles.value}> {lightList?.length ? lightList[0].value : "..."} </Text>
            <Text style={styles.title}> Light </Text>
          </View>

          <View style={styles.widgets}>
            <Text style={styles.value}> {grHumiList?.length ? grHumiList[0].value : "..."} </Text>
            <Text style={styles.title}> Gr Humid </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.widgets}>
            <Switch 
              value={isLedOn}
              onValueChange={(value) => ledChange(value)}
              thumbColor={isLedOn ? '#e28743' : '#f4f3f4'}
              trackColor={{false: '#767577', true: '#eab676'}}
            />
            <Text style={styles.title}>Led</Text>
          </View>

          <View style={styles.widgets}> 
            <Switch 
              value={isPumpOn}
              onValueChange={(value) => pumpChange(value)}
              thumbColor={isPumpOn ? '#e28743' : '#f4f3f4'}
              trackColor={{false: '#767577', true: '#eab676'}}
            />
            <Text style={styles.title}>Pump</Text>
          </View>
        </View>    

        <Text style={styles.title}>Light</Text>
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: getValue("light"),
              }
            ]
          }}
          width={Dimensions.get("window").width * 0.94} // from react-native
          height={220}
          verticalLabelRotation={30}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#e2652d",
            backgroundGradientTo: "#e28743",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "2", // dot width
              strokeWidth: "2",
              stroke: "white"
            }
          }}
          // bezier
          style={{ // box style
            marginVertical: 8,
            borderRadius: 5
          }}
        />

        <Text style={styles.title}>Gr Humid</Text>
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: getValue("grHumi"),
              }
            ]
          }}
          width={Dimensions.get("window").width * 0.94} // from react-native
          height={220}
          verticalLabelRotation={30}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#e2652d",
            backgroundGradientTo: "#e28743",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "2", // dot width
              strokeWidth: "2",
              stroke: "white"
            }
          }}
          // bezier
          style={{ // box style
            marginVertical: 8,
            borderRadius: 5
          }}
        />
              
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    // ligter than black
    color: '#636260'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height:120,
    marginTop: 15,
    marginBottom: 15,
  },
  widgets: {
    backgroundColor: '#fff',
    elevation: 10,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e28743',
  }
});
