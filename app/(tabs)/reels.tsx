import React, { useState, useRef, useCallback } from 'react';
import { Text, View, Image, ScrollView, FlatList, ListRenderItemInfo, Dimensions, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { ThemedButton } from '@/components/ThemedButton'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import VideoScreen from '@/components/VideoScreen';
import { VideoSource } from 'expo-video';
import mediaData from '@/assets/jsons/mediaData.json'
import { FlashList } from '@shopify/flash-list';
import { AntDesign, Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

export default function Reels() {  
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const insets = useSafeAreaInsets(); // Get safe area insets
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [fitContent, setFitContent] = useState<'cover' | 'contain'>('cover'); // Manage fitContent state here
  const flatListRef = useRef(null);

  const videoDATA = mediaData.categories[0].videos;
  const videoItemHeight = height - insets.top - insets.bottom - 2.2;

  // Initialize the like state for each video (all videos start as unliked)
  const [likedVideos, setLikedVideos] = useState(Array(videoDATA.length).fill(false));

  // Function to toggle the like status for a video
  const toggleLike = (index: number) => {
    setLikedVideos(prevState => {
      const newLikedVideos = [...prevState];
      newLikedVideos[index] = !newLikedVideos[index]; // Toggle the liked status
      return newLikedVideos;
    });
  };

  // Function to change fitContent
  const toggleFitContent = () => {
    setFitContent((prevFitContent) => prevFitContent === 'cover' ? 'contain' : 'cover');
  };

   // Handle visibility of videos
  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      if (index !== currentPlaying) {
        setCurrentPlaying(index); // Set the new video to play
      }
    }
  }, [currentPlaying]);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, // The video must be 50% visible to be considered in view
  };

  return (
    <View style={tw`flex-1`}>
      <FlatList
        ref={flatListRef}
        data={videoDATA} // Using the full video object to access both title and sources
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews
        renderItem={({ item, index }) => (
          <View key={index} style={{ height: videoItemHeight }}>
            <VideoScreen
              height={'full'}
              video={item.sources[0]} // Access the first source URL
              contentFit={fitContent} // Use fitContent state
              isPlaying={index === currentPlaying} // Play video only if it's the current one
            />
            <View style={[tw`flex-col items-center gap-5 absolute right-4`, { top: videoItemHeight / 3 }]}>
              <TouchableOpacity onPress={() => toggleLike(index)}>
                <FontAwesome 
                  name={likedVideos[index] ? 'heart' : 'heart-o'} 
                  color={likedVideos[index] ? 'red' : 'lightgray'} // Change color based on like state
                  size={30} 
                />
              </TouchableOpacity>
              <FontAwesome name='commenting-o' color={'lightgray'} size={30}/>
              <FontAwesome name='paper-plane-o' color={'lightgray'} size={30}/>
              <Feather name='bookmark' color={'lightgray'} size={30}/>
              <TouchableOpacity onPress={toggleFitContent}>
                <FontAwesome6 name='camera-rotate' color={'lightgray'} size={30}/>
              </TouchableOpacity>
            </View>
            <View style={[tw`absolute flex-col gap-2 items-start w-full py-4 px-2`, {bottom: 0}]}>
              {/* Mapping title here */}
              <ThemedText type='subtitle' lightColor='white' numberOfLines={1}>
                {item.title} {/* Accessing title from the item */}
              </ThemedText>
              <ThemedText type='extrasmall' lightColor='white' numberOfLines={3}>
                {item.description}
              </ThemedText>
            </View>
          </View>
        )}
      />
    </View>
  );
}
