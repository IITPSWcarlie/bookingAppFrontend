import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { RadioButton } from 'react-native-paper';
import { format } from 'date-fns';

function SignupScreen() : React.JSX.Element {
  const [category, onChangeCategory] = React.useState('client');
  const [id, onChangeID] = React.useState('');
  const [pw, onChangePW] = React.useState('');
  const [rePw, onChangeRePW] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [phone, onChangePhone] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [birth, onChangeBirth] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  
  return (
    <ScrollView>
      <View style={styles.box}>
        <Text style={styles.title}>회원가입</Text>
          <View style={styles.box}>
            <Text>구분</Text>
            <RadioButton.Group onValueChange={value => onChangeCategory(value)} value={category}>
              <RadioButton.Item label="식객" value="client" />
              <RadioButton.Item label="사장님" value="owner" />
            </RadioButton.Group>

            <Text>ID</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeID}
              value={id}
              placeholder="아이디를 입력하세요."
              maxLength={20}
              />
            <Text>비밀번호</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangePW}
              value={pw}
              placeholder="비밀번호를 입력하세요."
              secureTextEntry={true}
              maxLength={20}
              />
              
            <Text>비밀번호 확인</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeRePW}
              value={rePw}
              placeholder="비밀번호를 재입력하세요."
              secureTextEntry={true}
              maxLength={20}
              />
              
            <Text>성명</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              value={name}
              placeholder="성명을 입력하세요."
              maxLength={20}
              />
              
            <Text>전화번호</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangePhone}
              value={phone}
              placeholder="전화번호를 입력하세요."
              maxLength={20}
              />
              
            <Text>이메일</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="이메일을 입력하세요."
              maxLength={45}
              />
              
            <Text>생년월일</Text>
            <View style={styles.birthBox}>
              <Button title="달력" onPress={() => setOpen(true)} />
            </View>
            <DatePicker
              modal
              open={open}
              date={birth}
              mode={'date'}
              locale={'ko'}
              maximumDate={new Date()}
              onConfirm={(date) => {
                setOpen(false)
                onChangeBirth(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
            <Text>{format(birth, 'yyyy년 MM월 dd일')}</Text>
            <View style={styles.box}>
              <Button
                title="회원가입"
                />
            </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  rBtn: {
    width:25,
  },
  box: {
    margin: 10,
  },
  birthBox: {
    margin: 10,
    width: 70,
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
