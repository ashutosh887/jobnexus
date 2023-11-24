import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

import { checkImageURL } from "../../utils";
import React from "react";
import { COLORS, FONT, SHADOWS, SIZES, icons } from "../../config";

type Props = {
  item: JobInterface;
  selectedJob: any;
  handleCardPress: (item: JobInterface) => void;
};

const PopularJobCard = ({ item, selectedJob, handleCardPress }: Props) => {
  const getCardStyles = (): StyleProp<ViewStyle> => {
    return {
      width: 250,
      padding: SIZES.xLarge,
      backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
      borderRadius: SIZES.medium,
      justifyContent: "space-between",
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    };
  };

  const getCardLogoStyles = (): StyleProp<ViewStyle> => {
    return {
      width: 50,
      height: 50,
      backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    };
  };

  const getJobStyles = () => {
    return {
      fontSize: SIZES.large,
      fontFamily: FONT.medium,
      color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    };
  };

  const getPublisherStyles = () => {
    return {
      fontSize: SIZES.medium - 2,
      fontFamily: FONT.regular,
      color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    };
  };

  return (
    <TouchableOpacity
      style={getCardStyles()}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={getCardLogoStyles()}>
        <Image
          source={
            item?.employer_logo && checkImageURL(item?.employer_logo)
              ? { uri: item.employer_logo }
              : icons.placeholder
          }
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={getJobStyles()} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={getPublisherStyles()}>{item?.job_publisher} -</Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default PopularJobCard;
