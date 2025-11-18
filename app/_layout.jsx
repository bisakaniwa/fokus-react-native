import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
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
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="add-task/index"
        options={{
          drawerItemStyle: { display: 'none' },
          title: '',
        }}
      />
    </Drawer>
  );
};
