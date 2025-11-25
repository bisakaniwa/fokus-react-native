import { Drawer } from 'expo-router/drawer';
import { BackButtonDrawer } from '../components/BackButtonDrawer';
import { TasksProvider } from '../context/TaskProvider';

export default function Layout() {
  return (
    <TasksProvider>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: '#021123',
          },
          headerTintColor: '#FFF',
          drawerStyle: {
            backgroundColor: '#021123',
          },
          drawerLabelStyle: {
            color: '#FFF',
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{
            drawerLabel: 'Timer',
            title: '',
          }}
        />
        <Drawer.Screen
          name="tasks/index"
          options={{
            drawerLabel: 'Tarefas',
            title: '',
          }}
        />
        <Drawer.Screen
          name="add-task/index"
          options={{
            drawerItemStyle: { display: 'none' },
            title: '',
            headerLeft: () => <BackButtonDrawer backHref="/tasks" />,
          }}
        />
        <Drawer.Screen
          name="edit-task/[id]"
          options={{
            drawerItemStyle: { display: 'none' },
            title: '',
            headerLeft: () => <BackButtonDrawer backHref='/tasks' />,
          }}
        />
      </Drawer>
    </TasksProvider>
  );
};
