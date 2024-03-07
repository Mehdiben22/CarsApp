import React from "react";
import { View,Image } from "react-native";
import styles from "./styles";

const header =() =>{
   return(
 <View style={styles.container}>
    <View style={styles.subItem}>
         <Image style={styles.logo} source={require('../../assets/ferrlog.png')}  />
    </View>

    <View style={styles.subItem}>
        <Image style={styles.menu} source={require('../../assets/icon.png')} />
    </View>
 </View>

   );

} ;

 export default header;
