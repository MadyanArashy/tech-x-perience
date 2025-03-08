import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ThemedButton } from '@/components/ThemedButton';
import { FontAwesome } from '@expo/vector-icons';

const survey = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [radio, setRadio] = useState(0)
  const selectionData = [
    'Co-Founders', 'Instagram', 'TikTok', 'YouTube', 'Website', 'Lainnya'
  ]
  return (
    <ThemedView style={tw`flex-1 px-4`}>
    <SafeAreaView style={tw`flex-1 py-16 justify-between flex-col`}>
      <View style={tw`flex-col gap-2`}>
        <ThemedText>
          Bagaimana kamu tahu tentang TechXperience?
        </ThemedText>
        {
          selectionData.map((item, key) => (
          <ThemedView key={key} style={tw`${radio === (key + 1) ? 'border' : ''} ${radio === (key + 1) ? 'border-neutral-500' : ''} rounded-lg`}>
            <ThemedButton LightColor='#efefef' DarkColor='#292929' style={tw`flex-row justify-between px-4 items-center`} onPress={() => {radio != (key + 1) ? setRadio(key + 1) : setRadio(0)}}>
              <ThemedText>
                {item}
              </ThemedText>
              <FontAwesome name={radio === (key + 1) ? 'circle' : 'circle-o'} size={20} color={colors.default}/>
            </ThemedButton>
          </ThemedView>
          ))
        }
      </View>
      <ThemedButton LightColor={(radio > 0 ? '#0086ff' : '#bbbbbb')} DarkColor={(radio > 0 ? '#0086ff' : '#555555')} route={(radio > 0) ? '/(tabs)' : ''} disabled={!radio}>
        <ThemedText style={tw`text-center`} lightColor='white'>
          Selanjutnya
        </ThemedText>
      </ThemedButton>
    </SafeAreaView>
    </ThemedView>
  )
};

export default survey;
