import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import tw from 'twrnc';

import { ThemedButton } from '@/components/ThemedButton'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import VideoScreen from '@/components/VideoScreen';

export default function reels() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <ThemedView darkColor='red' lightColor='white' style={tw`flex-1`}>
      <View style={tw`w-full flex-1 bg-blue-500 pt-20`}>
        <VideoScreen height={'full'}/>
      </View>
    </ThemedView>
  );
};
