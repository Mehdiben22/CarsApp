import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    carcontainer:{
        width :'100%',
        height : Dimensions.get('window').height,
  
      },
      titles:{
        marginTop : '30%',
        width :'100%',
        alignItems: 'center',
  
      },
      title :{
        fontSize : 40,
        fontWeight : '500',
        color : '#FF0000'
  
      },
       subtitleCTA : {

        textDecorationLine:'underline',

       },
      subtitle :{
        fontSize : 16,
        
  
      },
      image : {
        width : '100%',
        height : '100%',
        resizeMode : 'cover',
        position : 'absolute',
      },
      buttoncontainer : {
        position : 'absolute',
        bottom : 50,
        width : '100%',

      },
    

},

);

export default styles;
