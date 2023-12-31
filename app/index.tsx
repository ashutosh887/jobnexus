import { View, SafeAreaView } from "react-native";
import React, { useCallback, useState } from "react";

import { COLORS, icons, SIZES } from "../config";
import { SplashScreen, Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/common/ScreenHeaderBtn";
import { ScrollView } from "react-native";
import NearbyJobs from "../components/home/NearbyJobs";
import PopularJobs from "../components/home/PopularJobs";
import Welcome from "../components/home/Welcome";
import { useFonts } from "expo-font";

const Home = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleLeftPress = (): any => {
    // @ts-ignore
    router.push("about");
  };

  const handleRightPress = () => {
    // @ts-ignore
    router.push("profile");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerTitleAlign: "center",
          headerShadowVisible: true,
          headerLeft: () => (
            <ScreenHeaderBtn
              icon={icons.menu}
              dimension="60%"
              handlePress={handleLeftPress}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              icon={icons.placeholder}
              dimension="100%"
              handlePress={handleRightPress}
            />
          ),
          headerTitle: "Home",
          animation: "slide_from_bottom",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                // @ts-ignore
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
