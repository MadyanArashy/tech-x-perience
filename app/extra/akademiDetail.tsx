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

  const episodes = [
    {
      "title": "Fundamentals for Front Dev",
      "time": "30 minutes"
    },
    {
      "title": "Crafting the Perfect Website with HTML CSS",
      "time": "1 hour and 20 minutes"
    },
    {
      "title": "Using JavaScript for Interactive Website",
      "time": "45 minutes"
    },
    {
      "title": "Using framework for build website SPAs",
      "time": "1 hour and 3 minutes"
    },
  ]
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
          <View style={tw`px-4 flex-col gap-3`}>
            <ThemedText type='defaultSemiBold' style={tw`text-[${colors.tint}] text-xl mt-3`}>
              Mahir Menjadi Frontend Dev
            </ThemedText>
            <ThemedText type='extrasmall'>
              Bergabung dengan kelar mahir menjadi frontend dev, maka kamu sudah mendapatkan
              fundamental menjadi seorang programmer,dan pada kelas ini kamu akan mendalami itu.
            </ThemedText>
            <View style={tw`flex-row gap-1`}>
              <ThemedText type='extrasmall'> ⭐ 4.5 (823) </ThemedText>
              <ThemedText type='extrasmall'> 4 module </ThemedText>
              <ThemedText type='extrasmall'> Programmer </ThemedText>
            </View>
            <ThemedView style={tw`bg-[${colors.textSecondary}] p-4 rounded-xl flex-col gap-6`}>
              {episodes.map((item, key) => (
              <View style={tw`flex-row gap-3 items-center w-full flex-1`} key={key}>
                <View style={tw`bg-[${colors.icon}] w-10 h-10 rounded-lg`} />
                <View>
                  <ThemedText type='extrasmall' style={tw`text-[${colors.background}]`}>{item.title}</ThemedText>
                  <ThemedText type='ultrasmall' style={tw`text-[${colors.background}]`}>{item.time}</ThemedText>
                </View>
              </View>
              ))}
            </ThemedView>
            <ThemedButton onPress={() => {}} style={tw`bg-[#0086ff] bottom-2 mt-10`}>
              <ThemedText style={tw`text-center`} lightColor='white'>Ikut Kelas</ThemedText>
            </ThemedButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};
