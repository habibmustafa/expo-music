import AsyncStorage from "@react-native-async-storage/async-storage";

// Set storage data
export const setData = async (key, value) => {
   try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
   } catch (e) {
      console.log(e);
   }
};

// Get storage data
export const getData = async (key) => {
   try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null) {
         return JSON.parse(jsonValue);
      }
   } catch (e) {
      console.log(e);
   }
};

// Clear 
export const clearStorage = async () => {
   try {
      await AsyncStorage.clear();
   } catch (e) {
      console.log(e);
   }
}

// allKeys 
export const allKeysStorage = async () => {
   try {
      console.log(await AsyncStorage.getAllKeys());
   } catch (e) {
      console.log(e);
   }
}