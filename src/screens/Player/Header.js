import React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ navigation }) => {
   return (
      <Appbar.Header className="bg-white h-14 items-center px-2">
         <Appbar.Action
            icon="chevron-down"
            size={26}
            onPress={() => {
               navigation.pop(1);
            }}
         />
         <Appbar.Content
            title="Now Playing"
            titleStyle={{ fontWeight: "700", fontSize: 20 }}
            style={{ alignItems: "center" }}
         />
         <Appbar.Action icon="playlist-music-outline" size={24} />
      </Appbar.Header>
   );
};

export default Header;
