import React, { useEffect, useState } from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native"


const  shuffleArray=(array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const Quiz = ({navigation}) =>{
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getQuiz=async () => {
        setIsLoading(true)
        const url='https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res= await fetch(url);
        const data= await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    };
   useEffect(() => {
    getQuiz();
}, []);

   const handelNextPress=() => {
    setQues(ques+1)
    setOptions(generateOptionsAndShuffle(questions[ques+1]))
   }
   const generateOptionsAndShuffle=(_question)=>{
    const options=[..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
   }

 const handleSelectOptions=(_option)=>{
    if(_option===questions[ques].correct_answer){
        setScore(score+10)
    }
    if(ques!==9){
    setQues(ques+1)
    setOptions(generateOptionsAndShuffle(questions[ques+1]))
   }
   if(ques===9){
    handelShowResult()
   }
}

const handelShowResult=() =>{
    navigation.navigate("Result", {
        score: score
    })
}
  return(
    <View style={styles.container}>
     { isLoading ? <View>
        <Text style={styles.loadingText}>LOADING...</Text>
     </View> : questions && (
    <View style={styles.parent}>
     <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
     </View>
     <View style={styles.options}>
     <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOptions(options[0])}> 
        <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOptions(options[1])}>
        <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOptions(options[2])}>
        <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectOptions(options[3])}>
        <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
    </View>
      <View style={styles.bottom}>
       {/*} <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>PREV</Text>
        </TouchableOpacity>*/}
    {ques!==9 && <TouchableOpacity style={styles.button} onPress={handelNextPress}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>}
    {ques==9 && <TouchableOpacity style={styles.button} onPress={handelShowResult}>
            <Text style={styles.buttonText}>SHOW RESULT</Text>
        </TouchableOpacity>}
        {/*<TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>END</Text>
        </TouchableOpacity>*/}
      </View>
    </View>
     )}
    </View>
    );
  };

  const styles = StyleSheet.create({
        container:{
            paddingTop: 40,
            paddingHorizontal: 20,
            height: '100%',
        },
        top:{
            marginVertical: 16,
        },
        options:{
            marginVertical: 16,
            flex: 1,
        },
        bottom:{
            marginBottom: 12,
            paddingVertical: 16,
            justifyContent:"space-between",
            flexDirection:"row",
        },
        button:{
            backgroundColor:"#9d4edd",
            padding: 12,
            paddingHorizontal: 16,
            borderRadius:12,
            alignItems:"center",
            marginBottom:30,
        },
        buttonText:{
            fontSize:18,
            fontWeight:"350",
            color: "white",
        },
        question:{
            fontSize: 22,
        },
        option: {
            fontStyle: 18,
            fontWeight:'500',
            color: "white",
        },
        optionButton:{
            paddingVertical:12,
            marginVertical: 6,
            backgroundColor:"#43aa8b",
            paddingHorizontal: 12,
            borderRadius: 12,
        },
        parent:{
            height:"100%",
        },
        loadingText:{
            fontSize:18,
            color:"black",
            alignSelf:"center",
            paddingTop:250,
            fontWeight:"700"
        }
  })


export default Quiz;