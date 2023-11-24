import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONT, SIZES, icons } from "../../config";
import ScreenHeaderBtn from "../../components/common/ScreenHeaderBtn";
import {
  githubURL,
  linkedInURL,
  userAbout,
  userName,
} from "../../config/constants";
import IconButton from "../../components/common/IconButton";

export default function Profile() {
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
          animation: "slide_from_right",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={icons.placeholder} style={styles.logo} />

          <View style={styles.main}>
            <Text style={styles.user}>{userName}</Text>
            <Text style={styles.about}>{userAbout}</Text>
          </View>
        </View>

        <View style={styles.profiles}>
          <View style={styles.links}>
            <IconButton
              text="GitHub"
              icon={icons.github}
              onPress={() => Linking.openURL(githubURL)}
              rounded
            />

            <IconButton
              text="LinkedIn"
              icon={icons.linkedIn}
              onPress={() => Linking.openURL(linkedInURL)}
              rounded
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    padding: SIZES.medium,
  },
  profiles: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: SIZES.medium,
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  user: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
  },
  about: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  links: {
    flex: 1,
    flexDirection: "row",
  },
});
