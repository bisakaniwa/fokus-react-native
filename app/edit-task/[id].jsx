import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { useTaskContext } from "../../context/useTaskContext";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();
  const [description, setDescription] = useState('');

  const task = tasks?.find((task) => task.id == id);

  useEffect(() => {
    if (task) {
      setDescription(task.description);
    }
  }, [])

  const submitTask = () => {
    if (!description) {
      return;
    }

    updateTask(task.id, description);
    setDescription('');
    router.navigate('/tasks');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>
            Editar tarefa:
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.actions}>
            <Pressable
              style={styles.button}
              onPress={submitTask}
            >
              <Ionicons name="save" />
              <Text>
                Salvar
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 16,
  },
  text: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 26,
  },
  inner: {
    backgroundColor: '#98A0A8',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    gap: 32
  },
  label: {
    fontSize: 18,
    fontWeight: 600,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    width: '90%',
    height: 100,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  }
});
