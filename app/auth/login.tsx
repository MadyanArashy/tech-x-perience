import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';

import { ThemedButton } from '@/components/ThemedButton'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const login = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [isChecked, setChecked] = useState(false);
  const logoImage = colorScheme === 'dark' ? <Image source={require('@/assets/images/techXperience-long.png')} resizeMode='cover' style={tw`h-7 w-full mx-auto`}/> : <Image source={require('@/assets/images/techXperience-long-dark.png')} resizeMode='cover' style={tw`h-7 w-full mx-auto`}/>

  return (
      <ThemedView style={tw`flex-1`}>
        <SafeAreaView style={tw`flex-1`}>
          <ScrollView
          contentContainerStyle={tw`flex-grow justify-center items-center gap-4 px-4`}>
            <View style={tw`w-full`}>
            <ThemedView style={tw`pr-50 py-2 flex-row items-center justify-center mx-auto mb-16 rounded-2xl`}>
              {logoImage}
            </ThemedView>
              <View style={tw`flex-col gap-4 mb-4`}>
              <TextInput style={tw`border-2 border-[${colors.secondary}] rounded-xl bg-[${colors.background}] pl-4 text-[${colors.text}] py-2`} autoComplete='email' placeholder='Masukkan Email' placeholderTextColor={colors.icon} selectionColor={colors.default}/>
              <TextInput style={tw`border-2 border-[${colors.secondary}] rounded-xl bg-[${colors.background}] pl-4 text-[${colors.text}] py-2`} autoComplete='current-password' secureTextEntry placeholder='Masukkan Password' placeholderTextColor={colors.icon} selectionColor={colors.default}/>
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
              <ThemedButton route={'/auth/survey'} DarkColor='#0086ff' LightColor='#0086ff'>
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
                <ThemedButton route={'/auth/survey'} LightColor={colors.textSecondary} DarkColor={colors.textSecondary}>
                  <View style={tw`ml-18 flex-row gap-4 items-center`}>
                    <Ionicons name='logo-google' size={28} color={colors.background}/>
                    <ThemedText style={tw`text-center`} darkColor={colors.background} lightColor={colors.background}>
                      Masuk Dengan Google
                    </ThemedText>
                  </View>
                </ThemedButton>
                <ThemedButton route={'/auth/survey'} LightColor={colors.textSecondary} DarkColor={colors.textSecondary}>
                  <View style={tw`ml-18 flex-row gap-4 items-center`}>
                    <AntDesign name='facebook-square' size={28} color={colors.background}/>
                    <ThemedText style={tw`text-center`} darkColor={colors.secondary} lightColor={colors.secondary}>
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
};

export default login;
