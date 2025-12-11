import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}

      screenOptions={{
        headerShown: true
      }}
    >

      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <Ionicons size={size} color={color} name='albums-outline' />
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout