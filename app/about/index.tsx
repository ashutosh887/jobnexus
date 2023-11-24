import {
  Dimensions,
  Image,
  Linking,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONT, SIZES, icons } from "../../config";
import ScreenHeaderBtn from "../../components/common/ScreenHeaderBtn";
import { TouchableOpacity } from "react-native-gesture-handler";
import { githubURL } from "../../config/constants";

const { height, width } = Dimensions.get("window");

export default function About() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: "",
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => {
            return (
              <ScreenHeaderBtn
                icon={icons.left}
                dimension="60%"
                handlePress={async () => router.back()}
              />
            );
          },
          animation: "slide_from_left",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={icons.placeholder} style={styles.logo} />
          <Text style={styles.title}>JobNexus</Text>
          <Text style={styles.description}>
            A React Native Mobile Application to checkout job listings across
            the web.
          </Text>

          <TouchableOpacity
            style={styles.link}
            onPress={() => Linking.openURL(githubURL)}
          >
            <Text style={styles.linkBtn}>Developed by @ashutosh887</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: SIZES.medium,
    paddingBottom: 100,
    height: height - 40,
  },
  logo: {
    height: 160,
    width: 160,
    borderRadius: 80,
    marginTop: 16,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    margin: 16,
  },
  description: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    textAlign: "center",
  },
  link: {
    backgroundColor: "#FE7654",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 36,
  },
  linkBtn: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});
