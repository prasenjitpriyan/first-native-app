import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Platform, StatusBar, View } from 'react-native'

export default function TabLayout() {
  return (
    <>
      <View
        style={{ backgroundColor: '#25292e', height: StatusBar.currentHeight }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="#25292e"
          translucent={false}
        />
      </View>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffd33d',
          tabBarInactiveTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#25292e'
          },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#25292e',
            height: Platform.OS === 'android' ? 60 : 80, // Adjust for platform
            paddingBottom: Platform.OS === 'android' ? 5 : 20 // Ensure proper spacing
          }
        }}
      >
        {/* Home Screen */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                color={color}
                size={24}
              />
            )
          }}
        />
        {/* About Screen */}
        <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={
                  focused ? 'information-circle' : 'information-circle-outline'
                }
                color={color}
                size={24}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}
