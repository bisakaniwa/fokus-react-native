import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { PencilIcon } from "../../icons";

export const TaskItem = ({
  completed,
  text,
  onToggleComplete,
  onPressEdit,
  onPressDelete
}) => {
  const cardStyles = [styles.card];

  if (completed) {
    cardStyles.push(styles.cardCompleted);
  }

  return (
    <View style={cardStyles}>
      <Ionicons
        name="checkmark-circle"
        color={completed ? '#00F4BF' : '#FFF'}
        size={32}
        style={{ fontWeight: 'bold' }}
        onPress={onToggleComplete}
      />
      <Text style={styles.text}>
        {text}
      </Text>

      <Pressable
        onPress={onPressEdit}
      >
        <PencilIcon />
      </Pressable>
      <Ionicons
        name="trash"
        size={28}
        onPress={onPressDelete}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#98A0A8',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8,
  },
  cardCompleted: {
    backgroundColor: '#0F725C',
  },
  text: {
    flex: 1,
    color: '#021123',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
