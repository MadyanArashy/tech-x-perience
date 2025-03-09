import React from 'react';
import { Text, View, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';

const VideoScreen = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Ganti assetId (mp4) dan metadata dengan video yang ingin digunakan.
  // download video big buck bunny dari https://download.blender.org/demo/movies/BBB/
  const assetId = require('@/assets/videos/bbb_sunflower_1080p_30fps_normal.mp4')
  const videoSource = {
    assetId,
    metadata: {
      title: 'Big Buck Bunny'
    }
  }

  const player = useVideoPlayer(videoSource.assetId, player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  
  return (
    <View>
      <VideoView player={player} allowsFullscreen allowsPictureInPicture style={tw`w-full h-70 bg-black`}/>
    </View>
  );
};

export default VideoScreen;