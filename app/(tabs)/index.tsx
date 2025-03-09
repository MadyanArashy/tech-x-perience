import { View, Image, Platform, ScrollView } from 'react-native';

import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Category from '@/components/Category';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SimpleLineIcons, Ionicons, MaterialCommunityIcons, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import Card from '@/components/Card';
import Program from '@/components/Program'
import FilterImages from '@/components/FilterImages';


export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const logoImage =  colorScheme === 'dark' ? <Image source={require('@/assets/images/techXperience-long.png')} style={tw`w-36 h-10`} resizeMethod='resize' resizeMode='contain'/> : <Image source={require('@/assets/images/techXperience-long-dark.png')} style={tw`w-36 h-10`} resizeMethod='resize' resizeMode='contain'/>

  const bannerImages = [
    require('@/assets/images/hackathon-ganjar.png'),
    require('@/assets/images/hackathon-ganjar.png'),
    require('@/assets/images/saas-cloud.jpg')
  ]

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
  ]
  
  return (
    <ThemedView darkColor='#151515' lightColor='white' style={tw`flex-1 px-4`}>
      <SafeAreaView style={tw`flex-1`}>
        <ScrollView contentContainerStyle={tw`pt-4`} showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row justify-between w-full flex-1 items-center`}>
          {logoImage}
          <View style={tw`flex-row gap-3`}>
            <Ionicons name='search' size={24} color={colors.default}/>
            <Ionicons name='notifications-outline' size={24} color={colors.default}/>
            <Ionicons name='person-circle-outline' size={24} color={colors.default}/>
          </View>
        </View>

          <ScrollView
            horizontal
            style={tw`w-full my-3`}
            contentContainerStyle={tw`flex-row gap-5`}>
              {bannerImages.map((item, key) => (
                <View key={key} style={tw`rounded-xl border border-[${colors.default}] w-80`}>
                  <Image source={item} style={tw`w-full h-50 rounded-xl`}/>
                </View>
              ))}
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

          <View style={tw`mb-5`}>
            <View style={tw`flex-row justify-between mb-1`}>
              <ThemedText type='defaultSemiBold'>📖 Mau belajar apa ni</ThemedText>
              <ThemedText>Lihat semua</ThemedText>
            </View>
            <View style={tw`flex-row justify-between flex-wrap`}>
              {cardData.map((item, key) => (<Card key={key} image={item.image} title={item.title} desc={item.desc} />))}
            </View>
          </View>

          <View style={tw`mb-8`}>
            <View style={tw`flex-row justify-between mb-1`}>
              <ThemedText type='defaultSemiBold'>🗓️ Ikuti event terdekat</ThemedText>
              <ThemedText>Lihat semua</ThemedText>
            </View>
            <FilterImages/>
          </View>

          <View style={tw`mb-8`}>
            <View style={tw`flex-row justify-between mb-1`}>
              <ThemedText type='defaultSemiBold'>🗓️ Program Techxperience</ThemedText>
              <ThemedText>Lihat semua</ThemedText>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Program
              title='TechXPerience Career'
              icon={<MaterialCommunityIcons name='hand-coin-outline' size={28} color={colors.textSecondary}/>}/>
              <Program
              title='Pengembangan Usaha'
              icon={<FontAwesome6 name='building-circle-arrow-right' size={26} color={colors.textSecondary}/>}/>
              <Program
              title='TechXPerience Career'
              icon={<FontAwesome6 name='sack-dollar' size={26} color={colors.textSecondary}/>}/>
              <Program
              title='TechXPerience Career'
              icon={<FontAwesome5 name='money-check-alt' size={28} color={colors.textSecondary}/>}/>
            </View>
          </View>
              
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
