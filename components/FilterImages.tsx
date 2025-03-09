// import { View, Text, ScrollView, Image } from 'react-native';
// import React, { useState } from 'react';
// import tw from 'twrnc';
// import { ThemedView } from './ThemedView';
// import { ThemedText } from './ThemedText';
// import FilterButton from './FilterButton';

// const FilterImages = () => {
  
//   const [index, setIndex] = useState(0);

//   const buttonSet = [
//     'Modul',
//     'Watchlist',
//     'News',
//     'Events',
//     'Reports',
//   ];

//   const filterImageData = [
//       [
//         {
//           img: require('../assets/images/chess.jpg'),
//           text: 'Modul Strategi Bisnis',
//         },
//         {
//           img: require('../assets/images/blast-business-course.png'),
//           text: 'BLAST Modul Pebisnis',
//         },
//         {
//           img: require('../assets/images/crypto-course.jpg'),
//           text: 'Belajar Crypto dgn MODUL',
//         },
//       ],
      
//       [
//         {
//           img: require('../assets/images/crypto-course.jpg'),
//           text: 'Tontonan Pengkripto',
//         },
//         {
//           img: require('../assets/images/ternak-uang-poster-1.png'),
//           text: 'watt list buat bisnis',
//         },
//         {
//           img: require('../assets/images/blast-business-course.png'),
//           text: 'Watchlist BLAST wajib bgt',
//         },
//       ],

//       [
//         {
//           img: require('../assets/images/blast-business-course.png'),
//           text: 'Berita Binis Keren',
//         },
//         {
//           img: require('../assets/images/crypto-course.jpg'),
//           text: 'BITCOIN JATOH ALAMAK',
//         },
//         {
//           img: require('../assets/images/rich-black-man.jpg'),
//           text: 'Orang Terkaya Afrika',
//         },
//       ],
//   ];

//   let imageData = filterImageData[index];

//   if(!imageData) {imageData = filterImageData[0]}

//   return (
//     <View>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         <View style={tw`flex-row mb-1`}>
//           {buttonSet.map((item, key) => (
//             <View key={key}>
//               <FilterButton
//                 key={key}
//                 text={item}
//                 onPress={() => setIndex(key)}
//                 style={tw`${index === key ? 'bg-neutral-600' : ''}`}
//               />
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {imageData.map((item, key) => (
//           <View key={key} style={tw`flex-col mr-4`}>
//             <Image
//               source={item.img}
//               resizeMode="cover"
//               style={tw`w-50 h-30`}
//             />
//             <ThemedView darkColor="#1d1d1d" style={tw`px-2 py-1 flex-col gap-4`}>
//               <ThemedText type="defaultSemiBold">{item.text}</ThemedText>
//               <View style={tw`flex-row justify-between`}>
//                 <ThemedText type="extrasmallTwo">Beginner</ThemedText>
//                 <ThemedText
//                   type="extrasmall"
//                   style={tw`bg-white text-black rounded-full px-1`}
//                 >
//                   6 Videos
//                 </ThemedText>
//               </View>
//             </ThemedView>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default FilterImages;
import React, {useState} from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import FilterButton from './FilterButton';

const FilterImages = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const [index, setIndex] = useState(0);

  const buttonSet = [
    'Hackathon',
    'Web Design',
    'Workshop',
    'Contests',
  ];

  const filterImageData = [
    [
      {
        "width": 70,
      },
      {
        "width": 50,
      },
      {
        "width": 70,
      },
      {
        "width": 40,
      },
      {
        "width": 60,
      },
      {
        "width": 85,
      },
      {
        "width": 40,
      },
      {
        "width": 55,
      },
      {
        "width": 80,
      },
      {
        "width": 60,
      },
      {
        "width": 95,
      },
      {
        "width": 60,
      },
      {
        "width": 50,
      },
      {
        "width": 110,
      },
    ],
    [
      {
        "width": 40,
      },
      {
        "width": 55,
      },
      {
        "width": 80,
      },
      {
        "width": 50,
      },
      {
        "width": 95,
      },
      {
        "width": 80,
      },
      {
        "width": 40,
      },
      {
        "width": 60,
      },
      {
        "width": 85,
      },
      {
        "width": 40,
      },
      {
        "width": 55,
      },
      {
        "width": 80,
      },
      {
        "width": 60,
      },
      {
        "width": 90,
      },
    ],
  ]
  
  let imageData = filterImageData[index]
  if(!imageData){imageData = filterImageData[0]}
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tw`flex-row mb-1`}>
          {buttonSet.map((item, key) => (
            <View key={key}>
              <FilterButton
                key={key}
                text={item}
                onPress={() => setIndex(key)}
                selected={index == key}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tw`flex-col gap-5`}>
          <View style={tw`flex-row mr-5 gap-5 justify-between`}>
          {imageData.map((item, key) => ( key % 2 === 0 ?
            <View key={key} style={tw`w-[${item.width}] h-40 bg-[${colors.textSecondary}] rounded-lg`}/> : ''
          ))}
          </View>
          <View style={tw`flex-row mr-5 gap-5 justify-between`}>
          {imageData.map((item, key) => ( key % 2 !== 0 ?
            <View key={key} style={tw`w-[${item.width}] h-40 bg-[${colors.textSecondary}] rounded-lg`}/> : ''
          ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterImages;
