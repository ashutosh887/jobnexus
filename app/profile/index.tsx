import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons } from "../../config";
import ScreenHeaderBtn from "../../components/common/ScreenHeaderBtn";

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
          headerRight: () => {
            return (
              <ScreenHeaderBtn
                icon={icons.share}
                dimension="60%"
                handlePress={async () => router.back()}
              />
            );
          },
          animation: "slide_from_bottom",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
    paddingBottom: 100,
  },
});
