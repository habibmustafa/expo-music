import React, { memo } from "react";
import { View, Text } from "react-native";
import MusicItem from "./MusicItem";
import { useSelector } from "react-redux";

const Musics = ({ navigation }) => {
   const { allAudio } = useSelector((state) => state.audio);

   return (
      <View className="gap-y-1 pt-2">
         {allAudio.length !== 0 ? (
            allAudio.assets.map((audio) => (
               <MusicItem
                  key={audio.id}
                  audio={audio}
                  navigation={navigation}
               />
            ))
         ) : (
            <View className="h-80 justify-center items-center">
               <Text>Loading...</Text>
            </View>
         )}
      </View>
   );
};

export default memo(Musics);
