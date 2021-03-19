import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import NavBar from './NavBar';
import MainContent from './MainContent';


import Videos from '../data/videos.json';



export default function HomeScreen() {
  let categories = React.useMemo(() => {
    return ["all", ...Object.keys(Videos)];
  }, [])
  let [selectedCat, setCategory] = React.useState("all");
  let handleCategoryChange = React.useMemo(() => (category) => {
    setCategory(category);
  }, [setCategory]);
  return (
    <>
      <NavBar />
      <View style={Styles.top}>
        <CategoriesList categories={categories} categoryChange={handleCategoryChange} selected={selectedCat} />
      </View>
      <MainContent videos={Videos} category={selectedCat} />
    </>
  )
}


function CategoriesList({ categories, categoryChange, selected }) {


  return (
    <>
      <ScrollView contentContainerStyle={Styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          categories.map(category => {
            return (
              <TouchableOpacity key={category} onPress={() => categoryChange(category)}>
                <Text style={[Styles.category, category === selected ? Styles.active : null]}>{category}</Text>
              </TouchableOpacity>
            )
          }
          )
        }

      </ScrollView>
    </>
  );
}

const Styles = StyleSheet.create({
  category: {
    backgroundColor: "#ededed",
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 12,
    textTransform: "capitalize"
  },
  container: {
    flexDirection: "row",
    alignItems: 'center'
  },
  top: {
    borderBottomColor: "#0000000f",
    borderBottomWidth: 1,
    height: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  active: {
    backgroundColor: "#cdcdcd"
  },
  textStyle: {

  }
});