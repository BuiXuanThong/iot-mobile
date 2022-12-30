import { StyleSheet, Switch, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';

import {
  LineChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";


const screenWidth = Dimensions.get("window").width;

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [isLedOn, setIsLedOn] = useState(false);
  const [isPumpOn, setIsPumpOn] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.widgets}>
            <Text style={styles.value}> 525 </Text>
            <Text style={styles.title}> Light </Text>
          </View>

          <View style={styles.widgets}>
            <Text style={styles.value}> 24</Text>
            <Text style={styles.title}> Gr Humid </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.widgets}>
            <Switch 
              value={isLedOn}
              onValueChange={(value) => setIsLedOn(value)}
              thumbColor={isLedOn ? '#09b8ed' : '#f4f3f4'}
            />
            <Text style={styles.title}>Led</Text>
          </View>

          <View style={styles.widgets}> 
            <Switch 
              value={isPumpOn}
              onValueChange={(value) => setIsPumpOn(value)}
              thumbColor={isPumpOn ? '#09b8ed' : '#f4f3f4'}
            />
            <Text style={styles.title}>Pump</Text>
          </View>
        </View>    

        <Text style={styles.title}>Light</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width * 0.94} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#4287f5",
            backgroundGradientTo: "#84b0f5",
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
          bezier
          style={{ // box style
            marginVertical: 8,
            borderRadius: 5
          }}
        />

        <Text style={styles.title}>Gr Humid</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width * 0.94} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#4287f5",
            backgroundGradientTo: "#84b0f5",
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
          bezier
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
    color: '#09b8ed',
  }
});
