import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal , Image} from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput style={styles.textInput} placeholder='Your Course Goal!!' onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button color='#841584' title="Add Goal" onPress={addGoalHandler} />
          </View>
          

        </View>

      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    padding:16,
    backgroundColor:'#31136b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor:'#cccccc',
    color:'#841584',
    borderCurve: 1,
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button:{
    width:100,
    marginHorizontal:8
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});