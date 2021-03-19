import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import VideoItem from './VideoItem'



export default function NavBar({ videos, category }) {

  function FillVieos() {
    if (category == "all") {
      let ListVideos = [];
      Object.keys(videos).map((cat) => {
        ListVideos = [...videos[cat], ...ListVideos]
      })
      return ListVideos.map((video, index) => <VideoItem key={video.id.videoId + "+" + index} video={video} />);
    }
    return videos[category].map((video, index) =>
      <VideoItem key={video.id.videoId + "+" + index} video={video} />
    );
  }


  return (

    <ScrollView style={Styles.holder} showsVerticalScrollIndicator={false}>
      {FillVieos()}
    </ScrollView>

  )
}



const Styles = StyleSheet.create({
  holder: {
    flex: 1,
    flexDirection: "column",
  },
  /*  textStyle:{
  
    }*/

});