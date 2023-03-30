import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Appbar } from "react-native-paper";
import { useSelector } from "react-redux";
import ScalableButton from "./ScalableButton";
import { pause_resumeSound } from "../packages/AudioPkc";

const BottomBar = ({ navigation }) => {
   const { activeAudio, soundStatus } = useSelector((state) => state.audio);


   return (
      <Appbar className="px-7 shadow-xl bg-[#171C26] rounded-t-2xl justify-between">
         <TouchableWithoutFeedback
            onPress={() => {
               navigation.push("Player");
            }}
         >
            <View className="flex-row items-center gap-x-3">
               <Image
                  source={require("../assets/clear-logo.png")}
                  className="w-8 h-8"
               />
               <View>
                  <Text
                     className="text-white text-lg font-medium w-56"
                     ellipsizeMode="tail"
                     numberOfLines={1}
                  >
                     {activeAudio && activeAudio.audioname}
                  </Text>
                  <Text className="text-white text-xs opacity-80">
                     {activeAudio &&
                        `${Math.floor(activeAudio.duration / 60)}:${Math.floor(
                           activeAudio.duration % 60
                        )}`}
                  </Text>
               </View>
            </View>
         </TouchableWithoutFeedback>

         <View className="flex-row items-center gap-x-5">
            <View>
               <ScalableButton name="heart-outline" size={24} color="white" />
            </View>
            <View>
               <ScalableButton
                  name={soundStatus.isPlaying ? 'pause' : 'play'}
                  size={24}
                  color="black"
                  scale={0.91}
                  classname="bg-white rounded-lg w-9 h-9 justify-center items-center"
                  onPress={() => {
                     pause_resumeSound();
                  }}
               />
            </View>
         </View>
      </Appbar>
   );
};

export default BottomBar;
