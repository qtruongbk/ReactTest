import * as React from 'react';
import { View, Text,ScrollView,Image} from 'react-native';
import {infoHistory,doan1 } from './thongtin-TaySon'
export function TienSuComponent(){
   return(
      <View style={{padding:5}}>
         <ScrollView>
            <View>
               <View style={{flexDirection:'row'}}>
               <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuLiG_2Ptyv27u4ZqwXri7iPJ63S12SF262A&usqp=CAU'}}
               style={{width:170,height:200,}}/>
               <Text style={{width:200,height:200,padding:8}}>{doan1}</Text>
               </View>
               <Text>{infoHistory}</Text>
            </View>
         </ScrollView>
      </View>
   )
}