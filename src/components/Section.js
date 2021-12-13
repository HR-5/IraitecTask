import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Appbar, Button, Divider, TextInput} from 'react-native-paper';
import * as color from '../utils/color';

const Section = ({section, index, addC}) => {
  const [add, setadd] = useState(false);
  const [courseName, setcourseName] = useState('');

  return (
    <View style={{paddingVertical: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Text style={style.title}>
          {'-> '}Section {section.id}: {section.name}
        </Text>
        <Text
          style={style.plus}
          onPress={() => {
            setadd(!add);
          }}>
          {add ? 'x' : '+'}
        </Text>
      </View>
      {add ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TextInput
            mode="outline"
            value={courseName}
            underlineColor="white"
            activeUnderlineColor="black"
            outlineColor="white"
            onChangeText={text => setcourseName(text)}
            theme={{
              colors: {
                primary: 'grey',
              },
            }}
            label="Course Name"
            style={style.sectionTxt}
          />
          <Button
            mode="contained"
            style={{backgroundColor: color.Tertiary, marginHorizontal: 10}}
            onPress={() => {
              addC(index, courseName);
            }}>
            Add
          </Button>
        </View>
      ) : null}
      {section.courses.map((sec, index) => {
        return (
          <View key={index}>
            <Text style={style.courses}>
              {'     >> '}
              {sec}
            </Text>
          </View>
        );
      })}
      <Divider style={{backgroundColor: 'white', marginTop: 15}} />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
  },
  courses: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  sectionTxt: {
    backgroundColor: 'white',
    flex: 1,
  },
  plus: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 200,
    backgroundColor: color.Tertiary,
  },
});

export default Section;
