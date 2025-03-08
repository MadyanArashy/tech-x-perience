import { View, Image, Platform, ScrollView } from 'react-native';

import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Category from '@/components/Category';
import Header from '@/components/Header';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SimpleLineIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '@/components/Card';


export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  return (
    <ThemedView darkColor='#151515' lightColor='white' style={tw`flex-1 px-4`}>
      <SafeAreaView style={tw`flex-1`}>
        <ScrollView contentContainerStyle={tw`pt-4`}>
          <Header />

          <ScrollView
            horizontal
            style={tw`w-full my-3`}
            contentContainerStyle={tw`flex-row gap-5`}>
            <View style={tw`rounded-xl border border-[${colors.default}] w-80`}>
              <Image source={require('@/assets/images/hackathon-ganjar.png')} style={tw`w-full h-50 rounded-xl`}/>
            </View>
            <View style={tw`rounded-xl border border-[${colors.default}] w-80`}>
              <Image source={require('@/assets/images/hackathon-ganjar.png')} style={tw`w-full h-50 rounded-xl`}/>
            </View>
            <View style={tw`rounded-xl border border-[${colors.default}] w-80`}>
              <Image source={require('@/assets/images/hackathon-ganjar.png')} style={tw`w-full h-50 rounded-xl`}/>
            </View>
          </ScrollView>
          
          <View style={tw`flex-row justify-between flex-wrap mb-5`}>
            <Category
            title='Modul Akademi'
            icon={<SimpleLineIcons name='graduation' size={18} color={colors.default} style={tw`rounded-full bg-[${colors.background}] h-7 w-7 pt-1 pl-1.1`}/>}/>    
            <Category
            title='Community'
            icon={<MaterialCommunityIcons name='account-group-outline' size={18} color={colors.default} style={tw`rounded-full bg-[${colors.background}] h-7 w-7 pt-1 pl-1.4`}/>}/>    
            <Category
            title='Event Hackathon'
            icon={<MaterialCommunityIcons name='ticket-outline' size={18} color={colors.default} style={tw`rounded-full bg-[${colors.background}] h-7 w-7 pt-1 pl-1.3`}/>}/>    
            <Category
            title='Chat CS'
            icon={<Ionicons name='chatbubbles-outline' size={18} color={colors.default} style={tw`rounded-full bg-[${colors.background}] h-7 w-7 pt-1 pl-1.2`}/>}/>    
          </View>

          <View>
            <View style={tw`flex-row justify-between mb-1`}>
              <ThemedText type='defaultSemiBold'>📖 Mau belajar apa ni</ThemedText>
              <ThemedText>Lihat semua</ThemedText>
            </View>
            <View style={tw`flex-row justify-between flex-wrap`}>
              <Card />
              <Card />
              <Card />
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
