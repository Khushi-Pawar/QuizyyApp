import React  from "react";
import { View , Text, StyleSheet, TouchableOpacity, Image,} from "react-native"
import Title from "../../Components/title";

const Home = ({navigation}) => {
  return(
    <View style={styles.Container}>
     <Title titleText="QUIZYY"/>
     <View>
        <Image source={{
            uri: "https://cdni.iconscout.com/illustration/free/thumb/free-ask-customer-feedback-2079173-1752910.png"}}
        style={styles.banner}
        resizeMode="contain"
        />
         </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
     </TouchableOpacity>
     </View>
   
    );
};

  const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
        
    },
    bannerContainer:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    Container:{
        paddingTop: 90,
        paddingHorizantal: 20,
        height:"100%",
    },
    button:{
        maxWidth:"90%",
        backgroundColor:"#9d4edd",
        padding: 16,
        borderRadius:16,
        alignSelf:"center",
        marginBottom:30,
        paddingHorizontal: 86,
    },
    buttonText:{
        fontSize:29,
        fontWeight:"400",
        color: "white",
    },
  })

export default Home;