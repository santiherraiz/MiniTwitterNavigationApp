import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
    return (
        <Stack screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white'
            }
        }}>
            <Stack.Screen name='auth/index' options={{ title: 'Login' }} />
            <Stack.Screen name='feed/index' options={{ title: 'Feed' }} />
        </Stack>
    )
}

export default StackLayout