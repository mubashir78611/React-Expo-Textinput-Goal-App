import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
  const [enterGoalText, setenterGoaltext] = useState('');
  const [courseGoals, setcourseGoal] = useState([]);
  function goalInptHandler(enterText){
   setenterGoaltext(enterText);
  }
  function addGoalHandler(){
    //console.log(enterGoalText);
    setcourseGoal(currentCourseGoals=>[
      ...currentCourseGoals,
      enterGoalText]);
  }
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
      <TextInput placeholder='Your Course Goal!' style={styles.inputxt} onChangeText={goalInptHandler}/>
    <Button title='Add Goal' onPress={addGoalHandler}/></View>
    {courseGoals.map((Goal)=> <Text key={Goal} style={{fontSize:20, margin:20}}>{Goal} </Text>)}
      {/* <View style={{ flexDirection:'row'}}>
      <View style={styles.box1}><Text style={styles.txt}>Box1</Text></View>
      <View style={styles.box2}><Text style={styles.txt}>Box2</Text></View>
      <View style={styles.box3}><Text style={styles.txt}>Box3</Text></View>
      </View>*/}
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
 box1:{
  height:100, width:100, borderWidth:1, backgroundColor:'red'
 },
 box2:{
  height:100, width:100, borderWidth:1, backgroundColor:'green'
 },
 box3:{
  height:100, width:100, borderWidth:1, backgroundColor:'blue'
 },
txt:{
  textAlign:'center',
  justifyContent:'center',
  top:40,
  fontSize:20
},
inputxt:{ paddingHorizontal:16,
  marginRight:10, 
  fontSize:20,
   borderWidth:1 ,
    borderColor:"brown",
     width:'70%'}
  
})