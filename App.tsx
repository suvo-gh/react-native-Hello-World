import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Button,
  Alert
} from 'react-native';

function App() {
  return(
    <SafeAreaView>
      <View>
        <Text>
          Hello World!
        </Text>
        <Text>
          Hello World!
        </Text>
        <Text>
          Hello World!
        </Text>
        <Text>
          Hello World!
        </Text>
        <Button
        title="Press me"
        onPress={() => Alert.alert('Cannot press this one')}
      />
      </View>
    </SafeAreaView>
  )
}

export default App;