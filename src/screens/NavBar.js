import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';

import Avatar from './Avatar';


export default function NavBar() {
  return (
    <View style={Styles.holder}>
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <AntDesign name="youtube" color="red" size={30} />
        <Text style={[Styles.textStyle, { marginLeft: 10 }]}>YouTube</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Feather name="cast" color="#3333339a" size={18} style={Styles.headerIcon} />
        <FontAwesome5 name="bell" color="#3333339a" size={18} style={Styles.headerIcon} />
        <FontAwesome5 name="search" color="#3333339a" size={18} style={Styles.headerIcon} />
        <Avatar />
      </View>
    </View>

  )
}

const Styles = StyleSheet.create({
  holder: {
    height: 45,
    borderBottomColor: "#0000000f",
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 8
  },
  headerIcon: {
    marginRight: 10
  },
  textStyle: {

  }
});