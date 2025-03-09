import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Foundation, MaterialIcons, FontAwesome } from '@expo/vector-icons';

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
          borderTopColor: colors.secondary, // Optional: Add a border for better visibility
          ...Platform.select({
            ios: {
              position: 'absolute', // For iOS blur effect
            },
          }),
          height: 70,
          paddingTop: '3%',
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
        name="akademi"
        options={{
          title: 'Akademi',
          tabBarIcon: ({ color }) => <Foundation size={28} name="book-bookmark" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: 'Reels',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="live-tv" color={color} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="newspaper-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="membership"
        options={{
          title: 'Membership',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="id-card-o" color={color} />,
        }}
      />
    </Tabs>
  );
}