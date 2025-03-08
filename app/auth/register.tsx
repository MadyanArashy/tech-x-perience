import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText';
import tw from 'twrnc'
import Checkbox from 'expo-checkbox';
import { ThemedButton } from '@/components/ThemedButton';
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'

const register = () => {
  const iconColor = useThemeColor({light: 'white', dark: 'black'}, 'icon')
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
                <TextInput style={tw`border-2 border-neutral-800 rounded-xl bg-[#1a1a1a] pl-4 text-white`} autoComplete='name' placeholder='Masukkan Nama Lengkap' placeholderTextColor={'grey'} selectionColor={'white'}/>
                <TextInput style={tw`border-2 border-neutral-800 rounded-xl bg-[#1a1a1a] pl-4 text-white`} autoComplete='email' placeholder='Masukkan Email' placeholderTextColor={'grey'} selectionColor={'white'}/>
                <TextInput style={tw`border-2 border-neutral-800 rounded-xl bg-[#1a1a1a] pl-4 text-white`} autoComplete='new-password' secureTextEntry placeholder='Masukkan Password' placeholderTextColor={'grey'} selectionColor={'white'}/>
                <TextInput style={tw`border-2 border-neutral-800 rounded-xl bg-[#1a1a1a] pl-4 text-white`} autoComplete='password' secureTextEntry placeholder='Konfirmasi Password' placeholderTextColor={'grey'} selectionColor={'white'}/>
            </View>
            <ThemedButton route={'/auth/survey'} DarkColor='#0086ff' LightColor='#0086ff'>
              <ThemedText style={tw`text-center`}>
                Masuk
              </ThemedText>
            </ThemedButton>
            <ThemedText style={tw`text-center mb-4`} selectable>
              Sudah punya akun? <Link href={'/auth/login'} style={tw`text-[#0086ff]`} selectable children={'Masuk langsung!'}/>
            </ThemedText>
            <View style={tw`flex-col gap-4`}>
              <View style={tw`mx-auto text-center flex-1 w-full border-b border-gray-500 py-1`}>
                <ThemedText style={tw`text-center`}>
                  Atau mau masuk melalui
                </ThemedText>
              </View>
              <ThemedButton route={'/auth/survey'} LightColor='#151515' DarkColor='white'>
                <View style={tw`ml-18 flex-row gap-4 items-center`}>
                  <Ionicons name='logo-google' size={28} color={iconColor}/>
                  <ThemedText style={tw`text-center`} darkColor='black' lightColor='white'>
                    Masuk Dengan Google
                  </ThemedText>
                </View>
              </ThemedButton>
              <ThemedButton route={'/auth/survey'} LightColor='#151515' DarkColor='white'>
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

export default register