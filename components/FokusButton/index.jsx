import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon, outlined }) => {
  return (
    <Pressable
      style={[styles.button, outlined && styles.outlinedButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outlined && styles.outlinedButtonText]}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BB72FF',
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderColor: '#BB72FF',
    borderWidth: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontWeight: 'bold',
    fontSize: 18,
  },
  outlinedButtonText: {
    color: '#BB72FF'
  }
})
