import React, { useState } from 'react';
import {Text, StyleSheet, SafeAreaView, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import { CardSkill } from '../components/SkillCard';

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
    //setMySkills([...mySkills, newSkill]); mesma funcionalidade
  }

  return (
    <SafeAreaView style={styles.container}>
       
      <Text style={styles.title}>
        Welcome, Raphael
      </Text>
      <TextInput style={styles.input} placeholder="New skill" placeholderTextColor="#555" onChangeText={setNewSkill}/>
      <Button onPress={handleAddNewSkill}/>
      
      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>
      
      <FlatList 
        data={mySkills}
        keyExtractor={item => item} //cada item vai ser a propria chave na listagem
        renderItem={({item }) => (
          <CardSkill skill={item}/>
        )}
      />
    
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#121015',
paddingHorizontal: 30,
paddingVertical: 70,
},
title: {
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold'
},
 input: {
  backgroundColor: '#1F1e25',
  color: '#fff',
  fontSize: 18,
  padding: Platform.OS === 'ios' ? 15 : 12,
  marginTop: 30,
  borderRadius: 7,
  },
});