import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const index = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const logoImage = colorScheme === 'dark' ? <Image source={require('../assets/images/techXperience-long.png')} resizeMode='cover' style={tw`h-20 w-full mx-auto`}/> : <Image source={require('../assets/images/techXperience-long-dark.png')} resizeMode='cover' style={tw`h-20 w-full mx-auto`}/>
  return (
    <ThemedView darkColor='#151515' lightColor='white' style={tw`flex-1 px-4`}>
      <SafeAreaView style={tw`flex-1 flex-grow mx-auto justify-center`}>
        <ThemedView style={tw`px-4 py-2 flex-row items-center justify-center mx-auto mb-16 rounded-2xl`}>
          {logoImage}
        </ThemedView>
        <ThemedText type='subtitle' style={tw`text-center mb-4`}>
          Belajar Technology{'\n'}& Dapatkan Pengalamannya
        </ThemedText>
        <ThemedText style={tw`text-center`}>
          Belajar di TechXperience, kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.
        </ThemedText>
      </SafeAreaView>
      <View style={tw`flex-col bottom-10 gap-2 absolute left-1/15`}>
        <ThemedButton route={'/auth/survey'} LightColor='black' DarkColor='white' transparent>
          <ThemedText style={tw`text-center`}>
            Mulai Belajar Sekarang
          </ThemedText>
        </ThemedButton>
        <ThemedButton route={'/auth/login'} LightColor='#4285f4' DarkColor='#4285f4'>
          <ThemedText style={tw`text-center`}>
            Masuk
          </ThemedText>
        </ThemedButton>
        <ThemedText style={tw`text-center`}>
          #Dari baris 1 pertama, Sampai 1 project pertama
        </ThemedText>
      </View>
    </ThemedView>
  );
};

export default index;
