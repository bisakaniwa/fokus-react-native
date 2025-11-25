import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FokusButton } from '../../components/FokusButton';
import { TaskItem } from "../../components/TaskItem";
import { useTaskContext } from "../../context/useTaskContext";
import { PlusIcon } from "../../icons";

export default function Tasks() {
  const { tasks, toggleTaskCompleted, deleteTask } = useTaskContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <TaskItem
              completed={item.completed}
              text={item.description}
              onToggleComplete={() => toggleTaskCompleted(item.id)}
              onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
              onPressDelete={() => deleteTask(item.id)}
            />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.text}>
                Lista de tarefas:
              </Text>
            }
            ListEmptyComponent={<Text style={styles.emptyList}>
              Parece que ainda não há tarefas na sua lista!{'\n'}
              Que tal adicionar a primeira?
            </Text>}
            ListFooterComponent={<View style={{ marginTop: 16 }}>
              <FokusButton
                title="Adicionar nova tarefa"
                icon={<PlusIcon />}
                outlined
                onPress={() => router.navigate('/add-task')}
              />
            </View>}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#021123",
  },
  wrapper: {
    gap: 40,
    width: '90%',
  },
  text: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 26,
    margin: 16,
  },
  emptyList: {
    color: '#98A0A8',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 40,
  },
  inner: {
    gap: 8,
  },
});
