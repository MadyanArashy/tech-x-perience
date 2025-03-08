import React from 'react';
import { Text, View, Image, ImageSourcePropType } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

type cardProps = {
  image: ImageSourcePropType,
  title: string,
  desc: string,
}

const Card = ({image, title, desc}: cardProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <ThemedView style={tw`w-43 flex-col rounded-lg mb-3`} lightColor={colors.secondary} darkColor={colors.secondary}>
      <Image source={image} style={tw`w-full h-30 rounded-t-lg mb-3 border-[${colors.secondary}]`}/>

      <View style={tw`px-1.5 pb-3 flex-col justify-between flex-1 rounded-b-lg`}>
        <View style={tw`flex-col gap-1.5`}>
          <ThemedText type='extrasmall' style={tw`h-10`}>
            {title}
          </ThemedText>
          <ThemedText type='ultrasmall'>
            {desc}
          </ThemedText>
        </View>

        <View style={tw`flex-row justify-end items-center gap-2 bottom-0`}>
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
