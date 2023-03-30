import { Text, View, ScrollView, Animated } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useRef } from "react";
import { Button } from "react-native-paper";
import BottomBar from "../../components/BottomBar";
import Musics from "./Musics";
import Header from "./Header";

const Dashboard = ({ navigation }) => {
   // const allAudio = {
   //    assets: [
   //       {
   //          mediaType: "audio",
   //          modificationTime: 1664519091000,
   //          uri: "file:///storage/emulated/0/Download/AMusicDownloader/「Nightcore」NotYou-AlanWalker&EmmaSteinbakken♡(Lyrics)_1664519085276.mp3",
   //          filename:
   //             "「Nightcore」NotYou-AlanWalker&EmmaSteinbakken♡(Lyrics)_1664519085276.mp3",
   //          width: 0,
   //          id: "1750",
   //          creationTime: 1639506994000,
   //          albumId: "-917795930",
   //          height: 0,
   //          duration: 135.117,
   //       },
   //    ],
   // };

   const AnimatedHeaderValue = useRef(new Animated.Value(0)).current;

   const Header_Max_Height = 128;
   const Header_Min_Height = 0;

   const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: "clamp",
   });
   const animatedHeaderElementTop = AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Max_Height - Header_Min_Height],
      outputRange: [Header_Max_Height - Header_Min_Height, 0],
      extrapolate: "clamp",
   });

   // allAudio.assets && prettyPrint(allAudio.assets[0]);
   // allAudio.assets && console.log(allAudio.assets.length);

   // const musicInfo = async () => {
   //    let metadata = await MusicInfo.getMusicInfoAsync(
   //       "file:///storage/emulated/0/Download/AMusicDownloader/Mert Demir Feat Mabel Matiz Antidepresan Ozgur Mete Remix.mp3",
   //       {
   //          title: true,
   //          artist: true,
   //          album: true,
   //          genre: true,
   //          picture: true,
   //       }
   //    );
   //    console.log(metadata);
   // };

   // useEffect(() => {
   // musicInfo();
   // }, []);

   return (
      <View className="h-full bg-white">
         {/* Header */}
         <Header />

         {/* Main container */}
         <ScrollView
            keyboardDismissMode="on-drag"
            className="relative"
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
               [
                  {
                     nativeEvent: {
                        contentOffset: { y: AnimatedHeaderValue },
                     },
                  },
               ],
               { useNativeDriver: false }
            )}
         >
            {/* Head */}
            <View className="px-4 pt-3 pb-2 flex-row justify-between">
               <View className=" w-[32%] h-28 p-3 rounded-2xl bg-cyan-100 justify-center">
                  <Icon name="heart-outline" size={20} />
                  <Text className="mt-1 text-lg font-medium">Favorites</Text>
               </View>
               <View className=" w-[32%] h-28 p-3 rounded-2xl bg-amber-100 justify-center">
                  <Icon name="timer-outline" size={20} />
                  <Text className="mt-1 text-lg font-medium">Recent</Text>
               </View>
               <View className=" w-[32%] h-28 p-3 rounded-2xl bg-pink-100 justify-center">
                  <Icon name="playlist-music" size={20} />
                  <Text className="mt-1 text-lg font-medium">Playlists</Text>
               </View>
            </View>

            {/* Shuffle & Sort */}
            <View className="px-4 py-2 bg-white flex-row justify-between items-center border-b-2 border-slate-50">
               <Button
                  children={<Text>Shuffle</Text>}
                  icon="shuffle"
                  buttonColor="#F3F5F7"
                  textColor="#5F6265"
                  mode="elevated"
                  style={{ width: "30%", height: 40, justifyContent: "center" }}
                  labelStyle={{ fontSize: 16 }}
               />
               <View className="flex-row gap-x-4">
                  <Icon name="sort" size={25} color="#777" />
                  <Icon name="playlist-check" size={27} color="#777" />
               </View>
            </View>

            {/* Musics */}
            <Musics navigation={navigation} />
         </ScrollView>
         {/* Bottombar */}
         <BottomBar navigation={navigation} />
      </View>
   );
};

export default Dashboard;
