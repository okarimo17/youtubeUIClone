import React from 'react';
import {View,Image,StyleSheet} from 'react-native';


export default function Avatar({size=20}){
  return (
  <View style={[Styles.avatarStyle,{height:size,width:size,borderRadius:size/2}]}>
            <Image  source={require('../../assets/images/logo.jpg')} style={Styles.avatarInner} />
        </View>
  )
}


const Styles = StyleSheet.create({
  avatarStyle:{
    borderColor:'#0000000a',
    overflow:'hidden'
  },
  avatarInner:{
    height:null,width:null,flex:1
  },
});