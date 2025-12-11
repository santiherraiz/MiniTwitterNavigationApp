import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack screenOptions={
      {
        headerShown: false,
        title: 'MiniTwitter',
      }}>
      <Stack.Screen name="./(auth)" />
      <Stack.Screen name="./(drawer)" />
    </Stack>
  );
}