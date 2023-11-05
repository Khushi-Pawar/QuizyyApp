import React  from "react";
import { View , Text, StyleSheet} from "react-native"
import Home from "./src/Screens/home";
import Quiz from "./src/Screens/quiz";
import Result from "./src/Screens/result";
import MyStack from "./src/Screens/navigation";
import { NavigationContainer } from "@react-navigation/native";

const App = () =>{
  return(
   
    <NavigationContainer>
  <MyStack/> 
    </NavigationContainer>
   
  )
  }

  const styles = StyleSheet.create({
    container:{
      paddingTop: 40,
      paddingHorizontal: 16,
    },
  })


export default App;
