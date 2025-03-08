import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light']; // Fallback to light mode if colorScheme is undefined

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tabIconSelected, // Selected tab icon color
        tabBarInactiveTintColor: colors.tabIconDefault, // Unselected tab icon color
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => TabBarBackground,
        tabBarStyle: {
          backgroundColor: colors.background, // Tab bar background color
          borderTopColor: colorScheme === 'dark' ? '#333' : '#eee', // Optional: Add a border for better visibility
          ...Platform.select({
            ios: {
              position: 'absolute', // For iOS blur effect
            },
          }),
          height: 80,
          paddingTop: '5%',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}