import { StyleSheet, Switch } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [isLedOn, setIsLedOn] = useState(false);
  const [isPumpOn, setIsPumpOn] = useState(false);

  return (
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

      
    </View>
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
