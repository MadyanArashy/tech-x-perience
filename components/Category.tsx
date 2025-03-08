import React, {ReactNode} from 'react';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

type categoryProps = {
  icon?: ReactNode;
  title: string;
}
const Category = ({icon, title}:categoryProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <ThemedView style={tw`flex-row items-center p-3 gap-1.5 w-43 mb-3 rounded-xl border-l-4 border-[${colors.tint}]`} lightColor={Colors.light.secondary} darkColor={Colors.dark.secondary}>
      {icon}
      <ThemedText>
        {title}
      </ThemedText>
    </ThemedView>
  );
};

export default Category;
