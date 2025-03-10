import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import tw from 'twrnc';

import { ThemedButton } from '@/components/ThemedButton'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import VideoScreen from '@/components/VideoScreen';
import { AntDesign } from '@expo/vector-icons';

export default function reels() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const windowHeight = Dimensions.get('window').height
  return (
    <ThemedView darkColor='red' lightColor='white' style={tw`flex-1`}>
      <View style={tw`w-full flex-1 max-h-[640px] mx-auto mt-[${windowHeight/10}]`}>
        <View style={tw`absolute flex-col right-2 z-100 bottom-[${windowHeight/10}]`}>
          <AntDesign name='heart' size={36}/>
        </View>
        <VideoScreen height={'full'} contentFit='cover'/>
      </View>
    </ThemedView>
  );
};
