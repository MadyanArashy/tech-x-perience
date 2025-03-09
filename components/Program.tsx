import React, {ReactNode} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

type programProps = {
  icon?: ReactNode;
  title: string;
}
const Program = ({icon, title}:programProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <TouchableOpacity>
      <ThemedView style={tw`flex-col items-center px-1.5 py-2.5 gap-1.5 w-21 mb-3 rounded-xl border-r-4 border-[${colors.tint}]`} lightColor={Colors.light.secondary} darkColor={Colors.dark.secondary}>
        {icon}
        <ThemedText type='ultrasmall' style={tw`text-center`}>
          {title}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default Program;
