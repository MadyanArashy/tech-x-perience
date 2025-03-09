import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import tw from 'twrnc';

import { ThemedButton } from '@/components/ThemedButton'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Card from '@/components/Card';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const cardData = [
    {
      "image": require('@/assets/images/dkv-gambar.jpg'),
      "title": "Fundamental Belajar Design",
      "desc": "Belajar desain itu gak langsung gambar aja, ada dasarnya, belajar disini"
    },
    {
      "image": require('@/assets/images/ingpokan.jpg'),
      "title": "Tingkatkan Skill Database MySQL",
      "desc": "Belajar database tinggal gini aja, coba buka pelajaran disini"
    },
    {
      "image": require('@/assets/images/saas-cloud.jpg'),
      "title": "Fundamental Belajar Jaringan",
      "desc": "Belajar jaringan lebih dari cuman kabel, belajar disini"
    },
    {
      "image": require('@/assets/images/uiux-explained.png'),
      "title": "Mahir Menjadi Frontend",
      "desc": "masuk ke spesialistnya menjadi frontend dev"
    },
    {
      "image": require('@/assets/images/dkv-gambar.jpg'),
      "title": "Fundamental Belajar Design",
      "desc": "Belajar desain itu gak langsung gambar aja, ada dasarnya, belajar disini"
    },
    {
      "image": require('@/assets/images/ingpokan.jpg'),
      "title": "Tingkatkan Skill Database MySQL",
      "desc": "Belajar database tinggal gini aja, coba buka pelajaran disini"
    },
    {
      "image": require('@/assets/images/saas-cloud.jpg'),
      "title": "Fundamental Belajar Jaringan",
      "desc": "Belajar jaringan lebih dari cuman kabel, belajar disini"
    },
    {
      "image": require('@/assets/images/uiux-explained.png'),
      "title": "Mahir Menjadi Frontend",
      "desc": "masuk ke spesialistnya menjadi frontend dev"
    },
    {
      "image": require('@/assets/images/dkv-gambar.jpg'),
      "title": "Fundamental Belajar Design",
      "desc": "Belajar desain itu gak langsung gambar aja, ada dasarnya, belajar disini"
    },
    {
      "image": require('@/assets/images/ingpokan.jpg'),
      "title": "Tingkatkan Skill Database MySQL",
      "desc": "Belajar database tinggal gini aja, coba buka pelajaran disini"
    },
    {
      "image": require('@/assets/images/saas-cloud.jpg'),
      "title": "Fundamental Belajar Jaringan",
      "desc": "Belajar jaringan lebih dari cuman kabel, belajar disini"
    },
    {
      "image": require('@/assets/images/uiux-explained.png'),
      "title": "Mahir Menjadi Frontend",
      "desc": "masuk ke spesialistnya menjadi frontend dev"
    },
  ]
  return (
    <ThemedView style={tw`flex-1 px-4 bg-[${colors.background}]`}>
      <SafeAreaView style={tw`flex-1 justify-center`}>
        <ScrollView style={tw`pt-4`}>
          <ThemedText type='title'>
            📖 Akademi
          </ThemedText>
          <View style={tw`mb-5`}>
            <View style={tw`flex-row justify-between flex-wrap`}>
              {cardData.map((item, key) => (<Card key={key} image={item.image} title={item.title} desc={item.desc} />))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};
