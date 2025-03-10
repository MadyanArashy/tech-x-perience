import React, { useCallback, useState } from 'react';
import { Pressable, Text, TouchableHighlight, View } from 'react-native';
import tw from 'twrnc';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { useEvent, useEventListener } from 'expo';
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS } from 'react';

type videoProps = {
  height?: number | 'full',
  contentFit?: 'cover' | 'contain' | 'fill'
}

// Loading asset video dan player untuk video
// Untuk video big buck bunny download dari https://download.blender.org/peach/bigbuckbunny_movies/
// Atau pakai versi external URL dengan http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
export const video1: VideoSource =
'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export const video2: VideoSource =
'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

const VideoScreen = ({height, contentFit}: videoProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  if(!height){height = 70}
  if(!contentFit){contentFit = 'contain'}

  const player1 = useVideoPlayer(video1, (player) => {
    player.play()
    player.loop = true;
  });
  
  const player2 = useVideoPlayer(video2, (player) => {
    player.loop = true;
  });

  const [currentPlayer, setCurrentPlayer] = useState(player1);

  const replacePlayer = useCallback(async () => {
    currentPlayer.pause();
    if (currentPlayer === player1) {
      setCurrentPlayer(player2);
      player1.pause();
      player2.play();
    } else {
      setCurrentPlayer(player1);
      player2.pause();
      player1.play();
    }
  }, [player1, currentPlayer]);

  const { isPlaying } = useEvent(currentPlayer, 'playingChange', { isPlaying: currentPlayer.playing });

  return (
    <View>
      <Pressable style={tw`absolute mb--5 z-100 h-${height} w-full ${isPlaying ? 'bg-transparent' : 'bg-[rgba(0,0,0,0.3)]'}`} onPress={() => {
      if (isPlaying) {
        currentPlayer.pause();
      } else {
        currentPlayer.play();
      }
    }}> 
    </Pressable>
      <VideoView
        player={currentPlayer}
        allowsFullscreen={true}
        allowsPictureInPicture
        contentFit={contentFit}
        nativeControls={false}
        style={tw`w-full h-${height} bg-black`}
      />
    </View>
  );
};

export default VideoScreen;
