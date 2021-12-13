import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Appbar, Button, Divider, TextInput} from 'react-native-paper';
import * as color from '../utils/color';

const Task2 = () => {
  const [index, setindex] = useState('');
  const [result, setresult] = useState('');
  const find = () => {
    var ind = parseInt(index);
    if (ind <= 0) {
      setresult('Invalid');
      return;
    }
    var x = ind * ind;
    if (ind % 2 === 0) {
      x = x - 1;
    } else {
      x = x + 1;
    }
    setresult('' + x);
  };
  return (
    <View>
      <View>
        <Text style={style.title}>Enter Index</Text>
        <View style={{height: 40, margin: 10}}>
          <TextInput
            mode="outline"
            value={index}
            underlineColor="white"
            keyboardType="number-pad"
            activeUnderlineColor="black"
            outlineColor="white"
            onChangeText={text => setindex(text)}
            theme={{
              colors: {
                primary: 'grey',
              },
            }}
            style={style.sectionTxt}
          />
        </View>
        <Button
          mode="contained"
          style={{
            backgroundColor: color.Tertiary,
            marginHorizontal: 10,
            marginTop: 20,
          }}
          onPress={() => {
            find();
          }}>
          Go!
        </Button>
        <Text style={style.result}>Result</Text>
        <Text style={style.answer}>{result}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  sectionTxt: {
    backgroundColor: 'white',
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  result: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  answer: {
    fontSize: 60,
    fontWeight: 'bold',
    color: color.Tertiary,
    textAlign: 'center',
  },
});

export default Task2;
