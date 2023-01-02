import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { useState } from 'react';

import { authClient, KEY_ACCESS_TOKEN } from "../utils/grpc";
import AsyncStorage from '@react-native-async-storage/async-storage';

// dimensions
import { Dimensions } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {
    if(username == "" || password == "") {
      alert("Please enter username and password !!!");
      return;
    }

    const res = await authClient.login(username, password);
    if (!res.error) {
      const token = res.response?.accessToken || "";
      AsyncStorage.setItem(KEY_ACCESS_TOKEN, token);
      navigation.navigate("TabOne");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topElements}>
        <Image
          style={{
            width: 150,
            height: 150
          }}
          source={require("../assets/images/smart-farm.png")}
        />
        <Text style={styles.title}>Welcome back</Text>
        <Text>Please login to continue</Text>
      </View>

      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.colorText}>LOGIN</Text>
      </TouchableOpacity>

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
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 50,
    width: 0.8 * Dimensions.get('window').width,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  loginBtn: {
    marginTop: 20,
    height: 50,
    width: 0.8 * Dimensions.get('window').width,
    borderRadius: 5,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  topElements: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
