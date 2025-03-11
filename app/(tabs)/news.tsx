import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';

import { ThemedButton } from '@/components/ThemedButton'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function news() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const bannerImages = [
    {
      'title': 'India sebar developernya keseluruh dunia, dengan bayaran murah',
      'date': '23 Februari 2025',
      'imageSource': require('@/assets/images/indian-speaker.png')
    },
    {
      'title': 'India sebar developernya keseluruh dunia, dengan bayaran murah',
      'date': '23 Februari 2025',
      'imageSource': require('@/assets/images/indian-speaker.png')
    },
    {
      'title': 'India sebar developernya keseluruh dunia, dengan bayaran murah',
      'date': '23 Februari 2025',
      'imageSource': require('@/assets/images/indian-speaker.png')
    },
    {
      'title': 'India sebar developernya keseluruh dunia, dengan bayaran murah',
      'date': '23 Februari 2025',
      'imageSource': require('@/assets/images/indian-speaker.png')
    },
    {
      'title': 'India sebar developernya keseluruh dunia, dengan bayaran murah',
      'date': '23 Februari 2025',
      'imageSource': require('@/assets/images/indian-speaker.png')
    },
  ]
  return (
    <ThemedView darkColor='#151515' lightColor='white' style={tw`flex-1 px-4`}>
      <SafeAreaView style={tw`flex-1 justify-center pt-4`}>
        <ScrollView>
          <ThemedText style={tw`text-xl mb-5`}>
            News
          </ThemedText>
          <TextInput style={tw`border-2 border-[${colors.secondary}] rounded-xl bg-[${colors.background}] pl-4 text-[${colors.text}] py-2`} autoComplete='name' placeholder='Mau cari berita apa hari ini?' placeholderTextColor={colors.icon} selectionColor={colors.default}/>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`w-full my-3`}
            contentContainerStyle={tw`flex-row gap-5`}>
              {bannerImages.map((item, key) => (
                <View key={key} style={tw`w-80 flex-col`}>
                  <Image source={item.imageSource} style={tw`w-full h-50 mb-3`}/>
                  <ThemedText style={tw`w-full mb-1`} type='link'>
                    {item.title}
                  </ThemedText>
                  <ThemedText type='extrasmallTwo'>
                    {item.date}
                  </ThemedText>
                </View>
              ))}
          </ScrollView>
            
          <View style={tw`flex-col gap-3`}>
            {bannerImages.map((item, key) => (
            <View key={key} style={tw`flex-row justify-between gap-4 items-center h-24`}>
              <Image source={item.imageSource} style={tw`w-24 h-24`}/>
              <View style={tw`w-full h-full flex-col justify-between flex-1`}>
                <ThemedText type='link' style={tw``}>{item.title}</ThemedText>
                <ThemedText type='extrasmall'>{item.date}</ThemedText>
              </View>
            </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};
