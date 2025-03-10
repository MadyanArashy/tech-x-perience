import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';

type videoProps = {
  height?: number | 'full'
}

// Loading asset video dan player untuk video
// Untuk video big buck bunny download dari https://download.blender.org/peach/bigbuckbunny_movies/
// Atau pakai versi external URL dengan http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
export const bigBuckBunny: VideoSource =
'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export const elephantsDream: VideoSource =
'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

const VideoScreen = ({height}: videoProps) => {
  const [playerReady, setPlayerReady] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  if(!height){height = 70}

  const player1 = useVideoPlayer(bigBuckBunny, (player) => {
    player.loop = true;
    setPlayerReady(true); // Jika player video telah selesai, set state dari playerReady menjadi true
  });

  // Jika playerReady false, akan return teks "Loading video..."
  // Jika playerReady true, akan return VideoView dengan player yang telah ditentukan
  return (
    <View>
      {!playerReady ? (
        <Text>Loading Video...</Text>
      ) : (
        <VideoView
          player={player1}
          allowsFullscreen
          allowsPictureInPicture
          style={tw`w-full h-${height} bg-black`}
        />
      )}
    </View>
  );
};

export default VideoScreen;
