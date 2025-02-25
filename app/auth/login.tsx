import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText';
import tw from 'twrnc'
import Checkbox from 'expo-checkbox';
import { ThemedButton } from '@/components/ThemedButton';
import { DarkTheme } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'

const login = () => {
  const iconColor = useThemeColor({light: 'white', dark: 'black'}, 'icon')
  const [isChecked, setChecked] = useState(false);
  return (
    <ThemedView style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1`}>
        <ScrollView
        contentContainerStyle={tw`flex-grow justify-center items-center gap-4 px-4`}>
          <View style={tw`w-full`}>
          <ThemedView style={tw`bg-[#151515] px-4 py-2 flex-row items-center justify-center mb-16 rounded-2xl left-0`}>
            <Image source={require('@/assets/images/techXperience-long.png')} resizeMode='contain' style={tw`h-8`}/>
          </ThemedView>
            <View style={tw`flex-col gap-4 mb-4`}>
                <TextInput style={tw`border-2 border-neutral-800 rounded-xl bg-[#1a1a1a] pl-4 text-white`} autoComplete='email' textContentType='emailAddress' placeholder='Masukkan Email' placeholderTextColor={'grey'} selectionColor={'white'}/>
                <TextInput style={tw`border-2 border-neutral-800 rounded-xl bg-[#1a1a1a] pl-4 text-white`} autoComplete='current-password' secureTextEntry placeholder='Masukkan Password' placeholderTextColor={'grey'} selectionColor={'white'}/>
            </View>
            <View style={tw`flex-row items-center justify-between mb-6`}>
              <View style={tw`flex-row items-center gap-2`}>
                <Checkbox
                  style={tw`border-neutral-700`}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#4630EB' : undefined}
                />
                <ThemedText type='default'>
                  Ingat Saya
                </ThemedText>
              </View>
              <ThemedText type='link'>
                Lupa Password?
              </ThemedText>
            </View>
            <ThemedButton route={'/auth/survey'} bgDarkColor='#0086ff' bgLightColor='#0086ff'>
              <ThemedText style={tw`text-center`}>
                Masuk
              </ThemedText>
            </ThemedButton>
            <ThemedText style={tw`text-center mb-4`} selectable>
              Belum punya akun? <Link href={'/auth/register'} style={tw`text-[#0086ff]`} selectable children={'Daftar dulu!'}/>
            </ThemedText>
            <View style={tw`flex-col gap-4`}>
              <View style={tw`mx-auto text-center flex-1 w-full border-b border-gray-500 py-1`}>
                <ThemedText style={tw`text-center`}>
                  Atau mau masuk melalui
                </ThemedText>
              </View>
              <ThemedButton route={'/(tabs)'} bgLightColor='#151515' bgDarkColor='white'>
                <View style={tw`ml-18 flex-row gap-4 items-center`}>
                  <Ionicons name='logo-google' size={28} color={iconColor}/>
                  <ThemedText style={tw`text-center`} darkColor='black' lightColor='white'>
                    Masuk Dengan Google
                  </ThemedText>
                </View>
              </ThemedButton>
              <ThemedButton route={'/(tabs)'} bgLightColor='#151515' bgDarkColor='white'>
                <View style={tw`ml-18 flex-row gap-4 items-center`}>
                  <AntDesign name='facebook-square' size={28} color={iconColor}/>
                  <ThemedText style={tw`text-center`} darkColor='black' lightColor='white'>
                    Masuk Dengan Facebook
                  </ThemedText>
                </View>
              </ThemedButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  )
}

export default login