import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { ThemedButton } from '@/components/ThemedButton'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import VideoScreen from '@/components/VideoScreen';
import { Link, useRouter } from 'expo-router';

export default function akademiDetail() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <ThemedView darkColor='#151515' lightColor='white' style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1 flex-grow mx-auto justify-center`}>
        <ScrollView>
          <View style={tw`flex-row items-center justify-between flex-1 w-full p-4`}>
            <TouchableOpacity onPress={router.back} style={tw`p-2`}>
              <AntDesign name='arrowleft' size={24} color={colors.default}/>
            </TouchableOpacity>
            <ThemedText style={tw`text-lg`}>
              Details
            </ThemedText>
            <View style={tw`p-3.5`}/>
          </View>
          <VideoScreen/>
          <View style={tw`px-4`}>
            <ThemedText type='defaultSemiBold' style={tw`text-[${colors.tint}] text-xl`}>
              Mahir Menjadi Frontend
            </ThemedText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};
