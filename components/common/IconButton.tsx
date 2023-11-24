import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONT, SIZES, icons } from "../../config";

type Props = {
  text: string;
  onPress?: () => void;
  rounded: boolean;
  icon: ImageProps | Readonly<ImageProps>;
};

export default function IconButton({ text, onPress, rounded, icon }: Props) {
  return (
    <TouchableOpacity style={styles.link} onPress={onPress}>
      <Image
        source={icon || icons.placeholder}
        style={[styles.logo, rounded ? styles.rounded : null]}
        resizeMode="cover"
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    borderWidth: 1,
    borderColor: "#FE7654",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    padding: 8,
    margin: 5,
    flexDirection: "row", // Set flex direction to row
  },
  text: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    marginLeft: 8,
  },
  logo: {
    height: 25,
    width: 25,
  },
  rounded: {
    borderRadius: 12.5,
  },
});
