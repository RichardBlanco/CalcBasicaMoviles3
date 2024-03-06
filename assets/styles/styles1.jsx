import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      // flexDirection: 'column' predeterminado en movil, row en web.
    },
  
    container1:{  
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    container2:{
      flex:5,
      backgroundColor:'dodgerblue', 
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    container3:{
    flex:1,
    backgroundColor:'orange', 
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    }
  });

const styleText = StyleSheet.create({
    colora:{
        color:"blue",
        backgroundColor: "powderblue",
        fontSize: 25
    },
    bbox:{
        borderWidth: 3,
        borderColor: 'white'
    }
})

const styleInput = StyleSheet.create({
    input:{
        color:'blue',
        fontSize: 20,
        borderRadius:10,
        backgroundColor: 'gray',
        padding: 5,
        textAlign: 'center',
        marginTop: 10,
    }
})

export {styleText,styles, styleInput} 

//Para exportar varios objetos, se hace de la siguiente manera:
//export {styleText,styles, styleInput};