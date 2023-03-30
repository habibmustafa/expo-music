import React, { memo } from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
   return (
      <Appbar.Header className="bg-white h-14">
         <Appbar.Action icon="menu" size={26} />
         <Appbar.Content title="All songs" style={{ alignItems: "center" }} />
         <Appbar.Action icon="magnify" size={24} />
      </Appbar.Header>
   );
};

export default memo(Header);
