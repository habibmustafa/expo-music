import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScalableButton from "../../components/ScalableButton";
import { pause_resumeSound, playSound } from "../../packages/AudioPkc";
import { setActiveAudio } from "../../store/audioSlice";

const Control = () => {
   const { activeAudio, allAudio, soundStatus } = useSelector(
      (state) => state.audio
   );
   const dispatch = useDispatch();

   // Skip next
   const skipNext = async () => {
      const audios = await allAudio.assets;
      let nextElement;
      if (activeAudio.index === audios.length - 1) nextElement = audios[0];
      else nextElement = audios[activeAudio.index + 1];

      playSound(nextElement.uri);
      dispatch(setActiveAudio(nextElement));
   };

   // Skip prev
   const skipPrev = async () => {
      const audios = await allAudio.assets;
      let prevElement;
      if (activeAudio.index === 0) prevElement = audios[audios.length - 1];
      else prevElement = audios[activeAudio.index - 1];

      playSound(prevElement.uri);
      dispatch(setActiveAudio(prevElement));
   };

   return (
      <View className="mb-20 px-6">
         {/* player bar */}
         <View className="h-14 bg-teal-300 mb-10"></View>

         {/* player control */}
         <View className="h-20 flex-row justify-between items-center">
            <ScalableButton
               name="shuffle-variant"
               size={26}
               color="#aaa"
               onPress={() => {
                  console.log(1);
               }}
            />
            <ScalableButton
               name="skip-previous"
               size={34}
               color="#333"
               onPress={skipPrev}
            />
            <ScalableButton
               name={soundStatus.isPlaying ? "pause" : "play"}
               size={34}
               color="#fff"
               scale={0.93}
               classname="bg-black rounded-full h-[70px] w-[70px] justify-center items-center shadow-md shadow-black"
               onPress={() => {
                  pause_resumeSound();
               }}
            />
            <ScalableButton
               name="skip-next"
               size={34}
               color="#333"
               onPress={skipNext}
            />
            <ScalableButton
               name="repeat-variant"
               size={26}
               color="#aaa"
               onPress={() => {
                  console.log(5);
               }}
            />
         </View>
      </View>
   );
};

export default Control;
