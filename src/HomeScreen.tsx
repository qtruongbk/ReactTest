import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './AppCss';
import { infoHistory } from '../data-mock';
import { ScrollView } from 'react-native-gesture-handler';

   export default function HomeScreen ({ navigation }: { navigation: any }){
      let screen = [];
      for (let i = 0; i < infoHistory.length; i++) {
         let trieudai = [];
         for (let k = 0; k < infoHistory[i].child.length; k++) {
            trieudai.push(
               <TouchableOpacity onPress={()=> {
                  navigation.navigate(infoHistory[i].child[k].name)
               }} key={k} >
                  <Text style={styles.trieudai}>{infoHistory[i].child[k].name}</Text>
               </TouchableOpacity>
            )
         }
         screen.push(
            <View key={i}>
               <Text style={styles.header}>{infoHistory[i].name}</Text>
               {trieudai}
            </View>
         )
      };
      return (
         <View>
            <ScrollView>
               {screen}
            </ScrollView>
         </View>
      );
   }