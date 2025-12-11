import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen
        name="feed.tsx"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='home-outline' color={color} />
        }}
      />
      <Tabs.Screen
        name="hashtags.tsx"
        options={{
          title: 'Hastags',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='star-outline' color={color} />
        }}
      />
      <Tabs.Screen
        name="messages.tsx"
        options={{
          headerShown: false,
          title: 'Messages',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='file-tray-stacked-outline' color={color} />
        }}
      />
      <Tabs.Screen
        name="users.tsx"
        options={{
          headerShown: false,
          title: 'Users',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='file-tray-stacked-outline' color={color} />
        }}
      />
    </Tabs>

  );
}