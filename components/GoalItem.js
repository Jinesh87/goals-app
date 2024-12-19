import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (

        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#841584' }} onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) =>pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>

    );
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        fontWeight: 'bold',
        includeFontPadding: true,
        fontVariant: 'small-caps common-ligatures',
        margin: 8,        
        borderRadius: 6,
        backgroundColor: '#E6D0E6'
    },
    pressedItem:{
        opacity:0.5
    },
    goalText: {
        color: '#841584',
        padding: 8,
    }
});