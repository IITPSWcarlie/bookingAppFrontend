import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import LoginScreen from './screen/auth/LoginScreen';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <LoginScreen></LoginScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
