import React from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ScalableButton = ({
   name,
   classname='',
   color,
   size = 16,
   scale = 0.86,
   duration = 80,
   onPress=onPress
}) => {
   const animatedValue = new Animated.Value(0);
   const animatedValueInterpolateScale = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, scale],
   });

   const pressInHandler = () => {
      Animated.timing(animatedValue, {
         toValue: 1,
         duration: duration,
         useNativeDriver: true,
      }).start();
   };

   const pressOutHandler = () => {
      Animated.timing(animatedValue, {
         toValue: 0,
         duration: duration,
         useNativeDriver: true,
      }).start();
   };

   return (
      <TouchableWithoutFeedback
         onPressIn={pressInHandler}
         onPressOut={pressOutHandler}
         onPress={onPress}
      >
         <Animated.View
            className={classname}
            style={{
               transform: [{ scaleX: animatedValueInterpolateScale }, { scaleY: animatedValueInterpolateScale }],
            }}
         >
            <Icon name={name} size={size} color={color} />
         </Animated.View>
      </TouchableWithoutFeedback>
   );
};

export default ScalableButton;
