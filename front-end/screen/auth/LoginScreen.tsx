import React from 'react';
import {View, Text, StyleSheet, TextInput, Button,} from 'react-native';

function LoginScreen() : React.JSX.Element {
  const [id, onChangeID] = React.useState('');
  const [pw, onChangePW] = React.useState('');
  return (
    <View style={styles.box}>
      <Text style={styles.title}>로그인</Text>
        <View style={styles.box}>
        <Text>ID</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeID}
          value={id}
          placeholder="아이디를 입력하세요."
          />
        <Text>비밀번호</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePW}
          value={pw}
          placeholder="비밀번호를 입력하세요."
          secureTextEntry={true}
          />
          <View style={styles.box}>
            <Button
              title="로그인"
              />
          </View>
          <View style={styles.box}>
            <Button
              title="회원가입"
              />
          </View>
      </View>
    </View>
  );
};
export default LoginScreen ;

const styles = StyleSheet.create({
  box: {
    margin: 10,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  title: {
    fontSize:25,
  },
});
