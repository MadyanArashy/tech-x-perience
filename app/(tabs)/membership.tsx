import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { ThemedButton } from '@/components/ThemedButton'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function membership() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const [membership, setMembership] = useState(0);

  const benefitData = [
    {
      "image": require('@/assets/images/benefit-1.png'),
      "text": "Akses ke Semua Modul Pembelajaran"
    },
    {
      "image": require('@/assets/images/benefit-2.png'),
      "text": "Jalur Pembelajaran yang dirancang oleh mentor"
    },
    {
      "image": require('@/assets/images/benefit-3.png'),
      "text": "Mentoring sebulan 4x pertemuan"
    },
    {
      "image": require('@/assets/images/benefit-4.png'),
      "text": "Mendapatkan sertifikat dan keuntungan lainnya"
    }
  ]
  const packageData = [
    {
      "length": "12 Bulan",
      "price": "Rp 599.000,00",
      "weeklyCost": "Rp 12.475,00"
    },
    {
      "length": "4 Bulan",
      "price": "Rp 260.000,00",
      "weeklyCost": "Rp 16.250,00"
    },
    {
      "length": "1 Bulan",
      "price": "Rp 85.000,00",
      "weeklyCost": "Rp 21.250,00"
    },
  ]

  return (
    <ThemedView darkColor='#151515' lightColor='white' style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1 flex-grow mx-auto justify-center pt-12`}>
        <ScrollView>
          <ThemedText type='subtitle' style={tw`text-center mb-1.5`}>
            Start Your 7-Day Free Trial Today!
          </ThemedText>
          <ThemedText style={tw`text-center`} type='extrasmall'>
            Buka Fitur Eksklusif dengan Techxperience Membership
          </ThemedText>
        </ScrollView>
      </SafeAreaView>

      <ThemedView style={tw`bg-[${colors.textSecondary}] bottom-0 pt-10 px-8 flex-col rounded-t-3xl`}>
        <ThemedText type='defaultSemiBold' style={tw`text-center text-[${colors.background}] text-lg mb-5`}>
          Kamu akan mendapatkan:
        </ThemedText>
        <View style={tw`mb-5`}>
          {benefitData.map((item, key) => (
          <View style={tw`flex-row w-full items-center mb-3 gap-2`} key={key}>
            <Image source={item.image} style={tw`w-11.3 h-11`}/>
            <ThemedText style={tw`text-[${colors.background}]`}>
              {item.text}
            </ThemedText>
          </View>
          ))}
        </View>
        <View style={tw`mb-5 flex-col gap-3`}>
          {packageData.map((item, key) => (
            <TouchableOpacity key={key} onPress={() => { setMembership(key+1) }}>
              <ThemedView style={tw`flex-row w-full justify-between items-end bg-[${Colors.light.background}] px-4 py-2 rounded-xl ${membership === (key+1) ? 'border-2' : ''} ${membership === (key+1) ? 'border-' : ''}[${membership === (key+1) ? colors.tint : ''}]`}>
                <View style={tw`flex-col`}>
                  <ThemedText type='defaultSemiBold' darkColor='black'>{item.length}</ThemedText>
                  <ThemedText type='default' darkColor='black'>{item.price}</ThemedText>
                </View>
                { key === 0 ?
                  <View style={tw`px-2 py-1 absolute top-0 right-0 bg-[${colors.tint}] rounded-bl-xl`}>
                  <ThemedText lightColor='white' type='extrasmall'>
                    Save 42%
                  </ThemedText>
                </View> : ''}
                <ThemedText type='extrasmall' style={tw`text-neutral-400`}>
                  {item.weeklyCost}
                </ThemedText>
              </ThemedView>
            </TouchableOpacity>
          ))}
           <ThemedButton LightColor={(membership > 0 ? '#0086ff' : '#bbbbbb')} DarkColor={(membership > 0 ? '#0086ff' : '#555555')} route={''} disabled={!membership}>
            <ThemedText style={tw`text-center`} lightColor='white'>
              Selanjutnya
            </ThemedText>
          </ThemedButton>
        </View>
      </ThemedView>
    </ThemedView>
  );
};
