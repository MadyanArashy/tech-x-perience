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
  const assetId = require('@/assets/videos/bbb_sunflower_1080p_30fps_stereo_abl.mp4')
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
    <View style={styles.contentContainer}>
    <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
    <View style={styles.controlsContainer}>
      <Button
        title={isPlaying ? 'Pause' : 'Play'}
        onPress={() => {
          if (isPlaying) {
            player.pause();
          } else {
            player.play();
          }
        }}
      />
    </View>
  </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});