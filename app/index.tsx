import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { ThemedButton } from '@/components/ThemedButton'

const index = () => {
  return (
    <ThemedView darkColor='#151515' lightColor='white' style={tw`flex-1 px-4`}>
      <SafeAreaView style={tw`flex-1 flex-grow mx-auto justify-center`}>
        <ThemedView style={tw`bg-[#151515] px-4 py-2 flex-row items-center justify-center mx-auto mb-16 rounded-2xl`}>
          <Image source={require('../assets/images/techXperience-long.png')} resizeMode='cover' style={tw`h-20 mx-auto`}/>
        </ThemedView>
        <ThemedText type='subtitle' style={tw`text-center mb-4`}>
          Belajar Technology{'\n'}& Dapatkan Pengalamannya
        </ThemedText>
        <ThemedText style={tw`text-center`}>
          Belajar di TechXperience, kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.
        </ThemedText>
      </SafeAreaView>
      <View style={tw`flex-col bottom-10 gap-2 absolute left-1/15`}>
        <ThemedButton route={'/auth/survey'} LightColor='black' DarkColor='white' transparent>
          <ThemedText style={tw`text-center`}>
            Mulai Belajar Sekarang
          </ThemedText>
        </ThemedButton>
        <ThemedButton route={'/auth/login'} LightColor='#4285f4' DarkColor='#4285f4'>
          <ThemedText style={tw`text-center`}>
            Masuk
          </ThemedText>
        </ThemedButton>
        <ThemedText style={tw`text-center`}>
          #Dari baris 1 pertama, Sampai 1 project pertama
        </ThemedText>
      </View>
    </ThemedView>
  )
}

export default index