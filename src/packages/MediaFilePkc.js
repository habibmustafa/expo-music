import * as MediaLibrary from "expo-media-library";

// Get all audio from device
export const getAllAudio = async () => {
   const mediaPermissions = await MediaLibrary.requestPermissionsAsync();
   // console.log(mediaPermissions.granted);

   const media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: 500,
      sortBy: "creationTime"
   });

   return {
      ...media,
      assets: media.assets.map((item, index) => {
         return {
            ...item,
            audioname: item.filename.split('.')[0],
            index: index,
         };
      }),
   };
};

// Get audio info
export const getAudioInfo = async (id) => {
   return await MediaLibrary.getAssetInfoAsync(id);
};
