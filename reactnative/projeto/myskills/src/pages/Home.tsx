import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, SafeAreaView, TextInput, FlatList, Platform} from 'react-native';
import {Button} from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData{
  id: string;
  name: string;
}

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }


    setMySkills(oldState => [...oldState, data]);
    //setMySkills([...mySkills, newSkill]); mesma funcionalidade
  }

  function handleRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(skill => skill.id !== id)); //Deixa apenas as skills diferentes da ID selecionada(objeto)
  }

  useEffect(() => {
    const greetingHour = new Date().getHours() -3;
    console.log(greetingHour);
    //greetingHour < 12 ? setGreeting('Good morning') : setGreeting('Good afternoon');
    if (greetingHour < 12){
      setGreeting('Good morning');
    }else if (greetingHour >= 12 && greetingHour < 18){
      setGreeting('Good afternoon');
    }else{
      setGreeting('Good night');
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {greeting}, Raphael
      </Text>

      <TextInput style={styles.input} placeholder="New skill" placeholderTextColor="#555" onChangeText={setNewSkill}/>
      <Button  title='Add' onPress={handleAddNewSkill}/>
    
      
      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>
      
      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id} //cada item vai ser a propria chave na listagem
        renderItem={({item }) => (
          <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)}/>
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
  greetings: {
    color: '#FFF'
  },
});