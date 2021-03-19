import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { AntDesign, Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Avatar from './Avatar'

export default function VideoItem({ video }) {
  let { publishedAt, title, thumbnails } = video.snippet;
  return (
    <View style={Styles.holder}>
      <View style={Styles.imageHolder}>
        <Image source={{ uri: thumbnails.medium.url }} style={Styles.featureImage} />
        <View style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10, alignItems: 'center' }}>
          <Avatar size={30} />
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <Text style={Styles.textStyle}>
              {title}
            </Text>
            <Text style={Styles.textStyle}>
              KarDev17.   27k views  45 min ago
              </Text>
          </View>
          <View style={{ justifyContent: 'flex-start' }}>
            <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>

  )
}


const Styles = StyleSheet.create({
  holder: {

    marginBottom: 10,
    backgroundColor: "#00000008"
  },
  imageHolder: {
    height: 290,
    width: '100%'
  },
  featureImage: {
    height: null,
    width: null,
    flex: 1
  },
  textStyle: {
    color: "#555"
  }

});