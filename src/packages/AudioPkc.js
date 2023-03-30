import { Audio } from "expo-av";
import { prettyPrint } from "./DevFunc";
import { setData, getData } from "./StoragePkc";
import { setSoundStatus } from "../store/audioSlice";
import store from "../store";

const sound = new Audio.Sound();

let getStatus;

Audio.setAudioModeAsync({
   allowsRecordingIOS: false,
   staysActiveInBackground: true,
   playsInSilentModeIOS: true,
   shouldDuckAndroid: true,
   playThroughEarpieceAndroid: false,
});

// playSound
export const playSound = async (uri) => {
   await sound.unloadAsync();
   await sound.loadAsync({ uri: uri });
   await sound.playAsync();
   getStatus = await sound.getStatusAsync();

   // storage
   store.dispatch(setSoundStatus(getStatus))
   setData("soundStatus", getStatus);
   prettyPrint(getStatus);

};

// Pause & Resume
export const pause_resumeSound = async () => {
   const soundStatus = await getData("soundStatus");

   if (soundStatus.isPlaying) {
      console.log("Stop sound");
      await sound.pauseAsync();
   } else {
      console.log("Resume sound");
      await sound.unloadAsync();
      await sound.loadAsync(
         { uri: soundStatus.uri },
         { positionMillis: soundStatus.positionMillis }
      );
      await sound.playAsync();
   }

   getStatus = await sound.getStatusAsync();

   // storage
   store.dispatch(setSoundStatus(getStatus))
   setData("soundStatus", getStatus);
   prettyPrint(getStatus);
};

