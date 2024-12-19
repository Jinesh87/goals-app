import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
        <TextInput style={styles.textInput} placeholder='Your Course Goal!!' onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color='#841584' title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
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
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding:16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderCurve: 1,
    width: '100%',
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button:{
    width:100,
    marginHorizontal:8
  }
});