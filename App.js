import { SafeAreaView, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { getStorage, setAllAudio } from "./src/store/audioSlice";
import { getAllAudio } from "./src/packages/MediaFilePkc";
import Dashboard from "./src/screens/Dashboard";
import Player from "./src/screens/Player";
import { useEffect } from "react";

export default function App() {
   const dispatch = useDispatch();

   // Router stack
   const { Screen, Navigator } = createNativeStackNavigator();

   useEffect(() => {
      (async () => {
         dispatch(setAllAudio(await getAllAudio()));
      })();
      dispatch(getStorage());
   }, []);

   return (
      <NavigationContainer>
         <PaperProvider>
            <SafeAreaView className="h-full">
               <StatusBar backgroundColor="#fff" barStyle="dark-content" />
               <Navigator
                  initialRouteName="Dashboard"
                  screenOptions={{
                     headerShown: false,
                     animation: "slide_from_bottom",
                     animationDuration: "100",
                  }}
               >
                  <Screen name="Player" component={Player} />
                  <Screen name="Dashboard" component={Dashboard} />
               </Navigator>
            </SafeAreaView>
         </PaperProvider>
      </NavigationContainer>
   );
}
