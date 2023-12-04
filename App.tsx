import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Button,
  Alert,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function App() {
  
  let isDarkMode = useColorScheme() === 'dark';

  return(
      <View style={isDarkMode ? styles.blackContainer : styles.whiteContainer}>
        <Text style={isDarkMode ? styles.blackText : styles.whiteText}>
          Hello World!
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  whiteContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'

  },
  blackContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  blackText: {
    color: '#000000',
    backgroundColor: "white"
  },
  whiteText: {
    color: "#FFFFFF",
    backgroundColor: "black"
  }
})

export default App;