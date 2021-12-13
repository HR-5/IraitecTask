import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {Appbar, Button, Divider, TextInput} from 'react-native-paper';
import * as color from './utils/color';
import Section from './components/Section';
import Task2 from './components/Task2';

const App = () => {
  const [sections, setsections] = useState([]);
  const [sectionName, setsectionName] = useState('');
  const [b, setb] = useState(false);
  const [task, settask] = useState(1);

  const addSection = () => {
    var id = sections.length + 1;
    var section = {
      id: id,
      name: sectionName,
      courses: [],
    };
    var arr = sections;
    arr.push(section);
    setsections(arr);
    setb(!b);
  };

  const addC = (index, course) => {
    var c = sections[index];
    var cou = c.courses;
    cou.push(course);
    c = {...c, course: cou};
    var sec = sections;
    sec[index] = c;
    setsections(sec);
    setb(!b);
  };

  return (
    <SafeAreaView style={styles.topcontainer}>
      {/* <ScrollView> */}
      <Appbar style={styles.appbar}>
        <Text style={styles.apptitle}>
          {task === 1 ? 'Curriculum' : 'Find Next'}
        </Text>
        <Text
          style={{...styles.apptitle, marginRight: 10}}
          onPress={() => {
            if (task === 1) settask(2);
            else settask(1);
          }}>
          Task {task === 2 ? '1' : '2'}
          {' >'}
        </Text>
      </Appbar>

      {task === 1 ? (
        <View style={{paddingHorizontal: 10}}>
          <View>
            <Text style={styles.title}>Add Section</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TextInput
                mode="outline"
                value={sectionName}
                underlineColor="white"
                activeUnderlineColor="black"
                outlineColor="white"
                onChangeText={text => setsectionName(text)}
                theme={{
                  colors: {
                    primary: 'grey',
                  },
                }}
                label="Section Name"
                style={styles.sectionTxt}
              />
              <Button
                mode="contained"
                style={{backgroundColor: color.Tertiary, marginHorizontal: 10}}
                onPress={() => {
                  addSection();
                }}>
                Add
              </Button>
            </View>
            <Text style={styles.title}>Sections</Text>
          </View>
          <FlatList
            data={sections}
            scrollEnabled={true}
            extraData={b}
            renderItem={item => {
              return (
                <View>
                  <Section section={item.item} index={item.index} addC={addC} />
                </View>
              );
            }}
          />
        </View>
      ) : (
        <>
          <Task2 />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topcontainer: {
    flex: 1,
    backgroundColor: color.Secondary,
  },
  appbar: {
    padding: 10,
    backgroundColor: color.Primary,
    elevation: 4,
    shadowOffset: 4,
    justifyContent: 'space-between',
  },
  apptitle: {
    color: 'white',
    textAlign: 'center',
    marginLeft: 5,
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '400',
    marginTop: 15,
  },
  sectionTxt: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
