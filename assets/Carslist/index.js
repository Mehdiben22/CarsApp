 import React from "react";
 import { View, FlatList, Dimensions } from "react-native";
 import cars from "./cars";
 import styles from "./styles";
 import Caritem from "../Caritem";
 const Carslist = (props) => {
   return (
 <View style={styles.container}>
  <FlatList
     data={cars}  
     renderItem={({item}) => <Caritem car={item} />}
     showsVerticalScrollIndicator={false}
     snapToAlignment={'start'}
     decelerationRate={'fast'}
     snapToInterval={Dimensions.get('window').height}
     />
 </View>
 
   )
 }
 export default Carslist;