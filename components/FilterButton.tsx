import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type FilterButtonProps = {
  text: string;
  onPress: () => void;
  style ?: any;
  selected?: boolean;
}

const FilterButton = ({text, onPress, style, selected}: FilterButtonProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const selectedStyle = selected ? colors.icon : ''
  return (
    <TouchableOpacity style={tw`px-2 py-1`} onPress={onPress}>
      <View style={[tw`border-2 border-[${colors.icon}] px-3 py-1 rounded-md bg-[${selectedStyle}]`, style]} >
        <ThemedText style={tw`text-center`}>
          {text}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default FilterButton;
