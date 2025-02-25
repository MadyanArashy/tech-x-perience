import { View, Text, ScrollView } from 'react-native'
import tw from 'twrnc'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedButton } from '@/components/ThemedButton'
import { FontAwesome } from '@expo/vector-icons'

import { useThemeColor } from '@/hooks/useThemeColor';

const survey = () => {
  const iconColor = useThemeColor({light: 'black', dark: 'white'}, 'icon')
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
          <ThemedView key={key} style={tw`${radio === (key + 1) ? 'border-2' : ''} ${radio === (key + 1) ? 'border-yellow-500' : ''} rounded-lg`}>
            <ThemedButton bgLightColor='#efefef' bgDarkColor='#292929' style={tw`flex-row justify-between px-4 items-center`} onPress={() => {setRadio(key + 1)}}>
              <ThemedText>
                {item}
              </ThemedText>
              <FontAwesome name={radio === (key + 1) ? 'circle' : 'circle-o'} size={24} color={iconColor}/>
            </ThemedButton>
          </ThemedView>
          ))
        }
      </View>
      <ThemedButton bgLightColor={(radio > 0 ? '#0086ff' : '#bbbbbb')} bgDarkColor='#0086ff' route={(radio > 0) ? '/(tabs)' : ''}>
        <ThemedText style={tw`text-center`} lightColor='white'>
          Selanjutnya
        </ThemedText>
      </ThemedButton>
    </SafeAreaView>
    </ThemedView>
  )
}

export default survey