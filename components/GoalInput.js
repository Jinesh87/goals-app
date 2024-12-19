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
        <Button color='#841584' title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderCurve: 1,
    width: '70%',
    marginRight: 8,
    padding: 10
  }
});