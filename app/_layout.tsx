import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import React from 'react';
import "./global.css";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Chirp-Regular': require('../assets/fonts/Chirp-Regular.ttf'),
    'Chirp-Medium': require('../assets/fonts/Chirp-Medium.ttf'),
    'Chirp-Bold': require('../assets/fonts/Chirp-Bold.ttf'),
  });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />

      <Stack.Screen name="(drawer)" />
    </Stack>
  );
}

export default RootLayout