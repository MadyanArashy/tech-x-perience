import React from 'react';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const Card = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <ThemedView style={tw`w-43 flex-col rounded-lg mb-3`} lightColor={colors.secondary} darkColor={colors.secondary}>
      <Image source={require('@/assets/images/dkv-gambar.jpg')} style={tw`w-full h-30 rounded-t-lg mb-3`}/>

      <View style={tw`px-1.5 pb-3 flex-col gap-1.5 rounded-b-lg`}>
        <ThemedText type='extrasmall'>
          Fundamental Belajar Design
        </ThemedText>
        <ThemedText type='ultrasmall'>
          Belajar desain itu gak langsung gambar aja, ada dasarnya, belajar disini
        </ThemedText>

        <View style={tw`flex-row justify-end items-center gap-2`}>
          <ThemedText type='ultrasmall'>
            Mulai Belajar
          </ThemedText>
          <AntDesign name='play' size={16} color={colors.default}/>
        </View>
      </View>

    </ThemedView>
  );
};

export default Card;
