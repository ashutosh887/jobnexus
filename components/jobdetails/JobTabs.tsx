import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../../config";

type Props = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function JobTabs({ tabs, activeTab, setActiveTab }: Props) {
  const getBtnStyles = (tabName: string) => {
    return {
      paddingVertical: SIZES.medium,
      paddingHorizontal: SIZES.xLarge,
      backgroundColor: tabName === activeTab ? COLORS.primary : "#F3F4F8",
      borderRadius: SIZES.medium,
      marginLeft: 2,
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    };
  };

  const getBtnTextStyles = (tabName: string) => {
    return {
      fontFamily: "DMMedium",
      fontSize: SIZES.small,
      color: tabName === activeTab ? "#C3BFCC" : "#AAA9B8",
    };
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={getBtnStyles(item)}
            onPress={() => setActiveTab(item)}
          >
            <Text style={getBtnTextStyles(item)}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
});
