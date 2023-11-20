import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, SIZES, icons } from "../../config";
import { userName } from "../../config/constants";
import { useRouter } from "expo-router";

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  handleClick?: () => void;
};

const jobTypes = ["Full-time", "Part-time", "Contractor"];

export default function Welcome({
  searchTerm,
  setSearchTerm,
  handleClick,
}: Props) {
  const router = useRouter();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [activeJobType, setActiveJobType] = useState<string>("Full-Time");

  const getTabStyles = (active: string, selected: string) => {
    return {
      paddingVertical: SIZES.small / 2,
      paddingHorizontal: SIZES.small,
      borderRadius: SIZES.medium,
      borderWidth: 1,
      borderColor: active === selected ? COLORS.secondary : COLORS.gray2,
    };
  };

  const getTabTextStyles = (active: string, selected: string) => {
    return {
      fontFamily: FONT.medium,
      color: active === selected ? COLORS.secondary : COLORS.gray2,
    };
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {userName}</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={[
              styles.searchInput,
              isFocused ? { borderColor: COLORS.tertiary, borderWidth: 1 } : {},
            ]}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
            onFocus={() => setIsFocused(!isFocused)}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={getTabStyles(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // @ts-ignore
                router.push(`/search/${item}`);
              }}
            >
              <Text style={getTabTextStyles(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
});
