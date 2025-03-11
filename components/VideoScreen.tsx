import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { useFocusEffect } from '@react-navigation/native';

type videoProps = {
  video: VideoSource,
  height?: number | 'full',
  isPlaying?: boolean,
  contentFit?: 'contain' | 'cover' | 'fill',
  onPlayerReady?: (playerInstance: any) => void, // Add a callback to pass the player instance
}

const VideoScreen = ({height = 250, video, contentFit = 'contain', isPlaying = false, onPlayerReady, ...otherProps}: videoProps) => {
  const [playerState, setPlayerState] = useState(isPlaying)
  const [playerReady, setPlayerReady] = useState(false);
  const [controls, setControls] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const player = useVideoPlayer(video, (player) => {
    player.loop = true;
    setPlayerReady(true);
    if (onPlayerReady) {
      onPlayerReady(player); // Pass the player instance back to the parent
    }
  });
  
  // // Pause the video when the tab loses focus
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // When the tab gains focus, play the video
  //     player.play();
  //     setPlayerState(true);
  //     if(isPlaying){
  //     return () => {
  //       // When the tab loses focus, pause the video
  //       player.pause();
  //       setPlayerState(false);
  //     }};
  //   }, [player])
  // );


  useEffect(() => {
    if (isPlaying) {
      setControls(false);
      player.play(); // Play the video when it's visible
      setTimeout(() => setControls(true), 10);
    } else {
      player.seekBy(-player.currentTime)
      player.pause()
    }
  }, [isPlaying, player]);
  
  if(playerReady) {
  return (
    <View style={[tw`pt-10 pb-30 bg-black`, height === 'full' ? tw`h-full` : {height: height }]}>
      <VideoView
        player={player}
        nativeControls={controls}
        allowsFullscreen
        allowsPictureInPicture
        contentFit={contentFit}
        style={[tw`w-full bg-black`, height === 'full' ? tw`h-full` : {height: height }]}
        {...otherProps}
      />
    </View>
  )};
};

export default VideoScreen;
