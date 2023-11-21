import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { COLORS, SIZES, icons } from "../../config";
import ScreenHeaderBtn from "../../components/common/ScreenHeaderBtn";
import demoData from "../../config/demoData";
import Company from "../../components/jobdetails/Company";
import JobTabs from "../../components/jobdetails/JobTabs";

const JobDetails = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {};

  // const { data, isLoading, error, refetch } = useFetch("job-details", {
  //   job_id: params?.id,
  // });

  const [data, isLoading, error, refetch] = [
    demoData,
    false,
    undefined,
    () => {},
  ];

  const handlePress = () => {};

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
                // handlePress={async () => router.back()}
              />
            );
          },
          headerRight: () => {
            return (
              <ScreenHeaderBtn
                icon={icons.share}
                dimension="60%"
                // handlePress={async () => router.back()}
              />
            );
          },
          animation: "slide_from_right",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Text>Job details page...</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobDetails;
