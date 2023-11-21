import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../config";

type Props = {
  icon: ImageSourcePropType;
  dimension: DimensionValue;
  handlePress?: () => {};
};

export default function ScreenHeaderBtn({
  icon,
  dimension,
  handlePress,
}: Props) {
  const getImageStyle = (
    dimension: DimensionValue
  ): StyleProp<ImageStyle> | undefined => {
    return {
      width: dimension,
      height: dimension,
      borderRadius: SIZES.small / 1.25,
    };
  };

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={icon}
        resizeMode="cover"
        style={getImageStyle(dimension)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
