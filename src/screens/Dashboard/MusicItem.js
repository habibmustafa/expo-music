import React, { memo } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { setActiveAudio } from "../../store/audioSlice";
import { playSound } from "../../packages/AudioPkc";

const MusicItem = ({ audio, navigation }) => {
   const dispatch = useDispatch();

   return (
      <Pressable
         className="h-[60px] px-4 justify-center"
         onPress={() => {
            navigation.push("Player");
            dispatch(setActiveAudio(audio));
            playSound(audio.uri)
         }}
         android_ripple={{ color: "#eee", borderless: false }}
      >
         <View className="flex-row items-center justify-between gap-x-2">
            <View className="w-[85%]">
               <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  className="text-base font-medium"
                  // style={activeIndex === audio.index && {color: '#530066'}}
               >
                  {audio.audioname}
               </Text>
               <Text className="text-sm opacity-60">{`${Math.floor(
                  audio.duration / 60
               )}:${Math.floor(audio.duration % 60)}`}</Text>
            </View>
            <View>
               <Icon name="dots-horizontal" size={24} color="#777" />
            </View>
         </View>
      </Pressable>
   );
};

export default memo(MusicItem);
