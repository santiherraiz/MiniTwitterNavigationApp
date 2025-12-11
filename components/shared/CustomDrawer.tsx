import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
        <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
          <Text className='text-primary font-work-black text-3xl'>FH</Text>
        </View>
      </View>

      <DrawerItem
        label="Inicio"
        icon={({ color, size }) => (
          <Ionicons size={size} color={color} name='home-outline' />
        )}
        onPress={() => router.push('/feed')}
      />

      <DrawerItem
        label="Perfil"
        icon={({ color, size }) => (
          <Ionicons size={size} color={color} name='person-outline' />
        )}
        onPress={() => router.push('/hashtags')}
      />

      <DrawerItem
        label="Guardados"
        icon={({ color, size }) => (
          <Fontisto size={size} color={color} name='favorite' />
        )}
        onPress={() => router.push('/messages')}
      />

      <DrawerItem
        label="Cerrar Sesión"
        icon={({ color, size }) => (
          <AntDesign size={size} color={color} name='close' />
        )}
        onPress={() => router.push('/users')}
      />

    </DrawerContentScrollView>
  )
}

export default CustomDrawer