import React from 'react';
import { Image, View } from 'react-native';
import tw from 'twrnc';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

  const Header = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const logoImage =  colorScheme === 'dark' ? <Image source={require('../assets/images/techXperience-long.png')} style={tw`w-36 h-10`} resizeMethod='resize' resizeMode='contain'/> : <Image source={require('../assets/images/techXperience-long-dark.png')} style={tw`w-36 h-10`} resizeMethod='resize' resizeMode='contain'/>
  return (
    <View style={tw`flex-row justify-between w-full flex-1 items-center`}>
      {logoImage}
      <View style={tw`flex-row gap-3`}>
        <Ionicons name='search' size={24} color={colors.default}/>
        <Ionicons name='notifications-outline' size={24} color={colors.default}/>
        <Ionicons name='person-circle-outline' size={24} color={colors.default}/>
      </View>
    </View>
  );
};

export default Header;
