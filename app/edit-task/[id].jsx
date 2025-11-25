import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import FormTask from "../../components/FormTask";
import { useTaskContext } from "../../context/useTaskContext";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();

  const task = tasks?.find((task) => task.id == id);

  if (!task) {
    return (
      <View>
        <Text>
          Não foi encontrada uma tarefa com o id {id}...
        </Text>
      </View>
    )
  }

  const submitTask = (description) => {
    updateTask(task.id, description);
    router.navigate('/tasks');
  };

  return (
    <FormTask onFormSubmit={submitTask} defaultValue={task.description} />
  )
};

const styles = StyleSheet.create({});
