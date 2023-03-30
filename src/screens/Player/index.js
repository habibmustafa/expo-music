import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, Pressable } from "react-native";
import Header from "./Header";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import Control from "./Control";
import ScalableButton from "../../components/ScalableButton";

export default function Player({ navigation }) {
   const { activeAudio, allAudio } = useSelector((state) => state.audio);

   // Storage
   const storageData = async (value) => {
      try {
         await AsyncStorage.setItem("check", value);
      } catch (e) {
         console.log(e);
      }
   };

   const getData = async (key) => {
      try {
         const value = await AsyncStorage.getItem(key);

         if (value !== null) {
            console.log(value);
         }
      } catch (e) {
         console.log(e);
      }
   };

   // const allData = async () => {
   //    await AsyncStorage.clear()
   //    const allValue = await AsyncStorage.getAllKeys()
   //    console.log(allValue);
   // }
   // allData()

   // storageData("alma");
   // getData("check");

   return (
      <View className="h-full bg-white flex-col justify-between">
         <View>
            <Header navigation={navigation} />

            {/* picture */}
            <View className="picture w-[84%] h-[360px] shadow-xl shadow-slate-800 bg-transparent rounded-2xl self-center mt-10 mb-12">
               <Image
                  className="w-full h h-full rounded-2xl"
                  source={require("../../assets/player.jpg")}
               />
            </View>

            {/* audio name */}
            <View className="name px-6 mb-8 flex-row items-center justify-between">
               <ScalableButton name="heart-outline" size={24} color= "#777"/>
               <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  className="text-2xl font-medium w-[86%] px-6"
               >
                  {activeAudio.audioname}
               </Text>
               <Icon
                  name="dots-horizontal"
                  size={26}
                  style={{ color: "#777" }}
               />
            </View>
         </View>

         {/* control */}
         <Control />
      </View>
   );
}
