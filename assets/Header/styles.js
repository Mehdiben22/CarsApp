import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
  
    container : {
    //  position : 'absolute',
    //  top :50,
    //  zIndex : 100 ,
    //  flexDirection :'row',
    //  justifyContent : 'space-evently',
    //  width : 100,
    //  paddingHorizontal : 20,
    position : 'absolute',
    display:'flex',
    flexDirection :'row',
    paddingHorizontal : 20,
    top :50,
    zIndex : 100 ,
    justifyContent : 'space-between',
    display : "flex",
    alignContent : "flex-end",
    },
    
    subItem:{
        margin:10,
        width:300,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"


    },
    logo : {
     width : 300,
     height : 40,
     resizeMode : 'contain',
   
    },
    menu : {
   width : 100,
   height : 40,
   resizeMode : 'contain',
   
    },
     

})
export default styles;