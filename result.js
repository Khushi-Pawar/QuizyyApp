import React  from "react";
import { View , Text, StyleSheet, Image, TouchableOpacity} from "react-native"
import Title from "../../Components/title";

const Result = ({navigation, route}) =>{
    const {score} = route.params
    const resultBanner = score > 30? "https://cdni.iconscout.com/illustration/premium/thumb/winner-3488555-2922415.png" :"https://cdni.iconscout.com/illustration/premium/thumb/depressed-boy-showing-his-exam-results-9882657-8041538.png"
    return(
    <View style={styles.Container}>
     <Title titleText="RESULT" />
     <Text style={styles.scoreValue}>{score}</Text>
     <View style={styles.bannerContainer}>
     <Image source={{
            uri:resultBanner, 
            }}
        style={styles.banner}
        resizeMode="contain"
        />
     </View>
     <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
        <Text style={{color:"white"}}>GO TO HOME</Text>
     </TouchableOpacity>
    </View>
   )
  }
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
        fontSize:39,
        fontWeight:"400",
        color: "white",
    },
    scoreValue:{
        fontSize:24,
        fontWeight:"700",
        alignSelf:"center",
    }
  })

  export default Result;