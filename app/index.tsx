import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { appName } from "../config/constants";
import React from "react";

import { COLORS, icons, SIZES } from "../config";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/common/ScreenHeaderBtn";
import { ScrollView } from "react-native-gesture-handler";
import NearbyJobs from "../components/home/NearbyJobs";
import PopularJobs from "../components/home/PopularJobs";
import Welcome from "../components/home/Welcome";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerTitleAlign: "center",
          headerShadowVisible: true,
          headerLeft: () => (
            <ScreenHeaderBtn icon={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn icon={icons.profile} dimension="100%" />
          ),
          headerTitle: "Home",
        }}
      />
      <ScrollView showsVerticalScrollIndicator>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontSize: 24,
  },
});

export default Home;
