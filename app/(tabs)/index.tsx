import { Image, StyleSheet, Platform, ScrollView } from 'react-native';

import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView darkColor='#151515' lightColor='white' style={tw`flex-1 px-4`}>
      <SafeAreaView style={tw`flex-1 flex-grow mx-auto justify-center`}>
        <ScrollView>
          
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
