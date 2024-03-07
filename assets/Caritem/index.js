import React from 'react';
import { View , Text, ImageBackground} from 'react-native';
import styles from './styles';
import Buttonstyle from '../Buttonstyle';
const Caritem=(props) => {
    const {name,tagline,image,taglineCTA}= props.car;

return(
<View style={styles.carcontainer}>
        <ImageBackground 
        source={image} 
        style={styles.image}/>

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline} 
          {' '}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View> 

        <View style={styles.buttoncontainer}>
        <Buttonstyle type="primary" 
        content={"Custom Order"} 
        onPress ={()=>{
            console.warn("Custom Order is Ready")
        }} 
        />
        <Buttonstyle type="secondary" 
        content={"Existing Inventory"} 
        onPress ={()=>{
            console.warn("Existing Inventory is Here")
        }} 
        
        />
        </View>
        </View>
     
);
    };


export default Caritem;